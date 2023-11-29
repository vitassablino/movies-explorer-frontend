import React, { memo, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppRoutes } from '../../utils/configs/router';

function AnonymousLayout() {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser.isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={AppRoutes.main} replace />;
  }
}

export default memo(AnonymousLayout);
