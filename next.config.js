/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'production.listennotes.com',
      },
    ],
  },
}

module.exports = nextConfig
