import './MoviesCardList.css';
import Card from '../Card/Card';
import { useMatch } from 'react-router-dom';
import { memo, useCallback, useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import { AppRoutes } from '../../utils/configs/router';
import { Loader } from '../Loader/Loader';

function MoviesCardList(props) {
  const {
    movies,
    isLoading,
    errorMessage,
    isMoreButton,
    isMoreLoading,
    moviesForRender,
    handlePagination
  } = props;

  const moviesContext = useContext(MoviesContext);
  const { savedMovies } = moviesContext;
  const isMoviesPath = useMatch(AppRoutes.movies);

  const isApiLoading = moviesContext.movies.isLoading || savedMovies.isLoading;

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
