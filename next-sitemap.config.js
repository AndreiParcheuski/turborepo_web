/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
// TODO need to change when we know all needed urls
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_SITE_URL,
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_SITE_URL,
      hreflang: 'ar',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/disallowed',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
