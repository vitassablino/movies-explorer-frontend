import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AccountBtn from "../AccountBtn/AccountBtn";

function Header({ onBurgerClick, loggedIn, isMenuOpen }) {
	const location = useLocation();
	return (
		<header
			className={`header ${
				location.pathname !== "/signup" && location.pathname !== "/signin"  && location.pathname !== "/404"
					? ""
					: "header_active_disabled"
			}`}
		>
			{loggedIn ? (
				<div
					className={`header__wrapper ${
						location.pathname === "/" ? "header__wrapper_color_main-color" : ""
					}`}
				>
					<div className="header__navigation ">
						<Logo />
						<div
							className={`"" ${isMenuOpen ? "header__navigation_hidden" : ""}`}
						>
							<Navigation isMenuOpen={isMenuOpen} />
						</div>
					</div>
					<AccountBtn />
					<button
						className="header__btn-burger"
						type="button"
						aria-label="Меню"
						onClick={onBurgerClick}
					></button>
				</div>
			) : (
				<div
					className={`header__wrapper ${
						location.pathname === "/" ? "header__wrapper_color_main-color" : ""
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
		</header>
	);
}

export default Header;
