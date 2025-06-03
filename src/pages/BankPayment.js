import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BankPayment.css";

const BankPayment = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}`;

  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleConfirmPay = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmPayment = () => {
    setPaymentSuccess(true);
    setShowModal(false);

    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const cancelModal = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    navigate("/services");
  };

  return (
    <div className="bank-payment-container">
      <div className="bank-payment-box">
        {/* Left Side Image */}
        <div className="bank-payment-image">
          <img src="assets/ifoto6.png" alt="Bank Payment" />
        </div>

        {/* Right Side Form */}
        <div className="bank-payment-form">
          <h2>Payment Details</h2>
          <form onSubmit={handleConfirmPay}>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Card Holder Name" required />
            <div className="date-cvc">
              <div className="date-box">{formattedDate}</div>
              <input type="text" placeholder="CVC" required />
            </div>
            <button type="submit">Confirm & Pay</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>

          {paymentSuccess && (
            <p className="">Payment Successful!</p>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Payment</h3>
            <p>Do you confirm the payment?</p>
            <div className="modal-buttons">
              <button onClick={confirmPayment}>Yes</button>
              <button onClick={cancelModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankPayment;
