/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
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
