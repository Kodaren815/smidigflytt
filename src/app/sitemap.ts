import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'error'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smidigflytt365.se'
  const lastModified = new Date()

  // Main pages
  const mainPages = [
    '',
    '/tjanster',
    '/stader',
    '/offert',
    '/kontakt',
    '/prisberknare',
    '/om-oss',
    '/faq',
    '/recensioner',
    '/reklamation',
    '/integritet',
    '/villkor',
  ]

  // Service pages
  const servicePages = [
    '/tjanster/flytthjalp',
    '/tjanster/magasinering',
    '/tjanster/packservice',
    '/tjanster/montering',
    '/tjanster/dodsboflytt',
    '/tjanster/kontorsflytt',
    '/tjanster/pianoflytt',
    '/tjanster/stadning',
  ]

  // City pages - major cities
  const cityPages = [
    '/stader/stockholm',
    '/stader/goteborg', 
    '/stader/malmo',
    '/stader/orebro',
    '/stader/eskilstuna',
    '/stader/orebro-lan',
    '/stader/malardalen',
    '/stader/botkyrka',
    '/stader/danderyd',
    '/stader/ekero',
    '/stader/haninge',
    '/stader/huddinge',
    '/stader/jarfalla',
    '/stader/lidingo',
    '/stader/nacka',
    '/stader/nykoping',
    '/stader/nykvarn',
    '/stader/nynashamn',
    '/stader/osteraker',
    '/stader/oxelosund',
    '/stader/arboga',
    '/stader/askersund',
    '/stader/degerfors',
    '/stader/fagersta',
    '/stader/flen',
    '/stader/gnesta',
    '/stader/hallefors',
    '/stader/hallsberg',
    '/stader/hallstahammar',
    '/stader/karlskoga',
    '/stader/katrineholm',
    '/stader/koping',
    '/stader/kumla',
    '/stader/kungsor',
    '/stader/lindesberg',
    '/stader/mariefred',
    '/stader/nora',
    '/stader/norberg',
    '/stader/sala',
  ]

  const sitemap: MetadataRoute.Sitemap = [
    // Main pages
    ...mainPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.9,
    })),
    
    // Service pages
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    
    // City pages
    ...cityPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return sitemap
}
