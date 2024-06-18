import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import CartContext from "./components/contexts/CartContext";
function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <br />
          <hr />
          <Navbar />
          <hr />
          <br />
          <small>Cart function using useContext</small>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;