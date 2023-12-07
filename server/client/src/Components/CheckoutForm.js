import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ handleToken }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { token, error } = await stripe.createToken(elements.getElement(CardElement));

      if (error) {
        console.error(error);
      } else {
        handleToken(token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ fontSize: '16px', marginBottom: '8px', display: 'block' }}>
          Card Details
        </label>
        <CardElement
          style={{
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        className='btn'
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Credits
      </button>
    </form>
  );
};

export default CheckoutForm;
