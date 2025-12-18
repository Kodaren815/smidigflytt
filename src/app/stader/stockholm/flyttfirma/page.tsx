import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flyttfirma Stockholm - Professionell flytt i hela Stockholmsområdet | Smidig Flytt',
  description: 'Flyttfirma i Stockholm och närliggande kommuner. Professionell flytthjälp med RUT-avdrag i hela Stockholmsregionen.',
  keywords: 'flyttfirma stockholm, flytthjälp, flyttstädning, flytt stockholm',
  openGraph: {
    title: 'Flyttfirma Stockholm - Professionell flytt i hela Stockholmsområdet | Smidig Flytt',
    description: 'Professionell flytthjälp i hela Stockholmsregionen. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/stockholm/flyttfirma',
  },
}

export default function StockholmFlyttfirmaPage() {
  const region = {
    name: 'Stockholm',
    cities: [
      { name: 'Stockholm', slug: 'stockholm-stad' },
      { name: 'Solna', slug: 'solna' },
      { name: 'Sundbyberg', slug: 'sundbyberg' },
      { name: 'Danderyd', slug: 'danderyd' },
      { name: 'Lidingö', slug: 'lidingo' },
      { name: 'Nacka', slug: 'nacka' },
      { name: 'Järfälla', slug: 'jarfalla' },
      { name: 'Sollentuna', slug: 'sollentuna' },
      { name: 'Täby', slug: 'taby' },
      { name: 'Upplands Väsby', slug: 'upplands-vasby' },
      { name: 'Vallentuna', slug: 'vallentuna' },
      { name: 'Vaxholm', slug: 'vaxholm' },
      { name: 'Österåker', slug: 'osteraker' },
      { name: 'Värmdö', slug: 'varmdo' },
      { name: 'Huddinge', slug: 'huddinge' },
      { name: 'Botkyrka', slug: 'botkyrka' },
      { name: 'Salem', slug: 'salem' },
      { name: 'Haninge', slug: 'haninge' },
      { name: 'Tyresö', slug: 'tyreso' },
      { name: 'Ekerö', slug: 'ekero' },
      { name: 'Södertälje', slug: 'sodertalje' },
      { name: 'Nykvarn', slug: 'nykvarn' },
      { name: 'Upplands-Bro', slug: 'upplands-bro' },
      { name: 'Sigtuna', slug: 'sigtuna' },
      { name: 'Nynäshamn', slug: 'nynashamn' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-400">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Flyttfirma Stockholm
            </h1>
          </div>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Professionell flytthjälp i hela Stockholmsregionen. Välj din kommun nedan för att få en skräddarsydd offert.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-blue-200">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ RUT-avdrag upp till 50%</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Försäkring ingår</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Erfarna flyttare</span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            Våra tjänster finns i följande kommuner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {region.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/stader/${city.slug}/flyttfirma`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-blue-200" />
                      <h3 className="text-lg font-semibold text-white">
                        {city.name}
                      </h3>
                    </div>
                    <p className="text-blue-200 text-sm">
                      Professionell flytthjälp
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center border border-white/20">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Behöver du hjälp att välja?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Kontakta oss så hjälper vi dig hitta rätt lösning för din flytt i Stockholmsregionen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/offert"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>Få kostnadsfri offert</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/prisberknare"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 border border-white/30"
            >
              Beräkna pris direkt
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
