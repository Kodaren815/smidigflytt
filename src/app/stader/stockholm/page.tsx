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
  
  return {
    title: `${serviceType} Stockholms län - Välj din stad | Smidigflytt`,
    description: `Välj din stad för ${serviceType.toLowerCase()} i Stockholms län. Professionell service i hela regionen.`,
  }
}

export default async function StockholmRegionPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  
  const stockholmRegion = {
    name: 'Stockholms län',
    cities: [
      { name: 'Stockholm Stad', slug: 'stockholm-stad' },
      { name: 'Botkyrka', slug: 'botkyrka' },
      { name: 'Danderyd', slug: 'danderyd' },
      { name: 'Ekerö', slug: 'ekero' },
      { name: 'Haninge', slug: 'haninge' },
      { name: 'Huddinge', slug: 'huddinge' },
      { name: 'Järfälla', slug: 'jarfalla' },
      { name: 'Lidingö', slug: 'lidingo' },
      { name: 'Nacka', slug: 'nacka' },
      { name: 'Nykvarn', slug: 'nykvarn' },
      { name: 'Nynäshamn', slug: 'nynashamn' },
      { name: 'Österåker', slug: 'osteraker' },
      { name: 'Salem', slug: 'salem' },
      { name: 'Sigtuna', slug: 'sigtuna' },
      { name: 'Solna', slug: 'solna' },
      { name: 'Södertälje', slug: 'sodertalje' },
      { name: 'Sollentuna', slug: 'sollentuna' },
      { name: 'Sundbyberg', slug: 'sundbyberg' },
      { name: 'Täby', slug: 'taby' },
      { name: 'Tyresö', slug: 'tyreso' },
      { name: 'Upplands-Bro', slug: 'upplands-bro' },
      { name: 'Upplands Väsby', slug: 'upplands-vasby' },
      { name: 'Vallentuna', slug: 'vallentuna' },
      { name: 'Värmdö', slug: 'varmdo' }
    ]
  }

  const serviceType = resolvedSearchParams.type === 'stadfirma' ? 'stadfirma' : 'flyttfirma'
  const serviceTitle = resolvedSearchParams.type === 'stadfirma' ? 'Städfirma' : 'Flyttfirma'
  const isStadfirma = resolvedSearchParams.type === 'stadfirma'

  return (
    <>
      <SEO
        title={`${serviceTitle} Stockholm - Professionell ${isStadfirma ? 'städservice' : 'flyttservice'} i Stockholms län | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceTitle.toLowerCase()} i Stockholm? Smidigflytt erbjuder trygg ${isStadfirma ? 'städservice' : 'flyttservice'}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Stockholms län. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceTitle.toLowerCase()} stockholm, ${isStadfirma ? 'städservice' : 'flyttservice'} stockholm, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} stockholm, ${isStadfirma ? 'städning' : 'flytt'} stockholm`}
        url={`https://smidigflytt365.se/stader/stockholm${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {stockholmRegion.name}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {serviceTitle} i {stockholmRegion.name}
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
              Våra städer i {stockholmRegion.name}
            </h2>
            <p className="text-xl text-gray-600">
              Vi erbjuder {isStadfirma ? 'städtjänster' : 'flyttjänster'} i följande städer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stockholmRegion.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/stader/${city.slug}?type=${serviceType}`}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${
                  isStadfirma 
                    ? 'hover:border-orange-300 hover:bg-orange-50' 
                    : 'hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-blue-900 group-hover:text-orange-600 transition-colors">
                    {city.name}
                  </h3>
                  <ArrowRight className={`h-5 w-5 transition-colors ${
                    isStadfirma ? 'text-orange-400' : 'text-blue-400'
                  }`} />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {isStadfirma ? 'Städtjänster' : 'Flyttjänster'} i {city.name}
                </p>
                <div className={`inline-flex items-center text-sm font-medium ${
                  isStadfirma ? 'text-orange-600' : 'text-blue-600'
                }`}>
                  {isStadfirma ? <Sparkles className="h-4 w-4 mr-1" /> : <Truck className="h-4 w-4 mr-1" />}
                  Se tjänster
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        isStadfirma 
          ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
          : 'bg-gradient-to-r from-blue-600 to-blue-800'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Behöver du hjälp att välja rätt stad?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kontakta oss så hjälper vi dig hitta den bästa lösningen för dina behov
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Kontakta oss idag
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
