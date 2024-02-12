import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header/Header";
import Footer from "@/components/global/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: { template: "%s - Suara Dinamika", default: "Suara Dinamika" },
  description: "Media literasi digital dengan informasi unik dan komunikatif.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} text-neutral-900 bg-neutral-100`}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
