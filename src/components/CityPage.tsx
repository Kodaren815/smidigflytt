'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, ArrowRight, CheckCircle, Home, Sparkles, Package } from 'lucide-react'

interface CityData {
  name: string
  region: string
  description: string
  localInfo: string
  services: string[]
  specialties: string[]
  areas: string[]
  serviceType?: 'flyttfirma' | 'städfirma' | 'stadfirma'
}

interface CityPageProps {
  city: CityData
}

export default function CityPage({ city }: CityPageProps) {
  const serviceTypeText = (city.serviceType === 'städfirma' || city.serviceType === 'stadfirma') ? 'Städfirma' : 'Flyttfirma';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {city.region}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {serviceTypeText} i <span className="text-white">{city.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
              {city.description}
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">4.9/5 Betyg</p>
                <p className="text-xs text-gray-200">100% Nöjda Kunder</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">Fullt Försäkrad</p>
                <p className="text-xs text-gray-200">Till 2 miljoner kronor</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Phone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">24/7 Support</p>
                <p className="text-xs text-gray-200">Vi finns alltid här för dig</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/offert"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Få Gratis Offert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="tel:0123456789"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring oss nu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div 
              className="animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Lokalkännedom i {city.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {city.localInfo}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Vi servar dessa områden:</h3>
                <div className="flex flex-wrap gap-2">
                  {city.areas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div 
              className="mt-10 lg:mt-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Våra Specialiteter</h3>
                <div className="space-y-4">
                  {city.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold text-gray-900">Kundbetyg</span>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;Fantastisk service i {city.name}! Snabb, professionell och prisvärd hjälp.&quot;
                  </p>
                  <p className="text-sm text-gray-500">- Maria L., {city.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-12 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Våra Tjänster i {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder ett komplett utbud av flytt- och städtjänster anpassade för {city.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Bostadsflytt</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Professionell flytthjälp för privatpersoner i {city.name}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Packning och uppackning
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Säker transport
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Möbel- och vitvarumontering
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-card" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Flyttstädning</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Professionell städning före och efter flytt
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Grundlig slutstädning
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Fönsterputsning
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    RUT-avdrag upp till 50%
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-card" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Magasinering</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Säker förvaring av dina tillhörigheter
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Klimatkontrollerat magasin
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    24/7 säkerhet
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Flexibla avtal
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-card" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Kontorsflytt</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Specialiserad flyttservice för företag
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Minimal störning av verksamhet
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    IT-utrustning säkert hanterad
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Projektledning
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-card" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Hemstädning</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Regelbunden hemstädning för privatpersoner
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Veckovis eller månadsvis
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Kvalitetsgaranti
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    RUT-avdrag upp till 50%
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-card" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Package className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Packservice</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Professionell packning av alla dina tillhörigheter
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Rätt förpackningsmaterial
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Fragila föremål specialhanteras
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Märkning och inventering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Redo att komma igång?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri offert. Vi hjälper dig med din flytt eller städning i {city.name}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/offert"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Få Gratis Offert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="tel:08270909"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                08-27 09 09
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Kontaktinformation</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      08-27 09 09
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      info@smidigflytt365.se
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      Serviceområde: {city.name} och omnejd
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Öppettider</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Måndag - Fredag: 07:00 - 19:00</div>
                    <div>Lördag: 08:00 - 16:00</div>
                    <div>Söndag: 09:00 - 15:00</div>
                    <div className="font-medium text-blue-600 mt-2">Akutservice 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
