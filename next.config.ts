import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    // social schedulers fetch videos for upload from here
    return [{ source: "/media/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
  },
  async redirects() {
    // one canonical host: www -> apex (avoids duplicate URLs in Google)
    return [
      { source: "/bangladesh-money", destination: "/learn", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wealthinwhisper.com" }],
        destination: "https://wealthinwhisper.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
