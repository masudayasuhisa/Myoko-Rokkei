"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
};

const IMAGES = [
    "/images/top_pc/20250820_0064.jpg",
    "/images/top_pc/20250820_0150.jpg",
    "/images/top_pc/20250820_0161.jpg",
    "/images/top_pc/20250820_0195.jpg",
    "/images/top_pc/20250820_0239.jpg",
    "/images/top_pc/20250820_0225.jpg",
    "/images/top_pc/20250820_0240.jpg",
    "/images/top_pc/20250820_0298.jpg",
    "/images/top_pc/5C3A5886.jpg",
    "/images/top_pc/5C3A5904.jpg",
    "/images/top_pc/5C3A5995.jpg",
    "/images/top_pc/5C3A6021.jpg",
    "/images/top_pc/5C3A6037.jpg",
    "/images/top_pc/photo_031.jpg",
    "/images/top_pc/photo_123.jpg",
    "/images/top_pc/photo_169.jpg",
];

const MOBILE_IMAGES = [
    "/images/top_sp/1.png",
    "/images/top_sp/2.png",
    "/images/top_sp/3.png",
    "/images/top_sp/4.png",
    "/images/top_sp/5.png",
    "/images/top_sp/6.png",
    "/images/top_sp/7.png",
    "/images/top_sp/8.png",
    "/images/top_sp/9.png",
    "/images/top_sp/10.png",
    "/images/top_sp/11.png",
    "/images/top_sp/12.png",
    "/images/top_sp/13.png",
    "/images/top_sp/14.png",
];

