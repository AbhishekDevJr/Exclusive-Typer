import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/66ddaae54d.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${inter.className} bg-[#1e1e1e] px-[150px]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
