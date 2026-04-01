import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "妙高麓景 | Myoko Rokkei Wedding Photo - 妙高の大自然で叶えるウェディングフォト",
    description: "妙高の豊かな自然を舞台にした、一生に一度のウェディングフォトプラン。クリエイティブチームが、この地の雄大な風景とおふたりの未来を重ね、特別な1日を優しく紡いでいきます。",
    alternates: {
        canonical: "https://myoko-rokkei.jp",
    },
    openGraph: {
        title: "妙高麓景 | Myoko Rokkei Wedding Photo",
        description: "妙高の豊かな自然を舞台にした、一生に一度のウェディングフォトプラン。",
        url: "https://myoko-rokkei.jp",
        siteName: "妙高麓景",
        images: [
            {
                url: "https://myoko-rokkei.jp/images/mv-center.jpg", // Assuming this exists or is a good hero image
                width: 1200,
                height: 630,
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "妙高麓景 | Myoko Rokkei Wedding Photo",
        description: "妙高の豊かな自然を舞台にした、一生に一度のウェディングフォトプラン。",
        images: ["https://myoko-rokkei.jp/images/mv-center.jpg"],
    },
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
                    src="https://www.googletagmanager.com/gtag/js?id=G-RV128J37EN"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-RV128J37EN');
                    `}
                </Script>
                {/* Microsoft Clarity */}
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "vupa6a8h9i");
                    `}
                </Script>
            </head>
            <body>{children}</body>
        </html>
    );
}
