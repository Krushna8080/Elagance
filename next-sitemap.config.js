/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fashionbrand.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://fashionbrand.com/server-sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
} 