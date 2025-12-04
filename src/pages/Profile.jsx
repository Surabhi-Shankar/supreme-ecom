import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const styles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: "100px 20px 60px",
        color: "#fff",
    },
    wrapper: {
        maxWidth: "1200px",
        margin: "0 auto",
    },
    header: {
        textAlign: "center",
        marginBottom: "40px",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    subtitle: {
        color: "#94a3b8",
        fontSize: "1.1rem",
    },
    profileCard: {
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        borderRadius: "20px",
        padding: "30px",
        marginBottom: "30px",
        border: "1px solid #475569",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    },
    profileContent: {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
    },
    avatarSection: {
        position: "relative",
        flexShrink: 0,
    },
    avatarWrapper: {
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid #8b5cf6",
        boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)",
    },
    avatarImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    avatarEditBtn: {
        position: "absolute",
        bottom: "0",
        right: "0",
        background: "#8b5cf6",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        cursor: "pointer",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
    },
    userInfo: {
        flex: 1,
    },
    userHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "30px",
        flexWrap: "wrap",
        gap: "20px",
    },
    userName: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    userEmail: {
        color: "#94a3b8",
        marginBottom: "5px",
    },
    editProfileBtn: {
        background: "#8b5cf6",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "10px 24px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flexShrink: 0,
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "20px",
        marginBottom: "30px",
    },
    statCard: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #475569",
        borderRadius: "15px",
        padding: "20px",
    },
    statNumber: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    statLabel: {
        color: "#94a3b8",
        marginBottom: "10px",
    },
    statLink: {
        color: "#8b5cf6",
        fontSize: "0.9rem",
        textDecoration: "none",
        display: "inline-block",
        marginTop: "5px",
    },
    editForm: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #475569",
        borderRadius: "15px",
        padding: "24px",
    },
    editFormTitle: {
        fontSize: "1.3rem",
        fontWeight: "600",
        marginBottom: "20px",
    },
    editFormGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "20px",
        marginBottom: "20px",
    },
    formGroup: {
        marginBottom: "15px",
    },
    formLabel: {
        display: "block",
        color: "#94a3b8",
        marginBottom: "8px",
        fontSize: "0.9rem",
    },
    formInput: {
        width: "100%",
        background: "#1e293b",
        border: "1px solid #475569",
        borderRadius: "8px",
        padding: "12px 16px",
        color: "white",
        fontSize: "1rem",
        boxSizing: "border-box",
    },
    formButtons: {
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
    },
    saveBtn: {
        background: "#10b981",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontWeight: "500",
        cursor: "pointer",
        fontSize: "1rem",
    },
    cancelBtn: {
        background: "#475569",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontWeight: "500",
        cursor: "pointer",
        fontSize: "1rem",
    },
    tabsContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "30px",
    },
    tabBtn: {
        background: "#1e293b",
        color: "#cbd5e1",
        border: "1px solid #475569",
        borderRadius: "10px",
        padding: "12px 24px",
        fontWeight: "500",
        cursor: "pointer",
        fontSize: "0.95rem",
        flex: 1,
        minWidth: "140px",
        textAlign: "center",
    },
    activeTabBtn: {
        background: "#8b5cf6",
        color: "white",
        borderColor: "#8b5cf6",
        boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
    },
    tabContent: {
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        borderRadius: "20px",
        padding: "30px",
        border: "1px solid #475569",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    },
    tabTitle: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        marginBottom: "25px",
        color: "white",
    },
    overviewGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "30px",
    },
    sectionTitle: {
        fontSize: "1.3rem",
        fontWeight: "600",
        marginBottom: "20px",
        color: "white",
    },
    ordersList: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginBottom: "15px",
    },
    orderCard: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #475569",
        borderRadius: "12px",
        padding: "15px",
    },
    orderHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
        flexWrap: "wrap",
        gap: "10px",
    },
    orderId: {
        fontWeight: "600",
        color: "white",
    },
    orderStatus: {
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: "500",
        whiteSpace: "nowrap",
    },
    greenStatus: {
        background: "#10b981",
        color: "white",
    },
    blueStatus: {
        background: "#3b82f6",
        color: "white",
    },
    yellowStatus: {
        background: "#f59e0b",
        color: "white",
    },
    orderDetails: {
        color: "#94a3b8",
        fontSize: "0.9rem",
    },
    viewAllLink: {
        color: "#8b5cf6",
        textDecoration: "none",
        fontSize: "0.95rem",
        display: "inline-block",
        marginTop: "10px",
    },
    detailsList: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    detailCard: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #475569",
        borderRadius: "12px",
        padding: "15px",
    },
    detailLabel: {
        color: "#94a3b8",
        fontSize: "0.9rem",
        marginBottom: "5px",
    },
    detailValue: {
        fontWeight: "500",
        color: "white",
        wordBreak: "break-word",
    },
    ordersTableContainer: {
        overflowX: "auto",
        borderRadius: "10px",
        border: "1px solid #475569",
    },
    ordersTable: {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "600px",
    },
    tableHeader: {
        textAlign: "left",
        padding: "15px",
        color: "#94a3b8",
        fontWeight: "500",
        borderBottom: "1px solid #475569",
        background: "rgba(255, 255, 255, 0.03)",
    },
    tableCell: {
        padding: "15px",
        borderBottom: "1px solid #475569",
        color: "#e2e8f0",
    },
    orderRow: {
        "&:hover": {
            background: "rgba(255, 255, 255, 0.03)",
        },
    },
    actionButtons: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
    },
    actionBtn: {
        padding: "6px 12px",
        borderRadius: "6px",
        fontSize: "0.85rem",
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
    },
    viewBtn: {
        background: "#3b82f6",
        color: "white",
    },
    cancelOrderBtn: {
        background: "#ef4444",
        color: "white",
    },
    trackBtn: {
        background: "#8b5cf6",
        color: "white",
    },
    emptyWishlist: {
        textAlign: "center",
        padding: "60px 20px",
        background: "rgba(255, 255, 255, 0.03)",
        borderRadius: "15px",
        border: "1px dashed #475569",
    },
    emptyIcon: {
        fontSize: "4rem",
        marginBottom: "20px",
        display: "block",
    },
    emptyTitle: {
        fontSize: "1.5rem",
        fontWeight: "600",
        marginBottom: "10px",
        color: "white",
    },
    emptyMessage: {
        color: "#94a3b8",
        marginBottom: "25px",
        fontSize: "1rem",
    },
    shopBtn: {
        background: "#8b5cf6",
        color: "white",
        textDecoration: "none",
        padding: "12px 24px",
        borderRadius: "10px",
        fontWeight: "500",
        display: "inline-block",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
    },
    wishlistGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "20px",
    },
    wishlistCard: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #475569",
        borderRadius: "15px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
    },
    wishlistImage: {
        width: "100%",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "15px",
        flexShrink: 0,
    },
    productName: {
        fontSize: "1.1rem",
        fontWeight: "500",
        marginBottom: "15px",
        color: "white",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        flex: 1,
    },
    productFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "auto",
    },
    productPrice: {
        fontSize: "1.3rem",
        fontWeight: "600",
        color: "white",
    },
    addToCartBtn: {
        background: "#8b5cf6",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "8px 16px",
        fontSize: "0.9rem",
        fontWeight: "500",
        cursor: "pointer",
        whiteSpace: "nowrap",
    },
    settingsGrid: {
        display: "flex",
        flexDirection: "column",
        gap: "25px",
    },
    settingSection: {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid #475569",
        borderRadius: "15px",
        padding: "20px",
    },
    notificationSettings: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    checkboxLabel: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#e2e8f0",
        fontSize: "1rem",
    },
    securityButtons: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    dangerButtons: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    securityBtn: {
        padding: "12px 24px",
        borderRadius: "8px",
        fontWeight: "500",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        flex: 1,
        textAlign: "center",
    },
    changePassword: {
        background: "#3b82f6",
        color: "white",
    },
    twoFactor: {
        background: "#475569",
        color: "white",
    },
    deleteAccount: {
        background: "#ef4444",
        color: "white",
    },
    exportData: {
        background: "#f59e0b",
        color: "white",
    },
};

