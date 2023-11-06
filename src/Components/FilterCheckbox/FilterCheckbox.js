import "./FilterCheckbox.css";

function FilterCheckbox({ onFilterChange, isFilterOn }) {
  return (
    <label className="filter-checkbox">
      
      <input
        className="filter-checkbox__switch"
        form="search"
        name="switch"
        type="checkbox"
        value={isFilterOn}
        onChange={(evt) => onFilterChange(evt.target.checked)}
      />
      <span className="filter-checkbox__button"></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;