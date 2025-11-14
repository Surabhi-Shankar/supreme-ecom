    import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

    export default function Wishlist() {
    const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

    return (
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h1 style={{ color: "#2ecc71", margin: 0 }}>My Wishlist</h1>
            {wishlistItems.length > 0 && (
            <button
                onClick={clearWishlist}
                style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
                }}
            >
                Clear All
            </button>
            )}
        </div>

        {wishlistItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <h3 style={{ color: "#ccc", marginBottom: "1rem" }}>Your wishlist is empty</h3>
            <p style={{ color: "#888", marginBottom: "2rem" }}>
                Start adding products you love to your wishlist!
            </p>
            <Link
                to="/"
                style={{
                backgroundColor: "#2ecc71",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
                }}
            >
                Continue Shopping
            </Link>
            </div>
        ) : (
            <div>
            <p style={{ color: "#ccc", marginBottom: "2rem" }}>
                {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} in wishlist
            </p>
            
            <div style={{ display: "grid", gap: "1.5rem" }}>
                {wishlistItems.map((product) => (
                <div
                    key={product.id}
                    style={{
                    backgroundColor: "#1e1e1e",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "center",
                    }}
                >
                    <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "4px",
                    }}
                    />
                    
                    <div style={{ flex: 1 }}>
                    <h3 style={{ color: "white", margin: "0 0 0.5rem 0" }}>
                        <Link 
                        to={`/product/${product.id}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                        >
                        {product.name}
                        </Link>
                    </h3>
                    <p style={{ color: "#2ecc71", fontSize: "1.25rem", fontWeight: "bold", margin: 0 }}>
                        ${product.price}
                    </p>
                    <p style={{ color: "#ccc", margin: "0.5rem 0 0 0" }}>
                        {product.description}
                    </p>
                    </div>
                    
                    <button
                    onClick={() => removeFromWishlist(product.id)}
                    style={{
                        backgroundColor: "transparent",
                        color: "#e74c3c",
                        border: "1px solid #e74c3c",
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                    >
                    Remove
                    </button>
                </div>
                ))}
            </div>
            </div>
        )}
        </div>
    );
    }