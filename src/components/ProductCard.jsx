    import { motion } from "framer-motion";
import { Link } from "react-router-dom";

    export default function ProductCard({ p }) {
    return (
        <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.5)" }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
            borderRadius: "12px",
            textAlign: "center",
            backgroundColor: "#2c2c2c",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            cursor: "pointer",
            padding: "1rem",
            transition: "all 0.3s ease-in-out",
            }}
        >
            <img
            src={p.image}
            alt={p.name}
            style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "0.5rem",
            }}
            />
            <h3 style={{ color: "#eee" }}>{p.name}</h3>
            {p.description && <p style={{ fontSize: "14px", color: "#aaa" }}>{p.description}</p>}
            <strong style={{ color: "#2ecc71" }}>₹{p.price}</strong>
        </motion.div>
        </Link>
    );
    }
