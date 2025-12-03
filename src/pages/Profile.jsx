    import { useState } from "react";
import { Link } from "react-router-dom";

    export default function Profile() {
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, San Francisco, CA",
        joinDate: "January 15, 2024"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [orders] = useState([
        { id: "ORD-001", date: "Jan 20, 2024", total: "$89.99", status: "Delivered" },
        { id: "ORD-002", date: "Feb 5, 2024", total: "$129.99", status: "Processing" },
        { id: "ORD-003", date: "Feb 15, 2024", total: "$199.99", status: "Shipped" }
    ]);

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, you would save to backend here
    };

    const stats = [
        { label: "Total Orders", value: "12", icon: "📦", color: "#3498db" },
        { label: "Total Spent", value: "$1,248", icon: "💰", color: "#2ecc71" },
        { label: "Wishlist Items", value: "7", icon: "❤️", color: "#e74c3c" },
        { label: "Reviews", value: "8", icon: "⭐", color: "#f39c12" }
    ];

    return (
        <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
            <div className="header-content">
            <h1>👤 My Profile</h1>
            <p>Manage your account information and preferences</p>
            </div>
        </div>

        <div className="profile-content">
            {/* Left Sidebar */}
            <div className="profile-sidebar">
            <div className="user-card">
                <div className="avatar">
                <div className="avatar-icon">JD</div>
                </div>
                <h3>{userData.name}</h3>
                <p className="user-email">{userData.email}</p>
                <p className="member-since">Member since {userData.joinDate}</p>
                
                <button 
                className={`edit-btn ${isEditing ? "save" : ""}`}
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                {isEditing ? "💾 Save Changes" : "✏️ Edit Profile"}
                </button>
            </div>

            <div className="sidebar-menu">
                <button 
                className={`menu-item ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
                >
                📊 Overview
                </button>
                <button 
                className={`menu-item ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => setActiveTab("orders")}
                >
                📦 My Orders
                </button>
                <button 
                className={`menu-item ${activeTab === "settings" ? "active" : ""}`}
                onClick={() => setActiveTab("settings")}
                >
                ⚙️ Settings
                </button>
                <button 
                className={`menu-item ${activeTab === "security" ? "active" : ""}`}
                onClick={() => setActiveTab("security")}
                >
                🔒 Security
                </button>
                <Link to="/wishlist" className="menu-item wishlist-link">
                ❤️ My Wishlist
                </Link>
            </div>
            </div>

            {/* Main Content */}
            <div className="profile-main">
            {activeTab === "overview" && (
                <div className="tab-content">
                {/* Stats Cards */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                    <div key={index} className="stat-card" style={{ borderTop: `4px solid ${stat.color}` }}>
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                        {stat.icon}
                        </div>
                        <div className="stat-info">
                        <h4>{stat.label}</h4>
                        <div className="stat-value">{stat.value}</div>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Personal Information */}
                <div className="info-section">
                    <h3>📝 Personal Information</h3>
                    <div className="info-grid">
                    <div className="info-item">
                        <label>Full Name</label>
                        {isEditing ? (
                        <input 
                            type="text" 
                            value={userData.name}
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                            className="edit-input"
                        />
                        ) : (
                        <div className="info-value">{userData.name}</div>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Email Address</label>
                        {isEditing ? (
                        <input 
                            type="email" 
                            value={userData.email}
                            onChange={(e) => setUserData({...userData, email: e.target.value})}
                            className="edit-input"
                        />
                        ) : (
                        <div className="info-value">{userData.email}</div>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Phone Number</label>
                        {isEditing ? (
                        <input 
                            type="tel" 
                            value={userData.phone}
                            onChange={(e) => setUserData({...userData, phone: e.target.value})}
                            className="edit-input"
                        />
                        ) : (
                        <div className="info-value">{userData.phone}</div>
                        )}
                    </div>
                    <div className="info-item">
                        <label>Address</label>
                        {isEditing ? (
                        <textarea 
                            value={userData.address}
                            onChange={(e) => setUserData({...userData, address: e.target.value})}
                            className="edit-textarea"
                            rows="2"
                        />
                        ) : (
                        <div className="info-value">{userData.address}</div>
                        )}
                    </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="info-section">
                    <h3>📈 Recent Activity</h3>
                    <div className="activity-list">
                    <div className="activity-item">
                        <div className="activity-icon">✅</div>
                        <div className="activity-content">
                        <p>Order #ORD-003 shipped successfully</p>
                        <span className="activity-time">Today, 10:30 AM</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon">🛒</div>
                        <div className="activity-content">
                        <p>Added new item to wishlist</p>
                        <span className="activity-time">Yesterday, 3:45 PM</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon">⭐</div>
                        <div className="activity-content">
                        <p>Left a review for "Premium Headphones"</p>
                        <span className="activity-time">Feb 18, 2024</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            )}

            {activeTab === "orders" && (
                <div className="tab-content">
                <h3>📦 My Orders</h3>
                <div className="orders-table">
                    <div className="table-header">
                    <div className="table-cell">Order ID</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Total</div>
                    <div className="table-cell">Status</div>
                    <div className="table-cell">Action</div>
                    </div>
                    {orders.map((order) => (
                    <div key={order.id} className="table-row">
                        <div className="table-cell order-id">{order.id}</div>
                        <div className="table-cell">{order.date}</div>
                        <div className="table-cell total">{order.total}</div>
                        <div className="table-cell">
                        <span className={`status ${order.status.toLowerCase()}`}>
                            {order.status}
                        </span>
                        </div>
                        <div className="table-cell">
                        <button className="view-btn">View Details</button>
                        </div>
                    </div>
                    ))}
                </div>
                <Link to="/orders" className="view-all-link">
                    View all orders →
                </Link>
                </div>
            )}

            {activeTab === "settings" && (
                <div className="tab-content">
                <h3>⚙️ Account Settings</h3>
                <div className="settings-list">
                    <div className="setting-item">
                    <div className="setting-info">
                        <h4>Email Notifications</h4>
                        <p>Receive updates about your orders and promotions</p>
                    </div>
                    <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider"></span>
                    </label>
                    </div>
                    <div className="setting-item">
                    <div className="setting-info">
                        <h4>Marketing Emails</h4>
                        <p>Get notified about new products and special offers</p>
                    </div>
                    <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider"></span>
                    </label>
                    </div>
                    <div className="setting-item">
                    <div className="setting-info">
                        <h4>Auto-play Videos</h4>
                        <p>Automatically play product videos</p>
                    </div>
                    <label className="toggle-switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                    </div>
                </div>
                </div>
            )}

            {activeTab === "security" && (
                <div className="tab-content">
                <h3>🔒 Security Settings</h3>
                <div className="security-grid">
                    <div className="security-card">
                    <div className="security-icon">🔑</div>
                    <h4>Change Password</h4>
                    <p>Update your password regularly for security</p>
                    <button className="security-btn">Change Password</button>
                    </div>
                    <div className="security-card">
                    <div className="security-icon">📱</div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account</p>
                    <button className="security-btn">Enable 2FA</button>
                    </div>
                    <div className="security-card">
                    <div className="security-icon">📋</div>
                    <h4>Login History</h4>
                    <p>View your recent account activity</p>
                    <button className="security-btn">View History</button>
                    </div>
                </div>
                </div>
            )}
            </div>
        </div>

        <style jsx>{`
            .profile-container {
            min-height: 100vh;
            background: #121212;
            color: white;
            }

            .profile-header {
            background: linear-gradient(135deg, #0a1f44 0%, #2ecc71 100%);
            padding: 3rem 2rem;
            border-radius: 0 0 20px 20px;
            }

            .header-content {
            max-width: 1200px;
            margin: 0 auto;
            }

            .header-content h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
            }

            .header-content p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            }

            .profile-content {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 2rem;
            }

            .profile-sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            }

            .user-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .avatar {
            margin: 0 auto 1.5rem;
            }

            .avatar-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin: 0 auto;
            }

            .user-card h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: white;
            }

            .user-email {
            color: #aaa;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            }

            .member-since {
            color: #2ecc71;
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
            }

            .edit-btn {
            width: 100%;
            padding: 0.8rem;
            background: #2ecc71;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            }

            .edit-btn:hover {
            background: #27ae60;
            transform: translateY(-2px);
            }

            .edit-btn.save {
            background: #3498db;
            }

            .edit-btn.save:hover {
            background: #2980b9;
            }

            .sidebar-menu {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .menu-item {
            width: 100%;
            padding: 0.8rem 1rem;
            background: none;
            border: none;
            color: #ccc;
            text-align: left;
            cursor: pointer;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            }

            .menu-item:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            }

            .menu-item.active {
            background: #2ecc71;
            color: white;
            }

            .wishlist-link {
            color: #e74c3c;
            }

            .wishlist-link:hover {
            background: rgba(231, 76, 60, 0.1);
            }

            .profile-main {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .tab-content {
            animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
            }

            .tab-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            color: white;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            }

            .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
            }

            .stat-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: all 0.3s ease;
            }

            .stat-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            }

            .stat-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            flex-shrink: 0;
            }

            .stat-info h4 {
            font-size: 0.9rem;
            color: #aaa;
            margin-bottom: 0.5rem;
            font-weight: 500;
            }

            .stat-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            }

            .info-section {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .info-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            }

            .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            }

            .info-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            }

            .info-item label {
            color: #aaa;
            font-size: 0.9rem;
            font-weight: 500;
            }

            .info-value {
            font-size: 1.1rem;
            color: white;
            font-weight: 500;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .edit-input, .edit-textarea {
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #2ecc71;
            border-radius: 8px;
            color: white;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
            }

            .edit-input:focus, .edit-textarea:focus {
            box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.3);
            }

            .edit-textarea {
            resize: vertical;
            min-height: 80px;
            }

            .activity-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            }

            .activity-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            }

            .activity-item:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(5px);
            }

            .activity-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
            }

            .activity-content p {
            color: white;
            margin-bottom: 0.25rem;
            font-weight: 500;
            }

            .activity-time {
            color: #aaa;
            font-size: 0.85rem;
            }

            .orders-table {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 1.5rem;
            }

            .table-header {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem;
            font-weight: 600;
            color: white;
            }

            .table-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            }

            .table-row:hover {
            background: rgba(255, 255, 255, 0.05);
            }

            .table-row:last-child {
            border-bottom: none;
            }

            .table-cell {
            display: flex;
            align-items: center;
            padding: 0 0.5rem;
            }

            .order-id {
            font-weight: 600;
            color: #2ecc71;
            }

            .total {
            font-weight: 700;
            color: white;
            }

            .status {
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            }

            .status.delivered {
            background: rgba(46, 204, 113, 0.2);
            color: #2ecc71;
            }

            .status.processing {
            background: rgba(52, 152, 219, 0.2);
            color: #3498db;
            }

            .status.shipped {
            background: rgba(243, 156, 18, 0.2);
            color: #f39c12;
            }

            .view-btn {
            padding: 0.4rem 0.8rem;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s ease;
            }

            .view-btn:hover {
            background: #2ecc71;
            border-color: #2ecc71;
            }

            .view-all-link {
            color: #2ecc71;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            }

            .view-all-link:hover {
            gap: 1rem;
            }

            .settings-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            }

            .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .setting-info h4 {
            color: white;
            margin-bottom: 0.25rem;
            font-size: 1rem;
            }

            .setting-info p {
            color: #aaa;
            font-size: 0.9rem;
            }

            .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 26px;
            }

            .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
            }

            .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #666;
            transition: .4s;
            border-radius: 34px;
            }

            .slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
            }

            input:checked + .slider {
            background-color: #2ecc71;
            }

            input:checked + .slider:before {
            transform: translateX(24px);
            }

            .security-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            }

            .security-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.5rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            }

            .security-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            }

            .security-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            }

            .security-card h4 {
            color: white;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
            }

            .security-card p {
            color: #aaa;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            }

            .security-btn {
            padding: 0.6rem 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            }

            .security-btn:hover {
            background: #2ecc71;
            border-color: #2ecc71;
            }

            @media (max-width: 1024px) {
            .profile-content {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .profile-sidebar {
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .user-card {
                flex: 1;
                min-width: 300px;
            }

            .sidebar-menu {
                flex: 2;
                min-width: 300px;
            }
            }

            @media (max-width: 768px) {
            .profile-header {
                padding: 2rem 1rem;
            }

            .profile-content {
                padding: 0 1rem;
                margin: 1.5rem auto;
            }

            .header-content h1 {
                font-size: 2rem;
            }

            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .table-header,
            .table-row {
                grid-template-columns: repeat(3, 1fr);
            }

            .table-cell:nth-child(2),
            .table-cell:nth-child(5) {
                display: none;
            }
            }

            @media (max-width: 480px) {
            .stats-grid {
                grid-template-columns: 1fr;
            }

            .info-grid {
                grid-template-columns: 1fr;
            }

            .setting-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }

            .security-grid {
                grid-template-columns: 1fr;
            }

            .profile-sidebar {
                flex-direction: column;
            }

            .user-card,
            .sidebar-menu {
                min-width: 100%;
            }
            }
        `}</style>
        </div>
    );
    }