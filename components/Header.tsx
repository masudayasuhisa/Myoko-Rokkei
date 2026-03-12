"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";

const NAV = [
    { n: "Gallery", h: "#gallery" },
    { n: "Plans", h: "#plan" },
    { n: "Flow", h: "#flow" },
    { n: "Team", h: "#team" },
    { n: "FAQ", h: "#faq" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navColor = scrolled ? "rgba(18,26,22,0.55)" : "rgba(255,255,255,0.75)";
    const navHover = scrolled ? "rgba(18,26,22,1)" : "rgba(255,255,255,1)";

    return (
        <>
            {/* Main header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 100,
                    padding: scrolled ? "14px 0" : "26px 0",
                    background: scrolled ? "rgba(255,255,255,0.90)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
                    transition: "padding 0.6s ease, background 0.6s ease, border-color 0.6s ease, backdrop-filter 0.6s ease",
                }}
            >
                <div
                    className="container"
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                    {/* Logo — bird image + text */}
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", transition: "opacity 0.4s ease" }}>
                            <img
                                src="/images/logo-bird.png"
                                alt="Myoko Rokkei bird logo"
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    objectFit: "contain",
                                    filter: scrolled ? "none" : "brightness(0) invert(1)",
                                    transition: "filter 0.5s ease",
                                }}
                            />
                            <div>
                                <div
                                    style={{
                                        fontFamily: "var(--font-serif)",
                                        fontSize: "1.3rem",
                                        letterSpacing: "0.2em",
                                        lineHeight: 1,
                                        color: scrolled ? "var(--primary)" : "#fff",
                                        transition: "color 0.5s ease",
                                    }}
                                >
                                    妙高麓景
                                </div>
                                <div
                                    style={{
                                        fontSize: "7px",
                                        fontWeight: 800,
                                        letterSpacing: "0.4em",
                                        textTransform: "uppercase",
                                        color: scrolled ? "rgba(18,26,22,0.3)" : "rgba(255,255,255,0.4)",
                                        marginTop: "3px",
                                        transition: "color 0.5s ease",
                                    }}
                                >
                                    Myoko Rokkei
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
                        {NAV.map((item) => (
                            <a
                                key={item.n}
                                href={item.h}
                                style={{
                                    fontSize: "9px",
                                    fontWeight: 800,
                                    letterSpacing: "0.28em",
                                    textTransform: "uppercase",
                                    textDecoration: "none",
                                    color: navColor,
                                    transition: "color 0.3s ease",
                                }}
                                className="nav-desktop-only"
                                onMouseEnter={(e) => (e.currentTarget.style.color = navHover)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = navColor)}
                            >
                                {item.n}
                            </a>
                        ))}

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: navColor,
                                display: "flex",
                                alignItems: "center",
                                transition: "color 0.3s ease",
                            }}
                            className="nav-desktop-only"
                            onMouseEnter={(e) => (e.currentTarget.style.color = navHover)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = navColor)}
                        >
                            <Instagram size={15} strokeWidth={1.8} />
                        </a>

                        <a
                            href="#contact"
                            style={{
                                fontSize: "9px",
                                fontWeight: 800,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                padding: "0.6rem 1.4rem",
                                borderRadius: "100px",
                                border: scrolled ? "1px solid rgba(18,26,22,0.25)" : "1px solid rgba(255,255,255,0.5)",
                                color: scrolled ? "var(--primary)" : "#fff",
                                background: "transparent",
                                transition: "all 0.35s ease",
                            }}
                            className="nav-desktop-only"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = scrolled ? "var(--primary)" : "rgba(255,255,255,0.15)";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.borderColor = scrolled ? "var(--primary)" : "rgba(255,255,255,0.7)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = scrolled ? "var(--primary)" : "#fff";
                                e.currentTarget.style.borderColor = scrolled ? "rgba(18,26,22,0.25)" : "rgba(255,255,255,0.5)";
                            }}
                        >
                            Inquiry
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: scrolled ? "var(--primary)" : "#fff",
                                padding: "4px",
                            }}
                            className="header-hamburger"
                        >
                            <Menu size={24} strokeWidth={1.2} />
                        </button>

                        <style jsx>{`
                            @media (max-width: 768px) {
                                :global(.nav-desktop-only) {
                                    display: none !important;
                                }
                                .header-hamburger {
                                    display: block !important;
                                }
                            }
                            @media (min-width: 769px) {
                                .header-hamburger {
                                    display: none !important;
                                }
                            }
                        `}</style>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 200,
                            background: "rgba(18,26,22,0.97)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2rem",
                        }}
                    >
                        <button
                            onClick={() => setMobileOpen(false)}
                            style={{
                                position: "absolute",
                                top: "24px",
                                right: "24px",
                                background: "none",
                                border: "none",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            <X size={24} strokeWidth={1.5} />
                        </button>

                        {/* Mobile Menu Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            style={{ marginBottom: "2.5rem", textAlign: "center" }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                                <img
                                    src="/images/logo-bird.png"
                                    alt=""
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        objectFit: "contain",
                                        filter: "brightness(0) invert(1)",
                                    }}
                                />
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontFamily: "var(--font-serif)",
                                            fontSize: "1.6rem",
                                            letterSpacing: "0.25em",
                                            lineHeight: 1,
                                            color: "#fff",
                                        }}
                                    >
                                        妙高麓景
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "8px",
                                            fontWeight: 800,
                                            letterSpacing: "0.45em",
                                            textTransform: "uppercase",
                                            color: "rgba(255,255,255,0.5)",
                                            marginTop: "6px",
                                        }}
                                    >
                                        Myoko Rokkei
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {NAV.map((item, i) => (
                            <motion.a
                                key={item.n}
                                href={item.h}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.08,
                                    duration: 1.0,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                style={{
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "1.25rem",
                                    color: "rgba(255,255,255,0.8)",
                                    textDecoration: "none",
                                    letterSpacing: "0.15em",
                                }}
                            >
                                {item.n}
                            </motion.a>
                        ))}

                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: NAV.length * 0.08, duration: 0.5 }}
                            style={{
                                color: "rgba(255,255,255,0.8)",
                                display: "flex",
                                alignItems: "center",
                                marginTop: "0.5rem",
                            }}
                        >
                            <Instagram size={22} strokeWidth={1.5} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: NAV.length * 0.08, duration: 0.5 }}
                            style={{
                                marginTop: "0.5rem",
                                fontSize: "9px",
                                fontWeight: 800,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                padding: "0.8rem 2.2rem",
                                borderRadius: "100px",
                                border: "1px solid rgba(255,255,255,0.4)",
                                color: "#fff",
                                background: "transparent",
                                transition: "all 0.3s ease",
                            }}
                        >
                            Inquiry
                        </motion.a>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: (NAV.length + 1) * 0.08 + 0.2, duration: 0.8 }}
                            style={{
                                position: "absolute",
                                bottom: "40px",
                                left: 0,
                                width: "100%",
                                textAlign: "center",
                                pointerEvents: "none",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "8px",
                                    fontWeight: 400,
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.3)",
                                }}
                            >
                                &copy; 2026 Myoko Rokkei. All Rights Reserved.
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
