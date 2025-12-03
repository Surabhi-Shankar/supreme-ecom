        import { motion } from "framer-motion"; // Remove if you don't have framer-motion
import { useState } from "react";

        export default function ContactPage() {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [activeTab, setActiveTab] = useState("general");

        const contactInfo = [
            {
            icon: "📍",
            title: "Visit Our Office",
            details: ["123 Commerce Street", "San Francisco, CA 94107", "United States"],
            color: "#3B82F6"
            },
            {
            icon: "📞",
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            color: "#10B981"
            },
            {
            icon: "✉️",
            title: "Email Us",
            details: ["support@shoptastic.com", "sales@shoptastic.com"],
            color: "#8B5CF6"
            },
            {
            icon: "⏰",
            title: "Business Hours",
            details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
            color: "#F59E0B"
            }
        ];

        const faqCategories = {
            general: [
            {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days delivery."
            },
            {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by destination."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
            }
            ],
            orders: [
            {
                question: "Can I modify or cancel my order?",
                answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our support team."
            },
            {
                question: "How do I track my order?",
                answer: "Once your order ships, you'll receive a tracking number via email. You can also track it from your account dashboard."
            },
            {
                question: "What if I receive a damaged item?",
                answer: "Contact us within 48 hours of delivery with photos of the damaged item. We'll arrange a replacement or refund."
            }
            ],
            returns: [
            {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for unused items in original packaging. Returns are free for defective items."
            },
            {
                question: "How long does it take to process a refund?",
                answer: "Refunds are processed within 5-7 business days after we receive the returned item."
            },
            {
                question: "Do you offer exchanges?",
                answer: "Yes, we offer size and color exchanges. Please contact our support team to arrange an exchange."
            }
            ]
        };

        const handleChange = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            }, 3000);
        };

        // If you don't have framer-motion installed, use regular divs
        const MotionDiv = motion ? motion.div : "div";

        return (
            <div className="contact-container">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-content">
                <div className="hero-title">
                    Get In Touch
                </div>
                <div className="hero-subtitle">
                    We're here to help! Reach out to us with any questions or feedback.
                </div>
                </div>
                <div className="hero-stats">
                <div className="stat">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support</div>
                </div>
                <div className="stat">
                    <div className="stat-number">&lt; 2h</div>
                    <div className="stat-label">Avg. Response</div>
                </div>
                <div className="stat">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Satisfaction</div>
                </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="contact-cards-section">
                <div className="cards-grid">
                {contactInfo.map((info, index) => (
                    <div
                    key={index}
                    className="contact-card"
                    style={{ "--accent-color": info.color }}
                    >
                    <div className="card-icon" style={{ backgroundColor: `${info.color}20`, color: info.color }}>
                        {info.icon}
                    </div>
                    <h3>{info.title}</h3>
                    {info.details.map((detail, i) => (
                        <p key={i} className="card-detail">{detail}</p>
                    ))}
                    </div>
                ))}
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="contact-form-section">
                <div className="form-container">
                <div className="form-wrapper">
                    <div className="form-header">
                    <h2 className="form-title">Send Us a Message</h2>
                    <p className="form-subtitle">Fill out the form below and we'll get back to you ASAP</p>
                    </div>

                    {isSubmitted ? (
                    <div className="success-message">
                        <div className="success-icon">✅</div>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for contacting us. We'll get back to you within 2 hours.</p>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="order">Order Support</option>
                            <option value="returns">Returns & Refunds</option>
                            <option value="technical">Technical Support</option>
                            <option value="feedback">Feedback & Suggestions</option>
                        </select>
                        </div>

                        <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="How can we help you?"
                        />
                        </div>

                        <button
                        type="submit"
                        className={`submit-button ${isSubmitting ? "loading" : ""}`}
                        disabled={isSubmitting}
                        >
                        {isSubmitting ? (
                            <>
                            <span className="spinner"></span>
                            Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                        </button>
                    </form>
                    )}
                </div>

                <div className="map-wrapper">
                    <div className="map-container">
                    {/* Static Map Placeholder - Replace with Google Maps/Mapbox */}
                    <div className="map-placeholder">
                        <div className="map-marker">
                        📍
                        </div>
                        <div className="map-overlay">
                        <h3>Our Headquarters</h3>
                        <p>123 Commerce Street, San Francisco</p>
                        <button className="map-button">Open in Maps</button>
                        </div>
                    </div>
                    </div>
                    
                    <div className="additional-info">
                    <h3>Need Immediate Help?</h3>
                    <p>Call us now: <span className="highlight">+1 (555) 123-4567</span></p>
                    <p>Or chat with our support team 24/7</p>
                    <button className="chat-button">💬 Start Live Chat</button>
                    </div>
                </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="section-header">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">Find quick answers to common questions</p>
                </div>

                <div className="faq-tabs">
                {Object.keys(faqCategories).map((category) => (
                    <button
                    key={category}
                    className={`faq-tab ${activeTab === category ? "active" : ""}`}
                    onClick={() => setActiveTab(category)}
                    >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
                </div>

                <div className="faq-content">
                <div className="faq-list">
                    {faqCategories[activeTab].map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question">
                        <h4>{faq.question}</h4>
                        <span className="faq-toggle">+</span>
                        </div>
                        <div className="faq-answer">
                        <p>{faq.answer}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section">
                <div className="newsletter-content">
                <div className="newsletter-text">
                    <h2>Stay Updated</h2>
                    <p>Subscribe to our newsletter for the latest products and exclusive deals</p>
                </div>
                <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email address" />
                    <button type="submit">Subscribe</button>
                </div>
                </div>
            </section>

            <style jsx>{`
                .contact-container {
                min-height: 100vh;
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: white;
                overflow-x: hidden;
                }

                /* Hero Section */
                .contact-hero {
                padding: 6rem 2rem 4rem;
                max-width: 1200px;
                margin: 0 auto;
                text-align: center;
                }

                .hero-title {
                font-size: 4rem;
                font-weight: 800;
                margin-bottom: 1.5rem;
                background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                }

                .hero-subtitle {
                font-size: 1.25rem;
                color: #cbd5e1;
                max-width: 600px;
                margin: 0 auto 3rem;
                line-height: 1.6;
                }

                .hero-stats {
                display: flex;
                justify-content: center;
                gap: 4rem;
                flex-wrap: wrap;
                }

                .stat {
                text-align: center;
                }

                .stat-number {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                }

                .stat-label {
                color: #94a3b8;
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                }

                /* Contact Cards */
                .contact-cards-section {
                padding: 4rem 2rem;
                max-width: 1200px;
                margin: 0 auto;
                }

                .cards-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                }

                .contact-card {
                padding: 2.5rem 2rem;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                text-align: center;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
                }

                .contact-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: var(--accent-color);
                transform: scaleX(0);
                transition: transform 0.3s ease;
                }

                .contact-card:hover::before {
                transform: scaleX(1);
                }

                .contact-card:hover {
                transform: translateY(-5px);
                border-color: var(--accent-color);
                background: rgba(var(--accent-color), 0.05);
                }

                .card-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                font-size: 1.5rem;
                }

                .contact-card h3 {
                font-size: 1.3rem;
                margin-bottom: 1rem;
                color: white;
                }

                .card-detail {
                color: #94a3b8;
                margin: 0.5rem 0;
                font-size: 0.95rem;
                }

                /* Contact Form Section */
                .contact-form-section {
                padding: 4rem 2rem;
                max-width: 1200px;
                margin: 0 auto;
                }

                .form-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
                align-items: start;
                }

                .form-wrapper {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2.5rem;
                }

                .form-header {
                margin-bottom: 2.5rem;
                }

                .form-title {
                font-size: 2rem;
                margin-bottom: 0.5rem;
                color: white;
                }

                .form-subtitle {
                color: #94a3b8;
                line-height: 1.5;
                }

                .contact-form {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                }

                .form-group {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                }

                .form-group label {
                font-size: 0.9rem;
                font-weight: 500;
                color: #cbd5e1;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                padding: 0.8rem 1rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 10px;
                color: white;
                font-size: 0.95rem;
                transition: all 0.3s ease;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                outline: none;
                border-color: #34d399;
                box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.1);
                }

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                color: #64748b;
                }

                .form-group select {
                cursor: pointer;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 1rem center;
                background-size: 12px;
                padding-right: 2.5rem;
                }

                .submit-button {
                padding: 1rem 2rem;
                background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                }

                .submit-button:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(52, 211, 153, 0.3);
                }

                .submit-button:disabled {
                opacity: 0.7;
                cursor: not-allowed;
                }

                .submit-button.loading {
                background: #219653;
                }

                .spinner {
                width: 20px;
                height: 20px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top-color: white;
                animation: spin 1s linear infinite;
                }

                @keyframes spin {
                to { transform: rotate(360deg); }
                }

                /* Success Message */
                .success-message {
                text-align: center;
                padding: 3rem 2rem;
                }

                .success-icon {
                font-size: 4rem;
                color: #34d399;
                margin-bottom: 1.5rem;
                }

                .success-message h3 {
                font-size: 1.8rem;
                margin-bottom: 1rem;
                color: white;
                }

                .success-message p {
                color: #94a3b8;
                line-height: 1.5;
                }

                /* Map Section */
                .map-wrapper {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                }

                .map-container {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                overflow: hidden;
                }

                .map-placeholder {
                height: 300px;
                background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                }

                .map-marker {
                position: absolute;
                font-size: 3rem;
                color: #ef4444;
                animation: pulse 2s infinite;
                }

                @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
                }

                .map-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(15, 23, 42, 0.9);
                padding: 1.5rem;
                text-align: center;
                }

                .map-overlay h3 {
                margin-bottom: 0.5rem;
                color: white;
                }

                .map-overlay p {
                color: #94a3b8;
                margin-bottom: 1rem;
                font-size: 0.9rem;
                }

                .map-button {
                padding: 0.6rem 1.5rem;
                background: #3b82f6;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 0.9rem;
                transition: all 0.3s ease;
                }

                .map-button:hover {
                background: #2563eb;
                transform: translateY(-2px);
                }

                /* Additional Info */
                .additional-info {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                }

                .additional-info h3 {
                font-size: 1.3rem;
                margin-bottom: 1rem;
                color: white;
                }

                .additional-info p {
                color: #94a3b8;
                margin: 0.5rem 0;
                font-size: 0.95rem;
                }

                .highlight {
                color: #34d399;
                font-weight: 600;
                }

                .chat-button {
                margin-top: 1.5rem;
                padding: 0.8rem 1.5rem;
                background: #8b5cf6;
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 0.95rem;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                }

                .chat-button:hover {
                background: #7c3aed;
                transform: translateY(-2px);
                }

                /* FAQ Section */
                .faq-section {
                padding: 6rem 2rem;
                max-width: 800px;
                margin: 0 auto;
                }

                .section-header {
                text-align: center;
                margin-bottom: 3rem;
                }

                .section-title {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                }

                .section-subtitle {
                font-size: 1.1rem;
                color: #94a3b8;
                }

                .faq-tabs {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                margin-bottom: 3rem;
                flex-wrap: wrap;
                }

                .faq-tab {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 25px;
                color: #cbd5e1;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
                }

                .faq-tab:hover {
                border-color: #34d399;
                color: white;
                }

                .faq-tab.active {
                background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
                border-color: transparent;
                color: white;
                }

                .faq-list {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                }

                .faq-item {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                overflow: hidden;
                }

                .faq-question {
                padding: 1.5rem;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                }

                .faq-question h4 {
                font-size: 1.1rem;
                color: white;
                margin: 0;
                flex: 1;
                }

                .faq-toggle {
                font-size: 1.5rem;
                color: #34d399;
                transition: transform 0.3s ease;
                }

                .faq-item:hover .faq-toggle {
                transform: rotate(45deg);
                }

                .faq-answer {
                padding: 0 1.5rem 1.5rem;
                color: #94a3b8;
                line-height: 1.6;
                font-size: 0.95rem;
                }

                /* Newsletter Section */
                .newsletter-section {
                padding: 4rem 2rem;
                background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%);
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .newsletter-content {
                max-width: 800px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 2rem;
                }

                .newsletter-text h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                color: white;
                }

                .newsletter-text p {
                color: #cbd5e1;
                font-size: 1.1rem;
                }

                .newsletter-form {
                display: flex;
                gap: 0.5rem;
                max-width: 500px;
                width: 100%;
                }

                .newsletter-form input {
                flex: 1;
                padding: 1rem 1.5rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 10px;
                color: white;
                font-size: 1rem;
                }

                .newsletter-form input::placeholder {
                color: #94a3b8;
                }

                .newsletter-form button {
                padding: 1rem 2rem;
                background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                }

                .newsletter-form button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(52, 211, 153, 0.3);
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                .form-container {
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                .hero-title {
                    font-size: 3rem;
                }
                }

                @media (max-width: 768px) {
                .contact-hero {
                    padding: 4rem 1rem 3rem;
                }

                .hero-title {
                    font-size: 2.5rem;
                }

                .hero-stats {
                    gap: 2rem;
                }

                .form-wrapper {
                    padding: 2rem;
                }

                .cards-grid {
                    grid-template-columns: repeat(2, 1fr);
                }

                .section-title {
                    font-size: 2rem;
                }
                }

                @media (max-width: 480px) {
                .hero-title {
                    font-size: 2rem;
                }

                .cards-grid {
                    grid-template-columns: 1fr;
                }

                .faq-tabs {
                    flex-direction: column;
                }

                .newsletter-form {
                    flex-direction: column;
                }

                .newsletter-form input,
                .newsletter-form button {
                    width: 100%;
                }
                }
            `}</style>
            </div>
        );
        }