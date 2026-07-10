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
    "Senior Software Engineer",
    "DevOps Engineer",
    "Software Engineer Morocco",
    "AI Engineer",
    "Machine Learning Engineer",
    "Cloud Engineer",
    "CI/CD",
    "Kubernetes",
    "Docker",
    "Full Stack Developer",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: "https://achrafboutzad.com" }],
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
    canonical: "https://achrafboutzad.com",
  },
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    url: "https://achrafboutzad.com",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/achraf-logo-1.png",
        width: 512,
        height: 512,
        alt: `${profile.name} — Senior Software Engineer & DevOps Engineer`,
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
    icon: "/achraf-logo-1.png",
    apple: "/achraf-logo-1.png",
  },
  category: "technology",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://achrafboutzad.com",
  email: profile.email,
  image: "https://achrafboutzad.com/achraf-logo-1.png",
  jobTitle: "Senior Software Engineer & DevOps Engineer",
  description: profile.seoDescription,
  knowsAbout: [
    "Software Engineering",
    "DevOps",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Infrastructure",
    "CI/CD",
    "Kubernetes",
    "Docker",
    "Next.js",
    "TypeScript",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: profile.location,
  },
  sameAs: profile.socials
    .filter((s) => s.label !== "Email")
    .map((s) => s.href),
};
