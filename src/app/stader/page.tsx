import Link from 'next/link'
import { MapPin, ArrowRight, Star } from 'lucide-react'
import SEO from '@/components/SEO'

const cities = [
  {
    name: "Mälardalen",
    region: "Mälardalsregionen",
    population: "2.5 miljoner",
    description: "Vår hemmaregion med dess unika kombination av städer, industriområden och natursköna miljöer.",
    specialties: ["Hemmaplansfördel med regional kunskap", "Lokala kontakter och nätverk", "Expertis på hela regionen"],
    link: "/stader/malardalen",
    image: "/malardalen-city.jpg"
  },
  {
    name: "Stockholm",
    region: "Stockholms län",
    population: "2.3 miljoner",
    description: "Sveriges huvudstad med unika utmaningar som smala gränder, höga byggnader och begränsad parkering.",
    specialties: ["Experter på Gamla Stan", "Höghusspecialister", "Parkerings- och tillståndslösningar"],
    link: "/stader/stockholm",
    image: "/stockholm-city.jpg"
  },
  {
    name: "Göteborg",
    region: "Västra Götalands län", 
    population: "1 miljon",
    description: "Västkustens pärla med sina backar, broar och särskilda trafikförhållanden.",
    specialties: ["Backspecialister", "Bro- och tunnelnavigering", "Västvind-anpassad planering"],
    link: "/stader/goteborg",
    image: "/goteborg-city.jpg"
  },
  {
    name: "Malmö",
    region: "Skåne län",
    population: "350 000",
    description: "Skånes största stad med modern stadsutveckling och unika infrastrukturella förutsättningar.",
    specialties: ["Öresundsbro-specialister", "Moderna bostadsområden", "Effektiv citynavigering"],
    link: "/stader/malmo", 
    image: "/malmo-city.jpg"
  },
  {
    name: "Uppsala",
    region: "Uppsala län",
    population: "230 000",
    description: "Studentstaden med historisk charm och moderna bostadsområden.",
    specialties: ["Studentflytt-experter", "Historiska byggnader", "Campus-närvarande service"],
    link: "/stader/uppsala",
    image: "/uppsala-city.jpg"
  },
  {
    name: "Västerås",
    region: "Västmanlands län", 
    population: "155 000",
    description: "Mälardalens industristad med blandning av villa- och lägenhetsområden.",
    specialties: ["Villa- och industriområden", "Mälardalsexpertis", "Flexibla lösningar"],
    link: "/stader/vasteras",
    image: "/vasteras-city.jpg"
  },
  {
    name: "Örebro",
    region: "Örebro län",
    population: "155 000", 
    description: "Mellansveriges nav med bra kommunikationer och varierande bostadstyper.",
    specialties: ["Centralläge-fördelar", "Varierande bostadstyper", "Snabba kommunikationer"],
    link: "/stader/orebro",
    image: "/orebro-city.jpg"
  }
]

export default function StaderPage() {
  return (
    <>
      <SEO
        title="Städer vi täcker - Flyttfirma i hela Sverige | Smidigflytt"
        description="Vi erbjuder professionella flyttjänster i Sveriges största städer. Lokalt anpassad service i Stockholm, Göteborg, Malmö, Uppsala, Västerås och Örebro."
        keywords="flyttfirma städer, stockholm, göteborg, malmö, uppsala, västerås, örebro"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-secondary py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vi finns i <span className="text-smidig-lightyellow">hela Sverige</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Lokalt anpassad flyttservice i Sveriges största städer. 
                Vi känner varje stads unika utmaningar och möjligheter.
              </p>
              <div className="flex items-center justify-center space-x-4 text-lg">
                <MapPin className="h-6 w-6 text-smidig-lightyellow" />
                <span>Huvudkontor: Mälardalen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-smidig-darkblue mb-6">
                Våra städer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Varje stad har sina egna utmaningar. Vi anpassar våra tjänster efter lokala förhållanden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  
                  {/* City Header */}
                  <div className="bg-gradient-primary p-6 text-white relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                      <p className="text-smidig-lightyellow mb-1">{city.region}</p>
                      <p className="text-sm opacity-90">{city.population} invånare</p>
                    </div>
                  </div>

                  {/* City Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {city.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Våra specialiteter:</h4>
                      <ul className="space-y-2">
                        {city.specialties.map((specialty, specialtyIndex) => (
                          <li key={specialtyIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-smidig-blue rounded-full mr-3 flex-shrink-0"></div>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={city.link}
                      className="inline-flex items-center text-smidig-blue hover:text-smidig-darkblue font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Läs mer om {city.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gradient-to-br from-smidig-lightgray to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-smidig-darkblue mb-6">
                Varför välja lokal expertis?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vi känner varje stads unika förutsättningar och anpassar våra tjänster därefter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-smidig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-smidig-blue" />
                </div>
                <h3 className="text-xl font-bold text-smidig-darkblue mb-2">Lokal kunskap</h3>
                <p className="text-gray-600">Vi känner trafikförhållanden, parkeringsmöjligheter och lokala regler.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-smidig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="text-xl font-bold text-smidig-darkblue mb-2">Optimerade rutter</h3>
                <p className="text-gray-600">Vi planerar de mest effektiva vägarna för snabb och säker transport.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-smidig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-xl font-bold text-smidig-darkblue mb-2">Områdesexpertis</h3>
                <p className="text-gray-600">Vi förstår olika bostadsområdens specifika utmaningar och möjligheter.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-smidig-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-smidig-blue" />
                </div>
                <h3 className="text-xl font-bold text-smidig-darkblue mb-2">Lokala referenser</h3>
                <p className="text-gray-600">Vi har byggt upp förtroende och referenser i varje stad vi verkar i.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Redo för din flytt?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Kontakta oss idag för lokal experthjälp i din stad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offert"
                className="bg-gradient-cta text-smidig-darkblue px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär offert
              </Link>
              <a
                href="tel:+46-10-544-05-77"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-smidig-darkblue transition-all duration-300"
              >
                Ring oss: Kommer snart
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
