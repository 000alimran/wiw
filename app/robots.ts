import type { MetadataRoute } from "next";

import { SITE_URL } from "@/components/JsonLd";

// Search engines and AI assistants are welcome: being cited is how a small publication gets found.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