export default function Profile() {
    const { cartItems = [] } = useContext(CartContext) || {};
    const { wishlist = [] } = useContext(WishlistContext) || {};
    
    const [activeTab, setActiveTab] = useState("overview");
    const [isEditing, setIsEditing] = useState(false);
    
    // User data with fallback values
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+91 9876543210",
        address: "123 Main Street, Mumbai, Maharashtra 400001",
        joinDate: "January 15, 2023",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    });
    
    // Order history with fallback
    const [orders, setOrders] = useState([
        {
            id: "ORD-001",
            date: "2024-01-15",
            items: 3,
            total: 4597,
            status: "Delivered",
            statusColor: "green"
        },
        {
            id: "ORD-002",
            date: "2024-01-10",
            items: 2,
            total: 1998,
            status: "Processing",
            statusColor: "blue"
        },
        {
            id: "ORD-003",
            date: "2024-01-05",
            items: 1,
            total: 1299,
            status: "Shipped",
            statusColor: "yellow"
        },
        {
            id: "ORD-004",
            date: "2024-01-01",
            items: 5,
            total: 7495,
            status: "Delivered",
            statusColor: "green"
        }
    ]);
    
    // Safe calculations with fallbacks
    const wishlistCount = Array.isArray(wishlist) ? wishlist.length : 0;
    const cartCount = Array.isArray(cartItems) ? 
        cartItems.reduce((total, item) => total + (item.quantity || 0), 0) : 0;
    
    const handleSaveProfile = () => {
        setIsEditing(false);
        console.log("Profile saved:", userData);
    };
    
    const handleCancelOrder = (orderId) => {
        setOrders(orders.filter(order => order.id !== orderId));
    };

    // Sample wishlist items for display
    const sampleWishlist = [
        {
            id: 1,
            name: "Wireless Earbuds",
            price: 1999,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 2499,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Aloe Vera Gel",
            price: 299,
            image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=300&h=300&fit=crop"
        }
    ];

    // Use actual wishlist if available, otherwise use sample
    const displayWishlist = wishlist.length > 0 ? wishlist : sampleWishlist;

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                {/* Header */}
                <div style={styles.header}>
                    <h1 style={styles.title}>👤 My Profile</h1>
                    <p style={styles.subtitle}>Manage your account, orders, and preferences</p>
                </div>
                
                {/* Profile Overview Card */}
                <div style={styles.profileCard}>
                    <div style={{...styles.profileContent, '@media (min-width: 768px)': {flexDirection: 'row', alignItems: 'flex-start'}}}>
                        {/* Avatar Section */}
                        <div style={styles.avatarSection}>
                            <div style={styles.avatarWrapper}>
                                <img 
                                    src={userData.avatar} 
                                    alt="Profile" 
                                    style={styles.avatarImage}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/150?text=User";
                                    }}
                                />
                            </div>
                            <button 
                                style={styles.avatarEditBtn}
                                onClick={() => alert("Upload photo feature coming soon!")}
                                onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                            >
                                📷
                            </button>
                        </div>
                        
                        {/* User Info */}
                        <div style={styles.userInfo}>
                            <div style={styles.userHeader}>
                                <div>
                                    <h2 style={styles.userName}>{userData.name}</h2>
                                    <p style={styles.userEmail}>{userData.email}</p>
                                    <p style={styles.userEmail}>Member since {userData.joinDate}</p>
                                </div>
                                <button 
                                    onClick={() => setIsEditing(!isEditing)}
                                    style={styles.editProfileBtn}
                                    onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                                    onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
                                >
                                    {isEditing ? "Cancel" : "Edit Profile"}
                                </button>
                            </div>
                            
                            {/* Stats */}
                            <div style={{...styles.statsGrid, '@media (min-width: 768px)': {gridTemplateColumns: 'repeat(3, 1fr)'}}}>
                                <div style={styles.statCard}>
                                    <div style={styles.statNumber}>{cartCount}</div>
                                    <div style={styles.statLabel}>Items in Cart</div>
                                    <Link to="/cart" style={styles.statLink}>
                                        View Cart →
                                    </Link>
                                </div>
                                <div style={styles.statCard}>
                                    <div style={styles.statNumber}>{wishlistCount}</div>
                                    <div style={styles.statLabel}>Wishlist Items</div>
                                    <Link to="/wishlist" style={styles.statLink}>
                                        View Wishlist →
                                    </Link>
                                </div>
                                <div style={styles.statCard}>
                                    <div style={styles.statNumber}>{orders.length}</div>
                                    <div style={styles.statLabel}>Total Orders</div>
                                    <div style={styles.statLink}>
                                        ₹{orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()} spent
                                    </div>
                                </div>
                            </div>
                            
                            {/* Edit Form */}
                            {isEditing && (
                                <div style={styles.editForm}>
                                    <h3 style={styles.editFormTitle}>Edit Profile</h3>
                                    <div style={{...styles.editFormGrid, '@media (min-width: 768px)': {gridTemplateColumns: 'repeat(2, 1fr)'}}}>
                                        <div style={styles.formGroup}>
                                            <label style={styles.formLabel}>Full Name</label>
                                            <input
                                                type="text"
                                                value={userData.name}
                                                onChange={(e) => setUserData({...userData, name: e.target.value})}
                                                style={styles.formInput}
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div style={styles.formGroup}>
                                            <label style={styles.formLabel}>Email</label>
                                            <input
                                                type="email"
                                                value={userData.email}
                                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                                style={styles.formInput}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div style={styles.formGroup}>
                                            <label style={styles.formLabel}>Phone</label>
                                            <input
                                                type="tel"
                                                value={userData.phone}
                                                onChange={(e) => setUserData({...userData, phone: e.target.value})}
                                                style={styles.formInput}
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div style={styles.formGroup}>
                                            <label style={styles.formLabel}>Address</label>
                                            <input
                                                type="text"
                                                value={userData.address}
                                                onChange={(e) => setUserData({...userData, address: e.target.value})}
                                                style={styles.formInput}
                                                placeholder="Enter your address"
                                            />
                                        </div>
                                    </div>
                                    <div style={styles.formButtons}>
                                        <button
                                            onClick={handleSaveProfile}
                                            style={styles.saveBtn}
                                            onMouseOver={(e) => e.target.style.background = "#059669"}
                                            onMouseOut={(e) => e.target.style.background = "#10b981"}
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            style={styles.cancelBtn}
                                            onMouseOver={(e) => e.target.style.background = "#64748b"}
                                            onMouseOut={(e) => e.target.style.background = "#475569"}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Tabs */}
                <div style={styles.tabsContainer}>
                    <button
                        onClick={() => setActiveTab("overview")}
                        style={{
                            ...styles.tabBtn,
                            ...(activeTab === "overview" ? styles.activeTabBtn : {})
                        }}
                        onMouseOver={(e) => {
                            if (activeTab !== "overview") {
                                e.target.style.background = "#334155";
                            }
                        }}
                        onMouseOut={(e) => {
                            if (activeTab !== "overview") {
                                e.target.style.background = "#1e293b";
                            }
                        }}
                    >
                        📊 Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("orders")}
                        style={{
                            ...styles.tabBtn,
                            ...(activeTab === "orders" ? styles.activeTabBtn : {})
                        }}
                        onMouseOver={(e) => {
                            if (activeTab !== "orders") {
                                e.target.style.background = "#334155";
                            }
                        }}
                        onMouseOut={(e) => {
                            if (activeTab !== "orders") {
                                e.target.style.background = "#1e293b";
                            }
                        }}
                    >
                        🛒 Orders
                    </button>
                    <button
                        onClick={() => setActiveTab("wishlist")}
                        style={{
                            ...styles.tabBtn,
                            ...(activeTab === "wishlist" ? styles.activeTabBtn : {})
                        }}
                        onMouseOver={(e) => {
                            if (activeTab !== "wishlist") {
                                e.target.style.background = "#334155";
                            }
                        }}
                        onMouseOut={(e) => {
                            if (activeTab !== "wishlist") {
                                e.target.style.background = "#1e293b";
                            }
                        }}
                    >
                        ❤️ Wishlist
                    </button>
                    <button
                        onClick={() => setActiveTab("settings")}
                        style={{
                            ...styles.tabBtn,
                            ...(activeTab === "settings" ? styles.activeTabBtn : {})
                        }}
                        onMouseOver={(e) => {
                            if (activeTab !== "settings") {
                                e.target.style.background = "#334155";
                            }
                        }}
                        onMouseOut={(e) => {
                            if (activeTab !== "settings") {
                                e.target.style.background = "#1e293b";
                            }
                        }}
                    >
                        ⚙️ Settings
                    </button>
                </div>
                
                {/* Tab Content */}
                <div style={styles.tabContent}>
                    
                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                        <div>
                            <h2 style={styles.tabTitle}>Account Overview</h2>
                            <div style={{...styles.overviewGrid, '@media (min-width: 768px)': {gridTemplateColumns: 'repeat(2, 1fr)'}}}>
                                <div>
                                    <h3 style={styles.sectionTitle}>Recent Orders</h3>
                                    <div style={styles.ordersList}>
                                        {orders.slice(0, 3).map((order) => (
                                            <div key={order.id} style={styles.orderCard}>
                                                <div style={styles.orderHeader}>
                                                    <span style={styles.orderId}>{order.id}</span>
                                                    <span style={{
                                                        ...styles.orderStatus,
                                                        ...(order.statusColor === "green" ? styles.greenStatus : 
                                                             order.statusColor === "blue" ? styles.blueStatus : 
                                                             styles.yellowStatus)
                                                    }}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <div style={styles.orderDetails}>
                                                    {order.date} • {order.items} items • ₹{order.total}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/orders" style={styles.viewAllLink}>
                                        View all orders →
                                    </Link>
                                </div>
                                
                                <div>
                                    <h3 style={styles.sectionTitle}>Account Details</h3>
                                    <div style={styles.detailsList}>
                                        <div style={styles.detailCard}>
                                            <div style={styles.detailLabel}>Email</div>
                                            <div style={styles.detailValue}>{userData.email}</div>
                                        </div>
                                        <div style={styles.detailCard}>
                                            <div style={styles.detailLabel}>Phone</div>
                                            <div style={styles.detailValue}>{userData.phone}</div>
                                        </div>
                                        <div style={styles.detailCard}>
                                            <div style={styles.detailLabel}>Address</div>
                                            <div style={styles.detailValue}>{userData.address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Orders Tab */}
                    {activeTab === "orders" && (
                        <div>
                            <h2 style={styles.tabTitle}>Order History</h2>
                            <div style={styles.ordersTableContainer}>
                                <table style={styles.ordersTable}>
                                    <thead>
                                        <tr>
                                            <th style={styles.tableHeader}>Order ID</th>
                                            <th style={styles.tableHeader}>Date</th>
                                            <th style={styles.tableHeader}>Items</th>
                                            <th style={styles.tableHeader}>Total</th>
                                            <th style={styles.tableHeader}>Status</th>
                                            <th style={styles.tableHeader}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id} style={styles.orderRow}>
                                                <td style={{...styles.tableCell, fontWeight: "600"}}>{order.id}</td>
                                                <td style={styles.tableCell}>{order.date}</td>
                                                <td style={styles.tableCell}>{order.items} items</td>
                                                <td style={{...styles.tableCell, fontWeight: "600"}}>₹{order.total}</td>
                                                <td style={styles.tableCell}>
                                                    <span style={{
                                                        ...styles.orderStatus,
                                                        ...(order.statusColor === "green" ? styles.greenStatus : 
                                                             order.statusColor === "blue" ? styles.blueStatus : 
                                                             styles.yellowStatus),
                                                        display: "inline-block",
                                                        minWidth: "80px",
                                                        textAlign: "center"
                                                    }}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td style={styles.tableCell}>
                                                    <div style={styles.actionButtons}>
                                                        <button 
                                                            style={{...styles.actionBtn, ...styles.viewBtn}}
                                                            onClick={() => alert(`Viewing order ${order.id}`)}
                                                        >
                                                            View
                                                        </button>
                                                        {order.status === "Processing" && (
                                                            <button 
                                                                onClick={() => handleCancelOrder(order.id)}
                                                                style={{...styles.actionBtn, ...styles.cancelOrderBtn}}
                                                            >
                                                                Cancel
                                                            </button>
                                                        )}
                                                        <button 
                                                            style={{...styles.actionBtn, ...styles.trackBtn}}
                                                            onClick={() => alert(`Tracking order ${order.id}`)}
                                                        >
                                                            Track
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    
                    {/* Wishlist Tab */}
                    {activeTab === "wishlist" && (
                        <div>
                            <h2 style={styles.tabTitle}>My Wishlist ({wishlistCount} items)</h2>
                            {wishlistCount === 0 ? (
                                <div style={styles.emptyWishlist}>
                                    <div style={styles.emptyIcon}>❤️</div>
                                    <h3 style={styles.emptyTitle}>Your wishlist is empty</h3>
                                    <p style={styles.emptyMessage}>Start adding items you love!</p>
                                    <Link to="/shop" style={styles.shopBtn}>
                                        Start Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div style={{
                                    ...styles.wishlistGrid,
                                    '@media (min-width: 768px)': {gridTemplateColumns: 'repeat(2, 1fr)'},
                                    '@media (min-width: 1024px)': {gridTemplateColumns: 'repeat(3, 1fr)'}
                                }}>
                                    {displayWishlist.slice(0, 6).map((item) => (
                                        <div key={item.id} style={styles.wishlistCard}>
                                            <div style={styles.wishlistImage}>
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    style={styles.avatarImage}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "https://via.placeholder.com/300x200?text=Product";
                                                    }}
                                                />
                                            </div>
                                            <h3 style={styles.productName}>{item.name}</h3>
                                            <div style={styles.productFooter}>
                                                <span style={styles.productPrice}>₹{item.price}</span>
                                                <button 
                                                    style={styles.addToCartBtn}
                                                    onClick={() => alert(`Added ${item.name} to cart!`)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    
                    {/* Settings Tab */}
                    {activeTab === "settings" && (
                        <div>
                            <h2 style={styles.tabTitle}>Account Settings</h2>
                            <div style={styles.settingsGrid}>
                                <div style={styles.settingSection}>
                                    <h3 style={styles.sectionTitle}>Notifications</h3>
                                    <div style={styles.notificationSettings}>
                                        <label style={styles.checkboxLabel}>
                                            <input type="checkbox" defaultChecked style={{marginRight: "10px", width: "18px", height: "18px"}} />
                                            <span>Email notifications</span>
                                        </label>
                                        <label style={styles.checkboxLabel}>
                                            <input type="checkbox" defaultChecked style={{marginRight: "10px", width: "18px", height: "18px"}} />
                                            <span>Order updates</span>
                                        </label>
                                        <label style={styles.checkboxLabel}>
                                            <input type="checkbox" style={{marginRight: "10px", width: "18px", height: "18px"}} />
                                            <span>Promotional offers</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <div style={styles.settingSection}>
                                    <h3 style={styles.sectionTitle}>Security</h3>
                                    <div style={{...styles.securityButtons, '@media (min-width: 768px)': {flexDirection: 'row'}}}>
                                        <button 
                                            style={{...styles.securityBtn, ...styles.changePassword}}
                                            onClick={() => alert("Change password feature coming soon!")}
                                        >
                                            Change Password
                                        </button>
                                        <button 
                                            style={{...styles.securityBtn, ...styles.twoFactor}}
                                            onClick={() => alert("Two-factor authentication coming soon!")}
                                        >
                                            Two-Factor Authentication
                                        </button>
                                    </div>
                                </div>
                                
                                <div style={styles.settingSection}>
                                    <h3 style={styles.sectionTitle}>Danger Zone</h3>
                                    <div style={{...styles.dangerButtons, '@media (min-width: 768px)': {flexDirection: 'row'}}}>
                                        <button 
                                            style={{...styles.securityBtn, ...styles.deleteAccount}}
                                            onClick={() => {
                                                if(window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                                                    alert("Account deletion feature coming soon!");
                                                }
                                            }}
                                        >
                                            Delete Account
                                        </button>
                                        <button 
                                            style={{...styles.securityBtn, ...styles.exportData}}
                                            onClick={() => alert("Data export feature coming soon!")}
                                        >
                                            Export My Data
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}