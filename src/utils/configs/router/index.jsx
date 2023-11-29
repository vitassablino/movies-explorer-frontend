import { createBrowserRouter } from 'react-router-dom';
import Signin from '../../../components/Signin/Signin';
import Signup from '../../../components/Signup/Signup';
import Movies from '../../../components/Movies/Movies';
import SavedMovies from '../../../components/SavedMovies/SavedMovies';
import User from '../../../components/User/User';
import AppLayout from '../../../layouts/AppLayout/AppLayout';
import NotFound from '../../../components/NotFound/NotFound';
import Main from '../../../components/Main/Main';
import AnonymousLayout from '../../../layouts/AnonymousLayout/AnonymousLayout';
import ProtectedLayout from '../../../layouts/ProtectedLayout/ProtectedLayout';

export const AppRoutes = {
  main: '/',
  savedMovies: '/saved-movies',
  movies: '/movies',
  profile: '/profile',
  signin: '/signin',
  signup: '/signup',
  notFound: '*',
};

const guestOnlyRoutes = [
  {
    element: <Signin />,
    path: AppRoutes.signin,
  },
  {
    element: <Signup />,
    path: AppRoutes.signup,
  },
];

const authOnlyRoutes = [
  {
    element: <Movies />,
    path: AppRoutes.movies,
  },
  {
    element: <SavedMovies />,
    path: AppRoutes.savedMovies,
  },
  {
    element: <User />,
    path: AppRoutes.profile,
  },
];

export const routerConfig = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Main />,
        path: AppRoutes.main,
      },
      {
        element: <NotFound />,
        path: AppRoutes.notFound,
      },
      {
        element: <AnonymousLayout />,
        children: guestOnlyRoutes,
      },
      {
        element: <ProtectedLayout />,
        children: authOnlyRoutes,
      },
    ],
  },
]);
