import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anirift | 次元を超えるアニメ体験",
  description: "차원을 넘는 애니 체험. Anirift — 숏폼 애니메이션 전용 차세대 OTT.",
  keywords: ["anime", "streaming", "OTT", "short-form", "animation", "애니메이션", "스트리밍", "Anirift"],
  openGraph: {
    title: "Anirift | 次元を超えるアニメ体験",
    description: "숏폼 애니메이션 전용 차세대 OTT",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col text-white">
        <div className="ambient-bg" aria-hidden="true">
          <div className="orb" style={{ width: 520, height: 520, background: "#FF4D8D", top: "-10%", left: "-10%" }} />
          <div className="orb" style={{ width: 480, height: 480, background: "#6366F1", top: "40%", right: "-8%", animationDelay: "4s" }} />
          <div className="orb" style={{ width: 420, height: 420, background: "#06B6D4", bottom: "-12%", left: "25%", animationDelay: "8s" }} />
        </div>
        {children}
      </body>
    </html>
  );
}
