/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // For placeholder.co images
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      // For local project images
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/Projects/**',
      }
    ],
    dangerouslyAllowSVG: true, // Enable SVG support

  },
};

export default nextConfig;
