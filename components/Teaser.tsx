"use client";
import { motion } from "framer-motion";

export default function Teaser() {
    return (
        <section id="teaser" style={{ padding: "100px 0", background: "#f8f7f5" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <span className="v-title-tag">TEASER MOVIE</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="v-shadow-premium"
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                        borderRadius: "24px",
                        overflow: "hidden",
                        background: "#000",
                        position: "relative",
                        aspectRatio: "16/9"
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/_fXKriP2_Jk?rel=0&modestbranding=1"
                        title="Teaser Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
