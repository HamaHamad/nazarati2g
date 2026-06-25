/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jeepoo.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
}

export default nextConfig