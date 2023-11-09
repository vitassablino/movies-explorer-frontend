import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { useCallback, useEffect, useRef, useState } from "react";



function Navigation({ isMenuOpen, onClose }) {
  const location = useLocation();


  return (
    <nav className={`navigation ${isMenuOpen ? "" : "navigation_hidden"}`}>
      <ul
        className={`navigation__menu-wrapper ${isMenuOpen ? "navigation__menu-wrapper_side-menu" : ""}`}>
        <li className={`navigation__menu-item ${isMenuOpen ? "" : "navigation__menu-item_hidden"}`}>        
          <Link
            to="/"
            onClick={onClose}
            className={`navigation__link ${isMenuOpen ? "navigation__link_side-menu" : ""}
             ${location.pathname === "/" && isMenuOpen ? "navigation__link_side-menu-active" : ""}
             ${location.pathname === "/" && !isMenuOpen ? "navigation__link_header-active" : ""}`}
          >
            Главная
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            to="/movies"
            onClick={onClose}
            className={`navigation__link ${isMenuOpen ? "navigation__link_side-menu" : "" }
             ${location.pathname === "/movies" && !isMenuOpen ? "navigation__link_header-active" : ""}
             ${location.pathname === "/movies" && isMenuOpen ? "navigation__link_side-menu-active" : ""}`}
          >
            Фильмы
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            to="/saved-movies"
            onClick={onClose}
            className={`navigation__link ${isMenuOpen ? "navigation__link_side-menu" : "" }
             ${location.pathname === "/saved-movies" && !isMenuOpen ? "navigation__link_header-active" : "" } 
             ${location.pathname === "/saved-movies" && isMenuOpen ? "navigation__link_side-menu-active" : ""}`}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;