"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    const cols = [
        {
            title: "Menu",
            links: [
                { n: "Gallery", h: "#gallery" },
                { n: "Location", h: "#location" },
                { n: "Plans", h: "#plan" },
            ],
        },
        {
            title: "Info",
            links: [
                { n: "Team", h: "#team" },
                { n: "Flow", h: "#flow" },
                { n: "FAQ", h: "#faq" },
            ],
        },
        {
            title: "Contact",
            links: [
                { n: "Inquiry Form", h: "#contact" },
                { n: "Instagram DM", h: "https://instagram.com", external: true },
            ],
        },
    ];

    return (
        <footer
            style={{
                background: "var(--primary)",
                color: "#fff",
                paddingTop: "80px",
                paddingBottom: "40px",
            }}
        >
            <div className="container">
                {/* Top grid */}
                <div
                    className="footer-grid"
                    style={{
                        display: "grid",
                        gap: "2rem",
                        marginBottom: "3rem",
                        paddingBottom: "3rem",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    {/* Brand */}
                    <div className="footer-brand">
                        <div
                            style={{
                                fontFamily: "var(--font-serif)",
                                fontSize: "1.8rem",
                                letterSpacing: "0.15em",
                                marginBottom: "0.4rem",
                                lineHeight: 1, // Fix alignment
                            }}
                        >
                            妙高麓景
                        </div>
                        <div
                            style={{
                                fontSize: "9px",
                                fontWeight: 700,
                                letterSpacing: "0.4em",
                                color: "rgba(255,255,255,0.2)",
                                textTransform: "uppercase",
                                marginBottom: "1.6rem",
                            }}
                        >
                            Myoko Rokkei Wedding Photo
                        </div>
                        <p
                            style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.4)",
                                lineHeight: 2.2,
                                fontFamily: "var(--font-serif)",
                                maxWidth: "220px",
                                marginBottom: "1.6rem",
                            }}
                        >
                            山に抱かれ、空に解ける。
                            <br />
                            妙高の原風景とともに、
                            <br />
                            お二人の歩みを記録します。
                        </p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "rgba(255,255,255,0.3)",
                                display: "inline-block",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#fff")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                                "rgba(255,255,255,0.3)")
                            }
                        >
                            <Instagram size={18} strokeWidth={1.5} />
                        </a>
                    </div>

                    {/* Link columns */}
                    {cols.map((col) => (
                        <div key={col.title} className="footer-col">
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "9px",
                                    fontWeight: 700,
                                    letterSpacing: "0.35em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.18)",
                                    marginBottom: "1.4rem",
                                    lineHeight: "1.8rem", // Match brand title height
                                }}
                            >
                                {col.title}
                            </span>
                            {col.links.map((lk) => (
                                <Link
                                    key={lk.n}
                                    href={lk.h}
                                    target={lk.external ? "_blank" : undefined}
                                    rel={
                                        lk.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    style={{
                                        display: "block",
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.4)",
                                        textDecoration: "none",
                                        marginBottom: "1rem",
                                        fontFamily: "var(--font-serif)",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = "#fff")
                                    }
                                    onMouseLeave={(e) =>
                                    (e.currentTarget.style.color =
                                        "rgba(255,255,255,0.4)")
                                    }
                                >
                                    {lk.n}
                                </Link>
                            ))}
                        </div>
                    ))}
                    <style jsx>{`
                        .footer-grid {
                            grid-template-columns: 2fr 1fr 1fr 1fr;
                        }
                        @media (max-width: 768px) {
                            .footer-grid {
                                grid-template-columns: 1fr 1fr;
                                gap: 3rem;
                            }
                            .footer-brand {
                                grid-column: span 2;
                                margin-bottom: 2rem;
                            }
                        }
                        @media (max-width: 414px) {
                            .footer-grid {
                                grid-template-columns: 1fr;
                                gap: 2.5rem;
                            }
                            .footer-brand {
                                grid-column: span 1;
                            }
                        }
                    `}</style>
                </div>

                {/* Bottom bar */}
                <div
                    className="footer-bottom"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                    }}
                >
                    <span
                        className="copyright"
                        style={{
                            fontSize: "9px",
                            color: "rgba(255,255,255,0.15)",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                        }}
                    >
                        © 2026 Myoko Rokkei. All rights reserved.
                    </span>
                    <div className="footer-extra-links" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <Link
                            href="/privacy"
                            style={{
                                fontSize: "9px",
                                color: "rgba(255,255,255,0.25)",
                                letterSpacing: "0.2em",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
                        >
                            Privacy Policy
                        </Link>
                        <a
                            href="https://doughnutsbroadcast.co.jp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "9px",
                                color: "rgba(255,255,255,0.15)",
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.15)")}
                        >
                            Produced by DOUGHNUTSBROADCAST, INC.
                        </a>
                    </div>
                    <style jsx>{`
                        @media (max-width: 768px) {
                            .footer-bottom {
                                flex-direction: column;
                                text-align: center;
                                padding-top: 1rem;
                            }
                            .footer-extra-links {
                                flex-direction: column;
                                gap: 0.8rem !important;
                            }
                        }
                    `}</style>
                </div>
            </div>
        </footer>
    );
}
