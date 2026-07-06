import Link from "next/link";

export const metadata = {
    title: "プライバシーポリシー | 妙高麓景",
    description: "妙高麓景のプライバシーポリシーページです。",
};

export default function PrivacyPolicy() {
    return (
        <div style={{ background: "#fff", minHeight: "100vh" }}>
            {/* Header */}
            <div
                style={{
                    background: "var(--primary)",
                    padding: "80px 24px 60px",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "1rem",
                    }}
                >
                    Legal
                </p>
                <h1
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                        color: "#fff",
                        letterSpacing: "0.1em",
                    }}
                >
                    プライバシーポリシー
                </h1>
            </div>

            {/* Body */}
            <div
                style={{
                    maxWidth: "720px",
                    margin: "0 auto",
                    padding: "80px 24px 100px",
                    fontFamily: "var(--font-serif)",
                    color: "rgba(18,26,22,0.75)",
                    lineHeight: 2.2,
                    fontSize: "0.9rem",
                }}
            >
                <p style={{ marginBottom: "2.5rem" }}>
                    妙高麓景（以下「当サービス」）は、お客様の個人情報の保護を重要な責務と考え、以下の方針に基づき個人情報を適切に管理・取り扱います。
                </p>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        1. 個人情報の収集について
                    </h2>
                    <p>
                        当サービスでは、お問い合わせフォームや各種お申し込みを通じて、お名前・メールアドレス・電話番号・ご住所など必要な範囲で個人情報をお預かりする場合がございます。
                    </p>
                </section>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        2. 個人情報の利用目的
                    </h2>
                    <p>収集した個人情報は、以下の目的にのみ使用いたします。</p>
                    <ul style={{ paddingLeft: "1.4rem", marginTop: "0.8rem" }}>
                        <li>撮影プランのご案内・お打ち合わせ等のご連絡</li>
                        <li>ご予約・ご契約の管理</li>
                        <li>データ納品等のサービス提供</li>
                        <li>お問い合わせへの回答</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        3. 第三者への提供
                    </h2>
                    <p>
                        当サービスは、以下の場合を除き、お客様の個人情報を第三者に提供・開示することはありません。
                    </p>
                    <ul style={{ paddingLeft: "1.4rem", marginTop: "0.8rem" }}>
                        <li>お客様本人の同意がある場合</li>
                        <li>法令に基づく開示が必要な場合</li>
                        <li>サービス提供に必要な業務委託先（守秘義務を締結した業者）に限り共有する場合</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        4. 個人情報の管理
                    </h2>
                    <p>
                        お客様の個人情報は、不正アクセス・紛失・漏洩等を防止するため、適切なセキュリティ対策を講じて厳重に管理いたします。保存期間が終了した個人情報は、速やかに削除・廃棄いたします。
                    </p>
                </section>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        5. Cookieおよびアクセス解析
                    </h2>
                    <p>
                        当サービスでは、サービス改善のためにGoogle Analyticsなどのアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。Cookieの使用を希望されない場合は、ブラウザの設定からCookieを無効にしていただくことが可能です。
                    </p>
                </section>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        6. 個人情報の開示・訂正・削除
                    </h2>
                    <p>
                        お客様ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。本人確認の上、速やかに対応いたします。
                    </p>
                </section>

                <section style={{ marginBottom: "3rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        7. ポリシーの変更
                    </h2>
                    <p>
                        本プライバシーポリシーは、法令の改正やサービスの変更に伴い、予告なく変更する場合があります。変更後のポリシーは本ページに掲載した時点から効力を生じるものとします。
                    </p>
                </section>

                <section style={{ marginBottom: "4rem" }}>
                    <h2
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(18,26,22,0.35)",
                            marginBottom: "1rem",
                        }}
                    >
                        8. お問い合わせ
                    </h2>
                    <p>
                        本ポリシーに関するご質問・ご意見は、下記よりお問い合わせください。
                    </p>
                    <p style={{ marginTop: "0.6rem" }}>
                        <strong>妙高麓景 (Myoko Rokkei)</strong><br />
                        運営：<a
                            href="https://doughnutsbroadcast.co.jp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit" }}
                        >DOUGHNUTSBROADCAST, INC.</a>
                    </p>
                </section>

                <div
                    style={{
                        borderTop: "1px solid rgba(18,26,22,0.08)",
                        paddingTop: "2rem",
                        fontSize: "0.75rem",
                        color: "rgba(18,26,22,0.35)",
                    }}
                >
                    制定日：2026年3月12日
                </div>

                <div style={{ marginTop: "3rem" }}>
                    <Link
                        href="/"
                        style={{
                            display: "inline-block",
                            fontFamily: "var(--font-serif)",
                            fontSize: "0.8rem",
                            color: "rgba(18,26,22,0.5)",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(18,26,22,0.2)",
                            paddingBottom: "2px",
                        }}
                    >
                        ← トップページに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
