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
            maxWidth: "900px",
            margin: "2rem auto",
            color: "#eee",
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.5)",
        }}
        >
        <Link to="/" style={{ textDecoration: "none", color: "#aaa" }}>
            ← Back to Home
        </Link>

        <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "30px",
            marginTop: "20px",
            }}
        >
            {/* Product Image */}
            <motion.img
            src={product.image}
            alt={product.name}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05}}
            transition={{ duration: 0.2}}
            style={{
                width: "50%",
                minWidth: "250px",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
            }}
            />

            {/* Product Info */}
            <div style={{ flex: 1, minWidth: "250px" }}>
            <motion.h2
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ color: "#2ecc71" }}
            >
                {product.name}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ marginTop: "10px", color: "#ccc" }}
            >
                {product.description}
            </motion.p>

            <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ marginTop: "15px", color: "#2ecc71" }}
            >
                ₹{product.price}
            </motion.h3>

            <motion.button
                whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(46,204,113,0.8)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                style={{
                marginTop: "20px",
                background: "#2ecc71",
                color: "#1e1e1e",
                border: "none",
                padding: "10px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 0 10px rgba(46,204,113,0.5)",
                transition: "all 0.3s ease",
                }}
            >
                Add to Cart
            </motion.button>
            </div>
        </div>
        </motion.div>
    );
    }
