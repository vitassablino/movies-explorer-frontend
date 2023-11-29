import { memo, useState } from 'react';
import { RouterProvider} from 'react-router-dom';
import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { routerConfig } from '../../utils/configs/router';

function App() {
  const [ currentUser, setCurrentUser ] = useState({
    isLoggedIn: true,
  });

  return (
    <div className="body">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <RouterProvider router={routerConfig} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default memo(App);
