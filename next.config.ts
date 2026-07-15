import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ro",
        permanent: true,
      },
      {
        source: "/ro/branding-logo-design",
        destination: "/ro/creare-website-uri",
        permanent: true,
      },
      {
        source: "/en/branding-logo-design",
        destination: "/en/creare-website-uri",
        permanent: true,
      },
      {
        source: "/ru/branding-logo-design",
        destination: "/ru/creare-website-uri",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(webp|avif|jpg|jpeg|png|svg|ico|woff2|mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
