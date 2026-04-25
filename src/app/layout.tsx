import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anirift | アニメの新しい世界",
  description: "숏폼으로 만나는 차세대 애니메이션 스트리밍 플랫폼. Anirift에서 새로운 애니의 세계를 경험하세요.",
  keywords: ["anime", "streaming", "OTT", "short-form", "animation", "애니메이션", "스트리밍"],
  openGraph: {
    title: "Anirift | アニメの新しい世界",
    description: "숏폼으로 만나는 차세대 애니메이션 스트리밍",
    url: "https://anirift.com",
    siteName: "Anirift",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        {children}
      </body>
    </html>
  );
}
