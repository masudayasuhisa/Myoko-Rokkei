"use client";
import { motion } from 'framer-motion';

export default function Concept() {
    return (
        <section id="concept" className="section-padding v-bg-paper v-overflow-hidden">
            <div className="container grid v-grid-2 gap-20 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="aspect-4-5 v-bg-soft v-rounded-3xl v-overflow-hidden v-hover-reveal">
                        <img
                            src="/images/concept_fixed.jpg"
                            alt="Concept"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 40%' }}
                        />
                    </div>
                </motion.div>

                <div className="flex flex-col">
                    <img src="/images/illus-tree.png" alt="" aria-hidden="true" style={{ width: '52px', marginBottom: '0.8rem', mixBlendMode: 'multiply' }} />
                    <span className="v-title-tag">Concept</span>
                    <h2 className="v-section-title serif mb-0">
                        <span className="inline-block">原風景とともに刻む、</span>
                        <br />
                        <span className="inline-block">ふたりの物語。</span>
                    </h2>
                    <div className="serif" style={{ fontSize: '0.95rem', lineHeight: 2.2, opacity: 0.7 }}>
                        <p className="mb-8">
                            <span className="inline-block">結婚という人生の大きな節目を、</span><br className="md:hidden" />
                            <span className="inline-block">妙高の自然で彩る。</span><br />
                            <span className="inline-block">ここで育ち、ここを離れた人にとっても、</span><br className="md:hidden" />
                            <span className="inline-block">妙高は心のふるさと。</span><br />
                            <span className="inline-block">初めましての人も受け入れるおおらかさもまた</span><br className="md:hidden" />
                            <span className="inline-block">妙高の魅力。</span>
                        </p>
                        <p className="mb-8">
                            <span className="inline-block">妙高の豊かな自然を舞台にした、</span><br />
                            <span className="inline-block">一生に一度のウェディングフォト。</span>
                        </p>
                        <p className="mb-8">
                            <span className="inline-block">四季折々の山々や</span>
                            <span className="inline-block">田園風景に包まれながら、</span><br />
                            <span className="inline-block">ふたりだけの物語を写真に残します。</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
