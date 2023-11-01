import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar"> 
        <ul className="navbar__list">
        <li className="navbar__list-element">О&nbsp;проекте</li>
        <li className="navbar__list-element">Технологии</li>
        <li className="navbar__list-element">Студент</li>
        </ul>
    </div>
  );
}

export default NavBar;