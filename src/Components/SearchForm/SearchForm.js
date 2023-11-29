import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';


function SearchForm({ onFilterChange, isFilterOn }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const [ animationStatus, setAnimationStatus ] = useState(false);

  function toResetAnimation() {
    setAnimationStatus(false);
  }

  function toAnimate() {
    setAnimationStatus(true);
    setTimeout(toResetAnimation, 2000);
  }


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
      >
        <input
          className="search-form__search"
          form="search"
          name="search"
          placeholder="Фильм"
          type="search"
          required
        />
        <FilterCheckbox
          onFilterChange={onFilterChange}
          isFilterOn={isFilterOn}
        />
        <button
          className={`search-form__submit-btn ${animationStatus === true ? 'search-form__submit-btn_animation' : ''}`}
          type="submit"
          form="search"
          onClick={toAnimate}
        >
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
