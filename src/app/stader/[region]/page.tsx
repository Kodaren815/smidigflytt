import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Truck, Sparkles } from 'lucide-react'

interface Props {
  params: Promise<{
    region: string
  }>
  searchParams: Promise<{
    type?: 'flyttfirma' | 'stadfirma'
  }>
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
  const serviceType = resolvedSearchParams.type === 'stadfirma' ? 'Städfirma' : 'Flyttfirma'
  
  return {
    title: `${serviceType} ${regionName} - Välj din stad | Smidigflytt`,
    description: `Välj din stad för ${serviceType.toLowerCase()} i ${regionName}. Professionell service i hela regionen.`,
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
        { name: 'Trosa', slug: 'trosa' }
      ]
    },
    'vastmanland': {
      name: 'Västmanlands län',
      cities: [
        { name: 'Västerås', slug: 'vasteras' },
        { name: 'Köping', slug: 'koping' },
        { name: 'Sala', slug: 'sala' },
        { name: 'Fagersta', slug: 'fagersta' },
        { name: 'Surahammar', slug: 'surahammar' },
        { name: 'Hallstahammar', slug: 'hallstahammar' },
        { name: 'Norberg', slug: 'norberg' },
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
        { name: 'Ekerö', slug: 'ekero' }
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
              Våra städer i {region.name}
            </h2>
            <p className="text-xl text-gray-600">
              Vi erbjuder {isStadfirma ? 'städtjänster' : 'flyttjänster'} i följande städer
            </p>
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
                    {city.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {serviceTitle} i {city.name}
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
            Hittar du inte din stad?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontakta oss så hjälper vi dig oavsett var i {region.name} du befinner dig
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/offert"
              className="bg-gradient-to-r from-blue-800 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Begär Offert
            </a>
            <a 
              href="tel:+46-10-544-05-77"
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300"
            >
              Ring oss nu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
