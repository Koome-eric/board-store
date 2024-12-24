/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'tailwindui.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'images.unsplash.com' } // Add this line
    ]
  }
}

module.exports = nextConfig;
