import SectionTitle from "../SectionTitle/SectionTitle";
import "./Technologies.css";


function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <SectionTitle title={"Технологии"}/>
      <h3 className="technologies__title">7 технологий</h3>
      <p className="technologies__text">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
        применили в&nbsp;дипломном проекте.
      </p>
      <ul className="technologies__list">
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">HTML</p>
        </li>
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">CSS</p>
        </li>
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">JS</p>
        </li>
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">React</p>
        </li>
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">Git</p>
        </li>
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">Express.js</p>
        </li>
        <li className="technologies__list-item">
          <p className="technologies__list-item-text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Technologies;