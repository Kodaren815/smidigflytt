import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'error'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/tjanster/',
        '/stader/',
        '/offert',
        '/kontakt',
        '/prisberknare',
        '/om-oss',
        '/faq',
        '/recensioner',
      ],
      disallow: [
        '/admin',
        '/api/',
        '/_next/',
        '/.*',
      ],
    },
    sitemap: 'https://www.smidigflytt365.se/sitemap.xml',
  }
}
