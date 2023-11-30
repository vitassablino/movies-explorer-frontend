import './Student.css';

import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/photo.jpg';

function Student() {

  return (
    <section id="student" className="student">
      <SectionTitle title="Студент" />
      <article className="student__about">
        <h3 className="student__name">Виктор</h3>
        <p className="student__profession">Фронтенд-разработчик, 27 лет</p>
        <p className="student__text">
          Здесь будет информация о себе.
        </p>
        <a
          className="student__link"
          href="https://github.com/vitassablino"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img
          className="student__photo"
          src={photo}
          alt="Фото"
        />
      </article>
    </section>
  );
}

export default Student;
