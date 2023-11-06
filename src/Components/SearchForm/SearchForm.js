import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onFilterChange, isFilterOn }) {
  function handleSubmit(e) {
    e.preventDefault();
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
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          className="search-form__search"
          form="search"
          name="search"
          placeholder="Фильм"
          type="search"
        />
        <FilterCheckbox
          onFilterChange={onFilterChange}
          isFilterOn={isFilterOn}
        />
        <button
          className="search-form__submit-btn"
          type="submit"
          form="search"
        >
        </button>
      </form>
    </section>
  );
}

export default SearchForm;