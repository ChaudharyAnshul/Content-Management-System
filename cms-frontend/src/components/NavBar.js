import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div id="home-link">
        <Link to="/">
          <h6 className="nav-links">Northeastern University</h6>
        </Link>
      </div>

      <div id="title">
        <h4 className="title">Canvas</h4>
      </div>

      <div id="home-link">
        <Link to="/student-resources">
          <h6 className="nav-links">Student Resources</h6>
        </Link>
      </div>

      <div id="home-link">
        <Link to="/faculty-resources">
          <h6 className="nav-links">Faculty Resources</h6>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
