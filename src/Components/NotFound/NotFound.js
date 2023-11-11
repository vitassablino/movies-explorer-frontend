import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  function handleBtnClick() {
      navigate("/", { replace: true });
    }

  return (
    <main className="not-found">
      <section className="not-found__wrapper">
        <p className="not-found__title">404</p> 
        <h1 className="not-found__text">Страница не найдена</h1>
        <button
          className="not-found__btn-back"
          type="button"
          onClick={handleBtnClick}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;