import './FilterCheckbox.css';
import { memo } from 'react';

function FilterCheckbox({ onFilterChange, isFilterOn, isLoading }) {


  return (
    <label className="filter-checkbox">

      <input
        className="filter-checkbox__switch"
        form="search"
        name="switch"
        type="checkbox"
        checked={isFilterOn}
        onChange={onFilterChange}
        disabled={isLoading}
      />
      <span className="filter-checkbox__button"></span>
      Короткометражки
    </label>
  );
}

export default memo(FilterCheckbox);
