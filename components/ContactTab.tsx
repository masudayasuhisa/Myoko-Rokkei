"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactTab() {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY;
            const contactSection = document.getElementById("contact");
            let isInsideContact = false;

            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                // If the top of the contact section is within 100px of the bottom of the viewport
                isInsideContact = rect.top < window.innerHeight - 100;
            }

            setVisible(scrollPos > 400 && !isInsideContact);
        };
        const onResize = () => setIsMobile(window.innerWidth <= 768);

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        // Initial checks
        onScroll();
        onResize();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const variants = {
        initial: {
            opacity: 0,
            x: isMobile ? 0 : 60,
            y: isMobile ? 60 : "-50%"
        },
        animate: {
            opacity: 1,
            x: 0,
            y: "-50%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        },
        mobileAnimate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        },
        exit: {
            opacity: 0,
            x: isMobile ? 0 : 60,
            y: isMobile ? 60 : "-50%",
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="#contact"
                    variants={variants}
                    initial="initial"
                    animate={isMobile ? "mobileAnimate" : "animate"}
                    exit="exit"
                    className="contact-trigger"
                    style={{
                        position: "fixed",
                        zIndex: 150,
                        backgroundColor: "#333333",
                        color: "#fff",
                        textDecoration: "none",
                        boxShadow: "0 -4px 30px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // Base styles that are overridden or supplemented by variants
                        ...(isMobile ? {
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            flexDirection: "row",
                            padding: "20px 0",
                            borderRadius: 0,
                        } : {
                            top: "50%",
                            right: 0,
                            flexDirection: "column",
                            padding: "24px 14px",
                            borderRadius: "8px 0 0 8px",
                            writingMode: "vertical-rl",
                        })
                    }}
                >
                    <div className="label-container" style={{
                        display: "flex",
                        flexDirection: isMobile ? "row" : "column",
                        gap: isMobile ? "12px" : "10px",
                        alignItems: "center"
                    }}>
                        <span className="label-en" style={{
                            fontSize: isMobile ? "10px" : "9px",
                            fontWeight: 700,
                            letterSpacing: "0.38em",
                            fontFamily: "var(--font-sans)",
                        }}>
                            INQUIRY
                        </span>
                        <span className="label-jp" style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: isMobile ? "12px" : "11px",
                            letterSpacing: "0.2em",
                            opacity: 0.65,
                        }}>
                            お問い合わせ
                        </span>
                    </div>

                    <style jsx>{`
                        .contact-trigger :global(.contact-icon) {
                            margin-bottom: ${isMobile ? '0' : '2px'};
                        }
                    `}</style>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
