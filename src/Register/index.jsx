import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import registerImage from "../Images/cuate.png";
import userIcon from "../Images/User.svg";
import emailIcon from "../Images/Email.svg";
import lockIcon from "../Images/Vector.svg";

function Register() {
  return (
    <div className="container-fluid">
      <div className="register-container">
        <div className="form-container">
          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-icon">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                />
                <img src={userIcon} alt="User Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <input type="email" id="email" placeholder="Enter your email" />
                <img src={emailIcon} alt="Email Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Create Password</label>
              <div className="input-icon">
                <input type="password" id="password" placeholder="***" />
                <img src={lockIcon} alt="Password Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-icon">
                <input type="password" id="confirmPassword" placeholder="***" />
                <img
                  src={lockIcon}
                  alt="Confirm Password Icon"
                  className="icon"
                />
              </div>
            </div>

            <button type="submit" className="register-button">
              Register
            </button>
            <div className="check-account">
              I already have an account!
              <Link to="" className="login-link">
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="image-container">
          <img src={registerImage} alt="Register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
