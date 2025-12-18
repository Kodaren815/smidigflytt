import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Truck, Sparkles } from 'lucide-react'
import SEO from '@/components/SEO'

interface Props {
  params: Promise<{
    region: string
  }>
  searchParams: Promise<{
    type?: 'flyttfirma' | 'stadfirma'
  }>
}

// Generate static params for all regions
export async function generateStaticParams() {
  return [
    { region: 'sodermanland' },
    { region: 'vastmanland' },
    { region: 'stockholm' },
    { region: 'orebro-lan' },
  ]
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  
  const regionNames: Record<string, string> = {
    'sodermanland': 'Södermanlands län',
    'vastmanland': 'Västmanlands län',
    'stockholm': 'Stockholms län',
    'orebro-lan': 'Örebro län'
  }
  
  const regionName = regionNames[resolvedParams.region] || resolvedParams.region
  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  // const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  
  // SEO-optimized titles and descriptions with targeted keywords
  const seoData = isStadfirma ? {
    title: `Städfirma ${regionName} | Smidigflytt - RUT-avdrag & försäkrat`,
    description: `Professionell städfirma i ${regionName}. RUT-avdrag, försäkring och fast pris. Städhjälp med trygg service. Få offert redan idag!`,
    keywords: `städfirma ${regionName.toLowerCase()}, städhjälp ${regionName.toLowerCase()}, RUT-avdrag städning, prisvärd städfirma, städservice ${regionName.toLowerCase()}`
  } : {
    title: `Flyttfirma ${regionName} | Smidigflytt - Trygg flytt med RUT-avdrag`,
    description: `Flyttfirma i ${regionName} med försäkring och RUT-avdrag. Fast pris, flexibla tider och professionell flytthjälp. Få kostnadsfri offert!`,
    keywords: `flyttfirma ${regionName.toLowerCase()}, flytthjälp ${regionName.toLowerCase()}, billig flyttfirma, RUT-avdrag flytt, trygg flyttfirma, bohagsflytt ${regionName.toLowerCase()}`
  }
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: 'website',
      locale: 'sv_SE',
    },
    alternates: {
      canonical: `/stader/${resolvedParams.region}${isStadfirma ? '?type=stadfirma' : ''}`,
    },
  }
}

