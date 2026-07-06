"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Gallery from "@/components/Gallery";
import Plans from "@/components/Plans";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactTab from "@/components/ContactTab";
import BackToTop from "@/components/BackToTop";
import Teaser from "@/components/Teaser";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export default function HomeEN() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="relative">
            <Header locale="en" />
            <ContactTab locale="en" />
            <BackToTop />
            <main>
                <Hero locale="en" />

                {/* Lead copy below hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    className="v-bg-paper"
                    style={{
                        padding: isMobile ? "80px 24px 40px" : "120px 24px 60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            writingMode: "horizontal-tb",
                            fontFamily: "var(--font-serif)",
                            fontSize: isMobile ? "0.85rem" : "clamp(0.9rem, 1.2vw, 1.05rem)",
                            lineHeight: 2.2,
                            letterSpacing: "0.08em",
                            color: "rgba(18,26,22,0.8)",
                            margin: "0 auto",
                            textAlign: "center",
                            maxWidth: "640px"
                        }}
                    >
                        Our Myoko Rokkei wedding photography began<br />
                        when our creative team fell deeply in love<br />
                        with the magnificent nature of Myoko,<br />
                        and wished to weave the charm of this land<br />
                        into your special anniversary.<br />
                        <br />
                        Whether you love Myoko or are visiting for the first time,<br />
                        why not overlap the future of you two<br />
                        with this warm and welcoming land?
                    </div>
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Concept locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Gallery locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Teaser />
                </motion.div>

                <motion.section id="location" className="section-padding v-bg-soft" {...fadeInUp}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
                            <img src="/images/illus-mountain.png" alt="" aria-hidden="true" style={{ width: '68px', display: 'block', margin: '0 auto 0.8rem', mixBlendMode: 'multiply' }} />
                            <span className="v-title-tag">Location</span>
                            <h2 className="v-section-title serif">Locations</h2>
                        </div>

                        <div className="grid v-grid-3 gap-8">
                            {[
                                { t: "Sasagamine Plateau", d: "A landscape resembling a deep mountainous highland abroad unfolds. Right next to the parking lot, you can fully enjoy photographing the grand Mt. Myoko view, Norway spruce forests, and white birch groves in the midst of wild nature." },
                                { t: "Imori Pond", d: "The iconic Mt. Myoko viewed across Imori Pond. Photos captured on the trails or utilizing the architecture of the visitor center provide a variety of shots while offering excellent access." },
                                { t: "Nishinoya & Okazawa Forest", d: "A deep, endless coniferous forest that makes you feel as if you have wandered into Scandinavia. Enjoy photos within the forest and the magnificent terraced rice fields. Perfect for outdoor enthusiasts to enjoy coffee brewed with spring water." }
                            ].map((loc, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white p-10 v-rounded-3xl v-hover-reveal v-shadow-premium"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                >
                                    <div className="aspect-4-5 v-bg-soft v-rounded-3xl mb-10 v-overflow-hidden">
                                        <div className="v-pf-image w-full h-full v-bg-cover v-bg-center"
                                            style={{ backgroundImage: `url('/images/${["loc_sasagamine.jpg", "loc_imoriike.jpg", "loc_nishinoya.jpg"][i]}')` }} />
                                    </div>
                                    <h3 className="serif mb-4" style={{ fontSize: '1.15rem', textAlign: 'left', fontWeight: 500 }}>{loc.t}</h3>
                                    <p className="serif" style={{ fontSize: '0.8rem', opacity: 0.5, textAlign: 'left', lineHeight: 1.8 }}>{loc.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.div {...fadeInUp}>
                    <Plans locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Team locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Values locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Flow locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <FAQ locale="en" />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Contact locale="en" />
                </motion.div>
            </main>
            <Footer locale="en" />
        </div>
    );
}
