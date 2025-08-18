import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Truck, Sparkles } from 'lucide-react'
import SEO from '@/components/SEO'

interface Props {
  searchParams: Promise<{
    type?: 'flyttfirma' | 'stadfirma'
  }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const serviceType = resolvedSearchParams.type === 'stadfirma' ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = resolvedSearchParams.type === 'stadfirma' ? 'städtjänster' : 'flytthjälp'

  return {
    title: `${serviceType} Västmanlands län - Professionell ${serviceDescription} | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Västmanlands län? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Västmanlands län. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} västmanlands län, ${serviceDescription} västmanland, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} västmanland`,
    openGraph: {
      title: `${serviceType} Västmanlands län - Professionell ${serviceDescription} | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Västmanlands län. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function VastmanlandPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const västmanlandRegion = {
    name: 'Västmanlands län',
    cities: [
      { name: 'Västerås', slug: 'vasteras' },
      { name: 'Arboga', slug: 'arboga' },
      { name: 'Köping', slug: 'koping' },
      { name: 'Sala', slug: 'sala' },
      { name: 'Fagersta', slug: 'fagersta' },
      { name: 'Surahammar', slug: 'surahammar' },
      { name: 'Hallstahammar', slug: 'hallstahammar' },
      { name: 'Norberg', slug: 'norberg' },
      { name: 'Kungsor', slug: 'kungsor' },
      { name: 'Skinnskatteberg', slug: 'skultuna' }
    ]
  }

  const serviceType = resolvedSearchParams.type === 'stadfirma' ? 'stadfirma' : 'flyttfirma'
  const serviceTitle = resolvedSearchParams.type === 'stadfirma' ? 'Städfirma' : 'Flyttfirma'
  const isStadfirma = resolvedSearchParams.type === 'stadfirma'

  return (
    <>
      <SEO
        title={`${serviceTitle} Västmanlands län - Professionell ${isStadfirma ? 'städservice' : 'flyttservice'} | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceTitle.toLowerCase()} i Västmanlands län? Smidigflytt erbjuder trygg ${isStadfirma ? 'städservice' : 'flyttservice'}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Västmanlands län. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceTitle.toLowerCase()} västmanlands län, ${isStadfirma ? 'städservice' : 'flyttservice'} västmanland, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} västmanland`}
        url={`https://smidigflytt365.se/stader/vastmanland${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                {västmanlandRegion.name}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {serviceTitle} i {västmanlandRegion.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Välj din stad för professionell {isStadfirma ? 'städservice' : 'flyttservice'}
              </p>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 text-lg font-medium mb-6">
                {isStadfirma ? <Sparkles className="h-5 w-5 mr-2" /> : <Truck className="h-5 w-5 mr-2" />}
                {serviceTitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                {isStadfirma ? 'Städfirma' : 'Flyttfirma'} i {västmanlandRegion.name} - Välj din stad
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Vi erbjuder {isStadfirma ? 'professionell städservice' : 'trygg flyttservice'} med RUT-avdrag i följande städer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {västmanlandRegion.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/stader/${city.slug}${isStadfirma ? '?type=stadfirma' : ''}`}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{city.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {isStadfirma ? 'Städservice' : 'Flyttservice'} med RUT-avdrag
                      </p>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                      <span className="text-sm font-semibold">Välj {city.name}</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              {isStadfirma ? 'Behöver du städhjälp' : 'Behöver du flytthjälp'} i {västmanlandRegion.name}?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {isStadfirma 
                ? 'Kontakta oss för en kostnadsfri offert på städtjänster med RUT-avdrag'
                : 'Kontakta oss för en kostnadsfri offert på flytttjänster med RUT-avdrag'
              }
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              Kontakta oss idag
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smidigflytt",
              "description": `Professionell ${isStadfirma ? 'städservice' : 'flyttservice'} med RUT-avdrag och försäkring i ${västmanlandRegion.name}`,
              "url": `https://smidigflytt365.se/stader/vastmanland${isStadfirma ? '?type=stadfirma' : ''}`,
              "telephone": "+46-10-544-05-77",
              "priceRange": "$$",
              "areaServed": {
                "@type": "State",
                "name": västmanlandRegion.name
              },
              "serviceType": isStadfirma ? "Städservice" : "Flyttservice",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `${serviceTitle} tjänster`,
                "itemListElement": västmanlandRegion.cities.map(city => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `${serviceTitle} ${city.name}`,
                    "description": `${isStadfirma ? 'Städhjälp' : 'Flytthjälp'} med RUT-avdrag i ${city.name}`,
                    "areaServed": {
                      "@type": "City",
                      "name": city.name
                    }
                  }
                }))
              }
            })
          }}
        />
      </div>
    </>
  )
}
