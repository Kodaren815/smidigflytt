import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flyttfirma Södermanland - Trygg flytt med RUT-avdrag | Smidig Flytt',
  description: 'Flyttfirma i Södermanland. Professionell flytthjälp med RUT-avdrag.',
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sodermanland/flyttfirma',
  },
}

export default function SodermanlandFlyttfirmaPage() {
  const region = {
    name: 'Södermanland',
    cities: [
      { name: 'Eskilstuna', slug: 'eskilstuna' },
      { name: 'Nyköping', slug: 'nykoping' },
      { name: 'Strängnäs', slug: 'strangnas' },
      { name: 'Katrineholm', slug: 'katrineholm' },
      { name: 'Flen', slug: 'flen' },
      { name: 'Oxelösund', slug: 'oxelosund' },
      { name: 'Mariefred', slug: 'mariefred' },
      { name: 'Trosa', slug: 'trosa' }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {region.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Flyttfirma i {region.name}
            </h1>
            <div className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              <p className="mb-4">Professionell flyttservice med <strong>RUT-avdrag och försäkring</strong></p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Flyttfirma i {region.name} - Välj din stad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {region.cities.map((city) => (
              <Link key={city.slug} href={`/stader/${city.slug}/flyttfirma`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 hover:bg-blue-50">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-blue-800 to-blue-600">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Flyttfirma {city.name}</h3>
                  <p className="text-gray-600 mb-4">Flytthjälp med RUT-avdrag i {city.name}</p>
                  <div className="flex items-center justify-center group-hover:translate-x-1 transition-transform text-blue-600">
                    <span className="text-sm font-semibold">Välj {city.name}</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
