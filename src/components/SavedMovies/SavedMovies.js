import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSearch } from '../../hooks/useSearch';
import { memo } from 'react';

function SavedMovies() {
  const { filteredMovies, handleSearch, isLoading, errorMessage } = useSearch();

  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm handleSearch={handleSearch} isLoading={isLoading} />
        <MoviesCardList movies={filteredMovies} isLoading={isLoading} errorMessage={errorMessage} />
      </main>
      <Footer />
    </>
  );
}

export default memo(SavedMovies);
