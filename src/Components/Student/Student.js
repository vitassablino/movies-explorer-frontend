import './Student.css';

import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/student.svg';

function Student() {

  return (
    <section id="student" className="student">
      <SectionTitle title="Студент" />
      <article className="student__about">
        <h3 className="student__name">Виталий</h3>
        <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
        <p className="student__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
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
