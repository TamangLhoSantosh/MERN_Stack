import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ContactUs from "./components/ContactUs/ContactUs";
import RegistrationForm from "./components/Register/RegisterComponent";
import CategoryComponent from "./components/Category/CategoryComponent";
import AddProductComponent from "./components/AddProduct/AddProductComponent";
import Product from "./components/Product/Product";
import ProductDetails from "./components/Product/ProductDetails";
import ProtectedRoute from "./ProctectedRoutes/protectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/category"
          element={
            <ProtectedRoute role="admin">
              <CategoryComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <ProtectedRoute role="admin">
              <AddProductComponent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
