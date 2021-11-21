import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import HatsPage from "./pages/hats/hats.component";
import Jackets from "./pages/shop/jackets.components";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/shop/jackets" element={<Jackets />} />
      </Routes>
    </div>
  );
}

export default App;
