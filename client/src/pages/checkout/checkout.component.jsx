import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {selectCartItems, SelectCartTotal} from '../../redux/cart/cart.selector';

import './checkout.style.scss';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => {
    return (    
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-bloc"><span>Description</span></div>
            <div className="header-bloc"><span>Quantity</span></div>
            <div className="header-bloc"><span>Price</span></div>
            <div className="header-bloc"><span>Remove</span></div>
        </div>

        {
            cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        
        <div className="Total"><span>Total: ${total}</span></div>
        <div className="test-warning">*Please use the following test credit card for payments* <br/> 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</div>
        <br/>
        <StripeCheckoutButton price={total}/>
    </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: SelectCartTotal
})

export default connect(mapStateToProps) (CheckoutPage);


