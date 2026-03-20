"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
    "/images/g1.jpg",
    "/images/top_pc/5C3A5995.jpg",
    "/images/g2.jpg",
    "/images/top_pc/20250820_0239.jpg",
    "/images/g3.jpg",
    "/images/top_pc/photo_031.jpg",
    "/images/g4.jpg",
    "/images/top_pc/20250820_0240.jpg",
    "/images/g5.jpg",
    "/images/top_pc/5C3A6021.jpg",
    "/images/g6.jpg",
    "/images/top_pc/photo_123.jpg",
    "/images/g7.jpg",
    "/images/top_pc/20250820_0150.jpg",
    "/images/g8.jpg",
    "/images/top_pc/20250820_0064.jpg",
    "/images/g9.jpg",
    "/images/top_pc/photo_169.jpg",
    "/images/top_pc/20250820_0225.jpg",
    "/images/top_pc/5C3A5904.jpg",
    "/images/top_pc/20250820_0161.jpg",
    "/images/top_pc/5C3A6037.jpg",
    "/images/top_pc/20250820_0195.jpg",
    "/images/top_pc/20250820_0298.jpg",
];

export default function Gallery() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    const prev = useCallback(() => {
        setSelectedIdx(i => i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null);
    }, []);

    const next = useCallback(() => {
        setSelectedIdx(i => i !== null ? (i + 1) % IMAGES.length : null);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        if (selectedIdx === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") setSelectedIdx(null);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedIdx, next, prev]);

    return (
        <section id="gallery" className="v-bg-paper" style={{ padding: "100px 0" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <img src="/images/illus-bird.png" alt="" aria-hidden="true" style={{ width: "64px", display: "block", margin: "0 auto 0.8rem", mixBlendMode: "multiply" }} />
                    <span className="v-title-tag">Gallery</span>
                    <h2 className="v-section-title serif mb-0">
                        フォトギャラリー
                    </h2>
                </div>

                {/* Responsive grid */}
                <div
                    className="gallery-grid"
                    style={{
                        display: "grid",
                        gap: "16px",
                    }}
                >
                    {IMAGES.map((src, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setSelectedIdx(i)}
                            style={{
                                all: "unset",
                                cursor: "pointer",
                                display: "block",
                                aspectRatio: "3/2",
                                overflow: "hidden",
                                borderRadius: "16px",
                                position: "relative",
                            }}
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.04 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                className="v-pf-image"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                            {/* Hover overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(18,26,22,0.2)",
                                    opacity: 0,
                                    transition: "opacity 0.4s ease",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "0")}
                            />
                        </motion.button>
                    ))}
                    <style jsx>{`
                        .gallery-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                        @media (max-width: 991px) {
                            .gallery-grid {
                                grid-template-columns: repeat(2, 1fr);
                            }
                        }
                        @media (max-width: 414px) {
                            .gallery-grid {
                                gap: 10px;
                            }
                        }
                    `}</style>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedIdx(null)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 200,
                            background: "rgba(10,14,12,0.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "24px",
                        }}
                    >
                        {/* Prev button */}
                        <button
                            onClick={e => { e.stopPropagation(); prev(); }}
                            style={{
                                position: "fixed",
                                left: "24px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "rgba(255,255,255,0.1)",
                                border: "none",
                                borderRadius: "100%",
                                width: "52px",
                                height: "52px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#fff",
                                backdropFilter: "blur(8px)",
                                transition: "background 0.2s ease",
                                zIndex: 201,
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                        >
                            <ChevronLeft size={22} strokeWidth={1.5} />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIdx}
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.94, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                onClick={e => e.stopPropagation()}
                                style={{
                                    position: "relative",
                                    maxWidth: "1000px",
                                    maxHeight: "85vh",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                                }}
                            >
                                <img
                                    src={IMAGES[selectedIdx]}
                                    alt="Gallery enlarged"
                                    style={{
                                        display: "block",
                                        maxWidth: "100%",
                                        maxHeight: "85vh",
                                        objectFit: "contain",
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Next button */}
                        <button
                            onClick={e => { e.stopPropagation(); next(); }}
                            style={{
                                position: "fixed",
                                right: "24px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "rgba(255,255,255,0.1)",
                                border: "none",
                                borderRadius: "100%",
                                width: "52px",
                                height: "52px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#fff",
                                backdropFilter: "blur(8px)",
                                transition: "background 0.2s ease",
                                zIndex: 201,
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                        >
                            <ChevronRight size={22} strokeWidth={1.5} />
                        </button>

                        {/* Counter */}
                        <div style={{
                            position: "fixed",
                            bottom: "24px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "var(--font-serif)",
                            fontSize: "12px",
                            letterSpacing: "0.2em",
                        }}>
                            {selectedIdx + 1} / {IMAGES.length}
                        </div>

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedIdx(null)}
                            style={{
                                position: "fixed",
                                top: "24px",
                                right: "24px",
                                background: "rgba(255,255,255,0.1)",
                                border: "none",
                                borderRadius: "100%",
                                width: "48px",
                                height: "48px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#fff",
                                backdropFilter: "blur(8px)",
                                transition: "background 0.2s ease",
                                zIndex: 201,
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                        >
                            <X size={20} strokeWidth={1.5} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
