import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

// Import product images
import AloeGel from "../assets/images/aloe-vera.jpg";
import bamboo from "../assets/images/Bamboo Toothbrush.jpg";
import blue from "../assets/images/Bluetooth Speaker.jpg";
import mug from "../assets/images/Ceramic Mug Set.jpg";
import Charcol from "../assets/images/charcol-face-mask.jpg";
import Coconut from "../assets/images/coconut.jpg";
import cotton from "../assets/images/Cotton Bath Towel.jpg";
import denimJacket from "../assets/images/Denim Jacket.jpg";
import HerbalOil from "../assets/images/herbal-oil.jpg";
import laptop from "../assets/images/Laptop Backpack.jpg";
import belt from "../assets/images/Leather Belt.webp";
import Neem from "../assets/images/Neem Anti-Dandruff Oil.jpg";
import RoseMist from "../assets/images/rose-mist.jpg";
import candle from "../assets/images/Scented Candle Set.jpg";
import smart from "../assets/images/Smart Watch.jpg";
import wireless from "../assets/images/Wireless Earbuds.jpg";

// Product data
const products = [
  // Products with discounts
  {
    id: 1,
    name: "Aloe Vera Gel",
    price: 299,
    originalPrice: 399,
    description: "Hydrates and nourishes skin with pure aloe essence.",
    image: AloeGel,
    category: "Skincare",
    rating: 4.7,
    sold: 1200,
    discount: 25,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 5 * 24 * 60 * 60 * 1000
  },
  {
    id: 2,
    name: "Rose Face Mist",
    price: 199,
    originalPrice: 299,
    description: "Refreshes your skin and gives an instant glow.",
    image: RoseMist,
    category: "Skincare",
    rating: 4.6,
    sold: 850,
    discount: 33,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 2 * 24 * 60 * 60 * 1000
  },
  {
    id: 3,
    name: "Herbal Hair Oil",
    price: 349,
    originalPrice: 499,
    description: "Strengthens roots and promotes healthy hair growth.",
    image: HerbalOil,
    category: "Haircare",
    rating: 4.8,
    sold: 1500,
    discount: 30,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 10 * 24 * 60 * 60 * 1000
  },
  {
    id: 4,
    name: "Charcoal Face Mask",
    price: 399,
    description: "Deep cleanses pores and removes impurities.",
    image: Charcol,
    category: "Skincare",
    rating: 4.5,
    sold: 600,
    discount: 0,
    isBestSeller: false,
    isNew: true,
    dateAdded: Date.now() - 15 * 24 * 60 * 60 * 1000
  },
  {
    id: 5,
    name: "Coconut Shampoo",
    price: 299,
    originalPrice: 399,
    description: "Nourishing shampoo for shiny, strong hair.",
    image: Coconut,
    category: "Haircare",
    rating: 4.9,
    sold: 2000,
    discount: 25,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 3 * 24 * 60 * 60 * 1000
  },
  {
    id: 6,
    name: "Neem Anti-Dandruff Oil",
    price: 299,
    description: "Natural neem formula for dandruff-free scalp.",
    image: Neem,
    category: "Haircare",
    rating: 4.3,
    sold: 450,
    discount: 0,
    isBestSeller: false,
    isNew: true,
    dateAdded: Date.now() - 7 * 24 * 60 * 60 * 1000
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    price: 1999,
    originalPrice: 2999,
    description: "Crystal-clear sound with noise cancellation.",
    image: wireless,
    category: "Electronics",
    rating: 4.8,
    sold: 3000,
    discount: 33,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 1 * 24 * 60 * 60 * 1000
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 2499,
    originalPrice: 3499,
    description: "Track your health and stay connected on the go.",
    image: smart,
    category: "Electronics",
    rating: 4.7,
    sold: 1800,
    discount: 29,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 4 * 24 * 60 * 60 * 1000
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 999,
    originalPrice: 1499,
    description: "Portable speaker with powerful bass.",
    image: blue,
    category: "Electronics",
    rating: 4.6,
    sold: 2200,
    discount: 33,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 8 * 24 * 60 * 60 * 1000
  },
  {
    id: 10,
    name: "Laptop Backpack",
    price: 1299,
    description: "Waterproof and lightweight travel backpack.",
    image: laptop,
    category: "Electronics",
    rating: 4.4,
    sold: 750,
    discount: 0,
    isBestSeller: false,
    isNew: true,
    dateAdded: Date.now() - 12 * 24 * 60 * 60 * 1000
  },
  {
    id: 11,
    name: "Denim Jacket",
    price: 1599,
    originalPrice: 1999,
    description: "Trendy and durable denim jacket.",
    image: denimJacket,
    category: "Fashion",
    rating: 4.7,
    sold: 900,
    discount: 20,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 6 * 24 * 60 * 60 * 1000
  },
  {
    id: 12,
    name: "Leather Belt",
    price: 799,
    originalPrice: 999,
    description: "Premium leather belt for men.",
    image: belt,
    category: "Fashion",
    rating: 4.5,
    sold: 1200,
    discount: 20,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 9 * 24 * 60 * 60 * 1000
  },
  {
    id: 13,
    name: "Scented Candle Set",
    price: 499,
    originalPrice: 699,
    description: "Relaxing aroma for your home and mind.",
    image: candle,
    category: "Home Essentials",
    rating: 4.8,
    sold: 1500,
    discount: 29,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 14 * 24 * 60 * 60 * 1000
  },
  {
    id: 14,
    name: "Bamboo Toothbrush",
    price: 199,
    description: "Eco-friendly toothbrush with soft bristles.",
    image: bamboo,
    category: "Home Essentials",
    rating: 4.2,
    sold: 500,
    discount: 0,
    isBestSeller: false,
    isNew: false,
    dateAdded: Date.now() - 60 * 24 * 60 * 60 * 1000
  },
  {
    id: 15,
    name: "Cotton Bath Towel",
    price: 699,
    originalPrice: 899,
    description: "Super absorbent and soft touch.",
    image: cotton,
    category: "Home Essentials",
    rating: 4.6,
    sold: 800,
    discount: 22,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 11 * 24 * 60 * 60 * 1000
  },
  {
    id: 16,
    name: "Ceramic Mug Set",
    price: 899,
    originalPrice: 1199,
    description: "Elegant mugs for your morning coffee.",
    image: mug,
    category: "Home Essentials",
    rating: 4.7,
    sold: 1100,
    discount: 25,
    isBestSeller: true,
    isNew: true,
    dateAdded: Date.now() - 20 * 24 * 60 * 60 * 1000
  },
];

