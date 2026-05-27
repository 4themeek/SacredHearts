/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thesacredhearts.org',
      },
    ],
  },
};

module.exports = nextConfig;
