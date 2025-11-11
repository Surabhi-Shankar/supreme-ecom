import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import products from "./data/products";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
        <Navbar products={products} setFilteredProducts={setFilteredProducts} />
        <Routes>
          <Route
            path="/"
            element={<Home filteredProducts={filteredProducts} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
