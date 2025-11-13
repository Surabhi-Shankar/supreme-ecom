import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./context/Cart";
import { CartProvider } from "./context/CartContext";
import products from "./data/products";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <CartProvider>
      <BrowserRouter>
        <div style={{ 
          backgroundColor: "#121212", 
          minHeight: "100vh",
          color: "#ffffff"
        }}>
          <Navbar 
            products={products} 
            setFilteredProducts={setFilteredProducts} 
          />
          <Routes>
            <Route 
              path="/" 
              element={
                <Home filteredProducts={filteredProducts} />
              } 
            />
            <Route 
              path="/product/:id" 
              element={<ProductDetail />} 
            />
            <Route 
              path="/cart" 
              element={<Cart />} 
            />
            {/* Optional: Add more routes as needed */}
            <Route 
              path="*" 
              element={
                <div style={{ 
                  padding: "2rem", 
                  textAlign: "center",
                  marginTop: "2rem"
                }}>
                  <h2 style={{ color: "#2ecc71" }}>Page Not Found</h2>
                  <p style={{ color: "#ccc" }}>The page you're looking for doesn't exist.</p>
                </div>
              } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}