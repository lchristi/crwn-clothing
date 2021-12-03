import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {selectCartItems, SelectCartTotal} from '../../redux/cart/cart.selector';

import './checkout.style.scss';

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
        
    </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: SelectCartTotal
})

export default connect(mapStateToProps) (CheckoutPage);


