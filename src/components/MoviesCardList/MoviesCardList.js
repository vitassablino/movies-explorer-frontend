import './MoviesCardList.css';
import Card from '../Card/Card';
import { useMatch } from 'react-router-dom';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { MoviesContext } from '../../contexts/MoviesContext';
import { AppRoutes } from '../../utils/configs/router';
import { Loader } from '../Loader/Loader';
import { RENDER_CONFIG } from '../../utils/constants';

function MoviesCardList(props) {
  const {
    movies,
    isLoading,
    errorMessage,
    searchPage,
    handleChangePage,
  } = props;

  const { width } = useWindowWidth();
  const moviesContext = useContext(MoviesContext);
  const { savedMovies } = moviesContext;
  const isMoviesPath = useMatch(AppRoutes.movies);

  const [ moviesForRender, setMoviesForRender ] = useState(12);
  const [ isMoreButton, setIsMoreButton ] = useState(false);
  const [ isMoreLoading, setMoreLoading ] = useState(false);

  const isApiLoading = moviesContext.movies.isLoading || savedMovies.isLoading;

  useEffect(() => {
    if (width > RENDER_CONFIG.desktop.width) {
      setMoviesForRender(RENDER_CONFIG.desktop.movies.total + RENDER_CONFIG.desktop.movies.more * searchPage);
    } else if (width > RENDER_CONFIG.tablet.width) {
      setMoviesForRender(RENDER_CONFIG.tablet.movies.total + RENDER_CONFIG.tablet.movies.more * searchPage);
    } else {
      setMoviesForRender(RENDER_CONFIG.mobile.movies.total + RENDER_CONFIG.mobile.movies.more * searchPage);
    }

    movies.length > moviesForRender ? setIsMoreButton(true) : setIsMoreButton(false);
  }, [ movies, searchPage, width, setMoviesForRender, moviesForRender ]);

  const isSaved = useCallback((movie) => {
    return savedMovies.data.reduce((acc, item) => {
      if (item.movieId === movie.id) {
        movie._id = item._id;
        return true;
      }
      return acc;
    }, false);
  }, [ savedMovies.data ]);

  const renderMovies = useCallback(() => {
    if (isMoviesPath) {
      return movies
        .slice(0, moviesForRender)
        .map((movie) => {
          return (
            <Card key={movie.id} movie={movie} isSaved={isSaved(movie)} />
          );
        });
    } else {
      return movies
        .map((movie) => <Card key={movie._id} movie={movie} />);
    }
  }, [ movies, moviesForRender, isMoviesPath, isSaved ]);

  const handlePagination = useCallback(() => {
    setMoreLoading(true);
    setTimeout(() => {
      handleChangePage();
      setMoreLoading(false);
    }, 100);
  }, [ setMoreLoading, handleChangePage ]);

  if (isLoading || isApiLoading) {
    return (
      <div className="movies-card-list__loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (errorMessage) {
    return <span className="movies-card-list__error">{errorMessage}</span>;
  }

  return (
    <section
      className="movies-card-list"
      aria-label="Список Фильмов"
    >
      <ul
        className="movies-card-list__list"
      >
        {renderMovies()}
      </ul>
      {isMoreButton && !isMoreLoading &&
        <button
          className={`movies-card-list__btn ${!isMoviesPath ? 'movies-card-list__btn_active_hidden' : ''}`}
          type="button"
          onClick={handlePagination}
        >
          Ещё
        </button>}
      {isMoreLoading && <div className="movies-card-list__loader-wrapper"><Loader /></div>}

    </section>
  );
}

export default memo(MoviesCardList);
