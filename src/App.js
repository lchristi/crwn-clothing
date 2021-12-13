import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import HatsPage from "./pages/hats/hats.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

const App = (props) => {
  const { setCurrentUser } = props;  

  useEffect(() => {    
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          console.log(snapshot.data());
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      //this is equivalent to class based component's componentWillUnmount lifecycle
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/shop/*" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />     
        <Route
          exact
          path="/signin"
          element={
            props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
          }
        />
      </Routes>            
    </div>
    
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  isAdmin: user.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
