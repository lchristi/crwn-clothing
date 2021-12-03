import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";
import CustomButton from "../../components/Button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import {useNavigate} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems,dispatch }) => {
  let navigate = useNavigate();
  return (
  
  
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      )) : <span className='empty-message'>Your cart is empty</span>}
      <CustomButton onClick={() => {navigate('/checkout'); dispatch(toggleCartHidden());}}>CHECKOUT</CustomButton>
      
    </div>
  </div>
  )
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});


export default connect(mapStateToProps)(CartDropdown);

//Reason: becasue all of our higher ordered component take components as argument.
