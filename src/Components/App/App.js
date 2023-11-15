import { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SideMenu from "../SideMenu/SideMenu";
/* import { Provider } from 'react-redux' */
import { CurrentUserContext } from "../Context/CurrentUserContext";
import User from "../User/User";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Movies from "../Movies/Movies";
import { useContext } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import { Navigate } from "react-router-dom";

import initialCards from "../../utils/initialCard";
import savedInitialCards from "../../utils/savedInitialCards";



function App() {
  /* Хуки */
  const [currentUser, setCurrentUser] = useState({}); // Текущий пользователь
  const [loggedIn, setLoggedIn] = useState(true); // Статус авторизации
  const [isMenuOpen, setMenuStatus] = useState(false); //Статус бокового меню
  const aboutOnClickRef = useRef(null);
  const [isFilterOn, setFilter] = useState(false); //Статус свича фильтра
  const [cards, setCards] = useState([]); //установка карточек для рендера
  const [savedCards, setSavedCards] = useState([]);
  /* 	const [isLiked, setLike] = useState(false); */

  /* Обработчики */
  /* Открытие меню */
  function handleOpenMenu() {
    setMenuStatus(!isMenuOpen);
  }

  /* Закрытие меню */
  function handleCloseMenu() {
    setMenuStatus(false);
  }

  /* Обновление данных пользователя */

  /* Изменение свича фильтра */
  function handleFilterChange(evt) {
    console.log("switch filter");
    setFilter(evt);
  }

  /* Установка стартовых карточек */
  useEffect(() => {
    setCards(initialCards);
    setSavedCards(savedInitialCards);
  }, []);

  /* Лайк */
  /* 	  function handleCardLike() {
		console.log("like")
		setLike(!isLiked);
	  } */

  return (
    /*  <Provider storage = {storage}> */

    <div className="body">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          onBurgerClick={handleOpenMenu}
          isMenuOpen={isMenuOpen}
        />
        <Routes>
          <Route index element={<Main aboutRef={aboutOnClickRef} />} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/movies"
            element={
              <Movies
                cards={cards}
                onFilterChange={handleFilterChange}
                isFilterOn={isFilterOn}
                /* isLiked={isLiked}
								onCardLike={handleCardLike} */
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                cards={savedCards}
                onFilterChange={handleFilterChange}
                isFilterOn={isFilterOn}
              />
            }
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
        </Routes>
        {loggedIn && <Footer />}
        <SideMenu isSideMenuOpen={isMenuOpen} onClose={handleCloseMenu} />
      </CurrentUserContext.Provider>
    </div>

    /* </Provider> */
  );
}

export default App;
