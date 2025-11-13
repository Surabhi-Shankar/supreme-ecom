    import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

    const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div style={{ 
        padding: "2rem", 
        maxWidth: "1000px", 
        margin: "0 auto",
        minHeight: "80vh"
        }}>
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
            color: "#2ecc71",
            fontSize: "2rem",
            marginBottom: "2rem",
            textAlign: "center"
            }}
        >
            My Cart
        </motion.h2>
        
        {cartItems.length === 0 ? (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
                textAlign: "center",
                padding: "3rem",
                color: "#ccc"
            }}
            >
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Your cart is empty</p>
            <p style={{ color: "#666" }}>Add some products to get started!</p>
            </motion.div>
        ) : (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
            {/* Cart Summary */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                padding: "1rem",
                backgroundColor: "#2c2c2c",
                borderRadius: "12px",
                border: "1px solid #333"
            }}>
                <div>
                <h3 style={{ color: "#fff", margin: 0 }}>Cart Summary</h3>
                <p style={{ color: "#ccc", margin: "0.5rem 0 0 0" }}>
                    {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                </p>
                </div>
                <button
                onClick={clearCart}
                style={{
                    padding: "0.5rem 1rem",
                    background: "transparent",
                    color: "#e74c3c",
                    border: "1px solid #e74c3c",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                }}
                >
                Clear Cart
                </button>
            </div>

            {/* Cart Items */}
            <div style={{ marginBottom: "2rem" }}>
                {cartItems.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginBottom: "1rem",
                    padding: "1.5rem",
                    backgroundColor: "#2c2c2c",
                    borderRadius: "12px",
                    border: "1px solid #333",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                    }}
                >
                    <img
                    src={item.image}
                    alt={item.name}
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "8px",
                        objectFit: "cover"
                    }}
                    />
                    
                    <div style={{ flex: 1 }}>
                    <h4 style={{ 
                        color: "#2ecc71", 
                        margin: "0 0 0.5rem 0",
                        fontSize: "1.1rem"
                    }}>
                        {item.name}
                    </h4>
                    <p style={{ 
                        color: "#ccc", 
                        margin: "0 0 0.5rem 0",
                        fontSize: "0.9rem"
                    }}>
                        {item.description}
                    </p>
                    <p style={{ 
                        color: "#2ecc71", 
                        fontWeight: "600",
                        margin: 0
                    }}>
                        ₹{item.price}
                    </p>
                    </div>

                    {/* Quantity Controls */}
                    <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    marginRight: "1rem"
                    }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                        style={{
                        width: "35px",
                        height: "35px",
                        background: item.quantity === 1 ? "#555" : "#2ecc71",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                        }}
                    >
                        -
                    </motion.button>
                    
                    <span style={{ 
                        color: "#fff", 
                        fontWeight: "600",
                        minWidth: "30px",
                        textAlign: "center"
                    }}>
                        {item.quantity}
                    </span>
                    
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                        width: "35px",
                        height: "35px",
                        background: "#2ecc71",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                        }}
                    >
                        +
                    </motion.button>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    style={{
                        padding: "0.5rem 1rem",
                        background: "transparent",
                        color: "#e74c3c",
                        border: "1px solid #e74c3c",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.9rem"
                    }}
                    >
                    Remove
                    </motion.button>
                </motion.div>
                ))}
            </div>

            {/* Total and Checkout */}
            <div style={{
                padding: "2rem",
                backgroundColor: "#2c2c2c",
                borderRadius: "12px",
                border: "1px solid #333",
                textAlign: "center"
            }}>
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
                fontSize: "1.2rem"
                }}>
                <span style={{ color: "#ccc" }}>Total Items:</span>
                <span style={{ color: "#fff", fontWeight: "600" }}>{getTotalItems()}</span>
                </div>
                
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                fontSize: "1.5rem"
                }}>
                <span style={{ color: "#ccc" }}>Total Price:</span>
                <span style={{ color: "#2ecc71", fontWeight: "700" }}>₹{getTotalPrice()}</span>
                </div>

                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: "1rem 2rem",
                    background: "#2ecc71",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    width: "100%",
                    maxWidth: "300px"
                }}
                >
                Proceed to Checkout
                </motion.button>
            </div>
            </motion.div>
        )}
        </div>
    );
    };

    export default Cart;