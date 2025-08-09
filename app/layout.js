import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/sections/navigation/Navigation";
import TopBar from "@/sections/top-bar/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leitner Box",
  description: "Application to learn vocabulary in any language faster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="flex w-full">
        <div className="w-8/120">
          <Navigation />
        </div>
        <main className="w-11/12">
          <TopBar />
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}