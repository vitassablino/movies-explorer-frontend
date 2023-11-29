import { memo, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { routerConfig } from '../../utils/configs/router';
import mainApi from '../../utils/configs/api/MainApi';
import { MoviesContext } from '../../contexts/MoviesContext';

function App() {
  const [ currentUser, setCurrentUser ] = useState({
    isLoggedIn: !!localStorage.getItem('token'),
  });
  const [ movies, setMovies ] = useState({
    data: [],         // массив с фильмами
    isLoading: false, // ключ для рендера лоудера
  });
  const [ savedMovies, setSavedMovies ] = useState({
    data: [],
    isLoading: false,
  });

  useEffect(() => {
    // запрашиваем фильмы с апи, если пользователь залогинен
    if (currentUser.isLoggedIn) {
      setSavedMovies((state) => ({ ...state, isLoading: true }));
      mainApi.getSavedMovies()
        .then(movies => {
          if (Array.isArray(movies)) {
            setSavedMovies((state) => ({ ...state, data: movies }));
          } else {
            console.error('Получены некорректные данные', movies);
          }
        })
        .catch(err => console.log(err))
        .finally(() => setSavedMovies((state) => ({ ...state, isLoading: false })));
    }
  }, [ currentUser.isLoggedIn ]);

  return (
    <div className="body">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <MoviesContext.Provider value={{ movies, savedMovies, setMovies, setSavedMovies }}>
          <RouterProvider router={routerConfig} />
        </MoviesContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default memo(App);
