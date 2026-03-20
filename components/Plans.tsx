import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Myoko Alouette",
        subtitle: "(洋装プラン)",
        price: "308,000",
        details: ["衣装・ヘアメイク", "ロケ1ヶ所"],
        includes: [
            "セレクトデータ (100cut〜)",
            "洋装衣装 1着",
            "小物一式",
            "ヘアメイク・アテンド",
            "セレクトデータ補正"
        ]
    },
    {
        name: "あわい妙高",
        subtitle: "(和装プラン)",
        price: "385,000",
        details: ["衣装・着付け・ヘアメイク", "ロケ1ヶ所"],
        includes: [
            "セレクトデータ (100cut〜)",
            "和装衣装 1着",
            "小物・着付け一式",
            "ヘアメイク・アテンド",
            "セレクトデータ補正"
        ]
    },
    {
        name: "Twain:妙高麓景",
        subtitle: "(和洋プラン)",
        price: "495,000",
        details: ["衣装・着付け・ヘアメイク", "ロケ2ヶ所"],
        includes: [
            "セレクトデータ (200cut〜)",
            "和装・洋装 各1着",
            "小物・着付け一式",
            "ヘアメイク・アテンド",
            "セレクトデータ補正"
        ]
    },
];

export default function Plans() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="plan" className="v-plans-section v-bg-paper" style={{ padding: isMobile ? "100px 0" : "180px 0" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <img src="/images/illus-ring.png" alt="" aria-hidden="true" style={{ width: "64px", display: "block", margin: "0 auto 0.8rem", mixBlendMode: "multiply" }} />
                    <span className="v-title-tag">Plans</span>
                    <h2 className="v-section-title serif mb-0">
                        撮影プラン
                    </h2>
                </div>

                <div className="grid v-grid-3 gap-8" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className="plan-card v-rounded-3xl flex flex-col items-center text-center v-shadow-premium border border-white h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            style={{
                                backgroundColor: "#FFFFFF",
                                padding: isMobile ? "40px 2rem" : "50px 3rem",
                                boxSizing: "border-box",
                                border: "1px solid rgba(18,26,22,0.03)"
                            }}
                        >
                            <div className="flex-1 flex flex-col items-center w-full">
                                <h3 className="serif mb-2" style={{ fontSize: "1.4rem", lineHeight: 1.4 }}>{plan.name}</h3>
                                <span className="serif mb-8 block opacity-50" style={{ fontSize: "0.9rem" }}>{plan.subtitle}</span>

                                <div className="text-accent mb-8" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.6 }}>
                                    <div style={{ fontSize: "1.8rem" }}>
                                        <span style={{ fontSize: "0.8rem", marginRight: "4px" }}>¥</span>
                                        {plan.price}
                                    </div>
                                    <div style={{ fontSize: "0.7rem", opacity: 0.4, letterSpacing: "0.08em" }}>Tax included</div>
                                </div>

                                <div className="serif mb-10" style={{ fontSize: "0.95rem", lineHeight: 2.2, opacity: 0.8 }}>
                                    {plan.details.map((line, idx) => (
                                        <div key={idx}>{line}</div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ width: "100%", borderTop: "1px solid rgba(18,26,22,0.06)", paddingTop: "2.5rem" }}>
                                <p className="serif" style={{ fontSize: "9px", letterSpacing: "0.3em", opacity: 0.3, marginBottom: "1rem" }}>INCLUDED</p>
                                <div className="serif" style={{ fontSize: "0.8rem", opacity: 0.6, lineHeight: 2.4 }}>
                                    {plan.includes.map((item, idx) => (
                                        <div key={idx}>{item}</div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ maxWidth: "1200px", margin: "3rem auto 0", textAlign: "center" }}>
                    <p className="serif" style={{ fontSize: "0.85rem", opacity: 0.5 }}>
                        ※ロケ地により別途費用発生
                    </p>
                </div>
            </div>
        </section>
    );
}
