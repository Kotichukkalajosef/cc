import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans, Cormorant_Garamond, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600", "700"],
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
    default: "CRORESTARS — Built to Become More.",
    template: "%s | CRORESTARS",
  },
  description:
    "CRORESTARS is founded on the ambition to build, grow, and create lasting value. We believe what begins with one idea can develop into something far greater through vision, discipline, and purposeful execution.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "CRORESTARS",
    title: "CRORESTARS — Built to Become More.",
    description:
      "CRORESTARS is founded on the ambition to build, grow, and create lasting value. Built to Become More.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRORESTARS — Built to Become More.",
    description:
      "CRORESTARS is founded on the ambition to build, grow, and create lasting value. Built to Become More.",
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
  themeColor: "#08090A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CRORESTARS",
    url: siteUrl,
    slogan: "Built to Become More.",
    founder: {
      "@type": "Person",
      name: "Kotichukkala",
    },
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakarta.variable} ${cormorant.variable} ${notoSansTelugu.variable}`}
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
