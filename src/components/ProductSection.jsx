    import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // ✅ Import here
import products from "../data/products";

    const ProductSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState(3);
    const productsPerPage = 10;

    // Responsive columns setup
    const updateColumns = () => {
        if (window.innerWidth < 640) setColumns(1);
        else if (window.innerWidth < 1024) setColumns(2);
        else setColumns(3);
    };

    useEffect(() => {
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 100, behavior: "smooth" });
    };

    const getPageNumbers = () => {
        let pages = [];
        let start = Math.max(currentPage - 2, 1);
        let end = Math.min(start + 4, totalPages);
        if (end - start < 4) start = Math.max(end - 4, 1);
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <div style={{ padding: "2rem", paddingTop: "100px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#eee" }}>
            Our Natural Products
        </h2>

        {/* Product Grid */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "20px",
            }}
        >
            {currentProducts.map((item) => (
            <ProductCard key={item.id} p={item} />
            ))}
        </motion.div>

        {/* Pagination */}
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "6px",
            flexWrap: "wrap",
            alignItems: "center",
            }}
        >
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={buttonStyle(currentPage === 1)}
            >
            ← Prev
            </button>

            {currentPage > 3 && (
            <>
                <button onClick={() => handlePageChange(1)} style={pageButtonStyle(currentPage === 1)}>
                1
                </button>
                {currentPage > 4 && <span style={{ color: "#aaa" }}>...</span>}
            </>
            )}

            {getPageNumbers().map((num) => (
            <button
                key={num}
                onClick={() => handlePageChange(num)}
                style={pageButtonStyle(currentPage === num)}
            >
                {num}
            </button>
            ))}

            {currentPage < totalPages - 2 && (
            <>
                {currentPage < totalPages - 3 && <span style={{ color: "#aaa" }}>...</span>}
                <button
                onClick={() => handlePageChange(totalPages)}
                style={pageButtonStyle(currentPage === totalPages)}
                >
                {totalPages}
                </button>
            </>
            )}

            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={buttonStyle(currentPage === totalPages)}
            >
            Next →
            </button>
        </div>
        </div>
    );
    };

    // Pagination button styles
    const pageButtonStyle = (isActive) => ({
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isActive ? "#2ecc71" : "#444",
    color: "#fff",
    transition: "all 0.3s ease",
    });

    const buttonStyle = (disabled) => ({
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    backgroundColor: "#444",
    color: "#fff",
    opacity: disabled ? 0.5 : 1,
    });

    export default ProductSection;
