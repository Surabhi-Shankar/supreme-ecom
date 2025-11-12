    import { useEffect, useState } from "react";

    export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track window width for responsiveness
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            menuOpen &&
            !event.target.closest(".navContent") &&
            !event.target.closest(".hamburgerBtn")
        ) {
            setMenuOpen(false);
        }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [menuOpen]);

    return (
        <nav
        style={{
            width: "100%",
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: isScrolled ? "#081a39" : "#0a1f44",
            color: "#fff",
            boxShadow: isScrolled
            ? "0 4px 20px rgba(46,204,113,0.5)"
            : "0 2px 10px rgba(0,0,0,0.3)",
            transition: "all 0.4s ease",
            padding: "0.6rem 1rem",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
        }}
        >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: 0 }}>
            <div
            style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#2ecc71",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.2rem",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
            }}
            >
            🍃
            </div>
            <h2
            style={{
                color: "#2ecc71",
                margin: 0,
                fontWeight: 600,
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }}
            >
            Pureza
            </h2>
        </div>

        {/* Search Bar */}
        <div style={{ flex: "1 1 300px", minWidth: "200px", maxWidth: "600px" }}>
            <input
            placeholder="Search products..."
            style={{
                width: "100%",
                padding: "0.6rem 1rem",
                borderRadius: "20px",
                border: "none",
                outline: "none",
                fontSize: "0.95rem",
                boxShadow: "0 0 8px rgba(255,255,255,0.15)",
                backgroundColor: "rgba(255,255,255,0.95)",
            }}
            />
        </div>

        {/* Hamburger Menu (Mobile) */}
        {windowWidth <= 1024 && (
            <div
            className="hamburgerBtn"
            onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                flexShrink: 0,
                padding: "8px",
                gap: "4px",
            }}
            >
            <div
                style={{
                width: "25px",
                height: "3px",
                backgroundColor: "#2ecc71",
                transition: "all 0.3s ease",
                transform: menuOpen ? "rotate(-45deg) translate(-5px,6px)" : "none",
                }}
            />
            <div
                style={{
                width: "25px",
                height: "3px",
                backgroundColor: "#2ecc71",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
                }}
            />
            <div
                style={{
                width: "25px",
                height: "3px",
                backgroundColor: "#2ecc71",
                transition: "all 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translate(-5px,-6px)" : "none",
                }}
            />
            </div>
        )}

        {/* Menu Items */}
        {(windowWidth > 1024 || menuOpen) && (
            <div
            className="navContent"
            style={{
                flex: "2 1 auto",
                display: "flex",
                flexWrap: windowWidth > 1024 ? "wrap" : "column",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "1rem",
                width: windowWidth > 1024 ? "auto" : "100%",
                paddingTop: windowWidth > 1024 ? "0" : "1rem",
                borderTop: windowWidth > 1024 ? "none" : "1px solid rgba(46,204,113,0.3)",
            }}
            >
            <div style={badgeStyle}>Profile</div>
            <div style={badgeStyle}>Cart (0)</div>
            <div style={badgeStyle}>Best Sellers</div>
            </div>
        )}
        </nav>
    );
    }

    // Badge button style
    const badgeStyle = {
    background: "#2ecc71",
    padding: "8px 16px",
    borderRadius: "20px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "0.9rem",
    textAlign: "center",
    flex: "1 1 auto",
    minWidth: "80px",
    };
