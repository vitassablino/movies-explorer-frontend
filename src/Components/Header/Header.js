import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AccountBtn from "../AccountBtn/AccountBtn"

function Header({ onBurgerClick, loggedIn, isMenuOpen }) {
/* Хуки */

  return (
    <header className="header">
      {loggedIn ? (
        <div
          className="header__wrapper"
        >
          <Logo />
          <Navigation
          isMenuOpen = {isMenuOpen}
          />
          <AccountBtn />
          <button
            className="header__btn-burger hover-button"
            type="button"
            aria-label="Меню"
            onClick={onBurgerClick}
          ></button>
        </div>
      ) : (
        <div className="header__wrapper">
          <Logo />
          <nav className="header__menu">
            <ul className="header__menu-wrapper">
              <li className="header__menu-item">
                <Link to="/signup" className="header__link hover-link">
                  Регистрация
                </Link>
              </li>
              <li className="header__menu-item">
                <Link
                  to="/signin"
                  className="header__link header__link_type_login hover-button"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;