import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fake KakaoTalk",
  description: "가짜 카카오톡 대화를 만들어보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
