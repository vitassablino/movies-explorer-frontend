import { useCallback, useContext, useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { filterMovies } from '../utils/lib/filterMovies';
import { AppRoutes } from '../utils/configs/router';
import {
  LOCALSTORAGE_SEARCH_CHECKBOX,
  LOCALSTORAGE_SEARCH_DATA,
  LOCALSTORAGE_SEARCH_STRING
} from '../utils/constants';
import { MoviesContext } from '../contexts/MoviesContext';

export const useSearch = () => {
  // дергаем стейты из контекста
  const { savedMovies } = useContext(MoviesContext);
  // стейт с отфильтрованными фильмами, готовыми к рендеру
  const [ filteredMovies, setFilteredMovies ] = useState([]);
  // стейт с поисковыми параметрами
  const [ searchParams, setSearchParams ] = useState({
    string: '', checkbox: false,
  });
  // стейты жизненного цикла поиска
  const [ isLoading, setIsLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  // мэтчинг страниц
  const isMoviePath = useMatch(AppRoutes.movies);
  const isSavedMoviePath = useMatch(AppRoutes.savedMovies);

  useEffect(() => {
    if (isMoviePath) {
      const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_SEARCH_DATA));
      setFilteredMovies(savedData || []);
      setSearchParams({
        string: JSON.parse(localStorage.getItem(LOCALSTORAGE_SEARCH_STRING)) || '',
        checkbox: JSON.parse(localStorage.getItem(LOCALSTORAGE_SEARCH_CHECKBOX)) || false
      });

      setErrorMessage(savedData ? '' : 'Введите запрос, чтобы начать поиск.');
    }

    if (isSavedMoviePath) {
      setErrorMessage(savedMovies.data.length > 0 ? '' : 'Упс, список избранных фильмов пуст...');

      const data = filterMovies(savedMovies.data, searchParams.string, searchParams.checkbox);
      setFilteredMovies(data);

      if (savedMovies.data.length > 0 && data.length === 0) {
        setErrorMessage('С таким запросом больше нет фильмов.');
      }
    }
  }, [ isMoviePath, isSavedMoviePath, savedMovies.data ]);

  // сохранение параметров поиска
  const saveSearchResults = useCallback((moviesData, searchString, isShortMovie) => {
    if (isMoviePath) {
      localStorage.setItem(LOCALSTORAGE_SEARCH_STRING, JSON.stringify(searchString));
      localStorage.setItem(LOCALSTORAGE_SEARCH_CHECKBOX, JSON.stringify(isShortMovie));
      localStorage.setItem(LOCALSTORAGE_SEARCH_DATA, JSON.stringify(moviesData));
    }
    setSearchParams({ string: searchString, checkbox: isShortMovie });
    setFilteredMovies(moviesData);
  }, [ setSearchParams, setFilteredMovies, isMoviePath ]);

  // логика поиска
  const handleSearch = useCallback((movies, searchString, isShortMovie) => {
    setIsLoading(true);
    // обнуление стейтов
    setErrorMessage('');

    // получаем новый отфильтрованный массив
    const newMovieList = filterMovies(movies, searchString, isShortMovie);

    // имитация обращения к бэкенду
    setTimeout(() => {
      // записываем новые данные
      saveSearchResults(newMovieList, searchString, isShortMovie);
      setIsLoading(false);

      // обрабатываем ошибки поиска
      if (newMovieList.length === 0) {
        setErrorMessage('Ничего не найдено. 😟');
      }
    }, 200);

  }, [ setFilteredMovies, filterMovies, saveSearchResults, setErrorMessage, setIsLoading ]);

  return {
    filteredMovies,
    handleSearch,
    searchParams,
    setSearchParams,
    isLoading,
    errorMessage,
  };
};
