import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ cards, onFilterChange, isFilterOn, isLiked, onCardLike }) {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm onFilterChange={onFilterChange} isFilterOn={isFilterOn} />
        <MoviesCardList cards={cards} isLiked={isLiked} onCardLike={onCardLike} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
