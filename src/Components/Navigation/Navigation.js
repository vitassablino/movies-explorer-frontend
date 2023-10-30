import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isMenuOpen, onClose }) {
  const location = useLocation();

  return (
    <nav className={`navigation ${isMenuOpen ? "" : "navigation_hidden"}`}>
      <ul
        className={`navigation__menu-wrapper ${
            isMenuOpen ? "navigation__menu-wrapper_direction_column" : ""
        }`}
      >
        <li
          className={`navigation__menu-item ${
            isMenuOpen ? "" : "navigation__menu-item_hidden"
          }`}
        >
          <Link
            to="/"
            onClick={onClose}
            className={`navigation__link ${
                isMenuOpen ? "navigation__link_place_side-menu" : ""
            } ${
              location.pathname === "/" && isMenuOpen
                ? "navigation__link_place_side-menu-active"
                : ""
            } hover-link`}
          >
            Главная
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            to="/movies"
            onClick={onClose}
            className={`navigation__link ${
                isMenuOpen ? "navigation__link_place_side-menu" : ""
            } ${
              location.pathname === "/movies" && !isMenuOpen
                ? "navigation__link_place_header-active"
                : ""
            } ${
              location.pathname === "/movies" && isMenuOpen
                ? "navigation__link_place_side-menu-active"
                : ""
            } hover-link`}
          >
            Фильмы
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            to="/saved-movies"
            onClick={onClose}
            className={`navigation__link ${
                isMenuOpen ? "navigation__link_place_side-menu" : ""
            } ${
              location.pathname === "/saved-movies" && !isMenuOpen
                ? "navigation__link_place_header-active"
                : ""
            } ${
              location.pathname === "/saved-movies" && isMenuOpen
                ? "navigation__link_place_side-menu-active"
                : ""
            } hover-link`}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;