"use client";
import { motion } from "framer-motion";

const values_ja = [
    {
        num: "01",
        title: "撮影チーム全員がプランニング可能",
        body: "寄せ集めのチームではなく、妙高麓景のコンセプトを深く理解したプロフェッショナルのチームで撮影を実施。メンバー全員がプランニングも可能で、おふたりの思い出を素敵なものにするために全力を尽くします。",
    },
    {
        num: "02",
        title: "撮影体験をおふたりの大切な１日の思い出として",
        body: "わたしたちのコンセプトは「おもてなし」と「心をこめること」。決して派手さのある、尖った「今風」のウェディングフォトではありません。おふたりの個性と妙高のたおやかな風土の調和。そんなハーモニーが思い出のカケラとなり、おふたりの未来の道標となるような素敵な1日をお届けしたいと思っています。",
    },
    {
        num: "03",
        title: "地域の協力",
        body: "クリエイティブチームには、妙高の観光や地域振興に深く関わるメンバーが含まれます。地域の良さを知り、妙高エリアでの撮影を決断したおふたりを応援し歓迎し、大切な１日を責任をもってお預りします。",
    },
    {
        num: "04",
        title: "おひとよし",
        body: "そしてチーム全員が「おひとよし」です。やわらかな撮影の１日を笑顔で楽しみたい。そんな皆様との出会いをチーム一同楽しみにしております。",
    },
];

const values_en = [
    {
        num: "01",
        title: "All team members can assist with planning",
        body: "We operate not as a gathered group of freelancers, but as a professional team deeply aligned with the Myoko Rokkei concept. Every single member can assist with planning, putting all our effort into making your memories wonderful.",
    },
    {
        num: "02",
        title: "Your photoshoot experience as a cherished memory for your special day",
        body: "Our concept centers on hospitality and dedication. This is not a flashy, edgy 'trendy' wedding photo shoot. It is a harmony between your unique personality and the graceful climate of Myoko. We want to deliver a beautiful day that serves as a guidepost for your future.",
    },
    {
        num: "03",
        title: "Support and cooperation from the local community",
        body: "Our creative team includes members deeply involved in Myoko's tourism and local promotion. Knowing the true virtues of the region, we support and welcome you for choosing Myoko, taking full responsibility for hosting your special day.",
    },
    {
        num: "04",
        title: "Good-natured team members",
        body: "Lastly, every team member is genuinely good-natured. We wish to enjoy a soft, relaxing day of photography with smiles. Our entire team looks forward to meeting you.",
    },
];

export default function Values({ locale = "ja" }: { locale?: "en" | "ja" }) {
    const values = locale === "en" ? values_en : values_ja;

    return (
        <section className="v-bg-paper" style={{ padding: "100px 0" }}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: "center", marginBottom: "5rem" }}
                >
                    <img src="/images/illus-heart.png" alt="" aria-hidden="true" style={{ width: "68px", display: "block", margin: "0 auto 0.8rem", mixBlendMode: "multiply" }} />
                    <span className="v-title-tag">Philosophy / Credo</span>
                    
                    {locale === "en" ? (
                        <>
                            <h2
                                className="v-section-title serif mb-0 mt-3"
                                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.5 }}
                            >
                                Our Philosophy
                            </h2>
                            <p
                                className="serif"
                                style={{ fontSize: "13px", lineHeight: 2.2, opacity: 0.5, maxWidth: "600px", margin: "1.5rem auto 0" }}
                            >
                                Things you might wonder when considering a photoshoot:<br />
                                &quot;How is this creative team different from others?&quot;<br />
                                We would like to answer this simple (yet very important) question.<br />
                                Although not flashy, here are the philosophies that the Myoko Rokkei team values deeply.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2
                                className="v-section-title serif mb-0 mt-3"
                                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.5 }}
                            >
                                わたしたちが<br className="md:hidden" />大切にしていること
                            </h2>
                            <p
                                className="serif"
                                style={{ fontSize: "13px", lineHeight: 2.2, opacity: 0.5, maxWidth: "560px", margin: "0 auto" }}
                            >
                                <span className="inline-block">撮影を検討するにあたり、気になるところ。</span><br />
                                <span className="inline-block">「この撮影チームって他とどう違うんだろう？」</span><br />
                                <span className="inline-block">そんな素朴で（そしてとっても大切な）疑問に</span><br className="md:hidden" />
                                <span className="inline-block">お答えします。</span><br />
                                <span className="inline-block">派手さはないけれど、こんなことを</span><br className="md:hidden" />
                                <span className="inline-block">大切にしているのが妙高麓景チームです。</span>
                            </p>
                        </>
                    )}
                </motion.div>

                {/* Values list */}
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="value-item"
                                style={{
                                    display: "grid",
                                    gap: "2rem",
                                    padding: "2.5rem 0",
                                    borderTop: "1px solid rgba(18,26,22,0.06)",
                                    alignItems: "start",
                                }}
                            >
                                {/* Number */}
                                <div
                                    className="value-num"
                                    style={{
                                        fontFamily: "var(--font-serif)",
                                        fontSize: "2rem",
                                        color: "rgba(18,26,22,0.08)",
                                        lineHeight: 1,
                                        letterSpacing: "0.05em",
                                        paddingTop: "4px",
                                    }}
                                >
                                    {v.num}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3
                                        className="serif"
                                        style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "0.8rem", fontWeight: 500 }}
                                    >
                                        {v.title}
                                    </h3>
                                    <p
                                        className="serif"
                                        style={{ fontSize: "13px", lineHeight: 2.2, opacity: 0.55 }}
                                    >
                                        {v.body}
                                    </p>
                                </div>
                                <style jsx>{`
                                    .value-item {
                                        grid-template-columns: 80px 1fr;
                                    }
                                    @media (max-width: 414px) {
                                        .value-item {
                                            grid-template-columns: 1fr;
                                            gap: 0.5rem;
                                            padding: 2rem 0;
                                        }
                                        .value-num {
                                            font-size: 1.8rem !important;
                                            opacity: 0.1;
                                        }
                                    }
                                `}</style>
                            </motion.div>
                        ))}
                        {/* Last divider */}
                        <div style={{ borderTop: "1px solid rgba(18,26,22,0.06)" }} />
                    </div>

                    {/* Team Group Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ marginTop: "4rem", maxWidth: "70%", margin: "4rem auto 0" }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                paddingTop: "60%", // 16:9-ish or 3:2
                                borderRadius: "24px",
                                overflow: "hidden",
                                boxShadow: "0 15px 30px rgba(0,0,0,0.06)"
                            }}
                        >
                            <img
                                src="/images/philosophy_group.jpg"
                                alt="Philosophy Team"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
