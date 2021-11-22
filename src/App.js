import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import HatsPage from "./pages/hats/hats.component";

import ShopPage from "./pages/shop/shop.components";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
