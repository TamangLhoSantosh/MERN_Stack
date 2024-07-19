import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
