    import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png"; // update path if needed

    export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll for glow effect
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
        className="nav"
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.8rem 2rem",
            backgroundColor: isScrolled ? "#081a39" : "#0a1f44",
            color: "#fff",
            boxShadow: isScrolled
            ? "0 4px 20px rgba(46, 204, 113, 0.5)"
            : "0 2px 10px rgba(0,0,0,0.3)",
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: "all 0.4s ease",
        }}
        >
        {/* Brand Logo + Title */}
        <div
            className="brand"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
            <div
            style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 0 15px rgba(46, 204, 113, 0.5)",
                transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
            <img
                src={logo}
                alt="Supreme Ecom Logo"
                style={{
                width: "55px",
                height: "55px",
                objectFit: "cover",
                borderRadius: "50%",
                }}
            />
            </div>
            <h2 style={{ color: "#2ecc71", margin: 0, fontWeight: "600" }}>
            Supreme-Ecom
            </h2>
        </div>

        {/* Search Bar */}
        <div
            className="search"
            style={{
            flex: 1,
            margin: "0 2rem",
            maxWidth: "600px",
            }}
        >
            <input
            placeholder="Search products, categories..."
            style={{
                width: "100%",
                padding: "0.6rem 1rem",
                borderRadius: "20px",
                border: "none",
                outline: "none",
                fontSize: "0.95rem",
                boxShadow: "0 0 8px rgba(255,255,255,0.15)",
            }}
            />
        </div>

        {/* Right Side Buttons */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div className="badge" style={badgeStyle}>Profile</div>
            <div className="badge" style={badgeStyle}>Cart (0)</div>
            <div className="badge" style={badgeStyle}>Best Sellers</div>
        </div>
        </div>
    );
    }

    // Badge button style
    const badgeStyle = {
    background: "#2ecc71",
    padding: "8px 16px",
    borderRadius: "20px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.3s ease",
    boxShadow: "0 0 8px rgba(46, 204, 113, 0.4)",
    border: "1px solid #27ae60",
    };

