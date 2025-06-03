import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.phoneNumber.value;
    const password = form.password.value;

    const savedUser = JSON.parse(sessionStorage.getItem("user"));
    const resetUser = JSON.parse(sessionStorage.getItem("reset"));

    const match = 
      (savedUser && savedUser.mobileNumber === phoneNumber && savedUser.password === password) ||
      (resetUser && resetUser.phoneNumber === phoneNumber && resetUser.password === password);

    if (match) {
      alert("Login successful!");
      navigate("/Services");
    } else {
      alert("Invalid phone number or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <div className="login-links">
          <Link to="/" className="link-button">Register</Link>
          <Link to="/forgot-password" className="link-button">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
