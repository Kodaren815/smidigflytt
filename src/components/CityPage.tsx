'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, ArrowRight, CheckCircle, Home, Sparkles, Package } from 'lucide-react'
import { motion } from 'framer-motion'

interface CityData {
  name: string
  region: string
  description: string
  localInfo: string
  services: string[]
  specialties: string[]
  areas: string[]
  serviceType?: 'flyttfirma' | 'städfirma'
}

interface CityPageProps {
  city: CityData
}

export default function CityPage({ city }: CityPageProps) {
  const serviceTypeText = city.serviceType === 'städfirma' ? 'Städfirma' : 'Flyttfirma';
  const serviceDescription = city.serviceType === 'städfirma' 
    ? `Trygg städservice i ${city.name}` 
    : `Trygg flytthjälp & städning i ${city.name}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {city.region}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {serviceTypeText} i <span className="text-white">{city.name}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
              {serviceDescription} - <strong>RUT-avdrag och försäkring ingår</strong>
            </p>
            
            {/* SEO-focused benefit highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ Fast pris utan dolda kostnader</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ RUT-avdrag - vi sköter allt</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ F-skattsedel & försäkring</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ Flexibla tider</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/offert"
                className="bg-gradient-cta text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Få Kostnadsfri Offert - {city.name}
              </Link>
              <a
                href="tel:+46-10-544-05-77"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Ring 010-544 05 77
              </a>
            </div>

            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-200" />
                ))}
                <span className="ml-2">4.8/5 stjärnor</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                F-skattsedel & försäkring
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                RUT-avdrag ingår
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Över 500 nöjda kunder
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About City Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                {city.serviceType === 'städfirma' 
                  ? `Professionell städfirma i ${city.name} - Därför väljer kunder oss`
                  : `Professionell flyttfirma i ${city.name} - Därför väljer kunder oss`
                }
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {city.description}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {city.localInfo}
              </p>
              
              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  {city.serviceType === 'städfirma' 
                    ? `Varför välja vår städfirma i ${city.name}?`
                    : `Varför välja vår flyttfirma i ${city.name}?`
                  }
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>RUT-avdrag - vi sköter allt pappersarbete</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>F-skattsedel och fullständig försäkring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Fast pris utan dolda kostnader</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Flexibla tider - även kvällar och helger</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0"
            >
              <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-8">
                <h3 className="text-xl font-bold text-black mb-6">
                  {city.serviceType === 'städfirma' 
                    ? `Våra städtjänster i ${city.name}:`
                    : `Våra flytttjänster i ${city.name}:`
                  }
                </h3>
                <div className="space-y-4">
                  {city.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-black mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
                
                {/* Local SEO boost */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {city.serviceType === 'städfirma' 
                      ? `Lokalt etablerad städfirma i ${city.name}`
                      : `Lokalt etablerad flyttfirma i ${city.name}`
                    }
                  </h4>
                  <p className="text-sm text-blue-800">
                    Vi känner {city.name} och {city.region} väl och erbjuder snabb, pålitlig service till fast pris.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {city.serviceType === 'städfirma' 
                ? `Våra städtjänster i ${city.name} - Med RUT-avdrag`
                : `Våra flytttjänster i ${city.name} - Med RUT-avdrag`
              }
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto">
              {city.serviceType === 'städfirma'
                ? `Professionell städservice i ${city.name} med försäkring och RUT-avdrag. Vi sköter allt från flyttstädning till hemstäd - alltid till fast pris.`
                : `Professionell flyttservice i ${city.name} med försäkring och RUT-avdrag. Vi hanterar allt från packning till städning - alltid till fast pris.`
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-black">
            {city.serviceType === 'städfirma' ? (
              // Städfirma service boxes
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Sparkles className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Hemstädning</h3>
                  <p className="text-gray-600 mb-4">Professionell hemstädning i {city.name}</p>
                  <Link 
                    href="/tjanster/hemstadning"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Home className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Flyttstädning</h3>
                  <p className="text-gray-600 mb-4">Garanterad godkänd flyttstädning i {city.name}</p>
                  <Link 
                    href="/tjanster/flyttstadning"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Package className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Kontorsstädning</h3>
                  <p className="text-gray-600 mb-4">Städtjänster för företag i {city.name}</p>
                  <Link 
                    href="/tjanster/kontorsstadning"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </>
            ) : (
              // Flyttfirma service boxes
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Home className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Flytthjälp</h3>
                  <p className="text-gray-600 mb-4">Professionell flytthjälp i hela {city.name}</p>
                  <Link 
                    href="/tjanster/flytthjalp"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Sparkles className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Flyttstädning</h3>
                  <p className="text-gray-600 mb-4">Garanterad godkänd flyttstädning i {city.name}</p>
                  <Link 
                    href="/tjanster/flyttstadning"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Package className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Magasinering</h3>
                  <p className="text-gray-600 mb-4">Säker förvaring i {city.name}</p>
                  <Link 
                    href="/tjanster/magasinering"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-black mb-6">Alla våra tjänster i {city.name}:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {city.serviceType === 'städfirma' 
                ? `Redo för städning i ${city.name}?`
                : `Redo för din flytt i ${city.name}?`
              }
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Kontakta oss idag för en offert anpassad för {city.name}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/offert"
                className="bg-gradient-cta text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär offert nu
              </Link>
              <a
                href="tel:+46-10-544-05-77"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Ring: Kommer snart
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="font-semibold">Ring direkt</div>
                <div className="text-sm text-gray-300">Svar samma dag</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="font-semibold">Skicka mail</div>
                <div className="text-sm text-gray-300">Svar inom 24h</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="font-semibold">Boka online</div>
                <div className="text-sm text-gray-300">Direkt bekräftelse</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Smidigflytt - ${serviceTypeText} ${city.name}`,
            "description": `Professionell ${city.serviceType === 'städfirma' ? 'städservice' : 'flyttservice'} med RUT-avdrag och försäkring i ${city.name}`,
            "url": `https://smidigflytt.se/stader/${city.name.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'a').replace(/\s+/g, '-')}`,
            "telephone": "+46-10-544-05-77",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedIn": {
                "@type": "State",
                "name": city.region
              }
            },
            "serviceType": city.serviceType === 'städfirma' ? "Städservice" : "Flyttservice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${serviceTypeText} tjänster`,
              "itemListElement": city.services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service,
                  "description": `${service} i ${city.name} med RUT-avdrag`,
                  "areaServed": {
                    "@type": "City",
                    "name": city.name
                  }
                }
              }))
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": city.region,
              "addressCountry": "SE"
            },
            "geo": {
              "@type": "GeoCoordinates"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />
    </div>
  )
}
