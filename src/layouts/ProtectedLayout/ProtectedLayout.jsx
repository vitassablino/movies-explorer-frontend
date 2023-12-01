import React, { memo, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function ProtectedRoute() {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser.isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default memo(ProtectedRoute);
