import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; //stripe wants payment in cents
    const publishableKey = process.env.REACT_APP_stripe_publishable_key;
    
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout label='Pay Now' name='CROWN CLOTHING LTD.' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;