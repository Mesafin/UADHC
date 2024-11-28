

import { Elements } from '@stripe/react-stripe-js';  
import { loadStripe } from '@stripe/stripe-js';  

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);  

const StripeProvider = ({ children }) => (  
  <Elements stripe={stripePromise}>  
    {children}  
  </Elements>  
);  

export default StripeProvider;