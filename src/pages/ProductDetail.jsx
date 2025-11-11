    import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

    export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product)
        return (
        <div style={{ padding: "2rem", color: "#eee", textAlign: "center" }}>
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
            color: "#eee",
            backgroundColor: "#1b1b1b",
            borderRadius: "16px",
            boxShadow: "0 8px 35px rgba(0,0,0,0.6)",
        }}
        >
        <Link
            to="/"
            style={{
            textDecoration: "none",
            color: "#aaa",
            fontWeight: "500",
            display: "inline-block",
            marginBottom: "1.5rem",
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
            alignItems: "center",
            gap: "40px",
            justifyContent: "center",
            }}
        >
            {/* Product Image */}
            <motion.img
            src={product.image}
            alt={product.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
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
                fontWeight: "600",
                }}
            >
                {product.name}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                color: "#ccc",
                lineHeight: "1.6",
                marginBottom: "15px",
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
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "20px",
                }}
            >
                ₹{product.price}
            </motion.h3>

            <motion.button
                whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(46,204,113,0.8)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                style={{
                background: "#2ecc71",
                color: "#1e1e1e",
                border: "none",
                padding: "12px 28px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                boxShadow: "0 0 15px rgba(46,204,113,0.5)",
                }}
            >
                Add to Cart
            </motion.button>
            </div>
        </div>
        </motion.div>
    );
    }
