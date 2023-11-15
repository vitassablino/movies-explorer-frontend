import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar"> 
        <ul className="navbar__list">
        <li className="navbar__list-element"><a className="navbar__link" href="#about-project">О&nbsp;проекте</a></li>
        <li className="navbar__list-element"><a className="navbar__link" href="#technologies">Технологии</a></li>
        <li className="navbar__list-element"><a className="navbar__link" href="#student">Студент</a></li>
        </ul>
    </div>
  );
}

export default NavBar;