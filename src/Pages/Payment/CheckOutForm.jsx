
import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useSecureApi from '../../Hooks/useSecureApi';


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState('')
  const xios = useSecureApi()
  const [clientSecret,setClientSecre] = useState('')

  const contestPrice = 300
    useEffect(() => {
      if (contestPrice > 0) {
          xios.post('/create-payment-intent', { prizeMoney: contestPrice })
              .then(res => {
                  console.log(res.data.clientSecret);
                  setClientSecre(res.data.clientSecret);
              })
      }

  }, [contestPrice,xios])


  console.log('client secret',clientSecret)




  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
      const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }


   
    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);

      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {
            error && <p className='text-red-700'>{error}</p>
      }
      <button type="submit" className='btn bg-primary text-white' disabled={!stripe || !clientSecret}>
        Pay
      </button>

    </form>
  );
};

export default CheckoutForm