import "./Main.css";

import Promo from "../Promo/Promo";
import NavBar from "../NavBar/NavBar";
import AboutProject from "../AboutProject/AboutProject";
import Technologies from "../Technologies/Technologies";

function Main({ aboutRef }) {
  return (
    <main className="main">
      <Promo  />
      <NavBar />
      <AboutProject aboutRef={aboutRef} />
      <Technologies />
    </main>
  );
}

export default Main;