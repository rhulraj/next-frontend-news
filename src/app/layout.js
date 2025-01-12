import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase : new URL("https://www.vedicinfos.in"),
  title: {
    default: "vedic gyan",
    template: `%s | vedic gyan`
  },
  description: "information on vedic kshatriya , koorm kshatriya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NODE_ENV==="production" && (
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1866825678952699"
     crossOrigin="anonymous">
      </script>)}
     <meta name="google-adsense-account" content="ca-pub-1866825678952699"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
