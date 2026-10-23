import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-noto-telugu",
  display: "swap",
  weight: ["400", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crorestars.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CRORESTARS",
    template: "%s | CRORESTARS",
  },
  description:
    "CRORESTARS is a company in its earliest days, being built to create businesses across industries over time.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "CRORESTARS",
    title: "CRORESTARS",
    description:
      "CRORESTARS is a company in its earliest days, being built to create businesses across industries over time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRORESTARS",
    description:
      "CRORESTARS is a company in its earliest days, being built to create businesses across industries over time.",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Truthful JSON-LD Organization containing only name, url, and founder name
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CRORESTARS",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "[FOUNDER NAME]", // TODO: Replace with founder name
    },
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${notoSansTelugu.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
