import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "노마드코리아 - 한국 디지털 노마드 도시 가이드",
  description: "한국에서 디지털 노마드로 살기 좋은 도시를 찾아보세요. 10개 도시, 20개 지표, 실제 노마드들의 리뷰로 검증된 정보",
  keywords: "디지털 노마드, 한국 노마드, 원격 근무, 노마드 도시, 제주도, 서울, 부산",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
