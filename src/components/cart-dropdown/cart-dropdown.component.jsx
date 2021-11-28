import React from "react";

import "./cart-dropdown.style.scss";
import CustomButton from "../../components/Button/Button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
