    import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

    export default function ProductCard({ p }) {
    const { addToCart, cartItems } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    // Check if product is already in cart
    const isInCart = cartItems.some(item => item.id === p.id);
    const cartItem = cartItems.find(item => item.id === p.id);

    const handleAddToCart = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setIsAdding(true);
        addToCart(p);
        
        // Reset animation after short delay
        setTimeout(() => setIsAdding(false), 500);
    };

    return (
        <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        style={{
            backgroundColor: "#2c2c2c",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            cursor: "pointer",
            position: "relative",
            border: isInCart ? "2px solid #2ecc71" : "2px solid transparent",
            transition: "all 0.3s ease",
        }}
        >
        {/* In Cart Badge */}
        {isInCart && (
            <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#2ecc71",
                color: "white",
                padding: "2px 8px",
                borderRadius: "10px",
                fontSize: "0.7rem",
                fontWeight: "600",
                zIndex: 2
            }}
            >
            In Cart ({cartItem?.quantity})
            </motion.div>
        )}

        <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <motion.img
            src={p.image}
            alt={p.name}
            whileHover={{ scale: 1.05 }}
            style={{ 
                width: "100%", 
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px", 
                marginBottom: "10px" 
            }}
            />
            <h3 style={{ color: "#2ecc71", fontSize: "1.1rem", marginBottom: "5px" }}>{p.name}</h3>
            <p style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "5px", height: "40px", overflow: "hidden" }}>
            {p.description}
            </p>
            <p style={{ color: "#2ecc71", fontWeight: 600, marginBottom: "10px", fontSize: "1.2rem" }}>
            ₹{p.price}
            </p>
        </Link>
        
        <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: isAdding ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
            scale: isAdding ? 1.1 : 1,
            background: isAdding ? "#27ae60" : "#2ecc71"
            }}
            disabled={isAdding}
            style={{
            padding: "0.5rem 1rem",
            background: "#2ecc71",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: isAdding ? "default" : "pointer",
            width: "100%",
            fontWeight: "600",
            fontSize: "0.9rem",
            transition: "all 0.3s ease",
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
                {isInCart ? `Add More (${cartItem.quantity} in cart)` : "Add to Cart"}
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
        </motion.div>
    );
    }