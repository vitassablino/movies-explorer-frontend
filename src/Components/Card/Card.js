import { useLocation } from "react-router-dom";
import "./Card.css";



function Card({ card, isLiked, onCardLike }) {
  const location = useLocation();

  function handleConvertDuration(duration) {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  return (
    <li className="card">
      <img
        className="card__img"
        src={card.image.url}
        alt={card.name}
      />
      <div className="card__caption">
        <p className="card__name">{card.name}</p>
          <button
            className="card__btn"
            type="button"
            aria-label="Лайк"
            onClick={onCardLike}
          >
            <div
              className={`card__like-btn-img ${
                isLiked ? "card__like-btn-img_active" : ""
              }`}
            >
            </div>
          </button>
      </div>
      <p className="card__time">
        {handleConvertDuration(card.duration)}
      </p>
    </li>
  );
}

export default Card;