    import { Link } from "react-router-dom";

    export default function ProductCard({ p }) {
    return (
        <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div
            style={{
            borderRadius: "12px",
            padding: "1rem",
            textAlign: "center",
            backgroundColor: "#2c2c2c",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            cursor: "pointer",
            }}
        >
            <img
            src={p.image} // <-- updated to match your product data
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
        </div>
        </Link>
    );
    }
