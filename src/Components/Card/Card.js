import { useLocation } from "react-router-dom";
import "./Card.css";
import { useState } from "react";

function Card({ card /* , isLiked, onCardLike  */ }) {
  const location = useLocation();

  function handleCalcTime(time) {
    const minutes = time % 60;
    const hours = (time - minutes) / 60;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  const [isLiked, setLike] = useState(false);

  function handleCardLike() {
    setLike(!isLiked);
    console.log("like");
  }

  return (
    <li className="card">
      <img className="card__img" src={card.image.url} alt={card.name} />
      <div className="card__caption">
        <p className="card__name">{card.name}</p>
        {location.pathname === "/movies" ? (
          <button
            className="card__btn"
            type="button"
            aria-label="Лайк"
            onClick={handleCardLike}
          >
            <div
              className={`card__like-btn-img ${
                isLiked ? "card__like-btn-img_active_active" : ""
              }`}
            ></div>
          </button>
        ) : (
          <button
            className="card__btn card__btn_action_delete"
            type="button"
            aria-label="Лайк"
            onClick={handleCardLike}
          >
            <div
              className={`card__delete-btn-img `}
            ></div>
          </button>
        )}
      </div>
      <p className="card__time">{handleCalcTime(card.time)}</p>
    </li>
  );
}

export default Card;
