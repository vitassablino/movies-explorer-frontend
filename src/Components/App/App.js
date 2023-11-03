import { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SideMenu from "../SideMenu/SideMenu";
import { Provider } from 'react-redux'
import { CurrentUserContext } from "../Context/CurrentUserContext";

function App() {
  /* Хуки */
  const [currentUser, setCurrentUser] = useState({}); // Текущий пользователь
  const [loggedIn, setLoggedIn] = useState(true); // Статус авторизации
  const [isMenuOpen, setMenuStatus] = useState(false);


  /* Обработчики */
  /* Открытие меню */
  function handleOpenMenu() {
    setMenuStatus(!isMenuOpen);
  }

  /* Закрытие меню */
  function handleCloseMenu() {
    setMenuStatus(false);
  }

  return (
    <Provider storage = {storage}>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
         <Header
         loggedIn={loggedIn}
         onBurgerClick={handleOpenMenu}
         isMenuOpen = {isMenuOpen}
          />

        <Main />

        <Footer />  
        <SideMenu
            isSideMenuOpen={isMenuOpen}
            onClose={handleCloseMenu}
          />
      </div>
    </CurrentUserContext.Provider>
    </Provider>
  );
}

export default App;
