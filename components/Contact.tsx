"use client";
import { useState } from "react";
import { Instagram } from "lucide-react";
import Script from "next/script";
import { sendEmail } from "@/app/actions/sendEmail";

const inputStyle: React.CSSProperties = {
    padding: "16px 24px",
    borderRadius: "100px",
    border: "1px solid #ebebeb",
    backgroundColor: "#fafafa",
    outline: "none",
    fontSize: "14px",
    fontFamily: "var(--font-serif)",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
};

const labelStyle: React.CSSProperties = {
    fontSize: "9px",
    fontWeight: 700,
    opacity: 0.3,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    paddingLeft: "20px",
    display: "block",
    marginBottom: "6px",
};

export default function Contact() {
    const [sub, setSub] = useState(false);

    return (
        <section id="contact" style={{ padding: "100px 0", background: "#fff" }}>
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
            <div className="container" style={{ maxWidth: "640px" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <img src="/images/illus-contact.png" alt="" aria-hidden="true" style={{ width: "60px", display: "block", margin: "0 auto 0.8rem", mixBlendMode: "multiply" }} />
                    <span className="v-title-tag">Contact</span>
                    <h2 className="v-section-title serif">お問い合わせ</h2>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "13px", opacity: 0.5, lineHeight: 2, marginTop: "1rem" }}>
                        撮影のご予約・ご相談など、<br />お気軽にご連絡ください。
                    </p>
                </div>

                {/* Instagram CTA */}
                <div
                    className="insta-cta"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        background: "linear-gradient(135deg, #f8f3fb 0%, #fdf5f0 100%)",
                        border: "1px solid rgba(0,0,0,0.04)",
                        borderRadius: "16px",
                        padding: "18px 24px",
                        marginBottom: "3rem",
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <Instagram size={16} color="#fff" strokeWidth={2} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: "12px", fontFamily: "var(--font-serif)", opacity: 0.6, margin: 0, lineHeight: 1.7 }}>
                            <span style={{ display: 'inline-block' }}>Instagramのメッセージからでも、</span>
                            <span style={{ display: 'inline-block' }}>お気軽にお問い合わせください。</span>
                        </p>
                    </div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-link"
                        style={{
                            fontSize: "9px",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            color: "#bc1888",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                        }}
                    >
                        Open →
                    </a>
                    <style jsx>{`
                        @media (max-width: 414px) {
                            .insta-cta {
                                flex-direction: column;
                                text-align: center;
                                padding: 24px !important;
                                gap: 0.8rem !important;
                            }
                            .insta-link {
                                margin-top: 4px;
                            }
                        }
                    `}</style>
                </div>

                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setSub(true);
                        const formData = new FormData(e.currentTarget);
                        const result = await sendEmail(formData);
                        
                        if (result.success) {
                            window.location.href = "/thanks";
                        } else {
                            alert(`送信に失敗しました: ${result.error || "原因不明のエラー"}`);
                            setSub(false);
                        }
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
                >
                    <div>
                        <label style={labelStyle}>Name · お名前</label>
                        <input required name="name" type="text" placeholder="妙高 花子" style={inputStyle}
                            onFocus={e => (e.currentTarget.style.borderColor = "rgba(18,26,22,0.3)")}
                            onBlur={e => (e.currentTarget.style.borderColor = "#ebebeb")}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Email · メールアドレス</label>
                        <input required name="email" type="email" placeholder="hello@example.com" style={inputStyle}
                            onFocus={e => (e.currentTarget.style.borderColor = "rgba(18,26,22,0.3)")}
                            onBlur={e => (e.currentTarget.style.borderColor = "#ebebeb")}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Message · お問い合わせ内容</label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder="撮影日のご希望、ご質問などをお書きください。"
                            style={{
                                ...inputStyle,
                                borderRadius: "20px",
                                resize: "none",
                            }}
                            onFocus={e => (e.currentTarget.style.borderColor = "rgba(18,26,22,0.3)")}
                            onBlur={e => (e.currentTarget.style.borderColor = "#ebebeb")}
                        />
                    </div>

                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        <p style={{ 
                            fontSize: "10px", 
                            fontFamily: "var(--font-serif)", 
                            opacity: 0.35, 
                            marginBottom: "1rem",
                            lineHeight: 1.6,
                            letterSpacing: "0.05em"
                        }}>
                            ご入力いただいた情報は、お問い合わせへの回答のみに使用し、<br />
                            プライバシーポリシーに基づき大切に管理いたします。
                        </p>
                        
                        {/* Honeypot Field */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                            <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
                        </div>

                        {/* Cloudflare Turnstile */}
                        <div style={{ 
                            marginBottom: "1rem", 
                            display: "flex", 
                            justifyContent: "center",
                        }}>
                            <div 
                                className="cf-turnstile" 
                                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "your-site-key"}
                                data-theme="light"
                                data-size="compact" // Changed to compact to reduce space
                            ></div>
                        </div>

                        <button
                            disabled={sub}
                            style={{
                                display: "inline-block",
                                padding: "1rem 3rem",
                                background: "var(--primary)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "100px",
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                cursor: sub ? "not-allowed" : "pointer",
                                opacity: sub ? 0.5 : 1,
                                transition: "all 0.4s ease",
                                minWidth: "200px",
                            }}
                        >
                            {sub ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
