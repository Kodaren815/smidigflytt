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
}

interface CityPageProps {
  city: CityData
}

export default function CityPage({ city }: CityPageProps) {
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-smidig-yellow/20 text-white text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {city.region}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flyttfirma i <span className="text-white">{city.name}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Trygg flytthjälp & städning i {city.name}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/offert"
                className="bg-gradient-cta text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär offert för {city.name}
              </Link>
              <a
                href="tel:+46-10-544-05-77"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Ring oss: Kommer snart
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-200" />
                ))}
                <span className="ml-2">4.8/5 stjärnor</span>
              </div>
              <div>🛡️ Försäkrade</div>
              <div>💳 RUT-avdrag</div>
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
                Flyttfirma i {city.name} - Vi känner staden
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {city.description}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {city.localInfo}
              </p>
              
              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Professionell service</h3>
                <p className="text-white/90">Flytthjälp i {city.name} med RUT-avdrag och försäkring</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0"
            >
              <div className="bg-gradient-to-br from-smidig-lightgray to-white rounded-3xl p-8">
                <h3 className="text-xl font-bold text-black mb-6">Våra specialiteter i {city.name}:</h3>
                <div className="space-y-4">
                  {city.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-black mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-smidig-lightgray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tjänster vi erbjuder i {city.name}
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Vi är din kompletta partner för alla flyttbehov i {city.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-black">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Home className="h-12 w-12 text-smidig-blue mb-6" />
              <h3 className="text-xl font-bold text-smidig-darkblue mb-4">Flytthjälp</h3>
              <p className="text-gray-600 mb-4">Professionell flytthjälp i hela {city.name}</p>
              <Link 
                href="/tjanster/flytthjalp"
                className="inline-flex items-center text-smidig-blue font-semibold hover:text-smidig-darkblue transition-colors"
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
              <Sparkles className="h-12 w-12 text-smidig-blue mb-6" />
              <h3 className="text-xl font-bold text-smidig-darkblue mb-4">Flyttstädning</h3>
              <p className="text-gray-600 mb-4">Garanterad godkänd städning i {city.name}</p>
              <Link 
                href="/tjanster/flyttstadning"
                className="inline-flex items-center text-smidig-blue font-semibold hover:text-smidig-darkblue transition-colors"
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
              <Package className="h-12 w-12 text-smidig-blue mb-6" />
              <h3 className="text-xl font-bold text-smidig-darkblue mb-4">Magasinering</h3>
              <p className="text-gray-600 mb-4">Säker förvaring i {city.name}</p>
              <Link 
                href="/tjanster/magasinering"
                className="inline-flex items-center text-smidig-blue font-semibold hover:text-smidig-darkblue transition-colors"
              >
                Läs mer <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
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

      {/* Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-black text-3xl md:text-4xl font-bold text-smidig-darkblue mb-6">
              Områden vi täcker i {city.name}
            </h2>
            <p className="text-xl text-gray-600">
              Vi är verksamma i hela {city.name} och omgivande områden
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-smidig-lightgray to-white rounded-3xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {city.areas.map((area, index) => (
                <div 
                  key={index}
                  className="text-black bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-smidig-darkblue font-medium">{area}</span>
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
              Redo för din flytt i {city.name}?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Kontakta oss idag för en offert anpassad för {city.name}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/offert"
                className="bg-gradient-cta text-smidig-darkblue px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                <Phone className="h-8 w-8 mx-auto mb-2 text-smidig-lightyellow" />
                <div className="font-semibold">Ring direkt</div>
                <div className="text-sm text-gray-300">Svar samma dag</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-2 text-smidig-lightyellow" />
                <div className="font-semibold">Skicka mail</div>
                <div className="text-sm text-gray-300">Svar inom 24h</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-smidig-lightyellow" />
                <div className="font-semibold">Boka online</div>
                <div className="text-sm text-gray-300">Direkt bekräftelse</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
