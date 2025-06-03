import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MomoPayment.css";

const MomoPayment = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmTransaction = () => {
    setTransactionSuccess(true);
    setShowModal(false);

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const cancelTransaction = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    navigate("/services");
  };

  return (
    <div className="momo-payment-container">
      <div className="momo-payment-box">
        <h2>Fill the form below</h2>
        <form onSubmit={handleSubmit}>
          <input type="tel" placeholder="Phone Number" required />
          <input type="number" placeholder="Amount to be paid" required />
          <button type="submit">Send</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>

        {/* Success message */}
        {transactionSuccess && (
          <p className="success-message">Transaction Successful!</p>
        )}
      </div>

      {/* Modal confirmation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Transaction</h3>
            <p>Do you confirm this transaction?</p>
            <div className="modal-buttons">
              <button onClick={confirmTransaction}>Yes</button>
              <button onClick={cancelTransaction}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MomoPayment;
