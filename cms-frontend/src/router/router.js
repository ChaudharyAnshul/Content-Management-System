import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/landingPage";
import { LoginIn } from "../pages/loginPage/login";
import { SignUp } from "../pages/loginPage/singup";
import { Error404 } from "../pages/errorPage/404error";
import { Dashboard } from "../pages/dashboardPage/dashboard";
import Unauthorized from "../pages/unAuthorized";
import { CourseDetails } from "../pages/CourseDetails/CourseDetails";
import { CoursePovider } from "../context/CourseProvider";
import { AdminDashboard } from "../pages/dashboardPage/adminDashboard";
import RequireAuth from "../components/RequireAuth";

const ROLES = {
  student: "STUDENT",
  admin: "ADMIN",
};

export const AppRouter = ({ handleOpenErrorModal }) => {
  return (
    <CoursePovider>
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
          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.admin]} />
            }
          >
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>

          {/* Protected Routes */}
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/course/:id" element={<CourseDetails />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </CoursePovider>
  );
};
