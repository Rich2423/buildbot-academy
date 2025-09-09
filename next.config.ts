import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig