import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achrafboutzad.com"),
  title: "Achraf Boutzad — Software Developer",
  description:
    "Portfolio of Achraf Boutzad — a software developer crafting modern, performant and delightful web experiences.",
  keywords: [
    "Achraf Boutzad",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Achraf Boutzad" }],
  openGraph: {
    title: "Achraf Boutzad — Software Developer",
    description:
      "Portfolio of Achraf Boutzad — a software developer crafting modern, performant and delightful web experiences.",
    type: "website",
    images: ["/achraf-logo-1.png"],
  },
  icons: {
    icon: "/achraf-logo-1.png",
    apple: "/achraf-logo-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
