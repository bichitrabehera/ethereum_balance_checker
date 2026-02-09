import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "ChainView",
    template: "%s • ChainView",
  },
  description:
    "ChainView is a lightweight Ethereum dashboard to monitor wallet balances, gas prices, and network status on Sepolia.",
  applicationName: "ChainView",
  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: "ChainView",
    description:
      "A clean Ethereum dashboard for balances, gas prices, and network insights.",
    type: "website",
    locale: "en_US",
    siteName: "ChainView",
  },

  keywords: [
    "Ethereum",
    "Web3",
    "Blockchain",
    "Sepolia",
    "ETH Dashboard",
    "Gas Price",
    "Next.js",
  ],
};

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black ${openSans.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
