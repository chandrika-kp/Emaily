import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
// import { handleToken } from '../redux/actions';
import * as actions from '../redux/actions';

const Payments = ({handleToken}) => {
    return (
        <StripeCheckout
            name="Emaily"
            description='Pay $5 for 5 email credits'
            amount={500}
            token={token => handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}

        >
            <button className='btn'>Add Credits</button>
        </StripeCheckout>

    );

}

export default connect(null, actions)(Payments);