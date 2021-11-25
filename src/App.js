import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import HatsPage from "./pages/hats/hats.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");

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
          console.log("test: " + currentUser);
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
