export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '*',
        disallow: '/admin/*',
      },
      sitemap: 'https://vedicinfos.in/sitemap.xml',
    }
  }