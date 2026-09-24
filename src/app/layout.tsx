import type { Metadata } from "next";
import { Inter, Noto_Serif_Bengali } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoBengali = Noto_Serif_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
});

const BASE_URL = "https://www.aposh.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "APOSH – Ashokta Punarbashan Sangstha",
    template: "%s | APOSH",
  },
  description:
    "Ashokta Punarbashan Sangstha (APOSH) – A non-government, non-profit organization in Rajshahi, Bangladesh providing drug rehabilitation, detoxification, and HIV/AIDS prevention services since 1999.",
  keywords: [
    "APOSH",
    "Ashokta Punarbashan Sangstha",
    "drug rehabilitation Bangladesh",
    "detoxification Rajshahi",
    "HIV prevention NGO Bangladesh",
    "NGO Rajshahi",
    "drug addiction treatment",
    "harm reduction Bangladesh",
  ],
  authors: [{ name: "APOSH", url: BASE_URL }],
  creator: "APOSH",
  publisher: "Ashokta Punarbashan Sangstha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "APOSH – Ashokta Punarbashan Sangstha",
    title: "APOSH – Ashokta Punarbashan Sangstha",
    description:
      "A non-government, non-profit organization in Rajshahi, Bangladesh providing drug rehabilitation, detoxification, and HIV/AIDS prevention services since 1999.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "APOSH – Ashokta Punarbashan Sangstha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APOSH – Ashokta Punarbashan Sangstha",
    description:
      "A non-government, non-profit organization in Rajshahi, Bangladesh providing drug rehabilitation and HIV/AIDS prevention services.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logos/aposh_logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/logos/aposh_logo.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    // Add your Google Search Console verification token here when ready
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

// JSON-LD Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Ashokta Punarbashan Sangstha (APOSH)",
  alternateName: "APOSH",
  url: BASE_URL,
  logo: `${BASE_URL}/logos/aposh_logo.png`,
  image: `${BASE_URL}/og-image.png`,
  description:
    "A non-government, non-profit organization in Rajshahi, Bangladesh providing drug rehabilitation, detoxification, and HIV/AIDS prevention services since 1999.",
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kashiadanga More (Beside Sonali Bank)",
    addressLocality: "Rajshahi Court",
    addressRegion: "Rajshahi",
    postalCode: "6000",
    addressCountry: "BD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+8801723667373",
    contactType: "customer service",
    email: "info@aposhs.org",
    availableLanguage: ["en", "bn"],
  },
  areaServed: {
    "@type": "Country",
    name: "Bangladesh",
  },
  sameAs: [],
};

// JSON-LD Structured Data for Website (enables Google Sitelinks Search Box)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "APOSH",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/pages/notice?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a4a6b" />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="BD-E" />
        <meta name="geo.placename" content="Rajshahi, Bangladesh" />
        <meta name="geo.position" content="24.373031;88.564401" />
        <meta name="ICBM" content="24.373031, 88.564401" />
      </head>
      <body>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
