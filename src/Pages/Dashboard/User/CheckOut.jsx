

import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import useSecureApi from "../../../Hooks/useSecureApi";

// import '../styles/common.css';

const CheckOutForm = () => {
  const [error,setError] = useState('')
  const [transactionId,setTransactionId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()

  const xios = useSecureApi()
  const [clientSecret, setClientSecret] = useState("");

  useEffect(()=>{
    
      xios.post('/create-payment-intent',{price:200})
      .then(res => setClientSecret(res.data))
    
  },[xios])



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
      setError('')
    }
    
    const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          name: user?.displayName || 'anonymous',
          email: user?.email || 'anonymous'
        }
      }
    })

    if(confirmError){
      console.log('Confirm error')
    } else{
      if(paymentIntent.status == 'succeeded'){
        setTransactionId(paymentIntent.id)
        console.log('inside the api room')

        const payment = {
          email:user?.email,
          price:200,
          status:'pending'
        }  
      
        axios.post('http://localhost:5000/payments',payment)
        .then(res => console.log(res))



      }
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
        error && <p className="text-red-500">{error}</p>
      }
      {
      transactionId && <p className="text-green-500">you transation id is {transactionId}</p>
      }
      <button className="btn btn-primary w-[30%] mt-8" type="submit">
        Pay
      </button>
    </form>
  );
};


export default CheckOutForm