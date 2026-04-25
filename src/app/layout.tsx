import type { Metadata } from "next";
import { Inter, Bagel_Fat_One, Reggae_One, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel",
  display: "swap",
});

const reggaeOne = Reggae_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reggae",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-jp",
  display: "swap",
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
      className={`${inter.variable} ${bagelFatOne.variable} ${reggaeOne.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[#FFF8F0]">
        <div className="ambient-bg" aria-hidden="true">
          <div className="orb" style={{ width: 520, height: 520, background: "#E63946", top: "-10%", left: "-10%" }} />
          <div className="orb" style={{ width: 480, height: 480, background: "#1D2B4A", top: "40%", right: "-8%", animationDelay: "4s" }} />
          <div className="orb" style={{ width: 420, height: 420, background: "#F4A261", bottom: "-12%", left: "25%", animationDelay: "8s" }} />
        </div>
        {children}
      </body>
    </html>
  );
}
