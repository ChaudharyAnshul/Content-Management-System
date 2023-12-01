import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/landingPage";
import { LoginIn } from "../pages/loginPage/login";
import { SignUp } from "../pages/loginPage/singup";
import { Error404 } from "../pages/errorPage/404error";
import { Dashboard } from "../pages/dashboardPage/dashboard";
import { PrivateRoute } from "./privateRoute";
import RequireAuth from "../components/RequireAuth";
import Unauthorized from "../pages/unauthorized/unauthorized";

const ROLES = {
  "student":"STUDENT",
  "admin":"ADMIN"
}

export const AppRouter = ({ handleOpenErrorModal }) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/signup"
          element={<SignUp handleOpenErrorModal={handleOpenErrorModal} />}
        />
        <Route
          exact
          path="/login"
          element={<LoginIn handleOpenErrorModal={handleOpenErrorModal} />}
        />
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.admin,ROLES.student]}/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        <Route path="/unauthorized" element={<Unauthorized/>}/>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};
