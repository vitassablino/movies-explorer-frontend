import "./Main.css";

import Promo from "../Promo/Promo";
import NavBar from "../NavBar/NavBar";
import AboutProject from "../AboutProject/AboutProject";

function Main({ aboutRef }) {
  return (
    <main className="main">
      <Promo  />
      <NavBar />
      <AboutProject aboutRef={aboutRef} />
    </main>
  );
}

export default Main;