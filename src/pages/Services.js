import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [formCompleted, setFormCompleted] = useState(false);
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handlePay = (e) => {
    e.preventDefault();
    if (meterNumber.trim() && amount.trim()) {
      setFormCompleted(true);
      setActiveTab("payments");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handlePaymentOption = (option) => {
    if (!formCompleted) {
      alert("Please fill out the form first before choosing a payment option.");
      setActiveTab("services");
      return;
    }

    navigate(option === "MOMO PAY" ? "/momo-payment" : "/bank-payment");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "services":
        return (
          <section>
            <h3 className="section-title">Pay Electricity Here</h3>
            <form onSubmit={handlePay} className="services-form">
              <input
                type="text"
                placeholder="Meter Number"
                value={meterNumber}
                onChange={(e) => setMeterNumber(e.target.value)}
                aria-label="Meter Number"
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                aria-label="Amount"
                required
              />
              <button type="submit">Pay</button>
            </form>
          </section>
        );

      case "payments":
        return (
          <section className="payment-options">
            <div className="payment-images">
              <img src="assets/ifoto5.png" alt="MOMO PAY" className="payment-img" />
              <img src="assets/ifoto3.png" alt="Bank Card" className="payment-img" />
            </div>
            <div className="payment-buttons">
              <button onClick={() => handlePaymentOption("MOMO PAY")} className="momo-button">Use MOMO PAY</button>
              <button onClick={() => handlePaymentOption("Bank Card")} className="bankcard-button">Use Bank Card</button>
            </div>
            <p className="token-message">Tokens Will Be Auto Sent to Your Meter</p>
          </section>
        );

      case "about":
        return (
          <section className="about-section">
            <h3>About Us</h3>
            <p>
              We are a dedicated electricity service provider committed to fast, secure, and convenient token purchases.
              Our mission is to ensure every household has access to reliable electricity with the ease of digital payments.
            </p>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main className="services-wrapper">
      {/* Header */}
      <header className="services-box services-header">
        <img src="assets/ifoto2.png" alt="Electricity Service" />
      </header>

      {/* Navigation & Middle Section */}
      <section className="services-box services-middle">
        <h2>Power Token</h2>
        <p className="tap-pay-text">Tap pay light</p>
        <p>
          <strong style={{ color: "#18181a" }}>1 Member</strong>{" "}
          <Link to="/member-info" className="general-info">General Info &gt;</Link>
        </p>

        <nav className="links">
          <button onClick={() => setActiveTab("services")}>Services</button>
          <button onClick={() => setActiveTab("payments")}>Payments</button>
          <button onClick={() => setActiveTab("about")}>About Us</button>
        </nav>
      </section>

      {/* Content Area */}
      <section className="services-box services-lower">
        {renderContent()}
      </section>
    </main>
  );
};

export default Services;
