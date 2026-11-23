import type { MetadataRoute } from "next";

import { SITE_URL } from "@/components/JsonLd";
import { breakdowns } from "@/lib/breakdowns";
import { whispers } from "@/lib/content";
import { glossary } from "@/lib/glossary";
import { toolCatalog } from "@/lib/tool-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority = 0.6, lastModified: Date = now) => ({ url: `${SITE_URL}${path}`, lastModified, priority });
  return [
    page("/", 1),
    page("/breakdowns", 0.9),
    ...breakdowns.map((b) => page(`/breakdowns/${b.slug}`, 0.8, new Date(b.date))),
    page("/tools", 0.9),
    ...toolCatalog.map((t) => page(`/tools/${t.slug}`, 0.8)),
    page("/learn", 0.8),
    ...glossary.map((t) => page(`/learn/${t.slug}`, 0.7)),
    page("/whispers", 0.7),
    ...whispers.map((w) => page(`/whispers/${w.slug}`, 0.6)),
    page("/bangladesh-money", 0.5),
    page("/about", 0.4),
  ];
}
