import type { Metadata } from "next";
import { Inter, Bagel_Fat_One, Black_Han_Sans, Do_Hyeon } from "next/font/google";
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

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-han",
  display: "swap",
});

const doHyeon = Do_Hyeon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-do-hyeon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anirift | 차원을 넘는 애니 체험",
  description: "차원을 넘는 애니 체험. Anirift — 숏폼 애니메이션 전용 차세대 OTT.",
  keywords: ["anime", "streaming", "OTT", "short-form", "animation", "애니메이션", "스트리밍", "Anirift", "숏폼"],
  openGraph: {
    title: "Anirift | 차원을 넘는 애니 체험",
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
      className={`${inter.variable} ${bagelFatOne.variable} ${blackHanSans.variable} ${doHyeon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-black bg-cream">
        {children}
      </body>
    </html>
  );
}
