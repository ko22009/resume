/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'ko22009.github.io',
  },
}

module.exports = nextConfig
