import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ cards, onFilterChange, isFilterOn }) {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm onFilterChange={onFilterChange} isFilterOn={isFilterOn} />
        <MoviesCardList cards={cards} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
