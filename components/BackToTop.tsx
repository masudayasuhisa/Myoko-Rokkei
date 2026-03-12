"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };
        const onResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", toggleVisibility);
        window.addEventListener("resize", onResize);

        onResize(); // Initial check

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        position: "fixed",
                        bottom: isMobile ? "80px" : "30px", // Increased on mobile to avoid ContactTab
                        right: isMobile ? "16px" : "24px",
                        zIndex: 140, // Just below ContactTab (150)
                        width: isMobile ? "44px" : "50px",
                        height: isMobile ? "44px" : "50px",
                        borderRadius: "50%",
                        backgroundColor: "#333333",
                        border: "none",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "bottom 0.3s ease, right 0.3s ease",
                    }}
                >
                    <ChevronUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
