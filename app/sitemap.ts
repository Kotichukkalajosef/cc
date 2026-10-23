import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://crorestars.com").replace(/\/$/, "");

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-23T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-23T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
