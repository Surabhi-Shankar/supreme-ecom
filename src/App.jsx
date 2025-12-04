import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./context/Cart";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import products from "./data/products";
import About from "./pages/About";
import BestSellers from "./pages/BestSellers";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import Home from "./pages/Home";
import NewArrivals from "./pages/NewArrivals";
import Orders from "./pages/Orders";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

export default function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <div
            style={{
              backgroundColor: "#121212",
              minHeight: "100vh",
              color: "#ffffff",
            }}
          >
            <Navbar
              products={products}
              setFilteredProducts={setFilteredProducts}
            />

            <Routes>
              <Route
                path="/"
                element={<Home filteredProducts={filteredProducts} />}
              />

              <Route path="/product/:id" element={<ProductDetail />} />

              <Route path="/cart" element={<Cart />} />

              {/* ✅ Wishlist Page */}
              <Route path="/wishlist" element={<Wishlist />} />

              {/* Added pages */}
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/settings" element={<Settings />} /> */}

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div
                    style={{
                      padding: "2rem",
                      textAlign: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <h2 style={{ color: "#2ecc71" }}>Page Not Found</h2>
                    <p style={{ color: "#ccc" }}>
                      The page you're looking for doesn't exist.
                    </p>
                  </div>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}