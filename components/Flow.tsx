import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Ruler, Camera, Image as ImageIcon } from "lucide-react";

export default function Flow() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const steps = [
        { t: "Inquiry", j: "お問い合わせ", d: "WebフォームまたはInstagramのDMからお気軽にご連絡ください。担当者より折り返しご連絡いたします。", icon: Mail },
        { t: "Consultation", j: "お打ち合わせ", d: "Zoomなどオンラインでも対応。プランの詳細や、帰省スケジュールに合わせた撮影日の調整を行います。", icon: MessageCircle },
        { t: "Fitting", j: "お衣装選び", d: "撮影前にドレス・タキシードなどの衣装をお選びいただきます。お気に入りの一着が見つかるよう、スタッフが丁寧にご案内します。", icon: Ruler },
        { t: "Shooting", j: "撮影当日", d: "妙高の雄大な自然を舞台に、リラックスした雰囲気で。お二人の自然な表情を引き出します。", icon: Camera },
        { t: "Delivery", j: "納品", d: "丁寧にレタッチしたデータ（1ヶ月以内）をダウンロード形式でお届けします。", icon: ImageIcon }
    ];

    return (
        <section id="flow" className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-32">
                    <img src="/images/illus-flow.png" alt="" aria-hidden="true" style={{ width: '60px', display: 'block', margin: '0 auto 0.8rem', mixBlendMode: 'multiply' }} />
                    <span className="v-title-tag">FLOW</span>
                    <h2 className="v-section-title serif mb-0">
                        撮影までの流れ
                    </h2>
                </div>

                <div className="relative" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-primary opacity-[0.05]" />

                    <div className="flex flex-col gap-24">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i}
                                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-0`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                {/* Circle Indicator on Center Line */}
                                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-accent z-10 shadow-sm" />

                                {/* Step Card */}
                                <div className={`w-full md:w-[46%] ml-[80px] md:ml-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="v-shadow-premium flow-card v-rounded-3xl bg-white border border-black/[0.02] hover:border-accent/10 transition-colors">
                                        <div style={{ marginBottom: '24px' }}>
                                            <span className="serif italic text-accent opacity-40 block" style={{ fontSize: '0.85rem', letterSpacing: '0.22em' }}>STEP 0{i + 1}</span>
                                        </div>

                                        <div className={`flex items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} style={{ gap: '1.5rem' }}>
                                            <div
                                                className="v-icon-circle shadow-sm"
                                                style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    minWidth: '64px',
                                                    minHeight: '64px',
                                                    backgroundColor: '#121A16',
                                                    color: '#FFFFFF',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    boxSizing: 'border-box'
                                                }}
                                            >
                                                <s.icon size={24} strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
                                            </div>
                                            <div className={`flex flex-row items-baseline flex-1 gap-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <h3 className="serif" style={{ fontSize: isMobile ? '1.05rem' : '1.2rem', color: "#121A16", margin: 0, lineHeight: 1.2 }}>{s.t}</h3>
                                                <span className="serif opacity-20" style={{ fontSize: '0.9rem', transform: 'translateY(1px)' }}>/</span>
                                                <h3 className="serif opacity-40" style={{ fontSize: isMobile ? '0.85rem' : '0.95rem', margin: 0, lineHeight: 1.2, transform: 'translateY(4px)' }}>{s.j}</h3>
                                            </div>
                                        </div>

                                        <div style={{ marginTop: '24px' }}>
                                            <p className="serif leading-loose opacity-70" style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}>{s.d}</p>
                                        </div>
                                        <style jsx>{`
                                            .flow-card {
                                                padding: 2.5rem 1.8rem;
                                            }
                                            @media (min-width: 768px) {
                                                .flow-card {
                                                    padding: 3.5rem;
                                                }
                                            }
                                        `}</style>
                                    </div>
                                </div>

                                {/* Placeholder for Balancing Desktop Layout */}
                                <div className="hidden md:block w-[46%]" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '28px' }}>
                        <p className="serif italic opacity-40" style={{ fontSize: '0.9rem' }}>
                            <span className="inline-block">お二人の想いに寄り添いながら、</span><br className="inline md:hidden" />
                            <span className="inline-block">準備からお届けまで、</span>
                            <span className="inline-block">丁寧に進めてまいります。</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