// --- Layout configuration ---
const VERTICAL_LAYOUT = true; // Set to false to revert to horizontal layout

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [pcIndex, setPcIndex] = useState(0);
    const [mobileIndex, setMobileIndex] = useState(0);
    const [pcShuffled, setPcShuffled] = useState<string[]>([]);
    const [mobileShuffled, setMobileShuffled] = useState<string[]>([]);
    const [isInitialBlur, setIsInitialBlur] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Initialize shuffled arrays
        setPcShuffled([...IMAGES].sort(() => Math.random() - 0.5));
        setMobileShuffled([...MOBILE_IMAGES].sort(() => Math.random() - 0.5));

        const pcTimer = setInterval(() => {
            setPcIndex((prev) => (prev + 1) % IMAGES.length);
        }, 6000);

        const mobileTimer = setInterval(() => {
            setMobileIndex((prev) => (prev + 1) % MOBILE_IMAGES.length);
        }, 6000);

        const blurTimer = setTimeout(() => {
            setIsInitialBlur(false);
        }, 3500);

        return () => {
            clearInterval(pcTimer);
            clearInterval(mobileTimer);
            clearTimeout(blurTimer);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    if (!mounted) {
        return (
            <section
                style={{
                    width: "100%",
                    height: "100vh",
                    background: "#000",
                }}
            />
        );
    }

    const pcImages = (pcShuffled.length > 0 ? pcShuffled : IMAGES).map(url => `${url}?v=3`);
    const mobileImages = (mobileShuffled.length > 0 ? mobileShuffled : MOBILE_IMAGES).map(url => `${url}?v=3`);

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#000",
            }}
        >
            {/* Conditional Rendering to prevent double download */}
            {isMobile ? (
                <div className="mobile-only" style={{ position: "absolute", inset: 0 }}>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={mobileIndex}
                            initial={{ opacity: 0, scale: 1.0, filter: isInitialBlur && mobileIndex === 0 ? "blur(15px)" : "blur(0px)" }}
                            animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 2.5, ease: "easeInOut" },
                                scale: { duration: 10, ease: "linear" },
                                filter: { duration: isInitialBlur && mobileIndex === 0 ? 2.5 : 1, ease: "easeInOut" }
                            }}
                            style={{ position: "absolute", inset: 0 }}
                        >
                            <img
                                src={mobileImages[mobileIndex]}
                                alt="Myoko Rokkei"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            ) : (
                <div className="pc-only" style={{ position: "absolute", inset: 0 }}>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={pcIndex}
                            initial={{ opacity: 0, scale: 1.0, filter: isInitialBlur && pcIndex === 0 ? "blur(15px)" : "blur(0px)" }}
                            animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 2.5, ease: "easeInOut" },
                                scale: { duration: 10, ease: "linear" },
                                filter: { duration: isInitialBlur && pcIndex === 0 ? 2.5 : 1, ease: "easeInOut" }
                            }}
                            style={{ position: "absolute", inset: 0 }}
                        >
                            <img
                                src={pcImages[pcIndex]}
                                alt="Myoko Rokkei"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}

            {/* Subtle gradient at bottom for text readability */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.25) 100%)",
                }}
            />
            {/* Top gradient to make header nav legible */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "140px",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <motion.div
                className="container"
                style={{
                    position: "relative",
                    zIndex: 10,
                    top: VERTICAL_LAYOUT ? (isMobile ? "0" : "0") : "40px",
                    width: "100%",
                    height: VERTICAL_LAYOUT ? (isMobile ? "calc(100vh - 180px)" : "500px") : "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "flex-end" : "center",
                    alignItems: isMobile ? "center" : "flex-start",
                    paddingBottom: isMobile ? "40px" : "0",
                }}
                variants={stagger}
                initial="hidden"
                animate="show"
            >
                {VERTICAL_LAYOUT && !isMobile && (
                    <motion.div
                        variants={fadeUp}
                        style={{
                            position: "absolute",
                            right: "100px",
                            top: "20px", // Even closer to top
                            display: "flex",
                            flexDirection: "row-reverse",
                            gap: "1.8rem", // Further reduce gap
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "var(--font-serif)",
                                color: "#fff",
                                fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
                                writingMode: "vertical-rl",
                                letterSpacing: "0.15em",
                                lineHeight: 1.0,
                                textShadow: "0 0 50px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.4)",
                            }}
                        >
                            ふるさとの山に、
                        </h1>
                        <h1
                            style={{
                                fontFamily: "var(--font-serif)",
                                color: "#fff",
                                fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
                                writingMode: "vertical-rl",
                                letterSpacing: "0.15em",
                                lineHeight: 1.0,
                                textShadow: "0 0 50px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.4)",
                            }}
                        >
                            永遠を誓う。
                        </h1>
                    </motion.div>
                )}

                {VERTICAL_LAYOUT && isMobile && (
                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            justifyContent: "center",
                            gap: "1.2rem",
                            position: "absolute",
                            top: "40px",
                            left: 0,
                            right: 0,
                            zIndex: 20
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "var(--font-serif)",
                                color: "#fff",
                                fontSize: "2.4rem",
                                writingMode: "vertical-rl",
                                letterSpacing: "0.2em",
                                lineHeight: 1.4,
                                textShadow: "0 0 30px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.4)",
                            }}
                        >
                            ふるさとの山に、
                        </h1>
                        <h1
                            style={{
                                fontFamily: "var(--font-serif)",
                                color: "#fff",
                                fontSize: "2.4rem",
                                writingMode: "vertical-rl",
                                letterSpacing: "0.2em",
                                lineHeight: 1.4,
                                textShadow: "0 0 30px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.4)",
                            }}
                        >
                            永遠を誓う。
                        </h1>
                    </motion.div>
                )}

                {!VERTICAL_LAYOUT && (
                    <>
                        <motion.span
                            variants={fadeUp}
                            style={{
                                display: "block",
                                fontFamily: "var(--font-serif)",
                                fontSize: "13px",
                                fontWeight: 600,
                                letterSpacing: "0.2em",
                                color: "#fff",
                                marginBottom: "15px",
                            }}
                        >
                            Nature&apos;s Grandeur,{isMobile ? <br /> : " "}Your Everlasting Vow.
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            style={{
                                fontFamily: "var(--font-serif)",
                                color: "#fff",
                                fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
                                lineHeight: 1.3,
                                marginBottom: "1.5rem",
                                textShadow: isMobile
                                    ? "0 0 60px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.5)"
                                    : "0 0 50px rgba(255,255,255,0.45), 0 0 20px rgba(255,255,255,0.25), 0 2px 20px rgba(0,0,0,0.4)",
                            }}
                        >
                            <span className="inline-block">ふるさとの山に、</span>
                            <br />
                            <span className="inline-block">永遠を誓う。</span>
                        </motion.h1>

                        <motion.div
                            variants={fadeUp}
                            style={{
                                fontSize: "10px",
                                fontWeight: 800,
                                letterSpacing: "0.4em",
                                color: "rgba(255,255,255,0.6)",
                                textTransform: "uppercase",
                            }}
                        >
                            MYOKO ROKKEI | WEDDING PHOTO
                        </motion.div>
                    </>
                )}

                {VERTICAL_LAYOUT && (
                    <div style={{ 
                        maxWidth: isMobile ? "100%" : "500px",
                        textAlign: isMobile ? "center" : "left"
                    }}>
                        <motion.span
                            variants={fadeUp}
                            style={{
                                display: "block",
                                fontFamily: "var(--font-serif)",
                                fontSize: isMobile ? "11px" : "13px",
                                fontWeight: 600,
                                letterSpacing: "0.2em",
                                color: "#fff",
                                marginBottom: "20px",
                                opacity: 0.9
                            }}
                        >
                            Nature&apos;s Grandeur,<br />Your Everlasting Vow.
                        </motion.span>

                        <motion.div
                            variants={fadeUp}
                            style={{
                                fontSize: "10px",
                                fontWeight: 800,
                                letterSpacing: "0.45em",
                                color: "rgba(255,255,255,0.7)",
                                textTransform: "uppercase",
                                marginBottom: "40px"
                            }}
                        >
                            {isMobile ? (
                                <>MYOKO ROKKEI<br />WEDDING PHOTO</>
                            ) : (
                                <>MYOKO ROKKEI | WEDDING PHOTO</>
                            )}
                        </motion.div>
                    </div>
                )}


                <motion.div
                    variants={fadeUp}
                    className="hero-buttons"
                    style={{
                        display: "flex",
                        gap: isMobile ? "10px" : "24px",
                        justifyContent: VERTICAL_LAYOUT ? (isMobile ? "center" : "flex-start") : "center",
                        flexWrap: "wrap",
                        marginTop: VERTICAL_LAYOUT ? (isMobile ? "20px" : "20px") : "190px"
                    }}
                >
                    <a
                        href="#plan"
                        className="hero-btn"
                        style={{
                            display: "inline-block",
                            width: "180px",
                            padding: "1rem 0",
                            borderRadius: "100px",
                            background: "#fff",
                            color: "var(--primary)",
                            fontSize: "10px",
                            fontWeight: 800,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "all 0.35s ease",
                            textAlign: "center",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--primary)";
                            e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#fff";
                            e.currentTarget.style.color = "var(--primary)";
                        }}
                    >
                        View Plans
                    </a>
                    <a
                        href="#gallery"
                        className="hero-btn"
                        style={{
                            display: "inline-block",
                            width: "180px",
                            padding: "1rem 0",
                            borderRadius: "100px",
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.5)",
                            color: "#fff",
                            fontSize: "10px",
                            fontWeight: 800,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "all 0.35s ease",
                            textAlign: "center",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                        }}
                    >
                        Gallery
                    </a>
                    <style jsx>{`
                        @media (min-width: 769px) {
                            .mobile-only { display: none; }
                        }
                        @media (max-width: 768px) {
                            .pc-only { display: none; }
                        }
                        @media (max-width: 768px) {
                            .hero-buttons {
                                margin-top: ${VERTICAL_LAYOUT ? "0px" : "120px"} !important;
                                gap: 15px !important;
                                flex-direction: ${VERTICAL_LAYOUT ? "row" : "column"} !important;
                                justify-content: center !important;
                                align-items: center !important;
                            }
                            .hero-btn {
                                width: ${VERTICAL_LAYOUT ? "160px" : "220px"} !important;
                                padding: ${VERTICAL_LAYOUT ? "0.9rem 0" : "1.2rem 0"} !important;
                            }
                        }
                        @media (max-width: 414px) {
                            .hero-buttons {
                                margin-top: ${VERTICAL_LAYOUT ? "0px" : "80px"} !important;
                            }
                        }
                    `}</style>
                </motion.div>
            </motion.div>


            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: isMobile ? "auto" : "calc(50% - 5px)",
                    right: isMobile ? "24px" : "auto",
                    transform: isMobile ? "none" : "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    opacity: 0.35,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "8px",
                            fontWeight: 800,
                            letterSpacing: "0.6em",
                            color: "#fff",
                            writingMode: "vertical-rl",
                            textTransform: "uppercase",
                            display: "block",
                            marginRight: "-0.6em",
                        }}
                    >
                        Scroll
                    </span>
                    <motion.div
                        animate={{ scaleY: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: "1px",
                            height: "50px",
                            background: "#fff",
                            transformOrigin: "top",
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
