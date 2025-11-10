  import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

    const ProductSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState(3);
    const productsPerPage = 10;

    // Responsive columns
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
        window.scrollTo({ top: 100, behavior: "smooth" }); // below navbar
    };

    // Generate smart page numbers (5 at a time)
    const getPageNumbers = () => {
        let pages = [];
        let start = Math.max(currentPage - 2, 1);
        let end = Math.min(start + 4, totalPages);

        if (end - start < 4) start = Math.max(end - 4, 1);

        for (let i = start; i <= end; i++) {
        pages.push(i);
        }
        return pages;
    };

    return (
        <div style={{ padding: "2rem", paddingTop: "100px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#eee" }}>
            Our Natural Products
        </h2>

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
            <Link key={item.id} to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(46,204,113,0.7)" }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                    backgroundColor: "#2c2c2c",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 1,
                }}
                >
                <motion.img
                    src={item.image}
                    alt={item.name}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                    }}
                />
                <h3 style={{ color: "#eee" }}>{item.name}</h3>
                <p style={{ fontSize: "14px", color: "#aaa" }}>{item.description}</p>
                <strong style={{ color: "#2ecc71" }}>₹{item.price}</strong>
                </motion.div>
            </Link>
            ))}
        </motion.div>

        {/* Smart Pagination */}
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
            {/* Previous button */}
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: "none",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                backgroundColor: "#444",
                color: "#fff",
            }}
            >
            &#8592; Prev
            </button>

            {/* First page + dots */}
            {currentPage > 3 && (
            <>
                <button onClick={() => handlePageChange(1)} style={pageButtonStyle(currentPage === 1)}>
                1
                </button>
                {currentPage > 4 && <span style={{ color: "#aaa" }}>...</span>}
            </>
            )}

            {/* Middle pages */}
            {getPageNumbers().map((num) => (
            <button key={num} onClick={() => handlePageChange(num)} style={pageButtonStyle(currentPage === num)}>
                {num}
            </button>
            ))}

            {/* Last page + dots */}
            {currentPage < totalPages - 2 && (
            <>
                {currentPage < totalPages - 3 && <span style={{ color: "#aaa" }}>...</span>}
                <button onClick={() => handlePageChange(totalPages)} style={pageButtonStyle(currentPage === totalPages)}>
                {totalPages}
                </button>
            </>
            )}

            {/* Next button */}
            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: "none",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                backgroundColor: "#444",
                color: "#fff",
            }}
            >
            Next &#8594;
            </button>
        </div>
        </div>
    );
    };

    // Dynamic page button style
    const pageButtonStyle = (isActive) => ({
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isActive ? "#2ecc71" : "#444",
    color: "#fff",
    });

    export default ProductSection;