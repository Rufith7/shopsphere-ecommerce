import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/products" 
            element={<Products />} 
          />

          <Route 
            path="/products/:id" 
            element={<ProductDetails />} 
          />

          <Route 
            path="/cart" 
            element={<Cart />} 
          />

          <Route 
            path="/wishlist" 
            element={<Wishlist />} 
          />

          <Route 
            path="/login" 
            element={<Login />} 
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;