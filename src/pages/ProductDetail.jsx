    import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

    export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart, cartItems } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const product = products.find((p) => p.id === Number(id));

    // Check if product is in cart
    const isInCart = cartItems.some(item => item.id === product?.id);
    const cartItem = cartItems.find(item => item.id === product?.id);

    const handleAddToCart = async () => {
        if (!product) return;
        
        setIsAdding(true);
        addToCart(product);
        
        // Reset animation after short delay
        setTimeout(() => setIsAdding(false), 500);
    };

    if (!product)
        return (
        <div style={{ padding: "2rem", textAlign: "center", color: "#eee" }}>
            Product not found.
        </div>
        );

    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
            padding: "2rem",
            maxWidth: "1000px",
            margin: "2rem auto",
            backgroundColor: "#1b1b1b",
            borderRadius: "16px",
            boxShadow: "0 8px 35px rgba(0,0,0,0.6)",
            color: "#eee",
        }}
        >
        <Link
            to="/"
            style={{
            display: "inline-block",
            marginBottom: "1.5rem",
            textDecoration: "none",
            color: "#aaa",
            fontWeight: 500,
            transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2ecc71")}
            onMouseLeave={(e) => (e.target.style.color = "#aaa")}
        >
            ← Back to Home
        </Link>

        <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            {/* Product Image */}
            <motion.img
            src={product.image}
            alt={product.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            style={{
                width: "45%",
                minWidth: "280px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
            />

            {/* Product Info */}
            <div style={{ flex: 1, minWidth: "280px" }}>
            <motion.h2
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                color: "#2ecc71",
                fontSize: "2rem",
                marginBottom: "10px",
                fontWeight: 600,
                }}
            >
                {product.name}
            </motion.h2>

            {/* Category */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                style={{
                display: "inline-block",
                background: "rgba(46, 204, 113, 0.2)",
                color: "#2ecc71",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "500",
                marginBottom: "15px",
                }}
            >
                {product.category}
            </motion.div>

            <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                color: "#ccc",
                lineHeight: 1.6,
                marginBottom: "15px",
                fontSize: "1.1rem",
                }}
            >
                {product.description}
            </motion.p>

            <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                color: "#2ecc71",
                fontSize: "1.8rem",
                fontWeight: 600,
                marginBottom: "10px",
                }}
            >
                ₹{product.price}
            </motion.h3>

            {/* Cart Status */}
            {isInCart && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    color: "#2ecc71",
                    fontSize: "0.9rem",
                    marginBottom: "15px",
                    fontWeight: "500",
                }}
                >
                ✅ {cartItem.quantity} {cartItem.quantity === 1 ? 'item' : 'items'} in cart
                </motion.div>
            )}

            {/* Button Container */}
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}>
                {/* Add to Cart Button */}
                <motion.button
                onClick={handleAddToCart}
                whileHover={{
                    scale: isAdding ? 1 : 1.05,
                    boxShadow: isAdding ? "0 0 15px rgba(46,204,113,0.5)" : "0 0 25px rgba(46,204,113,0.8)",
                }}
                whileTap={{ scale: 0.97 }}
                animate={{ 
                    background: isAdding ? "#27ae60" : "#2ecc71"
                }}
                disabled={isAdding}
                transition={{ duration: 0.3 }}
                style={{
                    background: "#2ecc71",
                    color: "#1b1b1b",
                    border: "none",
                    padding: "14px 32px",
                    borderRadius: "10px",
                    cursor: isAdding ? "default" : "pointer",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    boxShadow: "0 0 15px rgba(46,204,113,0.5)",
                    fontSize: "1rem",
                    minWidth: "160px",
                    position: "relative",
                    overflow: "hidden"
                }}
                >
                {isAdding ? (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    >
                    Adding...
                    </motion.span>
                ) : (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    >
                    {isInCart ? "Add More" : "Add to Cart"}
                    </motion.span>
                )}
                
                {/* Loading animation */}
                {isAdding && (
                    <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    }}
                    animate={{
                        x: ["0%", "100%", "100%", "0%"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                    />
                )}
                </motion.button>

                {/* View Cart Button - FIXED */}
                {isInCart && (
                <Link 
                    to="/cart" 
                    style={{ 
                    textDecoration: "none",
                    display: "inline-block"
                    }}
                >
                    <motion.button
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(46,204,113,0.3)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        background: "transparent",
                        color: "#2ecc71",
                        border: "2px solid #2ecc71",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        transition: "all 0.3s ease",
                        minWidth: "140px"
                    }}
                    >
                    View Cart
                    </motion.button>
                </Link>
                )}
            </div>
            </div>
        </div>

        {/* Additional Product Details Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "#2c2c2c",
            borderRadius: "12px",
            border: "1px solid #333",
            }}
        >
            <h3 style={{ color: "#2ecc71", marginBottom: "1rem" }}>Product Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <div>
                <strong style={{ color: "#ccc" }}>Category:</strong>
                <p style={{ color: "#2ecc71", margin: "0.5rem 0" }}>{product.category}</p>
            </div>
            <div>
                <strong style={{ color: "#ccc" }}>Price:</strong>
                <p style={{ color: "#2ecc71", margin: "0.5rem 0" }}>₹{product.price}</p>
            </div>
            <div>
                <strong style={{ color: "#ccc" }}>Availability:</strong>
                <p style={{ color: "#2ecc71", margin: "0.5rem 0" }}>In Stock</p>
            </div>
            <div>
                <strong style={{ color: "#ccc" }}>Product ID:</strong>
                <p style={{ color: "#2ecc71", margin: "0.5rem 0" }}>#{product.id}</p>
            </div>
            </div>
        </motion.div>
        </motion.div>
    );
    }