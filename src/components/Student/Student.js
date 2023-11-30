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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque tempore similique ea
          consequatur aspernatur repellat nemo commodi, eos dolore blanditiis, a doloribus odio
          atque officia cum nobis eveniet voluptatum earum unde! Cupiditate eos aut, itaque
          accusamus impedit eveniet modi in pariatur dolor dolores autem voluptatem quibusdam
          corporis dignissimos quaerat praesentium illum architecto harum illo corrupti nam tenetur
          laudantium velit a? Corporis consequatur eaque dolorum.
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
