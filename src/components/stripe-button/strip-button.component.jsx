import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe wants cents
    const priceForStripe = price * 100;
    const publisheableKey = 'pk_test_51KW5zLAhVqwv3YytxxeNZqkuDtNPXivUjwbXiJb5xLBCEInNYFAjt6eqoRWJiQWna1z8E3DcnsqsW9DZaYEwrfbb00vQmWLeZD'

    const onToken = token => {
      alert('Payment Succesful')
    }

    return  (
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publisheableKey}
      />
    )
}

export default StripeCheckoutButton;