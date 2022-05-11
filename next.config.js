const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProduction ? "/fake-bank/" : ""
}

module.exports = nextConfig;
