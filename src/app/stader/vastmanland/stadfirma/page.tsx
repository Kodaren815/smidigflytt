import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Städfirma Västmanland - Hemstädning med RUT-avdrag | Smidig Flytt',
  description: 'Städfirma i Västmanland. Professionell hemstädning med RUT-avdrag.',
  alternates: {
    canonical: 'https://smidigflytt.se/stader/vastmanland/stadfirma',
  },
}

export default function VastmanlandStadfirmaPage() {
  const region = {
    name: 'Västmanland',
    cities: [
      { name: 'Västerås', slug: 'vasteras' },
      { name: 'Köping', slug: 'koping' },
      { name: 'Hallstahammar', slug: 'hallstahammar' },
      { name: 'Surahammar', slug: 'surahammar' },
      { name: 'Arboga', slug: 'arboga' },
      { name: 'Kungsör', slug: 'kungsor' },
      { name: 'Sala', slug: 'sala' },
      { name: 'Fagersta', slug: 'fagersta' },
      { name: 'Norberg', slug: 'norberg' },
      { name: 'Skinnskatteberg', slug: 'skinnskatteberg' }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-orange-600 via-yellow-500 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {region.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Städfirma i {region.name}
            </h1>
            <div className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              <p className="mb-4">Professionell hemstädning med <strong>RUT-avdrag och försäkring</strong></p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Städfirma i {region.name} - Välj din stad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {region.cities.map((city) => (
              <Link key={city.slug} href={`/stader/${city.slug}/stadfirma`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-300 hover:bg-orange-50">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-orange-600 to-yellow-500">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2">Städfirma {city.name}</h3>
                  <p className="text-gray-600 mb-4">Hemstädning med RUT-avdrag i {city.name}</p>
                  <div className="flex items-center justify-center group-hover:translate-x-1 transition-transform text-orange-600">
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
