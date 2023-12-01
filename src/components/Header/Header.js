import { Link, useLocation, useMatch } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AccountBtn from '../AccountBtn/AccountBtn';
import { memo, useCallback, useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppRoutes } from '../../utils/configs/router';
import SideMenu from '../SideMenu/SideMenu';

function Header() {
  const isMainPage = useMatch(AppRoutes.main);
  const { currentUser } = useContext(CurrentUserContext);
  const [ isMenuOpen, setMenuStatus ] = useState(false); //Статус бокового меню

  /* Открытие меню */
  const handleOpenMenu = useCallback(() => {
    setMenuStatus(!isMenuOpen);
  }, [ setMenuStatus, isMenuOpen ]);

  /* Закрытие меню */
  const handleCloseMenu = useCallback(() => {
    setMenuStatus(false);
  }, [ setMenuStatus ]);

  const location = useLocation();
  return (
    <header
      className="header"
    >
      {currentUser.isLoggedIn ? (
        <div
          className={`header__wrapper ${isMainPage && 'header__wrapper_color_main-color'}`}
        >
          <div className="header__navigation ">
            <Logo />
            <div
              className={`"" ${isMenuOpen ? 'header__navigation_hidden' : ''}`}
            >
              <Navigation isMenuOpen={isMenuOpen} />
            </div>
          </div>
          <AccountBtn />
          <button
            className="header__btn-burger"
            type="button"
            aria-label="Меню"
            onClick={handleOpenMenu}
          ></button>
        </div>
      ) : (
        <div
          className={`header__wrapper ${
            location.pathname === '/' ? 'header__wrapper_color_main-color' : ''
          }`}
        >
          <Logo />
          <nav className="header__menu">
            <ul className="header__menu-wrapper">
              <li className="header__menu-item">
                <Link to="/signup" className="header__link">
                  Регистрация
                </Link>
              </li>
              <li className="header__menu-item">
                <Link
                  to="/signin"
                  className="header__link header__link_type_login"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <SideMenu isSideMenuOpen={isMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
}

export default memo(Header);
