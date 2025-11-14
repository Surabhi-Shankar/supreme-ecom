    import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

    export default function ProductCard({ p }) {
    const { addToCart, cartItems } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const [isAdding, setIsAdding] = useState(false);
    const [isWishlisting, setIsWishlisting] = useState(false);

    const isInCart = cartItems.some(item => item.id === p.id);
    const cartItem = cartItems.find(item => item.id === p.id);

    const inWishlist = isInWishlist(p.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAdding(true);
        addToCart(p);
        setTimeout(() => setIsAdding(false), 500);
    };

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishlisting(true);
        inWishlist ? removeFromWishlist(p.id) : addToWishlist(p);
        setTimeout(() => setIsWishlisting(false), 500);
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
        {/* Wishlist Heart Top-Right */}
        <motion.button
            onClick={handleWishlistToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: isWishlisting ? 1.2 : 1 }}
            disabled={isWishlisting}
            style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0, 0, 0, 0.7)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1.2rem",
            zIndex: 2,
            color: inWishlist ? "#e74c3c" : "#666",
            backdropFilter: "blur(10px)",
            }}
            title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
            {isWishlisting ? (
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.5, repeat: Infinity }}>⭐</motion.span>
            ) : (
            <span>{inWishlist ? "❤️" : "🤍"}</span>
            )}
        </motion.button>

        {/* In Cart Badge */}
        {isInCart && (
            <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
                position: "absolute",
                top: "10px",
                left: "10px",
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

        {/* Add to Cart Button */}
        <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: isAdding ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: isAdding ? 1.1 : 1, background: isAdding ? "#27ae60" : "#2ecc71" }}
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
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Adding...</motion.span>
            ) : (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {isInCart ? `Add More (${cartItem.quantity})` : "Add to Cart"}
            </motion.span>
            )}

            {/* Loading Animation */}
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
                animate={{ x: ["0%", "100%", "100%", "0%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            )}
        </motion.button>

        {/* Wishlist Status Badge */}
        {inWishlist && (
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                background: "rgba(231, 76, 60, 0.9)",
                color: "white",
                padding: "2px 6px",
                borderRadius: "8px",
                fontSize: "0.6rem",
                fontWeight: "600",
            }}
            >
            In Wishlist
            </motion.div>
        )}
        </motion.div>
    );
    }
