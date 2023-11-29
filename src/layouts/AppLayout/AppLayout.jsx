import { memo, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getUserData } from '../../utils/configs/api/UserApi';
import { AppRoutes } from '../../utils/configs/router';

function AppLayout() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      getUserData()
        .then(({ email, name }) => {
          setCurrentUser((state) => ({ ...state, email, name }));
        })
        .catch((err) => {
          setCurrentUser({ isLoggedIn: false });
          navigate(AppRoutes.main);
          localStorage.clear();
          console.error(err);
        });
    }
  }, [ currentUser.isLoggedIn ]);

  return <Outlet />;
}

export default memo(AppLayout);
