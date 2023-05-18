/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: [
      'src/assets',
      'src/components',
      'src/constants',
      'src/hooks',
      'src/pages',
      'src/services',
      'src/state',
      'src/styles',
      'src/utils',
      'src/types',
    ],
  },
}

module.exports = nextConfig
