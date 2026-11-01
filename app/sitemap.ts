import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/guides", "/about", "/privacy", "/disclaimer"].map((path) => ({
    url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7,
  }));
  const articlePages = articles.map((article) => ({
    url: `${siteUrl}/guides/${article.slug}`, lastModified: new Date(article.date),
    changeFrequency: "monthly" as const, priority: 0.8,
  }));
  return [...staticPages, ...articlePages];
}