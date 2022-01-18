import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

//the following import are styled components As in css in javascript
import { HeaderContainer,LogoContainer, OptionsContainer, OptionLink, OptionDiv} from "./header.styles";

import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {    
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch(signOutStart);
  return (
    <HeaderContainer>
      <LogoContainer  to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>

        {currentUser ? (
          <OptionDiv onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;

//keeping the following code for future reference
/* 
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
 */