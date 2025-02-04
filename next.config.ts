/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // Enable support for local images
    domains: ["localhost"],
  },

  experimental: {
    appDir: true, // Enable app directory if you're using the App Router
  },

  reactStrictMode: true, // Optional: Helps catch potential issues
};

export default nextConfig;
