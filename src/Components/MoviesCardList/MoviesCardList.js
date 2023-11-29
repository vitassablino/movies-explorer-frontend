import './MoviesCardList.css';
import Card from '../Card/Card';
import { useLocation } from 'react-router-dom';
import initialCard from '../../utils/initialCard';

function MoviesCardList({ cards, isLiked, onCardLike }) {
  const location = useLocation();
  return (
    <section
      className="movies-card-list"
      aria-label="Список Фильмов"
    >
      <ul
        className="movies-card-list__list"
      >
        {initialCard.map((card) => (
          <Card
            card={card}
            key={card.id}
            isLiked={isLiked}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
      <button
        className={`movies-card-list__btn ${location.pathname === '/saved-movies' ? 'movies-card-list__btn_active_hidden' : ''}`}
        type="button"
      >
        Ещё
      </button>

    </section>
  );
}

export default MoviesCardList;
