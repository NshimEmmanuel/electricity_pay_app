import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/ForgotPassword.css"; // 👈 Add this line

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.phoneNumber.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmNewPassword.value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const resetData = {
      phoneNumber,
      password: newPassword
    };

    sessionStorage.setItem("reset", JSON.stringify(resetData));
    alert("Password updated! Please login.");
    navigate("/login");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
          <input type="password" name="newPassword" placeholder="New Password" required />
          <input type="password" name="confirmNewPassword" placeholder="Confirm New Password" required />
          <button type="submit">Submit</button>
        </form>
        <div>
          <Link to="/"><button>Register Account</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
