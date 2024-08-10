import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import loginImage from "../Images/cuate2.png";
import emailIcon from "../Images/Email.svg";
import lockIcon from "../Images/Vector.svg";

function Login() {
  return (
    <div className="container-fluid">
      <div className="login-container">
        <div className="form-container">
          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <input type="email" id="email" placeholder="Enter your email" />
                <img src={emailIcon} alt="Email Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-icon">
                <input type="password" id="password" placeholder="***" />
                <img src={lockIcon} alt="Password Icon" className="icon" />
              </div>
            </div>

            <button type="submit" className="login-button">
              login
            </button>
            <div className="check-account">
              Don’t have an account?
              <Link to="" className="login-link">
                Signup
              </Link>
            </div>
          </form>
        </div>
        <div className="image-container">
          <img src={loginImage} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
