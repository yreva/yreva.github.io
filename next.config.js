/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dSign' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/dSign' : ''
}

module.exports = nextConfig
