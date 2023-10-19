import React, { useState } from 'react';
import './payment.css'
const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    upiId: '',
    netbankingDetails: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async (event) => {
    event.preventDefault();

    if (paymentMethod === 'card') {
      // Handle card payment logic
      // Example: send payment details to your server for processing
      const response = await fetch('/charge-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      // Process the server response and set the payment status
      if (response.ok) {
        setPaymentStatus('Payment successful!');
      } else {
        setPaymentStatus('Payment failed. Please try again.');
      }
    } else if (paymentMethod === 'upi') {
      // Handle UPI payment logic
      // Example: send UPI details to your server for processing
    }
     else if (paymentMethod === 'netbanking') {
      // Handle Netbanking payment logic
      // Example: send netbanking details to your server for processing
    }
  };

  return (
    <div className='pd'>
      <h2>Payment Form</h2>
      <form onSubmit={handlePayment}>
        <label className='pl'>
          Select Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Netbanking</option>
          </select>
        </label>

        {paymentMethod === 'card' && (
          <div>
            <label>
              Card Number:
              <input className='p4'
                type="text"
                value={paymentDetails.cardNumber}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    cardNumber: e.target.value,
                  })
                }
                placeholder="Card Number"
              />
            </label>
            <br/>
            <label>
              Expiry (MM/YY):
              <input
                type="text"
                value={paymentDetails.cardExpiry}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    cardExpiry: e.target.value,
                  })
                }
                placeholder="MM/YY"
              />
            </label>
            <label>
              CVC:
              <input
                type="text"
                value={paymentDetails.cardCVC}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    cardCVC: e.target.value,
                  })
                }
                placeholder="CVC"
              />
            </label>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div>
            <label>
              UPI ID:
              <input
                type="text"
                value={paymentDetails.upiId}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    upiId: e.target.value,
                  })
                }
                placeholder="UPI ID"
              />
            </label>
          </div>
        )}

        {paymentMethod === 'netbanking' && (
          <div>
            <label>
              Netbanking Details:
              <input
                type="text"
                value={paymentDetails.netbankingDetails}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    netbankingDetails: e.target.value,
                  })
                }
                placeholder="Netbanking Details"
              />
            </label>
          </div>
        )}

        <button type="submit">Pay</button>
      </form>
      <div>{paymentStatus}</div>
    </div>
  );
};

export default PaymentForm;
