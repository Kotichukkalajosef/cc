import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans, Cormorant_Garamond, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
    default: "CRORESTARS | Many Possibilities. One Vision.",
    template: "%s | CRORESTARS",
  },
  description:
    "CRORESTARS is an enduring institutional enterprise in its foundational era, conceived to architect, capitalize, and operate sovereign businesses across generations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "CRORESTARS",
    title: "CRORESTARS | A Crore of Stars. One Direction.",
    description:
      "An enduring institutional enterprise in its foundational era, conceived to architect, capitalize, and operate sovereign businesses across generations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRORESTARS",
    description:
      "An enduring institutional enterprise in its foundational era, conceived to architect, capitalize, and operate sovereign businesses across generations.",
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
  themeColor: "#020205",
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
