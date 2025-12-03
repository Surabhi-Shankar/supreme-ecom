export default function Settings() {
    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1>⚙️ Settings</h1>
                <p>Customize your shopping experience</p>
            </div>

            <div className="settings-content">
                <div className="settings-section">
                    <h3>Account Settings</h3>
                    <div className="settings-grid">
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Email Notifications</h4>
                                <p>Receive updates about your orders and promotions</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Marketing Emails</h4>
                                <p>Get notified about new products and special offers</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Order Updates</h4>
                                <p>Real-time notifications about your orders</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Privacy & Security</h3>
                    <div className="settings-grid">
                        <button className="settings-button">Change Password</button>
                        <button className="settings-button">Two-Factor Authentication</button>
                        <button className="settings-button">Privacy Settings</button>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Preferences</h3>
                    <div className="settings-grid">
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Dark Mode</h4>
                                <p>Use dark theme across the site</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Auto-play Videos</h4>
                                <p>Automatically play product videos</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="danger-zone">
                    <h3>⚠️ Danger Zone</h3>
                    <p>These actions are irreversible. Please proceed with caution.</p>
                    <div className="danger-buttons">
                        <button className="danger-button">Delete Account</button>
                        <button className="danger-button">Clear All Data</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .settings-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                    min-height: 70vh;
                }

                .settings-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .settings-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: white;
                }

                .settings-header p {
                    color: #aaa;
                    font-size: 1.1rem;
                }

                .settings-content {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    padding: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .settings-section {
                    margin-bottom: 3rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .settings-section:last-child {
                    border-bottom: none;
                }

                .settings-section h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: white;
                }

                .settings-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .setting-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .setting-info h4 {
                    color: white;
                    margin-bottom: 0.5rem;
                }

                .setting-info p {
                    color: #aaa;
                    font-size: 0.9rem;
                }

                /* Toggle Switch */
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;
                }

                .switch input {
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
                    height: 26px;
                    width: 26px;
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
                    transform: translateX(26px);
                }

                .settings-button {
                    padding: 0.8rem 1.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                }

                .settings-button:hover {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: #2ecc71;
                }

                .danger-zone {
                    padding: 1.5rem;
                    background: rgba(231, 76, 60, 0.1);
                    border-radius: 10px;
                    border: 1px solid rgba(231, 76, 60, 0.3);
                }

                .danger-zone h3 {
                    color: #e74c3c;
                    margin-bottom: 0.5rem;
                }

                .danger-zone p {
                    color: #aaa;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                }

                .danger-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .danger-button {
                    padding: 0.8rem 1.5rem;
                    background: transparent;
                    color: #e74c3c;
                    border: 1px solid #e74c3c;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .danger-button:hover {
                    background: rgba(231, 76, 60, 0.2);
                }

                @media (max-width: 768px) {
                    .settings-container {
                        padding: 1rem;
                    }

                    .settings-header h1 {
                        font-size: 2rem;
                    }

                    .settings-content {
                        padding: 1.5rem;
                    }

                    .setting-item {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }

                    .switch {
                        align-self: flex-end;
                    }
                }
            `}</style>
        </div>
    );
}