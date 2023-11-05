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


function App() {
	/* Хуки */
	const [currentUser, setCurrentUser] = useState({}); // Текущий пользователь
	const [loggedIn, setLoggedIn] = useState(false); // Статус авторизации
	const [isMenuOpen, setMenuStatus] = useState(false); //Статус бокового меню
	const aboutOnClickRef = useRef(null);

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
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
				</Routes>
        {loggedIn && <Footer />}
				<SideMenu isSideMenuOpen={isMenuOpen} onClose={handleCloseMenu} />
			</CurrentUserContext.Provider>
		</div>

		/* </Provider> */
	);
}

export default App;

