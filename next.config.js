/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@square/web-sdk',
  'react-square-web-payments-sdk',
]);

module.exports = withTM({
  // experimental: {
  //   esmExternals: 'loose',
  // },
  images: {
    domains: ['images.pexels.com'],
  },
  env: {
    SQ_ACCESS_TKN: process.env.SQ_ACCESS_TKN,
    SQ_APPLICATION_ID: process.env.SQ_APPLICATION_ID,
    MONGODB_URI: process.env.MONGODB_URI,
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
