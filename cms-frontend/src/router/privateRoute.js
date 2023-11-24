import React from 'react';
import { Navigate } from 'react-router-dom';
import { retrieveDataFromLocalStorage } from '../util/cache'

export const PrivateRoute = ({ children }) => {

  const userData = retrieveDataFromLocalStorage("UserAuth");
  let isLoggedIn = false;

  if (userData !== null){
    isLoggedIn = true;
  }

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;

};