import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gammastudio.co";
const siteName = "Gamma Studio";
const defaultTitle = "Gamma Studio — Premium Photography & Creative Agency";
const defaultDescription =
  "Gamma Studio is a premium photography and creative agency specializing in cinematic visuals, brand photography, video production, and luxury visual campaigns.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "photography studio",
    "premium photography",
    "creative agency",
    "brand photography",
    "cinematic video production",
    "luxury photography",
    "commercial photography",
    "visual storytelling",
    "fashion photography",
    "editorial photography",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: defaultTitle,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.jpg"],
    creator: "@gammastudio",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "photography",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteUrl,
  name: siteName,
  description: defaultDescription,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  priceRange: "$$$$",
  serviceType: [
    "Brand Photography",
    "Video Production",
    "Creative Direction",
    "Campaign Design",
    "Visual Storytelling",
  ],
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Photography",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Video Production",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${bebas.variable} font-body bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
