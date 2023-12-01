import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSearch } from '../../hooks/useSearch';
import { memo, useCallback, useEffect, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { RENDER_CONFIG } from '../../utils/constants';

function Movies() {
  const {
    filteredMovies,
    handleSearch,
    isLoading,
    errorMessage,
  } = useSearch();

  // рендер и пагинация
  const { width } = useWindowWidth();
  const [ device, setDevice ] = useState(RENDER_CONFIG.desktop.name);
  const [ moviesForRender, setMoviesForRender ] = useState(0);
  const [ isMoreButton, setIsMoreButton ] = useState(false);
  const [ isMoreLoading, setMoreLoading ] = useState(false);

  useEffect(() => {
    if (width > RENDER_CONFIG.desktop.width) {
      setDevice(RENDER_CONFIG.desktop.name);
    } else if (width > RENDER_CONFIG.tablet.width) {
      setDevice(RENDER_CONFIG.tablet.name);
    } else {
      setDevice(RENDER_CONFIG.mobile.name);
    }

    filteredMovies.length > moviesForRender ? setIsMoreButton(true) : setIsMoreButton(false);
  }, [ filteredMovies, width, setMoviesForRender, moviesForRender ]);

  useEffect(() => {
    setMoviesForRender(RENDER_CONFIG[device].movies.total);
    // setMoviesForPagination(RENDER_CONFIG[device].movies.more);
  }, [ device, setMoviesForRender ]);

  const handlePagination = useCallback(() => {
    setMoreLoading(true);
    setTimeout(() => {
      // handleChangePage();
      setMoviesForRender((m) => m + RENDER_CONFIG[device].movies.more)
      setMoreLoading(false);
    }, 100);
  }, [ setMoreLoading, device ]);

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          handleSearch={handleSearch}
          isLoading={isLoading}
          device={device}
          setMoviesForRender={setMoviesForRender}
        />
        <MoviesCardList
          movies={filteredMovies}
          isLoading={isLoading}
          errorMessage={errorMessage}
          isMoreButton={isMoreButton}
          isMoreLoading={isMoreLoading}
          moviesForRender={moviesForRender}
          handlePagination={handlePagination}
        />
      </main>
      <Footer />
    </>
  );
}

export default memo(Movies);