export default async function RegionPage({ params, searchParams }: Props) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  
  const regionData: Record<string, {
    name: string
    cities: Array<{ name: string; slug: string }>
  }> = {
    'sodermanland': {
      name: 'Södermanlands län',
      cities: [
        { name: 'Eskilstuna', slug: 'eskilstuna' },
        { name: 'Strängnäs', slug: 'strangnas' },
        { name: 'Katrineholm', slug: 'katrineholm' },
        { name: 'Nyköping', slug: 'nykoping' },
        { name: 'Oxelösund', slug: 'oxelosund' },
        { name: 'Flen', slug: 'flen' },
        { name: 'Gnesta', slug: 'gnesta' },
        { name: 'Torshälla', slug: 'torshalla' },
        { name: 'Trosa', slug: 'trosa' }
      ]
    },
    'vastmanland': {
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
    },
    'stockholm': {
      name: 'Stockholms län',
      cities: [
        { name: 'Stockholm', slug: 'stockholm' },
        { name: 'Sollentuna', slug: 'sollentuna' },
        { name: 'Täby', slug: 'taby' },
        { name: 'Danderyd', slug: 'danderyd' },
        { name: 'Lidingö', slug: 'lidingo' },
        { name: 'Nacka', slug: 'nacka' },
        { name: 'Värmdö', slug: 'varmdo' },
        { name: 'Tyresö', slug: 'tyreso' },
        { name: 'Haninge', slug: 'haninge' },
        { name: 'Nynäshamn', slug: 'nynashamn' },
        { name: 'Södertälje', slug: 'sodertalje' },
        { name: 'Huddinge', slug: 'huddinge' },
        { name: 'Botkyrka', slug: 'botkyrka' },
        { name: 'Salem', slug: 'salem' },
        { name: 'Ekerö', slug: 'ekero' },
        { name: 'Sigtuna', slug: 'sigtuna' },
        { name: 'Österåker', slug: 'osteraker' },
        { name: 'Nykvarn', slug: 'nykvarn' },
        { name: 'Upplands-Bro', slug: 'upplands-bro' },
        { name: 'Upplands-Väsby', slug: 'upplands-vasby' },
        { name: 'Solna', slug: 'solna' },
        { name: 'Stockholm stad', slug: 'stockholm-stad' },
        { name: 'Sundbyberg', slug: 'sundbyberg' },
        { name: 'Järfälla', slug: 'jarfalla' },
        { name: 'Vallentuna', slug: 'vallentuna' }
      ]
    },
    'orebro-lan': {
      name: 'Örebro län',
      cities: [
        { name: 'Örebro', slug: 'orebro' },
        { name: 'Kumla', slug: 'kumla' },
        { name: 'Hallsberg', slug: 'hallsberg' },
        { name: 'Degerfors', slug: 'degerfors' },
        { name: 'Karlskoga', slug: 'karlskoga' },
        { name: 'Lindesberg', slug: 'lindesberg' },
        { name: 'Nora', slug: 'nora' },
        { name: 'Hallefors', slug: 'hallefors' },
        { name: 'Askersund', slug: 'askersund' }
      ]
    }
  }

  const region = regionData[resolvedParams.region]
  const serviceType = resolvedSearchParams.type === 'stadfirma' ? 'stadfirma' : 'flyttfirma'
  const serviceTitle = resolvedSearchParams.type === 'stadfirma' ? 'Städfirma' : 'Flyttfirma'
  const isStadfirma = resolvedSearchParams.type === 'stadfirma'

  if (!region) {
    return <div>Region hittades inte</div>
  }

  return (
    <>
      <SEO
        title={`${serviceTitle} ${region.name} - Professionell ${isStadfirma ? 'städservice' : 'flyttservice'} | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceTitle.toLowerCase()} i ${region.name}? Smidigflytt erbjuder trygg ${isStadfirma ? 'städservice' : 'flyttservice'}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela ${region.name}. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceTitle.toLowerCase()} ${region.name.toLowerCase()}, ${isStadfirma ? 'städservice' : 'flyttservice'} ${region.name.toLowerCase()}, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} ${region.name.toLowerCase()}`}
        url={`https://smidigflytt365.se/stader/${resolvedParams.region}${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {region.name}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {serviceTitle} i {region.name}
            </h1>
            
            <div className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              <p className="mb-4">
                Professionell {isStadfirma ? 'städservice' : 'flyttservice'} med <strong>RUT-avdrag och försäkring</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Fast pris</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ RUT-avdrag</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Försäkrat</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Flexibla tider</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/offert"
                className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Få Kostnadsfri Offert
              </a>
              <a 
                href="tel:+46-10-544-05-77"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Ring 010-544 05 77
              </a>
            </div>
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
              {isStadfirma ? 'Städfirma' : 'Flyttfirma'} i {region.name} - Välj din stad
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vi erbjuder {isStadfirma ? 'professionell städservice' : 'trygg flyttservice'} med RUT-avdrag i följande städer
            </p>
            
            {/* SEO Benefits Section */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Varför välja Smidigflytt som din {isStadfirma ? 'städfirma' : 'flyttfirma'}?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">💰 RUT-avdrag</h4>
                  <p className="text-gray-700 text-sm">Vi sköter allt pappersarbete för RUT-avdraget</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">🛡️ Försäkrat</h4>
                  <p className="text-gray-700 text-sm">Fullständig försäkring och F-skattsedel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">⏰ Flexibla tider</h4>
                  <p className="text-gray-700 text-sm">Även kvällar och helger</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">💯 Fast pris</h4>
                  <p className="text-gray-700 text-sm">Inga dolda kostnader</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {region.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/stader/${city.slug}?type=${serviceType}`}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${
                  isStadfirma 
                    ? 'hover:border-orange-300 hover:bg-orange-50' 
                    : 'hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isStadfirma 
                      ? 'bg-gradient-to-br from-orange-400 to-yellow-400' 
                      : 'bg-gradient-to-br from-blue-800 to-blue-600'
                  }`}>
                    {isStadfirma ? (
                      <Sparkles className="h-8 w-8 text-white" />
                    ) : (
                      <Truck className="h-8 w-8 text-white" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {serviceTitle} {city.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {isStadfirma ? 'Städhjälp' : 'Flytthjälp'} med RUT-avdrag i {city.name}
                  </p>
                  
                  <div className={`flex items-center justify-center group-hover:translate-x-1 transition-transform ${
                    isStadfirma ? 'text-orange-500' : 'text-blue-600'
                  }`}>
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
            {isStadfirma ? 'Behöver du städhjälp' : 'Behöver du flytthjälp'} i {region.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isStadfirma 
              ? `Vi erbjuder professionell städservice med RUT-avdrag i hela ${region.name}. Kontakta oss för en kostnadsfri offert!`
              : `Vi hjälper dig med trygg och prisvärd flyttservice i hela ${region.name}. Få din kostnadsfria offert redan idag!`
            }
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              F-skattsedel & försäkring
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              RUT-avdrag - vi sköter allt
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Över 500 nöjda kunder
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/offert"
              className="bg-gradient-to-r from-blue-800 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Få Kostnadsfri Offert
            </a>
            <a 
              href="tel:+46-10-544-05-77"
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300"
            >
              Ring 010-544 05 77
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Svarstid inom 2 timmar • Kostnadsfri offert • Inga dolda kostnader
          </p>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Smidigflytt - ${serviceTitle} ${region.name}`,
            "description": `Professionell ${isStadfirma ? 'städservice' : 'flyttservice'} med RUT-avdrag och försäkring i ${region.name}`,
            "url": `https://smidigflytt365.se/stader/${resolvedParams.region}${isStadfirma ? '?type=stadfirma' : ''}`,
            "telephone": "+46-10-544-05-77",
            "priceRange": "$$",
            "areaServed": {
              "@type": "State",
              "name": region.name
            },
            "serviceType": isStadfirma ? "Städservice" : "Flyttservice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${serviceTitle} tjänster`,
              "itemListElement": region.cities.map(city => ({
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
