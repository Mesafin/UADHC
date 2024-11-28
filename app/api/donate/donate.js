
import Stripe from 'stripe';  

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);  

export default async function handler(req, res) {  
  if (req.method === 'POST') {  
    const { paymentMethodId, amount } = req.body;  

    try {  
      const paymentIntent = await stripe.paymentIntents.create({  
        amount: amount * 100, // amount in cents  
        currency: 'usd',  
        payment_method: paymentMethodId,  
        confirm: true,  
      });  
      res.status(200).json({ success: true, paymentIntent });  
    } catch (error) {  
      res.status(500).json({ error: error.message });  
    }  
  } else {  
    res.setHeader('Allow', ['POST']);  
    res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  
}