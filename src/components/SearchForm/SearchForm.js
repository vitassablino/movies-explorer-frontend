import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import { useMoviesApi } from '../../hooks/useMoviesApi';
import { useMatch } from 'react-router-dom';
import { AppRoutes } from '../../utils/configs/router';
import { useSearch } from '../../hooks/useSearch';
import { RENDER_CONFIG } from '../../utils/constants';


function SearchForm(props) {
  const [ animationStatus, setAnimationStatus ] = useState(false);
  const { handleSearch, isLoading, device, setMoviesForRender } = props;
  const { savedMovies } = useContext(MoviesContext);
  const { getAllMovies } = useMoviesApi();

  const [ error, setError ] = useState('');

  const { searchParams, setSearchParams } = useSearch();
  const { string, checkbox } = searchParams;

  const isMoviePath = useMatch(AppRoutes.movies);

  useEffect(() => {
    setError('');
  }, [ string ]);


  const toResetAnimation = useCallback(() => {
    setAnimationStatus(false);
  }, [ setAnimationStatus ]);

  const toAnimate = useCallback(() => {
    setAnimationStatus(true);
    setTimeout(toResetAnimation, 2000);
  }, [ setAnimationStatus, toResetAnimation ]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!string && isMoviePath) {
      return setError('Строка поиска не должна быть пустой. 😟');
    }
    toAnimate();
    const movieList = isMoviePath ? await getAllMovies() : savedMovies.data;
    setMoviesForRender(RENDER_CONFIG[device].movies.total);
    handleSearch(movieList, string, checkbox);
  }, [
    string,
    checkbox,
    getAllMovies,
    handleSearch,
    isMoviePath,
    savedMovies.data,
    toAnimate,
    setMoviesForRender,
    device
  ]);

  const handleCheckboxChange = useCallback(async (e) => {
    if (isMoviePath && !searchParams.string) {
      return setError('Для сортировки по хронометражу введите запрос. 😟');
    }

    setSearchParams(({ string }) => ({ string: string, checkbox: e.target.checked }));

    const movieList = isMoviePath ? await getAllMovies() : savedMovies.data;
    handleSearch(movieList, string, e.target.checked);
  }, [ setSearchParams, searchParams, handleSearch, isMoviePath, getAllMovies, string, savedMovies.data ]);

  const handleSearchStringChange = useCallback((e) => {
    setSearchParams((state) => ({ ...state, string: e.target.value }));
  }, [ setSearchParams ]);

  return (
    <section
      className="search-form"
      aria-label="Секция с поиском и фильтрацией"
    >
      <form
        className="search-form__form"
        id="search"
        action="#"
        name="search"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="search-form__search"
          form="search"
          name="search"
          placeholder="Фильм"
          type="search"
          value={string ?? ''}
          onChange={handleSearchStringChange}
          required
        />
        <FilterCheckbox
          onFilterChange={handleCheckboxChange}
          isFilterOn={checkbox}
          isLoading={isLoading}
        />
        <button
          className={`search-form__submit-btn ${animationStatus ? 'search-form__submit-btn_animation' : ''}`}
          type="submit"
          form="search"
          disabled={isLoading}
        >
        </button>
        <span className="search-form__status">{error}</span>
      </form>
    </section>
  );
}

export default memo(SearchForm);
