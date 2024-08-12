import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import registerImage from "../Images/cuate.png";
import userIcon from "../Images/User.svg";
import emailIcon from "../Images/Email.svg";
import lockIcon from "../Images/Vector.svg";
import { MdError } from "react-icons/md";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/users/register",
        {
          fname: formData.fullName,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log(response.data);
      navigate("/login");
      // Handle successful registration (e.g., redirect to login page or show success message)
    } catch (error) {
      console.error("There was an error registering the user!", error);
    
    }
  };

  return (
    <div className="container-fluid">
      <div className="register-container">
        <div className="form-container">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-icon">
                <input
                  type="text"
                  id="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                <img src={userIcon} alt="User Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <img src={emailIcon} alt="Email Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Create Password</label>
              <div className="input-icon">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="***"
                />
                <img src={lockIcon} alt="Password Icon" className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-icon">
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="***"
                />
                <img
                  src={lockIcon}
                  alt="Confirm Password Icon"
                  className="icon"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="error-message">
                <MdError className="error-icon" />
                {errorMessage}
              </div>
            )}

            <button type="submit" className="register-button">
              Register
            </button>
            <div className="check-account">
              I already have an account!
              <Link to="/login" className="login-link">
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
