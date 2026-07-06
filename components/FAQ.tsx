"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs_ja = [
    {
        q: "相談・打ち合わせはどこで行いますか？",
        a: "対面であれば妙高市内の提携ラウンジカフェで行います。また、ZoomなどのオンラインまたはLINEビデオ通話にても承っております。遠方にお住まいの方、帰省前にご検討中の方もお気軽にご相談ください。"
    },
    {
        q: "予約はいつから可能ですか？",
        a: "撮影希望日の半年前より承っております。春の桜（4〜5月）・夏の新緑（6〜8月）・秋の紅葉（9〜11月）シーズンは特に人気が高く、早期にご予約が埋まります。ご希望の時期がある場合はお早めにご相談ください。"
    },
    {
        q: "妙高は遠いので、日帰りで撮影できますか？",
        a: "はい、日帰りプランで撮影いただけます。所要時間の目安は衣装・ヘアメイクを含めて約5〜7時間です。帰省のタイミングや観光と組み合わせてご計画いただくカップルも多くいらっしゃいます。撮影スケジュールはご滞在日程に合わせて柔軟に調整しますので、まずはお気軽にご相談ください。"
    },
    {
        q: "雨天・悪天候の場合はどうなりますか？",
        a: "小雨程度の場合は傘やヴェールを活かした幻想的な撮影が可能です。荒天や強風など撮影困難な場合は、無料で日程変更を承ります。天候の最終判断は前日の夕方にご相談の上で決定しますので、安心してお任せください。"
    },
    {
        q: "どのロケーション地で撮影できますか？",
        a: "笹ヶ峰高原（高原・ドイツトウヒの森・白樺林）、いもり池（妙高山ビュー・ビジターセンター周辺）、西野谷と岡沢の森（針葉樹の深い森・棚田）を中心にご案内しています。プランには1〜2ヶ所のロケ地が含まれており、ご希望の場所やイメージをお聞きしながらコースをご提案します。"
    },
    {
        q: "追加費用が発生するケースを教えてください。",
        a: "基本プランに含まれないものとして、①ロケ地によっては入場料・駐車料金（実費）、②プラン外ロケ地へのご希望がある場合の移動費・手配費、があります。また、新婦様はブライダル用のインナー、新郎様の衣装によってはシャツのご購入が必要になる場合がございます。ご自身でご用意いただいても差し支えありません。詳細は事前のお打ち合わせでご説明します。"
    },
    {
        q: "衣装の持ち込みはできますか？",
        a: "はい、持ち込み可能です（持ち込み料無料）。お気に入りのドレスや和装がある場合は、事前にスタッフへご共有ください。衣装に合ったヘアメイクやロケーションのご提案も行います。"
    },
    {
        q: "衣装選びはどこで行いますか？",
        a: "長野駅近郊の提携ドレスサロンにて行います（妙高市から車で1時間程度）。"
    },
    {
        q: "衣装選びや着付けに不安があります。サポートしてもらえますか？",
        a: "もちろんです。スタイリスト・ヘアメイクスタッフが撮影前のお打ち合わせから当日まで丁寧にお手伝いします。「衣装選びから楽しかった！」とご好評いただいています。初めての方も安心してお任せください。"
    },
    {
        q: "家族やペットと一緒に撮影できますか？",
        a: "大歓迎です。ご両親や兄弟を含めたショットも承っております。ペット同伴の場合は、ロケーション先のルールを事前に確認いたします（ロケ地によっては入場制限がある場合があります）。ご相談の際にご希望をお知らせください。"
    },
    {
        q: "和装と洋装、どちらか迷っています。",
        a: "両方楽しみたい方には「Twain:妙高麓景（和洋プラン）」がございます。妙高の自然は和装・洋装どちらとも相性抜群ですので、ロケーション地のイメージやおふたりのご希望を伺いながらご提案します。まずはお気軽にお問い合わせください。"
    },
    {
        q: "撮影データはどのように届きますか？",
        a: "撮影から約1ヶ月以内に、丁寧にレタッチした高画質データをダウンロード形式でお届けします。セレクト枚数（洋装・和装プランは100カット〜、和洋プランは200カット〜）のデータに補正を施してからお渡しします。お急ぎの場合は別途ご相談ください。"
    },
    {
        q: "撮影当日のスケジュールを教えてください。",
        a: "おおまかな流れは、①ヘアメイク・着付け、②ロケーション地への移動、③撮影（1〜2ヶ所）、④お着替え・解散、となります。所要時間は衣装やロケ地数によって異なりますが、目安は5〜7時間程度です。詳細は事前打ち合わせで確認し、当日のご不安をしっかり解消します。"
    },
    {
        q: "撮影場所のリクエストはできますか？",
        a: "はい、可能です。標準プランのロケ地以外に思い出の場所などでの撮影もご相談ください。移動距離や撮影許可の取得状況によって別途費用がかかる場合がございます。"
    },
    {
        q: "オプションにはどんなものがありますか？",
        a: "生花ブーケ（基本プランにはアーティフィシャルフラワーのブーケが含まれています）、ムービー撮影、新郎ヘアメイク、フォトアルバム作成、ロケ地追加、時間延長など様々なオプションをご用意しています。ご要望はお打ち合わせの際にお気軽にご相談ください。"
    },
];

