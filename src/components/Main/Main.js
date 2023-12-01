import './Main.css';

import Promo from '../Promo/Promo';
import NavBar from '../NavBar/NavBar';
import AboutProject from '../AboutProject/AboutProject';
import Technologies from '../Technologies/Technologies';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
        <NavBar />
        <AboutProject />
        <Technologies />
        <Student />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
