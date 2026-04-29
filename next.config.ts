import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vilmgroup.vercel.app",
          },
        ],
        destination: "https://www.vilmgroup.md/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vilmgroup.md",
          },
        ],
        destination: "https://www.vilmgroup.md/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
