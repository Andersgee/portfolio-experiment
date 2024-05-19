import { type Metadata } from "next";
import { Navbar } from "../components/Navbar";
import ScreenSizeDebug from "../components/ScreenSizeDebug";
import "./globals.css";
//import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_ABSURL),
  title: {
    default: "Portfolio experiment",
    template: "%s | Portfolio experiment",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Portfolio experiment",
    description: "Developer, writer, and creator.",
    url: process.env.NEXT_PUBLIC_ABSURL,
    siteName: "Portfolio experiment",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Portfolio experiment",
    card: "summary_large_image",
  },
  //robots: {
  //  index: true,
  //  follow: true,
  //  googleBot: {
  //    "index": true,
  //    "follow": true,
  //    "max-video-preview": -1,
  //    "max-image-preview": "large",
  //    "max-snippet": -1,
  //  },
  //},
  //verification: {
  //  google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //  yandex: "14d2e73487fa6c71",
  //},
};

const fontSans = Montserrat({
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
