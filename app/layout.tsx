import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "妙高麓景 | Myoko Rokkei Wedding Photo",
    description: "妙高の豊かな自然を舞台にした、一生に一度のウェディングフォト。麓から望む絶景とともに。",
    icons: {
        icon: "/favicon.png",
    },
    verification: {
        google: "S62R4lcqYnqdqNbz-BGuBcI2TllGDoIgWgVDnsrmdvo",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                {/* Google Analytics */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `}
                </Script>
            </head>
            <body>{children}</body>
        </html>
    );
}
