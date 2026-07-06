"use client";
import { motion } from "framer-motion";

const members_ja = [
    {
        name: "Y. Masuda",
        role: "Creative Director / Designer",
        img: "/images/prof/masuda.jpg",
        bio: "広告やPR分野でも活動するクリエイティブディレクター。妙高の風景に魅せられ、この妙高麓景のプランを立ち上げる。自身の婚礼撮影のマネジメントキャリアを活かしつつ、プラン構築を統括します。"
    },
    {
        name: "T. Takekawa",
        role: "Photographer / Planner",
        img: "/images/prof/takekawa.jpg",
        bio: "大手婚礼撮影会社のトップフォトグラファーのキャリアを経て妙高麓景に参画。豊富な経験に裏打ちされた臨機応変な撮影と光と影を適切に見極めた撮影スタイルでおふたりの世界観を引き立てます。"
    },
    {
        name: "Y. Miyashita",
        role: "Photographer / Planner",
        img: "/images/prof/miyashita.jpg",
        bio: "地元妙高市出身。初めましてから数分で天然だと見抜かれてしまう素直なたたずまいが魅力の女性フォトグラファー。人柄通りの柔らかな撮影でおふたりの思い出の1日を優しく紡いでいきます。"
    },
    {
        name: "S. Sato",
        role: "Hair & Make / Planner",
        img: "/images/prof/sato.jpg",
        bio: "妙高麓景のファッションアイコン。アパレルのバックボーンからの確かな経験と、夫婦関係のアドバイザーとしての立場も含め、おふたりの1日を柔らかく包み込みます。"
    },
    {
        name: "R. Koide",
        role: "Stylist / Planner",
        img: "/images/prof/koide.jpg",
        bio: "「衣装選びから楽しい！」とのお客様の声を多くいただく、妙高麓景のエース接客担当。おふたりの個性に合わせ、次々と湧き出るアイデアがおふたりのわくわく感を最大限に高めます。"
    },
    {
        name: "N. Uesugi",
        role: "Florist",
        img: "/images/prof/uesugi.png",
        bio: "「もう、上杉さんにお任せで！」という声も多々のフローリスト。ロケ地やおふたりのイメージ、旬のお花やトレンドも盛り込み、おふたりの1日に（文字通り）花を添えるムードメーカー。"
    },
];

const members_en = [
    {
        name: "Y. Masuda",
        role: "Creative Director / Designer",
        img: "/images/prof/masuda.jpg",
        bio: "A creative director active in advertising and PR. Captivated by the landscapes of Myoko, he founded Myoko Rokkei to share this beauty with couples. Leveraging his extensive career in wedding photography management, he oversees overall planning and styling."
    },
    {
        name: "T. Takekawa",
        role: "Photographer / Planner",
        img: "/images/prof/takekawa.jpg",
        bio: "Joined Myoko Rokkei after establishing himself as a top photographer at a major wedding photography firm. With extensive experience, a highly adaptable shooting style, and a masterly command over light and shadow, he brings out your unique connection and worldview."
    },
    {
        name: "Y. Miyashita",
        role: "Photographer / Planner",
        img: "/images/prof/miyashita.jpg",
        bio: "A Myoko native. A photographer whose charm lies in her warm, sincere, and natural presence. Reflecting her gentle personality, she captures your special day with soft, warm tones that beautifully weave your memories together."
    },
    {
        name: "S. Sato",
        role: "Hair & Make / Planner",
        img: "/images/prof/sato.jpg",
        bio: "The fashion icon of Myoko Rokkei. Drawing on her rich background in the fashion industry and her experience as a relationship advisor, she provides warm and comforting styling support throughout your special day."
    },
    {
        name: "R. Koide",
        role: "Stylist / Planner",
        img: "/images/prof/koide.jpg",
        bio: "Our lead stylist, beloved for customer feedback like, 'Even choosing the attire was such a fun experience!' Tailoring ideas to your unique personalities, she ensures your journey is filled with excitement and delight."
    },
    {
        name: "N. Uesugi",
        role: "Florist",
        img: "/images/prof/uesugi.png",
        bio: "A florist trusted by many couples who say, 'We leave it all to Uesugi.' Weaving together location concepts, seasonal blooms, and modern trends, she is a vibrant mood maker who adds a gorgeous floral touch to your celebration."
    },
];

export default function Team({ locale = "ja" }: { locale?: "en" | "ja" }) {
    const members = locale === "en" ? members_en : members_ja;

    return (
        <section id="team" className="section-padding v-bg-soft">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <img src="/images/illus-leaves.png" alt="" aria-hidden="true" style={{ width: '64px', display: 'block', margin: '0 auto 0.6rem', mixBlendMode: 'multiply' }} />
                    <span className="v-title-tag">{locale === "en" ? "OUR CREATIVE TEAM" : "わたしたちのチーム"}</span>
                    <h2 className="v-section-title serif mb-0">
                        {locale === "en" ? "Creative Team" : "わたしたちのチーム"}
                    </h2>
                </div>

                <div className="grid v-grid-3 gap-8">
                    {members.map((m, i) => (
                        <motion.div
                            key={i}
                            className="v-bg-paper p-8 md:p-12 v-rounded-3xl v-shadow-premium flex flex-col items-start text-left group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                        >
                            <div className="flex flex-col items-center text-center w-full">
                                <div className="v-rounded-full v-overflow-hidden mb-8 v-bg-soft border-2 border-white shadow-sm transition-transform duration-700 group-hover:scale-105" style={{ width: '106px', height: '106px' }}>
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="v-title-tag" style={{ fontSize: '9px', marginBottom: '0.8rem' }}>{m.role}</span>
                                <h3 className="serif text-xl mb-6">{m.name}</h3>
                            </div>
                            <p className="serif" style={{ fontSize: '11px', lineHeight: 2, opacity: 0.5 }}>
                                {m.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
