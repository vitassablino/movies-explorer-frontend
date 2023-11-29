import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <SectionTitle title={'О проекте'} />
      <div className="about-project__two-columns">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__grid">
        <div className="about-project__stage">
          <p className="about-project__week">1 неделя</p>
          <p className="about-project__stage-caption">Back-end</p>
        </div>
        <div className="about-project__stage">
          <p className="about-project__week about-project__week-grey">
            4 недели
          </p>
          <p className="about-project__stage-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
