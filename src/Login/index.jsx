import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import loginImage from "../Images/cuate2.png";
import emailIcon from "../Images/Email.svg";
import lockIcon from "../Images/Vector.svg";
import { MdError } from "react-icons/md";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://127.0.0.1:4000/users/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.data.message !== "success") {
        setErrorMessage(
          "An error occurred while logging in. Please try again."
        );
      }
      console.log(response.data);
    } catch (error) {
      console.error("There was an error logging in the user!", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="login-container">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <img src={emailIcon} alt="Email Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-icon">
                <input
                  type="password"
                  id="password"
                  placeholder="***"
                  value={formData.password}
                  onChange={handleChange}
                />
                <img src={lockIcon} alt="Password Icon" className="icon" />
              </div>
            </div>
            {errorMessage && (
              <div className="error-message">
                <MdError className="error-icon" />
                {errorMessage}
              </div>
            )}

            <button type="submit" className="login-button">
              Login
            </button>
            <div className="check-account">
              Don’t have an account?
              <Link to="/register" className="login-link">
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
