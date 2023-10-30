import { useCallback, useEffect, useRef, useState } from "react";
/* import { Route, Routes, useNavigate } from "react-router-dom"; */
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { CurrentUserContext } from "../Context/CurrentUserContext";

function App() {
  /* Хуки */
  const [currentUser, setCurrentUser] = useState({}); // Текущий пользователь
  const [loggedIn, setLoggedIn] = useState(false); // Статус авторизации

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app__content">
         <Header
         loggedIn={loggedIn}
          />
        <Footer />  
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
