/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enables Image Optimization for remote images
  images: {
    domains: ['kebabknights.com.au'],
  },

  // Enable experimental CSS optimization (can help reduce bundle size)
  experimental: {
    optimizeCss: true,
  },

  // Minimize legacy polyfills
  swcMinify: true,
};

export default nextConfig;
