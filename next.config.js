// @ts-ignore

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { serverActions: true, appDir: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
    ],
  },
};

module.exports = config;

