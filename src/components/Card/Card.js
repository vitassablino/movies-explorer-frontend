import { useMatch } from 'react-router-dom';
import './Card.css';
import { useMoviesApi } from '../../hooks/useMoviesApi';
import { AppRoutes } from '../../utils/configs/router';
import { memo, useCallback } from 'react';

function Card({ movie, isSaved }) {
  const isSavedMoviePath = useMatch(AppRoutes.savedMovies);
  const { handleSaveMovie, handleDeleteMovie } = useMoviesApi();

  const handleCalcTime = useCallback((time) => {
    const minutes = time % 60;
    const hours = (time - minutes) / 60;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }, []);

  const openMovieTrailer = useCallback((link) => window.open(link, '_blank'), []);

  const renderBtn = useCallback(() => {
    if (isSavedMoviePath) {

      return <button
        className="card__btn card__btn_action_delete"
        type="button"
        aria-label="Лайк"
        onClick={() => handleDeleteMovie(movie._id)}
      >
        <div
          className={`card__delete-btn-img`}
        ></div>
      </button>;
    }

    if (!isSavedMoviePath && isSaved) {
      return <button
        className="card__btn"
        type="button"
        aria-label="Лайк"
        onClick={() => handleDeleteMovie(movie._id)}
      >
        <div
          className="card__like-btn-img card__like-btn-img_active_active"
        ></div>
      </button>;
    }

    return <button
      className="card__btn"
      type="button"
      aria-label="Лайк"
      onClick={() => handleSaveMovie(movie)}
    >
      <div
        className="card__like-btn-img"
      ></div>
    </button>;
  }, [ isSavedMoviePath, isSaved, handleDeleteMovie, handleSaveMovie, movie ]);

  return (
    <li className="card">
      <img
        className="card__img"
        src={isSavedMoviePath ? `${movie.image}` : `https://api.nomoreparties.co/${movie.image.url}`}
        alt={movie.nameRU}
        onClick={() => openMovieTrailer(movie.trailerLink)}
      />
      <div className="card__caption">
        <p className="card__name">{movie.nameRU}</p>
        {renderBtn()}
      </div>
      <p className="card__time">{handleCalcTime(movie.duration)}</p>
    </li>
  );
}

export default memo(Card);
