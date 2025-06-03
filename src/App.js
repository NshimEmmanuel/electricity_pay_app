import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import BankPayment from "./pages/BankPayment";
import MomoPayment from "./pages/MomoPayment";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/bank-payment" element={<BankPayment />} />
        <Route path="/momo-payment" element={<MomoPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
