    import ProductSection from "../components/ProductSection";

    const Home = () => {
    return (
        <div style={{  backgroundColor: "#1e1e1e", minHeight: "100vh"  }}>
        <h1 style={{ color: "#eee", textAlign: "center", margin: "2rem 0" }}>
            Welcome to Supreme Naturals 🌿
        </h1>
        <ProductSection />
        </div>
    );
    };

    export default Home;
