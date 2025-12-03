import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";

export default function BestSellers() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("popularity");
    const [addingToCart, setAddingToCart] = useState({});
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

    // Get best sellers (products with rating >= 4.5)
    const bestSellersProducts = products.filter(product => 
        product.rating >= 4.5 || product.isBestSeller === true
    );

    // Filter by category
    const filteredProducts = selectedCategory === "All" 
        ? bestSellersProducts 
        : bestSellersProducts.filter(product => product.category === selectedCategory);

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch(sortBy) {
        case "price-low":
            return a.price - b.price;
        case "price-high":
            return b.price - a.price;
        case "rating":
            return b.rating - a.rating;
        case "popularity":
        default:
            return (b.sold || 0) - (a.sold || 0);
        }
    });

    // Get unique categories from best sellers
    const categories = ["All", ...new Set(bestSellersProducts.map(p => p.category))];

    // Stats
    const totalProducts = bestSellersProducts.length;
    const averageRating = (bestSellersProducts.reduce((sum, p) => sum + p.rating, 0) / totalProducts).toFixed(1);

    const handleAddToCart = async (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setAddingToCart(prev => ({ ...prev, [product.id]: true }));
        await new Promise(resolve => setTimeout(resolve, 1500));
        addToCart(product);
        setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    };

    const handleWishlistToggle = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
        } else {
        addToWishlist(product);
        }
    };

    return (
        <div className="best-sellers-container">
        {/* Hero Section */}
        <div className="best-sellers-hero">
            <div className="hero-content">
            <h1 className="hero-title">🔥 Best Sellers</h1>
            <p className="hero-subtitle">
                Discover our most loved products by thousands of happy customers
            </p>
            <div className="hero-stats">
                <div className="stat">
                <div className="stat-number">{totalProducts}</div>
                <div className="stat-label">Premium Products</div>
                </div>
                <div className="stat">
                <div className="stat-number">{averageRating} ⭐</div>
                <div className="stat-label">Average Rating</div>
                </div>
                <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
                </div>
            </div>
            </div>
        </div>

        {/* Filters and Controls */}
        <div className="filters-section">
            <div className="filters-container">
            {/* Category Filter */}
            <div className="filter-group">
                <label className="filter-label">Category</label>
                <div className="category-filters">
                {categories.map(category => (
                    <button
                    key={category}
                    className={`category-filter-btn ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                    >
                    {category}
                    </button>
                ))}
                </div>
            </div>

            {/* Sort Filter */}
            <div className="filter-group">
                <label className="filter-label">Sort by</label>
                <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                </select>
            </div>
            </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid-section">
            <div className="products-header">
            <h2 className="products-title">
                {selectedCategory === "All" ? "All Best Sellers" : `${selectedCategory} Best Sellers`}
                <span className="products-count"> ({sortedProducts.length} products)</span>
            </h2>
            </div>

            {sortedProducts.length === 0 ? (
            <div className="no-products">
                <div className="no-products-icon">📦</div>
                <h3>No products found in this category</h3>
                <p>Try selecting a different category</p>
            </div>
            ) : (
            <div className="products-grid">
                {sortedProducts.map(product => {
                const isWishlisted = isInWishlist(product.id);
                const isLoading = addingToCart[product.id];
                
                return (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                    <div className="product-card">
                        {/* Product Badges */}
                        <div className="product-badges">
                        {product.isBestSeller && (
                            <span className="badge bestseller-badge">🔥 Best Seller</span>
                        )}
                        {product.rating >= 4.5 && (
                            <span className="badge rating-badge">⭐ {product.rating}</span>
                        )}
                        {product.discount > 0 && (
                            <span className="badge discount-badge">-{product.discount}%</span>
                        )}
                        </div>

                        {/* Wishlist Button */}
                        <button 
                        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
                        onClick={(e) => handleWishlistToggle(product, e)}
                        >
                        {isWishlisted ? "❤️" : "🤍"}
                        </button>

                        {/* Product Image */}
                        <div className="product-image-container">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                        />
                        </div>

                        {/* Product Info */}
                        <div className="product-info">
                        <span className="product-category">{product.category}</span>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description.substring(0, 60)}...</p>
                        
                        <div className="product-price-section">
                            <div className="price-container">
                            <span className="product-price">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
                            )}
                            </div>
                            <span className="product-sold">{product.sold || 0} sold</span>
                        </div>

                        {/* Add to Cart Button */}
                        <button 
                            className={`add-to-cart-btn ${isLoading ? "loading" : ""}`}
                            onClick={(e) => handleAddToCart(product, e)}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                            <>
                                <span className="cart-loading-spinner"></span>
                                Adding...
                            </>
                            ) : (
                            <>
                                🛒 Add to Cart
                            </>
                            )}
                        </button>
                        </div>
                    </div>
                    </Link>
                );
                })}
            </div>
            )}
        </div>

        <style jsx>{`
            .best-sellers-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 1rem 3rem;
            }

            /* Hero Section */
            .best-sellers-hero {
            background: linear-gradient(135deg, #0a1f44 0%, #2ecc71 100%);
            border-radius: 20px;
            padding: 3rem 2rem;
            margin: 1rem 0 2rem;
            text-align: center;
            color: white;
            }

            .hero-title {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #ffffff, #2ecc71);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            }

            .hero-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            }

            .hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
            }

            .stat {
            text-align: center;
            }

            .stat-number {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            }

            .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
            }

            /* Filters Section */
            .filters-section {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 1.5rem;
            margin-bottom: 2rem;
            }

            .filters-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            }

            .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            }

            .filter-label {
            font-size: 0.9rem;
            color: #2ecc71;
            font-weight: 500;
            }

            .category-filters {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            }

            .category-filter-btn {
            padding: 0.5rem 1.2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            }

            .category-filter-btn:hover {
            border-color: #2ecc71;
            }

            .category-filter-btn.active {
            background: #2ecc71;
            color: white;
            border-color: #2ecc71;
            }

            .sort-select {
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
            font-size: 0.9rem;
            min-width: 200px;
            cursor: pointer;
            }

            /* Products Section */
            .products-grid-section {
            margin-top: 2rem;
            }

            .products-header {
            margin-bottom: 2rem;
            }

            .products-title {
            font-size: 1.8rem;
            color: white;
            margin-bottom: 0.5rem;
            }

            .products-count {
            color: #2ecc71;
            font-size: 1rem;
            }

            .no-products {
            text-align: center;
            padding: 4rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            border: 1px dashed rgba(255, 255, 255, 0.1);
            }

            .no-products-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            }

            .no-products h3 {
            color: white;
            margin-bottom: 0.5rem;
            }

            .no-products p {
            color: #aaa;
            }

            .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
            }

            .product-card-link {
            text-decoration: none;
            color: inherit;
            }

            .product-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 1.2rem;
            position: relative;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            flex-direction: column;
            }

            .product-card:hover {
            transform: translateY(-5px);
            border-color: #2ecc71;
            }

            .product-badges {
            position: absolute;
            top: 1rem;
            left: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            z-index: 1;
            }

            .badge {
            padding: 0.3rem 0.7rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: bold;
            }

            .bestseller-badge {
            background: #e74c3c;
            color: white;
            }

            .rating-badge {
            background: #f1c40f;
            color: #000;
            }

            .discount-badge {
            background: #2ecc71;
            color: white;
            }

            .wishlist-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.2rem;
            z-index: 1;
            transition: all 0.3s ease;
            }

            .wishlist-btn:hover {
            background: rgba(231, 76, 60, 0.2);
            border-color: #e74c3c;
            }

            .wishlist-btn.active {
            background: #e74c3c;
            border-color: #e74c3c;
            color: white;
            }

            .product-image-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 10px;
            margin-bottom: 1rem;
            }

            .product-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            }

            .product-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            }

            .product-category {
            font-size: 0.8rem;
            color: #2ecc71;
            margin-bottom: 0.5rem;
            }

            .product-name {
            font-size: 1.1rem;
            color: white;
            margin-bottom: 0.5rem;
            }

            .product-description {
            color: #aaa;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            flex: 1;
            }

            .product-price-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            }

            .price-container {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            }

            .product-price {
            font-size: 1.3rem;
            font-weight: bold;
            color: white;
            }

            .product-original-price {
            font-size: 0.9rem;
            color: #999;
            text-decoration: line-through;
            }

            .product-sold {
            font-size: 0.8rem;
            color: #aaa;
            }

            /* Add to Cart Button */
            .add-to-cart-btn {
            width: 100%;
            padding: 0.8rem;
            background: #2ecc71;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            }

            .add-to-cart-btn:hover:not(:disabled) {
            background: #27ae60;
            }

            .add-to-cart-btn:disabled {
            opacity: 0.8;
            cursor: not-allowed;
            }

            .add-to-cart-btn.loading {
            background: #219653;
            }

            .cart-loading-spinner {
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: cart-spin 1s linear infinite;
            }

            @keyframes cart-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
            }

            @media (max-width: 768px) {
            .best-sellers-hero {
                padding: 2rem 1rem;
            }

            .hero-title {
                font-size: 2rem;
            }

            .hero-stats {
                gap: 1.5rem;
            }

            .filters-container {
                flex-direction: column;
                align-items: stretch;
            }

            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
            }
        `}</style>
        </div>
    );
}