import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";

export const metadata: Metadata = {
    title: "Myoko Rokkei | Wedding Photo in the Majestic Nature of Myoko",
    description: "A once-in-a-lifetime wedding photography experience set against the rich, natural landscapes of Myoko. Our creative team guides you through a special day, weaving your future with these scenic views.",
    alternates: {
        canonical: "https://myoko-rokkei.jp/en",
    },
    openGraph: {
        title: "Myoko Rokkei | Wedding Photo",
        description: "A once-in-a-lifetime wedding photography experience set against the rich, natural landscapes of Myoko.",
        url: "https://myoko-rokkei.jp/en",
        siteName: "Myoko Rokkei",
        images: [
            {
                url: "https://myoko-rokkei.jp/images/mv-center.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Myoko Rokkei | Wedding Photo",
        description: "A once-in-a-lifetime wedding photography experience set against the rich, natural landscapes of Myoko.",
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
        <html lang="en">
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
