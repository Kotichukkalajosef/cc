/**
 * CRORESTARS — Brand Configuration
 *
 * Edit this file to update brand details, contact information, and social links.
 * All pages import from here, so changes propagate everywhere automatically.
 */

export const siteConfig = {
  /** Brand identity */
  name: "CRORESTARS",
  tagline: "Many Possibilities. One Vision.",
  url: "https://www.crorestars.com", // Update with your real domain

  /** SEO */
  description:
    "Discover CRORESTARS, a developing corporate brand founded on the vision of bringing possibilities and future ventures together under one shared direction.",

  /** Contact — replace placeholders with real values */
  email: "hello@crorestars.com", // TODO: Replace with your actual email address
  phone: "", // TODO: Add your phone number, or leave empty to hide
  address: "", // TODO: Add your address, or leave empty to hide

  /** Social links — remove or leave empty to hide the link */
  social: {
    linkedin: "", // e.g. "https://linkedin.com/company/crorestars"
    twitter: "", // e.g. "https://twitter.com/crorestars"
    instagram: "", // e.g. "https://instagram.com/crorestars"
  },

  /** Logo — path to the logo image inside /public */
  logo: {
    /** Primary wordmark (used in header and footer). Replace with your real logo file. */
    src: "/logo/crorestars-wordmark.svg",
    /** Alt text for the logo */
    alt: "CRORESTARS",
    /** Width and height used for the Next.js Image component */
    width: 180,
    height: 40,
  },

  /** Footer */
  footer: {
    /** Legal entity name for copyright line. Update once your company is registered. */
    legalName: "CRORESTARS",
    /** Launch year — used for copyright "YYYY – present" range */
    foundedYear: 2026,
  },

  /** Open Graph / social sharing */
  og: {
    image: "/og-image.svg", // Default high-res SVG OG preview
  },
} as const;

/**
 * Future ventures data.
 * When you are ready to add a venture, append an object to this array.
 *
 * Example shape:
 * {
 *   id: "unique-slug",
 *   name: "Venture Name",
 *   shortDescription: "One or two sentences.",
 *   status: "developing" | "active" | "coming-soon",
 *   sector: "e.g. Technology",
 *   href: "/ventures/unique-slug", // or an external URL
 * }
 */
export const ventures: {
  id: string;
  name: string;
  shortDescription: string;
  status: "developing" | "active" | "coming-soon";
  sector: string;
  href: string;
}[] = [
  // No ventures yet. Add them here as they are announced.
];
