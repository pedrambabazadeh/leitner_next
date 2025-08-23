import { Geist, Geist_Mono, Rajdhani } from "next/font/google";
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

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

export const metadata = {
  title: "Leitner Box",
  description: "Application to learn vocabulary in any language faster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'Rajdhani, sans-serif'}}
      >
      <div className="flex w-full">
        <div className=" w-8/120 h-full z-10">
          <div className="h-full fixed flex items-center justify-center w-8/120 z-10">
            <Navigation />
          </div>
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