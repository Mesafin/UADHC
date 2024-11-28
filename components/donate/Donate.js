'use client'
import React from 'react';   
import StripeProvider from './StripeProvider';
import DonationForm from './DonationForm';

const Donate = () => {  
  const handlePaymentSuccess = (data) => {  
    console.log('Donation successful:', data);  
    alert('Donation successful!');  
  };  

  return (  
    <StripeProvider>  
      <div className='container mx-auto'>
        
      <DonationForm onPaymentSuccess={handlePaymentSuccess} />  
      </div>
    </StripeProvider>  
  );  
};  

export default Donate;




   