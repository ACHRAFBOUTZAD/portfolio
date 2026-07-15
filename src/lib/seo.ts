import type { Metadata } from "next";
import { profile } from "@/lib/content";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://achrafboutzad.com"),
  title: {
    default: profile.seoTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.seoDescription,
  keywords: [
    "Achraf Boutzad",
    "Software Engineer",
    "DevOps Engineer",
    "Software Engineer Morocco",
    "Real-time dashboards",
    "Spring Boot",
    "FastAPI",
    "Next.js",
    "Kafka",
    "MQTT",
    "WebSockets",
    "CI/CD",
    "Docker",
    "IoT",
    "Casablanca",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  publisher: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: profile.website,
  },
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    url: profile.website,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/achraf-logo-1.png",
        width: 512,
        height: 512,
        alt: `${profile.name} — Software Engineer & DevOps Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
    images: ["/achraf-logo-1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  category: "technology",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.website,
  email: profile.email,
  telephone: profile.phone,
  image: `${profile.website}/achraf-logo-1.png`,
  jobTitle: "Software Engineer & DevOps Engineer",
  description: profile.seoDescription,
  knowsAbout: [
    "Software Engineering",
    "DevOps",
    "Real-time Systems",
    "Spring Boot",
    "FastAPI",
    "Next.js",
    "Kafka",
    "MQTT",
    "WebSockets",
    "CI/CD",
    "Docker",
    "IoT",
    "Power BI",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "Morocco",
  },
  sameAs: profile.socials
    .filter((s) => s.label !== "Email")
    .map((s) => s.href),
};
