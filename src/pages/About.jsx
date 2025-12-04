    import { motion } from "framer-motion"; // Optional: for animations
import { useState } from "react";
import { Link } from "react-router-dom";

    export default function AboutPage() {
    const [stats, setStats] = useState([
        { value: "50K+", label: "Happy Customers", icon: "😊" },
        { value: "1000+", label: "Products", icon: "📦" },
        { value: "24/7", label: "Support", icon: "🛡️" },
        { value: "98%", label: "Satisfaction", icon: "⭐" }
    ]);

    const [teamMembers, setTeamMembers] = useState([
        { id: 1, name: "Surabhi Shankar", role: "Founder & CEO", image: "👨‍💼", description: "Visionary leader with 15+ years in e-commerce" },
        { id: 2, name: "Eren", role: "Head of Products", image: "👨‍💼", description: "Product expert passionate about quality" },
        { id: 3, name: "Light", role: "Customer Success", image: "👨‍💼", description: "Ensures every customer has a great experience" },
        { id: 4, name: "Luffy", role: "Tech Lead", image: "👩‍🔧", description: "Builds seamless shopping experiences" }
    ]);

    const [values, setValues] = useState([
        { icon: "🤝", title: "Customer First", description: "Your satisfaction is our top priority" },
        { icon: "✨", title: "Quality", description: "Only the best products make it to our store" },
        { icon: "🚀", title: "Innovation", description: "Constantly improving your shopping experience" },
        { icon: "🌱", title: "Sustainability", description: "Eco-friendly packaging and practices" }
    ]);

    return (
        <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
            <div className="hero-content">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-title"
            >
                Our Story
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle"
            >
                From a small idea to serving thousands of customers worldwide
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hero-cta"
            >
                <Link to="/" className="cta-button primary">
                Shop Now
                </Link>
                <Link to="/contact" className="cta-button secondary">
                Contact Us
                </Link>
            </motion.div>
            </div>
            <div className="hero-image">
            <div className="image-placeholder">🛍️</div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
            <div className="stats-container">
            {stats.map((stat, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card"
                >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                </motion.div>
            ))}
            </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
            <div className="section-header">
            <h2 className="section-title">Our Mission & Vision</h2>
            <p className="section-subtitle">What drives us forward</p>
            </div>
            
            <div className="mission-vision-grid">
            <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                To provide exceptional quality products with seamless shopping experiences, 
                making premium goods accessible to everyone while maintaining the highest 
                standards of customer service and satisfaction.
                </p>
            </div>
            
            <div className="vision-card">
                <div className="card-icon">🔭</div>
                <h3>Our Vision</h3>
                <p>
                To become the world's most trusted online marketplace where quality meets 
                convenience, creating a community of happy customers who return for the 
                unmatched shopping experience we provide.
                </p>
            </div>
            </div>
        </section>

        {/* Our Values */}
        <section className="values-section">
            <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">The principles that guide us</p>
            </div>
            
            <div className="values-grid">
            {values.map((value, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="value-card"
                >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                </motion.div>
            ))}
            </div>
        </section>

        {/* Timeline */}
        <section className="timeline-section">
            <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Milestones along the way</p>
            </div>
            
            <div className="timeline">
            {[
                { year: "2018", title: "Founded", description: "Started as a small online store" },
                { year: "2019", title: "First 1000 Customers", description: "Reached our first major milestone" },
                { year: "2020", title: "Mobile App Launch", description: "Expanded to mobile platforms" },
                { year: "2021", title: "International Shipping", description: "Started serving customers worldwide" },
                { year: "2022", title: "50K+ Customers", description: "Achieved rapid growth" },
                { year: "2023", title: "Product Expansion", description: "Added 500+ new products" }
            ].map((milestone, index) => (
                <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                </div>
                </div>
            ))}
            </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
            <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The people behind your great experience</p>
            </div>
            
            <div className="team-grid">
            {teamMembers.map((member) => (
                <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="team-card"
                >
                <div className="team-avatar">{member.image}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-description">{member.description}</p>
                </motion.div>
            ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
            <div className="cta-content">
            <h2 className="cta-title">Join Our Community</h2>
            <p className="cta-description">
                Become part of our growing family of satisfied customers
            </p>
            <div className="cta-buttons">
                <Link to="/signup" className="cta-button primary">Sign Up Free</Link>
                {/* <Link to="/products" className="cta-button outline">Browse Products</Link> */}
            </div>
            </div>
        </section>

        <style jsx>{`
            .about-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            overflow-x: hidden;
            }

            /* Hero Section */
            .about-hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6rem 2rem 4rem;
            max-width: 1400px;
            margin: 0 auto;
            gap: 4rem;
            }

            .hero-content {
            flex: 1;
            max-width: 600px;
            }

            .hero-title {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            }

            .hero-subtitle {
            font-size: 1.25rem;
            color: #cbd5e1;
            margin-bottom: 2.5rem;
            line-height: 1.6;
            }

            .hero-cta {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            }

            .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            }

            .image-placeholder {
            font-size: 15rem;
            opacity: 0.8;
            animation: float 6s ease-in-out infinite;
            }

            @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            }

            /* Stats Section */
            .stats-section {
            background: rgba(255, 255, 255, 0.03);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 4rem 2rem;
            }

            .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            }

            .stat-card {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            }

            .stat-card:hover {
            transform: translateY(-5px);
            border-color: #34d399;
            background: rgba(52, 211, 153, 0.1);
            }

            .stat-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            }

            .stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            }

            .stat-label {
            color: #cbd5e1;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            }

            /* Section Common Styles */
            .section-header {
            text-align: center;
            margin-bottom: 4rem;
            }

            .section-title {
            font-size: 3rem;
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
            max-width: 600px;
            margin: 0 auto;
            }

            /* Mission & Vision */
            .mission-vision {
            padding: 6rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            }

            .mission-vision-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            max-width: 900px;
            margin: 0 auto;
            }

            .mission-card,
            .vision-card {
            padding: 3rem;
            border-radius: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.03);
            transition: all 0.3s ease;
            }

            .mission-card:hover {
            border-color: #60a5fa;
            background: rgba(96, 165, 250, 0.05);
            transform: translateY(-5px);
            }

            .vision-card:hover {
            border-color: #34d399;
            background: rgba(52, 211, 153, 0.05);
            transform: translateY(-5px);
            }

            .card-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            }

            .mission-card h3,
            .vision-card h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: white;
            }

            .mission-card p,
            .vision-card p {
            color: #cbd5e1;
            line-height: 1.6;
            font-size: 1.1rem;
            }

            /* Values Section */
            .values-section {
            padding: 6rem 2rem;
            background: rgba(255, 255, 255, 0.02);
            }

            .values-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            }

            .value-card {
            padding: 2.5rem;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            transition: all 0.3s ease;
            }

            .value-card:hover {
            background: rgba(52, 211, 153, 0.1);
            border-color: #34d399;
            }

            .value-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            }

            .value-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: white;
            }

            .value-card p {
            color: #94a3b8;
            line-height: 1.5;
            }

            /* Timeline */
            .timeline-section {
            padding: 6rem 2rem;
            max-width: 800px;
            margin: 0 auto;
            }

            .timeline {
            position: relative;
            padding-left: 3rem;
            }

            .timeline::before {
            content: '';
            position: absolute;
            left: 2rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, #60a5fa, #34d399);
            }

            .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            padding-left: 2rem;
            }

            .timeline-item:last-child {
            margin-bottom: 0;
            }

            .timeline-item::before {
            content: '';
            position: absolute;
            left: -1.9rem;
            top: 0;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #34d399;
            border: 3px solid #0f172a;
            }

            .timeline-year {
            font-size: 1.2rem;
            font-weight: 700;
            color: #34d399;
            margin-bottom: 0.5rem;
            }

            .timeline-content h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: white;
            }

            .timeline-content p {
            color: #94a3b8;
            line-height: 1.5;
            }

            /* Team Section */
            .team-section {
            padding: 6rem 2rem;
            background: rgba(255, 255, 255, 0.02);
            }

            .team-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            }

            .team-card {
            text-align: center;
            padding: 2.5rem 2rem;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            }

            .team-card:hover {
            transform: translateY(-10px);
            border-color: #60a5fa;
            background: rgba(96, 165, 250, 0.1);
            }

            .team-avatar {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            }

            .team-card h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: white;
            }

            .team-role {
            color: #34d399;
            font-weight: 600;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            }

            .team-description {
            color: #94a3b8;
            line-height: 1.5;
            font-size: 0.9rem;
            }

            /* CTA Section */
            .about-cta {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .cta-content {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
            }

            .cta-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
            }

            .cta-description {
            font-size: 1.2rem;
            color: #cbd5e1;
            margin-bottom: 2.5rem;
            }

            .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            }

            /* Button Styles */
            .cta-button {
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1rem;
            display: inline-block;
            }

            .cta-button.primary {
            background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
            color: white;
            border: none;
            }

            .cta-button.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(52, 211, 153, 0.3);
            }

            .cta-button.secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            }

            .cta-button.secondary:hover {
            border-color: #34d399;
            background: rgba(52, 211, 153, 0.1);
            }

            .cta-button.outline {
            background: transparent;
            color: white;
            border: 2px solid #60a5fa;
            }

            .cta-button.outline:hover {
            background: rgba(96, 165, 250, 0.1);
            transform: translateY(-2px);
            }

            /* Responsive Design */
            @media (max-width: 1024px) {
            .about-hero {
                flex-direction: column;
                text-align: center;
                padding: 4rem 2rem;
            }

            .hero-title {
                font-size: 3rem;
            }

            .hero-cta {
                justify-content: center;
            }

            .image-placeholder {
                font-size: 10rem;
            }
            }

            @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2.5rem;
            }

            .stats-container {
                grid-template-columns: repeat(2, 1fr);
            }

            .mission-vision-grid {
                grid-template-columns: 1fr;
            }

            .timeline {
                padding-left: 2rem;
            }

            .timeline::before {
                left: 1.5rem;
            }

            .timeline-item {
                padding-left: 1.5rem;
            }

            .timeline-item::before {
                left: -1.4rem;
            }
            }

            @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .stats-container {
                grid-template-columns: 1fr;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .cta-button {
                width: 100%;
                text-align: center;
            }
            }
        `}</style>
        </div>
    );
    }