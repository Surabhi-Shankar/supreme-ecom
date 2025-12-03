export default function Orders() {
    return (
        <div className="orders-container">
            <div className="orders-header">
                <h1>📋 My Orders</h1>
                <p>Track and manage all your orders in one place</p>
            </div>

            <div className="orders-content">
                <div className="empty-orders">
                    <div className="empty-icon">📦</div>
                    <h3>No Orders Yet</h3>
                    <p>You haven't placed any orders yet. Start shopping to see your orders here!</p>
                    <a href="/" className="shop-button">Start Shopping</a>
                </div>
            </div>

            <style jsx>{`
                .orders-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                    min-height: 70vh;
                }

                .orders-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .orders-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: white;
                }

                .orders-header p {
                    color: #aaa;
                    font-size: 1.1rem;
                }

                .orders-content {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    padding: 3rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .empty-orders {
                    text-align: center;
                    padding: 2rem;
                }

                .empty-icon {
                    font-size: 4rem;
                    margin-bottom: 1.5rem;
                }

                .empty-orders h3 {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    color: white;
                }

                .empty-orders p {
                    color: #aaa;
                    margin-bottom: 2rem;
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .shop-button {
                    display: inline-block;
                    padding: 0.8rem 2rem;
                    background: #2ecc71;
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .shop-button:hover {
                    background: #27ae60;
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .orders-container {
                        padding: 1rem;
                    }

                    .orders-header h1 {
                        font-size: 2rem;
                    }

                    .orders-content {
                        padding: 2rem 1rem;
                    }
                }
            `}</style>
        </div>
    );
}