const faqs_en = [
    {
        q: "Where do consultations and meetings take place?",
        a: "In-person consultations are held at our partner lounge café in Myoko City. We also offer online consultations via Zoom or LINE video calls. Please feel free to reach out, even if you live far away or are planning prior to returning to your hometown."
    },
    {
        q: "How early can I book?",
        a: "Reservations can be made up to six months before your preferred date. Photoshoots during the cherry blossom season (April–May), summer fresh greenery (June–August), and autumn foliage (September–November) are highly popular and book quickly. We recommend contacting us early if you have a specific season in mind."
    },
    {
        q: "Myoko is far; can we do a day-trip shoot?",
        a: "Yes, day-trip photoshoots are fully available. The total time required is approximately 5 to 7 hours, which includes fitting, hair and makeup, and the shoot itself. Many couples enjoy combining the shoot with family visits or local sightseeing. We will adjust the schedule to fit your travel itinerary."
    },
    {
        q: "What happens in case of rain or bad weather?",
        a: "In the event of light rain, we can capture beautiful, atmospheric photos using umbrellas or veils. If conditions are severe (such as heavy storms or strong winds), we offer rescheduling at no additional charge. We make the final weather determination in consultation with you on the evening before the shoot."
    },
    {
        q: "Which locations can we shoot at?",
        a: "We primarily guide you through Sasagamine Plateau (alpine meadows, spruce and birch forests), Imori Pond (with iconic Mt. Myoko views and surrounding nature paths), and the Forest of Nishinoya & Okazawa (deep evergreen woods and terraced rice fields). Our plans include 1 to 2 locations, and we customize the route based on your preferences."
    },
    {
        q: "Are there any cases where additional costs apply?",
        a: "Costs not covered in the basic plans include: (1) actual expenses for entrance or parking fees at specific locations, (2) travel and arrangement fees for locations outside our standard offerings. Additionally, brides will need to prepare bridal undergarments, and grooms may need to purchase shirts depending on the chosen attire. You are welcome to bring your own. We will clarify all details during our planning meetings."
    },
    {
        q: "Can we bring our own wedding attire?",
        a: "Yes, bringing your own attire is welcome, and there are no handling fees. If you have a dress, suit, or traditional kimono you wish to wear, please share the details with our staff in advance. We will propose hair, makeup, and location styles that complement your attire."
    },
    {
        q: "Where does the wedding attire selection take place?",
        a: "Fitting and attire selection are held at our partner dress salon near Nagano Station (approximately a one-hour drive from Myoko City)."
    },
    {
        q: "I have concerns about attire selection and fitting. Will you support me?",
        a: "Absolutely. Our professional stylists and hair/makeup artists will guide you step-by-step from your first consultation to the day of the shoot. Many of our couples tell us that choosing their attire was one of the most exciting parts of the experience. Please feel relaxed and leave it to us."
    },
    {
        q: "Can we take photos with family or pets?",
        a: "You are more than welcome to include them. We love capturing shots with parents, family members, or beloved pets. For pet photography, we will verify rules for each location beforehand, as some spots may have restrictions. Please let us know your preferences during planning."
    },
    {
        q: "I am undecided between a wedding dress/suit and traditional Japanese kimono.",
        a: "For couples wishing to enjoy both looks, we recommend the 'Twain: Myoko Rokkei (Dress & Suit + Kimono Plan)'. Myoko's natural scenery blends beautifully with both modern dress/suit styles and traditional Japanese attire. We will suggest the best locations and styles after learning about your preferences."
    },
    {
        q: "How will the photoshoot data be delivered?",
        a: "Within one month of your photoshoot, we deliver your carefully retouched, high-resolution digital photos via a secure download link. All selected files (100+ cuts for the Dress & Suit or Kimono plan, and 200+ cuts for the Twain plan) undergo custom color correction and retouching. Please let us know if you require an expedited delivery."
    },
    {
        q: "What is the schedule for the photoshoot day?",
        a: "The standard flow is: (1) hair/makeup styling and fitting, (2) travel to the photoshoot location, (3) the photoshoot (at 1 or 2 spots), and (4) changing back and wrapping up. The total duration is roughly 5 to 7 hours depending on your chosen attire and locations. We will coordinate all timeline details with you in advance."
    },
    {
        q: "Can we request specific photoshoot locations?",
        a: "Yes, we welcome your requests. We are happy to discuss shooting at personal, sentimental locations outside our standard spots. Depending on the travel distance and local filming permits, additional fees may apply."
    },
    {
        q: "What options are available?",
        a: "We offer a range of options including fresh floral bouquets (premium artificial bouquets are included in the standard plans), video recording, hair/makeup for the groom, custom physical albums, additional locations, and photoshoot extensions. Please feel free to share your ideas with us."
    },
];

