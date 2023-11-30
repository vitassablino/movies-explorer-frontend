import { useCallback, useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import moviesApi from '../utils/configs/api/MoviesApi';
import mainApi from '../utils/configs/api/MainApi';

export const useMoviesApi = () => {
  const {
    movies, setMovies,
    savedMovies, setSavedMovies,
  } = useContext(MoviesContext);

  // переключатель стейта загрузки для рендера лоудера
  const toggleLoader = useCallback(() => {
    setMovies((state) => ({ ...state, isLoading: !state.isLoading }));
  }, [ setMovies ]);

  // получение фильмов с битфильмс
  const getAllMovies = useCallback(async () => {
    // если фильмы уже были загружены, то вернем массив
    if (movies.data.length > 0) return movies.data;

    // иначе включаем лоудер, загружаем фильмы именно с апи и возвращаем их
    toggleLoader();
    try {
      const moviesData = await moviesApi.getMovies();
      setMovies((state) => ({ ...state, data: moviesData }));
      return moviesData;
    } catch (e) {
      console.log(e);
    } finally {
      toggleLoader();
    }
  }, [ movies.data, setMovies, toggleLoader ]);

  // сохранение фильма в наше апи
  const handleSaveMovie = useCallback((movie) => {
    mainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      owner: movie.owner,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    })
      .then((movie) => {
        setSavedMovies((movies) => ({ ...movies, data: [ movie, ...savedMovies.data ] }));
      })
      .catch(console.log);
  }, [ savedMovies, setSavedMovies ]);

  // удаление сохраненного в нашем апи фильма
  const handleDeleteMovie = useCallback((id) => {

    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies((s) => ({ ...s, data: s.data.filter((m) => m._id !== id) }));
      })
      .catch(err => console.log(err));
  }, [ savedMovies, setSavedMovies ]);

  return {
    getAllMovies, handleSaveMovie, handleDeleteMovie,
  };
};
