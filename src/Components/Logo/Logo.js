import { Link } from "react-router-dom";
import "./Logo.css";

function Logo({ place }) {
  return (
    <Link
      to="/"
      className={`logo ${
        place === "auth" ? "logo_place_auth" : ""
      } hover-button`}
      aria-label="Главная страница"
    >
      <div className="logo__img"></div>
    </Link>
  );
}

export default Logo;