export default function FAQ({ locale = "ja" }: { locale?: "en" | "ja" }) {
    const faqs = locale === "en" ? faqs_en : faqs_ja;
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding v-bg-soft">
            <div className="container" style={{ maxWidth: '700px' }}>
                <div className="text-center mb-20">
                    <img src="/images/illus-faq.png" alt="" aria-hidden="true" style={{ width: '60px', display: 'block', margin: '0 auto 0.8rem', mixBlendMode: 'multiply' }} />
                    <span className="v-title-tag">FAQ</span>
                    <h2 className="v-section-title serif">
                        {locale === "en" ? "Common Questions" : "よくあるご質問"}
                    </h2>
                </div>

                <div className="flex flex-col gap-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="faq-item">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between faq-button"
                                style={{ border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--primary)' }}
                            >
                                <span className="serif" style={{ fontSize: '0.9rem', fontWeight: 500 }}>{f.q}</span>
                                {open === i ? <Minus size={14} opacity={0.3} /> : <Plus size={14} opacity={0.3} />}
                            </button>
                            {open === i && (
                                <div className="serif faq-answer" style={{ fontSize: '0.85rem', opacity: 0.5, lineHeight: 2, color: 'var(--primary)' }}>
                                    {f.a}
                                </div>
                            )}
                            <style jsx>{`
                                .faq-item {
                                    background: #fff;
                                    border-radius: 24px;
                                    overflow: hidden;
                                    padding: 1.5rem;
                                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
                                    border: 1px solid rgba(18, 26, 22, 0.02);
                                    transition: all 0.3s ease;
                                }
                                .faq-button {
                                    padding: 0;
                                    outline: none;
                                }
                                .faq-answer {
                                    margin-top: 1rem;
                                    padding-top: 1rem;
                                    border-top: 1px solid rgba(18, 26, 22, 0.05);
                                }
                            `}</style>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
