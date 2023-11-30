import { useCallback, useContext, useState } from 'react';
import * as userApi from '../utils/configs/api/UserApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import { MoviesContext } from '../contexts/MoviesContext';
import { AppRoutes } from '../utils/configs/router';
import { LOCALSTORAGE_TOKEN, LOCALSTORAGE_USERID } from '../utils/constants';

export const useUserApi = () => {
  const [ isLoading, setLoading ] = useState(false);
  const [ isFulfilled, setFulfilled ] = useState(false);
  const [ isError, setError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setSavedMovies } = useContext(MoviesContext);
  const navigate = useNavigate();

  const resetErrors = useCallback(() => {
    setError(false);
    setErrorMessage('');
    setFulfilled(false);
  }, [ setError, setErrorMessage ]);

  const handleUpdateUserData = useCallback((userInfo) => {
    resetErrors();
    setLoading(true);
    userApi.setUserInfo(userInfo)
      .then(({ email, name }) => {
        setCurrentUser((state) => ({ ...state, email, name }));
        setFulfilled(true);
      })
      .catch(err => {
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLoginState = useCallback(() => {
    resetErrors();
    userApi.getUserData()
      .then(({ name, email }) => {
        setCurrentUser(() => ({ isLoggedIn: true, name, email }));
        navigate(AppRoutes.movies, { replace: true });
      })
      .catch(err => {
        setError(true);
        setErrorMessage(err.message);
      });
  }, [ setCurrentUser ]);

  const handleLogin = useCallback(({ email, password }) => {
    resetErrors();
    setLoading(true);
    userApi.authorize({ email, password })
      .then((data) => {
          if (data.token) {
            localStorage.setItem(LOCALSTORAGE_TOKEN, data.token);
            handleLoginState();
            setFulfilled(true);
          }
        }
      )
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ setLoading, handleLoginState, navigate ]);

  const handleRegister = useCallback(({ name, email, password }) => {
    resetErrors();
    setLoading(true);
    userApi.register({ name, email, password })
      .then(({ _id }) => {
          if (_id) {
            localStorage.setItem(LOCALSTORAGE_USERID, _id);
            handleLogin({ email, password });
            setFulfilled(true);
          }
        }
      )
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setLoading(false));
  }, [ setLoading, handleLogin, setFulfilled ]);

  const handleLogout = useCallback(() => {
    userApi.logout()
      .then(() => {
        localStorage.clear();
        setCurrentUser({ isLoggedIn: false });
        setSavedMovies([]);
      })
      .catch(err => console.log(err));
  }, [ setCurrentUser, setSavedMovies ]);

  return {
    handleRegister,
    handleLogin,
    handleLoginState,
    handleLogout,
    handleUpdateUserData,
    isLoading,
    isFulfilled,
    isError,
    errorMessage,
    resetErrors,
  };
};
