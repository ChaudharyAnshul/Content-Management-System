import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";
import { useNavigate } from "react-router-dom";
// import StaticExample from '../../components/LoginModal';

function LoginBox() {
  const navigate = useNavigate();

  function redirectToLogin(){
    navigate("/login");
  }
  function redirectToRegister(){
    navigate("/signup");
  }
  return (
    <div
      classNameName="modal show modal-container"
      style={{ display: "block", position: "initial" }}
    >
      <header>
        <h1>Canvas CMS</h1>
        <p>Your gateway to knowledge, collaboration, and success.</p>
      </header>
      <main>
        <div className="features">
          <h2>Empower your learning journey</h2>
          <ul>
            <li>Access diverse courses and resources</li>
            <li>Connect with classNamemates and instructors</li>
            <li>Track your progress and stay motivated</li>
            <li>Collaborate on projects and assignments</li>
            <li>Achieve your academic goals</li>
          </ul>
        </div>
        <div className="call-to-action">
          <a  onClick={redirectToLogin} className="btn btn-primary">
            Log In
          </a>
          <a onClick={redirectToRegister} className="btn btn-secondary">
            Sign Up
          </a>
        </div>
      </main>
    </div>
  );
}

export default LoginBox;
