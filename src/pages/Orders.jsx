import { useState } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
    const [activeFilter, setActiveFilter] = useState("all");
    
    // Sample orders data
    const [orders, setOrders] = useState([
        {
            id: "ORD-2024-001",
            date: "Jan 15, 2024",
            items: [
                { name: "Wireless Earbuds", quantity: 1, price: 1999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
                { name: "Smart Watch", quantity: 1, price: 2499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" }
            ],
            total: 4498,
            status: "delivered",
            trackingNumber: "TRK789456123",
            estimatedDelivery: "Jan 18, 2024",
            deliveryAddress: "123 Main Street, Mumbai, Maharashtra 400001"
        },
        {
            id: "ORD-2024-002",
            date: "Jan 10, 2024",
            items: [
                { name: "Aloe Vera Gel", quantity: 2, price: 299, image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=100&h=100&fit=crop" },
                { name: "Rose Face Mist", quantity: 1, price: 199, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" }
            ],
            total: 797,
            status: "processing",
            trackingNumber: "TRK789456124",
            estimatedDelivery: "Jan 15, 2024",
            deliveryAddress: "123 Main Street, Mumbai, Maharashtra 400001"
        },
        {
            id: "ORD-2024-003",
            date: "Jan 5, 2024",
            items: [
                { name: "Bluetooth Speaker", quantity: 1, price: 999, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=100&h=100&fit=crop" }
            ],
            total: 999,
            status: "shipped",
            trackingNumber: "TRK789456125",
            estimatedDelivery: "Jan 8, 2024",
            deliveryAddress: "123 Main Street, Mumbai, Maharashtra 400001"
        },
        {
            id: "ORD-2023-012",
            date: "Dec 20, 2023",
            items: [
                { name: "Denim Jacket", quantity: 1, price: 1599, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=100&h=100&fit=crop" },
                { name: "Leather Belt", quantity: 1, price: 799, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop" }
            ],
            total: 2398,
            status: "delivered",
            trackingNumber: "TRK789456126",
            estimatedDelivery: "Dec 23, 2023",
            deliveryAddress: "123 Main Street, Mumbai, Maharashtra 400001"
        }
    ]);

    const filters = [
        { id: "all", label: "All Orders", count: orders.length },
        { id: "processing", label: "Processing", count: orders.filter(o => o.status === "processing").length },
        { id: "shipped", label: "Shipped", count: orders.filter(o => o.status === "shipped").length },
        { id: "delivered", label: "Delivered", count: orders.filter(o => o.status === "delivered").length }
    ];

    const filteredOrders = activeFilter === "all" 
        ? orders 
        : orders.filter(order => order.status === activeFilter);

    const getStatusColor = (status) => {
        switch(status) {
            case "processing": return { background: "#3b82f6", color: "white" };
            case "shipped": return { background: "#f59e0b", color: "white" };
            case "delivered": return { background: "#10b981", color: "white" };
            default: return { background: "#6b7280", color: "white" };
        }
    };

    const getStatusText = (status) => {
        switch(status) {
            case "processing": return "Processing";
            case "shipped": return "Shipped";
            case "delivered": return "Delivered";
            default: return "Pending";
        }
    };

    const cancelOrder = (orderId) => {
        if (window.confirm("Are you sure you want to cancel this order?")) {
            setOrders(orders.filter(order => order.id !== orderId));
        }
    };

    const reorder = (order) => {
        alert(`Reorder functionality for ${order.id} would be implemented here!`);
    };

    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: "100px 20px 60px",
        color: "#fff",
    };

    const wrapperStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
    };

    const headerStyle = {
        textAlign: "center",
        marginBottom: "40px",
    };

    const titleStyle = {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    };

    const subtitleStyle = {
        color: "#94a3b8",
        fontSize: "1.1rem",
    };

    const filterContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "30px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        padding: "15px",
    };

    const filterButtonStyle = (isActive) => ({
        background: isActive ? "#8b5cf6" : "transparent",
        color: isActive ? "white" : "#cbd5e1",
        border: "1px solid",
        borderColor: isActive ? "#8b5cf6" : "#475569",
        borderRadius: "8px",
        padding: "8px 16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.9rem",
        transition: "all 0.3s ease",
    });

    const countBadgeStyle = {
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        padding: "2px 8px",
        fontSize: "0.8rem",
    };

    const ordersContainerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    };

    const orderCardStyle = {
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        borderRadius: "15px",
        padding: "20px",
        border: "1px solid #475569",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    };

    const orderHeaderStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "15px",
    };

    const orderInfoStyle = {
        flex: 1,
    };

    const orderIdStyle = {
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: "5px",
        color: "white",
    };

    const orderDateStyle = {
        color: "#94a3b8",
        fontSize: "0.9rem",
    };

    const statusBadgeStyle = (status) => ({
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: "500",
        ...getStatusColor(status),
        minWidth: "100px",
        textAlign: "center",
    });

    const itemsContainerStyle = {
        marginBottom: "20px",
    };

    const itemCardStyle = {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "15px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "10px",
        marginBottom: "10px",
    };

    const itemImageStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "8px",
        objectFit: "cover",
    };

    const itemInfoStyle = {
        flex: 1,
    };

    const itemNameStyle = {
        fontWeight: "500",
        marginBottom: "5px",
        color: "white",
    };

    const itemDetailsStyle = {
        color: "#94a3b8",
        fontSize: "0.9rem",
    };

    const orderFooterStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        paddingTop: "20px",
        borderTop: "1px solid #475569",
    };

    const totalStyle = {
        fontSize: "1.3rem",
        fontWeight: "600",
        color: "white",
    };

    const buttonGroupStyle = {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
    };

    const buttonStyle = (variant) => {
        const baseStyle = {
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: "500",
            transition: "all 0.3s ease",
        };

        switch(variant) {
            case "primary":
                return { ...baseStyle, background: "#8b5cf6", color: "white" };
            case "secondary":
                return { ...baseStyle, background: "#475569", color: "white" };
            case "danger":
                return { ...baseStyle, background: "#ef4444", color: "white" };
            default:
                return { ...baseStyle, background: "#6b7280", color: "white" };
        }
    };

    const emptyOrdersStyle = {
        textAlign: "center",
        padding: "60px 20px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "15px",
        border: "1px dashed #475569",
    };

    const emptyIconStyle = {
        fontSize: "4rem",
        marginBottom: "20px",
        display: "block",
    };

    const emptyTitleStyle = {
        fontSize: "1.5rem",
        fontWeight: "600",
        marginBottom: "10px",
        color: "white",
    };

    const emptyMessageStyle = {
        color: "#94a3b8",
        marginBottom: "25px",
        fontSize: "1rem",
        maxWidth: "400px",
        margin: "0 auto 25px",
    };

    const shopButtonStyle = {
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
    };

    const deliveryInfoStyle = {
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "20px",
    };

    const infoRowStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
    };

    const infoLabelStyle = {
        color: "#94a3b8",
        fontSize: "0.9rem",
    };

    const infoValueStyle = {
        color: "white",
        fontSize: "0.9rem",
        fontWeight: "500",
    };

    return (
        <div style={containerStyle}>
            <div style={wrapperStyle}>
                {/* Header */}
                <div style={headerStyle}>
                    <h1 style={titleStyle}>📋 My Orders</h1>
                    <p style={subtitleStyle}>Track and manage all your orders in one place</p>
                </div>

                {/* Filters */}
                <div style={filterContainerStyle}>
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            style={filterButtonStyle(activeFilter === filter.id)}
                            onMouseOver={(e) => {
                                if (activeFilter !== filter.id) {
                                    e.target.style.background = "#334155";
                                }
                            }}
                            onMouseOut={(e) => {
                                if (activeFilter !== filter.id) {
                                    e.target.style.background = "transparent";
                                }
                            }}
                        >
                            {filter.label}
                            <span style={countBadgeStyle}>{filter.count}</span>
                        </button>
                    ))}
                </div>

                {/* Orders List */}
                <div style={ordersContainerStyle}>
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map(order => (
                            <div key={order.id} style={orderCardStyle}>
                                {/* Order Header */}
                                <div style={orderHeaderStyle}>
                                    <div style={orderInfoStyle}>
                                        <h3 style={orderIdStyle}>{order.id}</h3>
                                        <p style={orderDateStyle}>Placed on {order.date}</p>
                                    </div>
                                    <div style={statusBadgeStyle(order.status)}>
                                        {getStatusText(order.status)}
                                    </div>
                                </div>

                                {/* Delivery Info */}
                                <div style={deliveryInfoStyle}>
                                    <div style={infoRowStyle}>
                                        <span style={infoLabelStyle}>Tracking Number:</span>
                                        <span style={infoValueStyle}>{order.trackingNumber}</span>
                                    </div>
                                    <div style={infoRowStyle}>
                                        <span style={infoLabelStyle}>Estimated Delivery:</span>
                                        <span style={infoValueStyle}>{order.estimatedDelivery}</span>
                                    </div>
                                    <div style={infoRowStyle}>
                                        <span style={infoLabelStyle}>Delivery Address:</span>
                                        <span style={infoValueStyle}>{order.deliveryAddress}</span>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div style={itemsContainerStyle}>
                                    <h4 style={{ color: "#94a3b8", marginBottom: "10px", fontSize: "0.9rem" }}>
                                        Items ({order.items.length})
                                    </h4>
                                    {order.items.map((item, index) => (
                                        <div key={index} style={itemCardStyle}>
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                style={itemImageStyle}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/60x60?text=Product";
                                                }}
                                            />
                                            <div style={itemInfoStyle}>
                                                <div style={itemNameStyle}>{item.name}</div>
                                                <div style={itemDetailsStyle}>
                                                    Qty: {item.quantity} • ₹{item.price} each
                                                </div>
                                            </div>
                                            <div style={{ color: "white", fontWeight: "500" }}>
                                                ₹{item.price * item.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Order Footer */}
                                <div style={orderFooterStyle}>
                                    <div>
                                        <div style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "5px" }}>
                                            Order Total
                                        </div>
                                        <div style={totalStyle}>₹{order.total}</div>
                                    </div>
                                    <div style={buttonGroupStyle}>
                                        <button 
                                            style={buttonStyle("primary")}
                                            onClick={() => reorder(order)}
                                            onMouseOver={(e) => e.target.style.background = "#7c3aed"}
                                            onMouseOut={(e) => e.target.style.background = "#8b5cf6"}
                                        >
                                            📦 Reorder
                                        </button>
                                        <button 
                                            style={buttonStyle("secondary")}
                                            onClick={() => alert(`Tracking order ${order.id}`)}
                                            onMouseOver={(e) => e.target.style.background = "#64748b"}
                                            onMouseOut={(e) => e.target.style.background = "#475569"}
                                        >
                                            🚚 Track Order
                                        </button>
                                        {order.status === "processing" && (
                                            <button 
                                                style={buttonStyle("danger")}
                                                onClick={() => cancelOrder(order.id)}
                                                onMouseOver={(e) => e.target.style.background = "#dc2626"}
                                                onMouseOut={(e) => e.target.style.background = "#ef4444"}
                                            >
                                                ❌ Cancel Order
                                            </button>
                                        )}
                                        <button 
                                            style={buttonStyle("secondary")}
                                            onClick={() => alert(`Viewing invoice for ${order.id}`)}
                                            onMouseOver={(e) => e.target.style.background = "#64748b"}
                                            onMouseOut={(e) => e.target.style.background = "#475569"}
                                        >
                                            📄 View Invoice
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={emptyOrdersStyle}>
                            <div style={emptyIconStyle}>📦</div>
                            <h3 style={emptyTitleStyle}>No Orders Found</h3>
                            <p style={emptyMessageStyle}>
                                {activeFilter === "all" 
                                    ? "You haven't placed any orders yet. Start shopping to see your orders here!"
                                    : `You don't have any ${activeFilter} orders.`
                                }
                            </p>
                            <Link to="/shop" style={shopButtonStyle}>
                                Start Shopping
                            </Link>
                        </div>
                    )}
                </div>

                {/* Stats Summary */}
                {filteredOrders.length > 0 && (
                    <div style={{
                        ...orderCardStyle,
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "15px",
                    }}>
                        <div>
                            <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                                Showing {filteredOrders.length} of {orders.length} orders
                            </div>
                            <div style={{ color: "white", fontSize: "1.1rem", fontWeight: "600" }}>
                                Total Spent: ₹{filteredOrders.reduce((sum, order) => sum + order.total, 0)}
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            <button 
                                style={buttonStyle("secondary")}
                                onClick={() => alert("Exporting order history...")}
                            >
                                📊 Export History
                            </button>
                            <button 
                                style={buttonStyle("primary")}
                                onClick={() => alert("Need help with your orders?")}
                            >
                                🆘 Order Help
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}