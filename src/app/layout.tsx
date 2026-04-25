import type { Metadata } from "next";
import { Inter, Bagel_Fat_One, Black_Han_Sans, Do_Hyeon, Archivo_Black, Anton } from "next/font/google";
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

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANI RIFT | 1분 안에 빠져드는 숏폼 애니",
  description: "매일 새 회차 업로드. 세로 화면, 1분 1화. 숏폼 드라마 OTT의 애니 버전, ANI RIFT.",
  keywords: ["anime", "shortform", "shorts", "OTT", "vertical", "애니메이션", "숏폼", "세로", "ANI RIFT"],
  openGraph: {
    title: "ANI RIFT | 1분 안에 빠져드는 숏폼 애니",
    description: "매일 새 회차. 세로 화면, 1분 1화.",
    url: "https://anirift.com",
    siteName: "ANI RIFT",
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
      className={`${inter.variable} ${bagelFatOne.variable} ${blackHanSans.variable} ${doHyeon.variable} ${archivoBlack.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-black bg-cream">
        {children}
      </body>
    </html>
  );
}
