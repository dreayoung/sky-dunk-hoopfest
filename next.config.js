/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@square/web-sdk',
  'react-square-web-payments-sdk',
]);

module.exports = withTM({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/event-tickets',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  },
  env: {
    SQ_ACCESS_TKN: process.env.SQ_ACCESS_TKN,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
});
