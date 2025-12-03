import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function Navbar({ products, setFilteredProducts }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext); // Get wishlist items
    
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const wishlistItemCount = wishlistItems.length; // Wishlist count

    const categories = ["All", "Skincare", "Haircare", "Electronics", "Fashion", "Home Essentials"];
    const menuItems = [
        { name: "Best Sellers", path: "/best-sellers" },
        { name: "New Arrivals", path: "/new-arrivals" },
        { name: "Deals", path: "/deals" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];
    const profileItems = [
        { name: "My Profile", path: "/profile" },
        { name: "Orders", path: "/orders" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Settings", path: "/settings" },
        { name: "Sign Out", path: "#" }
    ];

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Window resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".profile-container")) setProfileOpen(false);
            if (!e.target.closest(".nav-menu") && !e.target.closest(".hamburger-btn")) setMenuOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // Filter products by search & category (only for Home page)
    useEffect(() => {
        if (window.location.pathname === "/") {
            let filtered = [...products];
            if (activeCategory !== "All")
                filtered = filtered.filter((p) => p.category === activeCategory);
            if (searchTerm.trim() !== "")
                filtered = filtered.filter(
                    (p) =>
                        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
            setFilteredProducts(filtered);
        }
    }, [searchTerm, activeCategory, products, setFilteredProducts]);

    const handleSearchClear = () => {
        setSearchTerm("");
        if (window.location.pathname === "/") {
            setFilteredProducts(products);
        }
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        if (window.location.pathname !== "/") {
            window.location.href = "/"; // Redirect to home if not already there
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            {/* Top Navbar */}
            <div className="navbar-top">
                {/* Brand */}
                <div className="navbar-brand">
                    <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div className="brand-logo">🍃</div>
                        <h2 className="brand-name">Pureza</h2>
                    </Link>
                </div>

                {/* Desktop Menu */}
                {windowWidth > 1024 && (
                    <div className="desktop-menu">
                        {menuItems.map((item) => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className="menu-item"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Right Actions */}
                <div className="navbar-actions">
                    {/* Search */}
                    {windowWidth > 768 && (
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            {searchTerm && (
                                <button 
                                    className="clear-search" 
                                    onClick={handleSearchClear}
                                    aria-label="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    )}

                    {/* Cart & Wishlist */}
                    <div className="action-icons">
                        {/* Wishlist with Badge */}
                        <Link to="/wishlist" className="action-btn wishlist-btn" style={{ position: "relative", textDecoration: "none" }}>
                            ❤️
                            {wishlistItemCount > 0 && (
                                <span className="wishlist-badge">{wishlistItemCount}</span>
                            )}
                        </Link>
                        
                        {/* Cart with Badge */}
                        <Link to="/cart" className="action-btn cart-btn" style={{ position: "relative", textDecoration: "none" }}>
                            🛒
                            {cartItemCount > 0 && (
                                <span className="cart-badge">{cartItemCount}</span>
                            )}
                        </Link>

                        {/* Profile */}
                        <div className="profile-container">
                            <button className="profile-btn" onClick={() => setProfileOpen(!profileOpen)}>
                                👤
                            </button>
                            {profileOpen && (
                                <div className="profile-dropdown">
                                    {profileItems.map((item) => (
                                        <Link 
                                            key={item.name} 
                                            to={item.path} 
                                            className="dropdown-item"
                                            onClick={() => setProfileOpen(false)}
                                            style={{ textDecoration: "none", display: "block" }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Hamburger (Mobile) */}
                    {windowWidth <= 1024 && (
                        <div className="hamburger-btn" onClick={(e) => { 
                            e.stopPropagation(); 
                            setMenuOpen(!menuOpen); 
                            setProfileOpen(false);
                        }}>
                            <div className={`line ${menuOpen ? "line1" : ""}`} />
                            <div className={`line ${menuOpen ? "line2" : ""}`} />
                            <div className={`line ${menuOpen ? "line3" : ""}`} />
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {windowWidth <= 1024 && menuOpen && (
                <div className="nav-menu">
                    <div className="mobile-search">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button 
                                className="clear-search mobile-clear" 
                                onClick={handleSearchClear}
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    <div className="mobile-menu-items">
                        {menuItems.map((item) => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className="mobile-menu-item"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Mobile Wishlist Link */}
                        <Link 
                            to="/wishlist" 
                            className="mobile-menu-item"
                            onClick={() => setMenuOpen(false)}
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            ❤️ Wishlist {wishlistItemCount > 0 && `(${wishlistItemCount})`}
                        </Link>
                        {/* Mobile Cart Link */}
                        <Link 
                            to="/cart" 
                            className="mobile-menu-item"
                            onClick={() => setMenuOpen(false)}
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            🛒 Cart {cartItemCount > 0 && `(${cartItemCount})`}
                        </Link>
                        {/* Mobile Profile Links */}
                        {profileItems.map((item) => (
                            item.name !== "Sign Out" ? (
                                <Link 
                                    key={item.name} 
                                    to={item.path} 
                                    className="mobile-menu-item"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a 
                                    key={item.name} 
                                    href="#" 
                                    className="mobile-menu-item"
                                    onClick={() => {
                                        setMenuOpen(false);
                                        // Add sign out logic here
                                    }}
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>
                    <div className="category-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Category Bar (Desktop) */}
            {windowWidth > 1024 && (
                <div className="category-bar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            <style jsx>{`
                .navbar {
                    width: 100%;
                    position: sticky;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    background: #0a1f44;
                    color: white;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }

                .navbar.scrolled {
                    background: #081a39;
                    box-shadow: 0 4px 20px rgba(46, 204, 113, 0.2);
                }

                .navbar-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 2rem;
                    gap: 2rem;
                }

                .navbar-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-shrink: 0;
                }

                .brand-logo {
                    width: 45px;
                    height: 45px;
                    background: #2ecc71;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.4rem;
                    font-weight: bold;
                }

                .brand-name {
                    color: #2ecc71;
                    margin: 0;
                    font-size: 1.5rem;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .desktop-menu {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    flex: 1;
                    justify-content: center;
                }

                .menu-item {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;
                }

                .menu-item:hover {
                    background: rgba(46, 204, 113, 0.1);
                    color: #2ecc71;
                    transform: translateY(-1px);
                }

                .navbar-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-shrink: 0;
                }

                .search-container {
                    position: relative;
                    width: 280px;
                }

                .search-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    padding-right: 2.5rem;
                    border: none;
                    border-radius: 25px;
                    background: rgba(255, 255, 255, 0.95);
                    font-size: 0.9rem;
                    outline: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }

                .search-input:focus {
                    box-shadow: 0 0 0 2px #2ecc71;
                    background: white;
                }

                .clear-search {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #999;
                    font-size: 1rem;
                    cursor: pointer;
                    padding: 0.25rem;
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }

                .clear-search:hover {
                    background: rgba(0, 0, 0, 0.1);
                    color: #333;
                }

                .action-icons {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .action-btn, .profile-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.3rem;
                    padding: 0.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    position: relative;
                }

                .action-btn:hover, .profile-btn:hover {
                    background: rgba(46, 204, 113, 0.1);
                    transform: scale(1.1);
                }

                .cart-badge, .wishlist-badge {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #e74c3c;
                    color: white;
                    border-radius: 50%;
                    width: 18px;
                    height: 18px;
                    font-size: 0.7rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    transform: translate(25%, -25%);
                }

                .wishlist-badge {
                    background: #e74c3c;
                }

                .cart-badge {
                    background: #e74c3c;
                }

                .profile-container {
                    position: relative;
                }

                .profile-dropdown {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
                    padding: 0.5rem 0;
                    min-width: 200px;
                    margin-top: 0.5rem;
                    z-index: 1001;
                    border: 1px solid #e1e5e9;
                }

                .dropdown-item {
                    width: 100%;
                    background: none;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    text-align: left;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    display: block;
                }

                .dropdown-item:hover {
                    background: #f8f9fa;
                    color: #2ecc71;
                }

                .hamburger-btn {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 6px;
                    transition: background 0.3s ease;
                }

                .hamburger-btn:hover {
                    background: rgba(46, 204, 113, 0.1);
                }

                .line {
                    width: 25px;
                    height: 3px;
                    background: #2ecc71;
                    transition: all 0.3s ease;
                    border-radius: 2px;
                }

                .line1 {
                    transform: rotate(-45deg) translate(-5px, 6px);
                }

                .line2 {
                    opacity: 0;
                }

                .line3 {
                    transform: rotate(45deg) translate(-5px, -6px);
                }

                .nav-menu {
                    background: #081a39;
                    padding: 1.5rem 2rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    animation: slideDown 0.3s ease;
                }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .mobile-search {
                    position: relative;
                    margin-bottom: 1.5rem;
                }

                .mobile-search .search-input {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.95);
                    padding-right: 2.5rem;
                }

                .mobile-clear {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #999;
                    font-size: 1rem;
                    cursor: pointer;
                    padding: 0.25rem;
                }

                .mobile-menu-items {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .mobile-menu-item {
                    color: white;
                    text-decoration: none;
                    padding: 1rem;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    border: 1px solid rgba(255,255,255,0.1);
                    text-align: left;
                }

                .mobile-menu-item:hover {
                    background: rgba(46, 204, 113, 0.1);
                    color: #2ecc71;
                    border-color: #2ecc71;
                }

                .category-filters {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .category-btn {
                    padding: 0.6rem 1.2rem;
                    border: none;
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .category-btn:hover {
                    background: rgba(46, 204, 113, 0.2);
                    transform: translateY(-1px);
                }

                .category-btn.active {
                    background: #2ecc71;
                    color: white;
                    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
                }

                .category-bar {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    padding: 1rem 2rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                /* Tablet Styles */
                @media (max-width: 1024px) {
                    .navbar-top {
                        padding: 1rem 1.5rem;
                    }

                    .brand-logo {
                        width: 40px;
                        height: 40px;
                        font-size: 1.2rem;
                    }

                    .brand-name {
                        font-size: 1.3rem;
                    }

                    .search-container {
                        width: 240px;
                    }
                }

                /* Mobile Styles */
                @media (max-width: 768px) {
                    .navbar-top {
                        padding: 0.8rem 1rem;
                        gap: 1rem;
                    }

                    .brand-logo {
                        width: 35px;
                        height: 35px;
                        font-size: 1.1rem;
                    }

                    .brand-name {
                        font-size: 1.2rem;
                    }

                    .nav-menu {
                        padding: 1rem;
                    }

                    .category-filters {
                        justify-content: center;
                    }

                    .category-btn {
                        padding: 0.5rem 1rem;
                        font-size: 0.8rem;
                    }

                    .action-btn, .profile-btn {
                        font-size: 1.2rem;
                        padding: 0.4rem;
                    }
                }

                /* Small Mobile */
                @media (max-width: 480px) {
                    .navbar-top {
                        padding: 0.6rem 0.8rem;
                    }

                    .brand-name {
                        font-size: 1.1rem;
                    }

                    .action-icons {
                        gap: 0.25rem;
                    }

                    .category-bar {
                        padding: 0.8rem 1rem;
                        gap: 0.5rem;
                    }

                    .category-btn {
                        padding: 0.4rem 0.8rem;
                        font-size: 0.75rem;
                    }
                }

                /* Large Desktop */
                @media (min-width: 1440px) {
                    .navbar-top {
                        padding: 1.2rem 3rem;
                    }

                    .desktop-menu {
                        gap: 2.5rem;
                    }

                    .menu-item {
                        font-size: 1rem;
                        padding: 0.6rem 1.2rem;
                    }

                    .search-container {
                        width: 320px;
                    }

                    .category-bar {
                        padding: 1.2rem 3rem;
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </nav>
    );
}