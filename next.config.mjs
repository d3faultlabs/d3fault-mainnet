/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Only ignore errors in development; enforce type safety in production
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
