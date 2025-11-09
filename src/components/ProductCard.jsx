    import { motion } from "framer-motion";
import { Link } from "react-router-dom";

    export default function ProductCard({ p }) {
    return (
        <Link to={`/product/${p.id}`} style={{textDecoration:"none",color:"inherit"}}>
            <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
    className="card"
    >
    <img src={p.img} alt={p.name} />
    <div className="title">{p.name}</div>
    <div className="price">₹{p.price}</div>
    </motion.div>

        </Link>
    );
    }
