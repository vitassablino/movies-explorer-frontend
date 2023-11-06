import "./MoviesCardList.css";
import Card from "../Card/Card";

function MoviesCardList({ cards, isLiked, onCardLike }) {
  return (
    <section
      className="movies-card-list"
      aria-label="Список Фильмов"
    >
          <ul
            className="movies-card-list__list"
          >
            {cards.map((card) => (
              <Card
                card={card}
                key={card.id}
                isLiked={isLiked}
                onCardLike={onCardLike}
              />
            ))}
          </ul>
          <button
            className="movies-card-list__btn"
            type="button"
          >
            Ещё
          </button>
      
    </section>
  );
}

export default MoviesCardList;