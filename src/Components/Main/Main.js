import "./Main.css";

import Promo from "../Promo/Promo";
import NavBar from "../NavBar/NavBar";
import AboutProject from "../AboutProject/AboutProject";
import Technologies from "../Technologies/Technologies";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";

function Main({ aboutRef }) {
  return (
    <main className="main">
      <Promo  />
      <NavBar />
      <AboutProject aboutRef={aboutRef} />
      <Technologies />
      <Student />
      <Portfolio />
    </main>
  );
}

export default Main;