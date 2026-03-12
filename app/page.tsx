"use client";
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

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <ContactTab />
            <BackToTop />
            <main>
                <Hero />

                {/* Lead copy below hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        textAlign: "center",
                        padding: "80px 24px",
                        background: "#fff",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(0.88rem, 1.5vw, 1rem)",
                            lineHeight: 2.6,
                            letterSpacing: "0.08em",
                            color: "rgba(18,26,22,0.65)",
                            maxWidth: "560px",
                            margin: "0 auto",
                        }}
                    >
                        この妙高麓景のウェディングフォトは、<br />
                        クリエイティブチームのメンバーが<br />
                        ここ妙高の地の雄大な自然に深く魅せられ、<br />
                        この地の魅力をお二人の記念日と重ねて<br />
                        お届けしていきたいと思ったところがはじまり。
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(0.88rem, 1.5vw, 1rem)",
                            lineHeight: 2.6,
                            letterSpacing: "0.08em",
                            color: "rgba(18,26,22,0.65)",
                            maxWidth: "560px",
                            margin: "1.6rem auto 0",
                        }}
                    >
                        妙高が大好きな方も、はじめましての方も。<br />
                        このおおらかな土地とお二人の未来、<br className="md:hidden" />重ねてみませんか。
                    </p>
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Concept />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Gallery />
                </motion.div>

                <motion.section id="location" className="section-padding v-bg-soft" {...fadeInUp}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
                            <img src="/images/illus-mountain.png" alt="" aria-hidden="true" style={{ width: '68px', display: 'block', margin: '0 auto 0.8rem', mixBlendMode: 'multiply' }} />
                            <span className="v-title-tag">Location</span>
                            <h2 className="v-section-title serif">撮影ロケーション</h2>
                        </div>

                        <div className="grid v-grid-3 gap-8">
                            {[
                                { t: "笹ヶ峰高原", d: "海外の深い山のような高原の風景が広がります。駐車場からのすぐの場所で雄大な妙高山のビューとドイツトウヒの森、白樺の林など大自然の撮影を十分にお楽しみいただけます。" },
                                { t: "いもり池", d: "いもり池越しに見るシンボリックな妙高山。小道での撮影や併設のビジターセンターでの建物を活用した写真など、アクセス良好でありながらバリエーションに富んだ撮影が可能です。" },
                                { t: "西野谷と岡沢の森", d: "どこまでも広がる深い深い針葉樹の森。北欧に迷い込んだかのような森と雄大な棚田の風景の中での撮影が楽しめます。湧き水でコーヒーを楽しんだり、アウトドア派にもぴったりです。" }
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
                                    <h3 className="serif mb-4" style={{ fontSize: '1.2rem', textAlign: 'left' }}>{loc.t}</h3>
                                    <p className="serif" style={{ fontSize: '0.8rem', opacity: 0.5, textAlign: 'left' }}>{loc.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.div {...fadeInUp}>
                    <Plans />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Team />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Values />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Flow />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <FAQ />
                </motion.div>

                <motion.div {...fadeInUp}>
                    <Contact />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