export default function Deals() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [addingToCart, setAddingToCart] = useState({});
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

    // Get products with discounts
    const dealProducts = products.filter(product => product.discount > 0);

    // Filter by category
    const filteredProducts = selectedCategory === "All" 
        ? dealProducts 
        : dealProducts.filter(product => product.category === selectedCategory);

    // Get unique categories
    const categories = ["All", ...new Set(dealProducts.map(p => p.category))];

    // Calculate total savings
    const totalSavings = dealProducts.reduce((sum, product) => {
        if (product.originalPrice) {
            return sum + (product.originalPrice - product.price);
        }
        return sum;
    }, 0);

    // Countdown timer state
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 12,
        minutes: 30,
        seconds: 45
    });

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
        <div className="deals-container">
            {/* Hero Section */}
            <div className="deals-hero">
                <div className="hero-content">
                    <h1 className="hero-title">💸 Hot Deals</h1>
                    <p className="hero-subtitle">
                        Limited time offers! Don't miss out on these amazing discounts
                    </p>
                    
                    {/* Countdown Timer */}
                    <div className="countdown-timer">
                        <div className="countdown-label">Deals end in:</div>
                        <div className="countdown-display">
                            <div className="time-unit">
                                <span className="time-value">{timeLeft.days}</span>
                                <span className="time-label">Days</span>
                            </div>
                            <div className="time-separator">:</div>
                            <div className="time-unit">
                                <span className="time-value">{timeLeft.hours}</span>
                                <span className="time-label">Hours</span>
                            </div>
                            <div className="time-separator">:</div>
                            <div className="time-unit">
                                <span className="time-value">{timeLeft.minutes}</span>
                                <span className="time-label">Minutes</span>
                            </div>
                            <div className="time-separator">:</div>
                            <div className="time-unit">
                                <span className="time-value">{timeLeft.seconds}</span>
                                <span className="time-label">Seconds</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-number">{dealProducts.length}</div>
                            <div className="stat-label">Discounted Items</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">₹{totalSavings.toFixed(0)}+</div>
                            <div className="stat-label">Total Savings</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">🔥</div>
                            <div className="stat-label">Hot Deals</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                <div className="category-buttons">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="products-grid-section">
                <h2 className="section-title">
                    {selectedCategory === "All" ? "All Hot Deals" : `${selectedCategory} Hot Deals`}
                    <span className="products-count"> ({filteredProducts.length} products)</span>
                </h2>

                {filteredProducts.length === 0 ? (
                    <div className="no-products">
                        <div className="no-products-icon">💸</div>
                        <h3>No deals in this category</h3>
                        <p>Check other categories for amazing discounts!</p>
                    </div>
                ) : (
                    <div className="products-grid">
                        {filteredProducts.map(product => {
                            const isWishlisted = isInWishlist(product.id);
                            const isLoading = addingToCart[product.id];
                            const discountAmount = product.originalPrice ? 
                                product.originalPrice - product.price : 0;
                            const savingsPercentage = product.discount;
                            
                            return (
                                <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                                    <div className="product-card">
                                        {/* Product Badges */}
                                        <div className="product-badges">
                                            <span className="badge discount-badge">-{product.discount}% OFF</span>
                                            {discountAmount > 0 && (
                                                <span className="badge save-badge">Save ₹{discountAmount.toFixed(0)}</span>
                                            )}
                                            {product.isBestSeller && (
                                                <span className="badge bestseller-badge">🔥 Best Seller</span>
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
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/300x200?text=Product+Image";
                                                }}
                                            />
                                            {/* Discount Overlay */}
                                            {/* <div className="discount-overlay">
                                                <span className="discount-percent">-{savingsPercentage}%</span>
                                            </div> */}
                                        </div>

                                        {/* Product Info */}
                                        <div className="product-info">
                                            <span className="product-category">{product.category}</span>
                                            <h3 className="product-name">{product.name}</h3>
                                            <p className="product-description">{product.description.substring(0, 60)}...</p>
                                            
                                            <div className="product-price-section">
                                                <div className="price-container">
                                                    <div className="price-wrapper">
                                                        <span className="product-price">₹{product.price.toFixed(2)}</span>
                                                        {product.originalPrice && (
                                                            <span className="product-original-price">₹{product.originalPrice.toFixed(2)}</span>
                                                        )}
                                                    </div>
                                                    <div className="rating-badge">
                                                        ⭐ {product.rating} • {product.sold} sold
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Progress Bar for Limited Stock */}
                                            <div className="stock-progress">
                                                <div className="progress-label">
                                                    <span>Limited Stock</span>
                                                    <span>{Math.floor(Math.random() * 20) + 10} left</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div 
                                                        className="progress-fill"
                                                        style={{ width: `${Math.floor(Math.random() * 50) + 50}%` }}
                                                    ></div>
                                                </div>
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
                                                        🛒 Add to Cart & Save ₹{discountAmount.toFixed(0)}
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
                .deals-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 1rem 3rem;
                }

                /* Hero Section */
                .deals-hero {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    border-radius: 20px;
                    padding: 3rem 2rem;
                    margin: 1rem 0 2rem;
                    text-align: center;
                    color: white;
                }

                .hero-title {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Countdown Timer */
                .countdown-timer {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 15px;
                    padding: 1rem;
                    margin: 2rem auto;
                    max-width: 600px;
                }

                .countdown-label {
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                    opacity: 0.9;
                }

                .countdown-display {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                }

                .time-unit {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    padding: 0.5rem;
                    min-width: 70px;
                }

                .time-value {
                    font-size: 1.8rem;
                    font-weight: bold;
                    display: block;
                }

                .time-label {
                    font-size: 0.8rem;
                    opacity: 0.8;
                }

                .time-separator {
                    font-size: 1.5rem;
                    font-weight: bold;
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

                /* Category Filter */
                .category-filter {
                    margin-bottom: 2rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    padding: 1.5rem;
                }

                .category-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    justify-content: center;
                }

                .category-btn {
                    padding: 0.5rem 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                }

                .category-btn:hover {
                    border-color: #f5576c;
                    transform: translateY(-2px);
                }

                .category-btn.active {
                    background: #f5576c;
                    border-color: #f5576c;
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
                }

                /* Products Section */
                .products-grid-section {
                    margin-top: 2rem;
                }

                .section-title {
                    font-size: 1.8rem;
                    color: white;
                    margin-bottom: 2rem;
                }

                .products-count {
                    color: #f5576c;
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
                    border-color: #f5576c;
                    box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
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

                .discount-badge {
                    background: #f5576c;
                    color: white;
                    animation: pulse 2s infinite;
                }

                .save-badge {
                    background: #2ecc71;
                    color: white;
                }

                .bestseller-badge {
                    background: #e74c3c;
                    color: white;
                }

                .wishlist-btn {
                    position: absolute;
                    top: 0.0rem;
                    right: 0.2rem;
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
                    transform: scale(1.1);
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
                    position: relative;
                }

                .product-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .product-card:hover .product-image {
                    transform: scale(1.05);
                }

                .discount-overlay {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #f5576c;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-bottom-left-radius: 10px;
                    font-weight: bold;
                    font-size: 1.2rem;
                }

                .product-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .product-category {
                    font-size: 0.8rem;
                    color: #f5576c;
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
                    margin-bottom: 1rem;
                }

                .price-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .price-wrapper {
                    display: flex;
                    flex-direction: column;
                }

                .product-price {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                }

                .product-original-price {
                    font-size: 0.9rem;
                    color: #999;
                    text-decoration: line-through;
                }

                .rating-badge {
                    background: rgba(241, 196, 15, 0.1);
                    color: #f1c40f;
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: bold;
                }

                /* Stock Progress Bar */
                .stock-progress {
                    margin-bottom: 1rem;
                }

                .progress-label {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    color: #aaa;
                    margin-bottom: 0.3rem;
                }

                .progress-bar {
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #f5576c, #f093fb);
                    border-radius: 3px;
                    transition: width 0.5s ease;
                }

                /* Add to Cart Button */
                .add-to-cart-btn {
                    width: 100%;
                    padding: 0.8rem;
                    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
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
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
                }

                .add-to-cart-btn:disabled {
                    opacity: 0.8;
                    cursor: not-allowed;
                }

                .add-to-cart-btn.loading {
                    background: linear-gradient(135deg, #c0392b 0%, #8e44ad 100%);
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

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }

                @media (max-width: 768px) {
                    .deals-hero {
                        padding: 2rem 1rem;
                    }

                    .hero-title {
                        font-size: 2rem;
                    }

                    .hero-stats {
                        gap: 1.5rem;
                    }

                    .countdown-display {
                        flex-wrap: wrap;
                    }

                    .time-unit {
                        min-width: 60px;
                    }

                    .time-value {
                        font-size: 1.5rem;
                    }

                    .products-grid {
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    }
                }
            `}</style>
        </div>
    );
}