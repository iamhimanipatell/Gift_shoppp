import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleLoginMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true); // Mark user as authenticated
    localStorage.setItem("isAuthenticated", "true"); // Store in localStorage

    // Redirect to the page that was attempted to be accessed before login
    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/cart";
    localStorage.removeItem("redirectAfterLogin"); // Clear after redirect
    navigate(redirectPath); // Redirect the user
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="auth-input"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="auth-input"
          />
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={toggleLoginMode} className="toggle-text">
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;
