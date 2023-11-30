import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSearch } from '../../hooks/useSearch';
import { memo } from 'react';

function Movies() {
  const {
    filteredMovies,
    handleSearch,
    isLoading,
    errorMessage,
    handleChangePage,
    searchPage
  } = useSearch();

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm handleSearch={handleSearch} isLoading={isLoading} />
        <MoviesCardList
          movies={filteredMovies}
          isLoading={isLoading}
          errorMessage={errorMessage}
          handleChangePage={handleChangePage}
          searchPage={searchPage}
        />
      </main>
      <Footer />
    </>
  );
}

export default memo(Movies);
