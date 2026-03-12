import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "妙高麓景 | Myoko Rokkei Wedding Photo",
    description: "妙高の豊かな自然を舞台にした、一生に一度のウェディングフォト。麓から望む絶景とともに。",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
