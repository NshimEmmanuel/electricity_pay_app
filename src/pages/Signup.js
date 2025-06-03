// src/pages/Signup.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      birthDate: form.birthDate.value,
      mobileNumber: form.mobileNumber.value,
      cashPowerNumber: form.cashPowerNumber.value,
      location: form.location.value,
      password: form.password.value,
    };

    sessionStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First NameXXXXXXX" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="date" name="birthDate" placeholder="Birth Date" required />
          <input type="tel" name="mobileNumber" placeholder="Mobile Number" required />
          <input type="text" name="cashPowerNumber" placeholder="Cash Power Number" required />
          <input type="text" name="location" placeholder="Location" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <button>Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
