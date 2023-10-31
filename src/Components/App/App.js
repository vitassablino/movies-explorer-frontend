import { useCallback, useEffect, useRef, useState } from "react";
/* import { Route, Routes, useNavigate } from "react-router-dom"; */
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
         <Header
         loggedIn={loggedIn}
         onBurgerClick={handleOpenMenu}
         isMenuOpen = {isMenuOpen}
          />

        <Main />

        <Footer />  
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
