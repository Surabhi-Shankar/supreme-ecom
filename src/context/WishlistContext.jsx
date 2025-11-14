    import { createContext, useContext, useState } from "react";

    // Create and export the context
    export const WishlistContext = createContext();

    export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
    }

    export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => {
        // Check if product already exists in wishlist
        const exists = prevItems.find((item) => item.id === product.id);
        if (exists) {
            return prevItems; // Don't add duplicate
        }
        return [...prevItems, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
        );
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some((item) => item.id === productId);
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    const value = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount: wishlistItems.length,
    };

    return (
        <WishlistContext.Provider value={value}>
        {children}
        </WishlistContext.Provider>
    );
    }