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


function App() {
	/* Хуки */
	const [currentUser, setCurrentUser] = useState({}); // Текущий пользователь
	const [loggedIn, setLoggedIn] = useState(true); // Статус авторизации
	const [isMenuOpen, setMenuStatus] = useState(false);
	const aboutOnClickRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

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
          <Route path="/user" element={<User  onLoading={isLoading} />} />
				</Routes>
        {loggedIn && <Footer />}
				<SideMenu isSideMenuOpen={isMenuOpen} onClose={handleCloseMenu} />
			</CurrentUserContext.Provider>
		</div>

		/* </Provider> */
	);
}

export default App;

