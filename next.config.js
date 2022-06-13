/** @type {import('next').NextConfig} */

const fontsUrls = [
  '/fonts/SFPro-Medium.ttf',
  '/fonts/SFPro-Bold.ttf',
  '/fonts/Gotham-Light.otf',
  '/fonts/Gotham-Book.otf',
  '/fonts/Gotham-Medium.otf',
  '/fonts/Gotham-Bold.otf',
  '/fonts/Gotham-Black.otf',
  '/fonts/FiraSans-Medium.ttf'
];

const headers = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000, immutable'
  }
];

const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,

  // add domain to whitelist
  images: {
    domains: ['assets-us-01.kc-usercontent.com']
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true
          }
        }
      ]
    });

    return config;
  },

  // cache fonts for a long time
  async headers() {
    return [
      ...fontsUrls.map((source) => ({
        source,
        headers
      }))
    ];
  },

  // localization
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
