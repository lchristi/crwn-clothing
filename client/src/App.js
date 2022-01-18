import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";

//allows you to create reusable styled components
import styled from "styled-components";
import { selectCurrentUser } from "./redux/user/user.selector";

//using CSS in JS
const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted black"};
`;

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  //const isHidden = useSelector((state) => state.cart.hidden);  //--this demoes how to access state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession()); //will only run once because dispatch isn't changing
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
        />
      </Routes>
      <Text isActive={true}>I am a component</Text>
      <Text isActive={false}>I am another component</Text>
    </div>
  );
};

export default App;

//export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect is higher order component takes these props values and then passes to App Component
