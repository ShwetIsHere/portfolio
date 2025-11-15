/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML files so the site can be deployed to GitHub Pages
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
