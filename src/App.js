import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { connect } from "react-redux";
import { checkUserSession, setCurrentUser } from "./redux/user/user.actions";


//allows you to create reusable styled components 
import styled from 'styled-components';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";


//using CSS in JS
const Text = styled.div`
color:red;
font-size:28px;
border:${({isActive}) => isActive ? '1px solid black' : '3px dotted black'};
`;


const App = (props) => {  
  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();    
  });    
  // useEffect(() => {    
  //   const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const userRef = await createUserProfileDocument(user);
  //       userRef.onSnapshot((snapshot) => {
  //         console.log(snapshot.data());
  //         setCurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data(),
  //         });
  //       });
  //     } else {
  //       setCurrentUser(user);        
  //     }
      
  //   });    
  //   return () => {
      
  //     //this is equivalent to class based component's componentWillUnmount lifecycle
  //     unsubscribeFromAuth();
  //   };
    
  // }, [setCurrentUser]);
    
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
      <Text isActive={true} >I am a component</Text>     
      <Text isActive={false}>I am another component</Text>
    </div>
    
  );
};



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser  
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),    
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
