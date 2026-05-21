/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cartodb-basemaps-a.global.ssl.fastly.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tile.openstreetmap.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
