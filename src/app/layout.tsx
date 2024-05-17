import { Navbar } from "../components/Navbar";
import ScreenSizeDebug from "../components/ScreenSizeDebug";
import "./globals.css";
import { Inter } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col lg:mx-auto">
        <Navbar />
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2">{children}</main>
        <ScreenSizeDebug />
      </body>
    </html>
  );
}
