import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/landingPage/landingPage'
import { LoginIn } from '../pages/loginPage/login';
import { SignUp } from '../pages/loginPage/singup';
import { Error404 } from '../pages/errorPage/404error';
import { Dashboard } from '../pages/dashboardPage/dashboard'
import { PrivateRoute } from './privateRoute'

export const AppRouter = ({handleOpenErrorModal}) => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignUp handleOpenErrorModal={handleOpenErrorModal} />} />
        <Route exact path="/login" element={<LoginIn handleOpenErrorModal={handleOpenErrorModal} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
  
};