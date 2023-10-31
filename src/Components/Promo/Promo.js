import landing_logo from "../../images/pic__COLOR_landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <button
          className="promo__btn-anchor hover-button"
          type="button"
        >
          Узнать больше
        </button>
      </div>
      <img className="promo__img" src={landing_logo} alt="Изображение" />
    </section>
  );
}

export default Promo;