'use client'

import Link from 'next/link'
import { CheckCircle, Clock, Users, ArrowRight, Phone, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ServiceData {
  name: string
  subtitle: string
  description: string
  hero_image: string
  price_from?: string
  duration: string
  features: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  related_services: {
    name: string
    link: string
  }[]
}

interface ServicePageProps {
  service: ServiceData
}

export default function ServicePage({ service }: ServicePageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                {service.subtitle}
              </p>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/offert"
                  className="bg-gradient-cta text-black-darkblue px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Begär offert
                </Link>
                <a
                  href="tel:08270909"
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Ring: 08-27 09 09
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-black-lightyellow" />
                  <div className="font-bold">{service.duration}</div>
                  <div className="text-sm text-gray-300">Genomsnittlig tid</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-black-lightyellow" />
                  <div className="font-bold">Professionella</div>
                  <div className="text-sm text-gray-300">Erfarna tekniker</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="aspect-square bg-gradient-primary rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🚚</div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-white/80">Professionell service du kan lita på</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: 'black !important'}} className="text-3xl md:text-4xl font-bold text-black mb-6">
              Vad ingår i vår {service.name.toLowerCase()}?
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Vi erbjuder en komplett tjänst där allt är inkluderat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-gradient-to-br from-smidig-lightgray to-white rounded-2xl p-6 shadow-lg"
              >
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-0.5 flex-shrink-0" />
                <span className="text-black font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-smidig-lightgray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-darkblue mb-6">
              Så här går det till
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              En enkel process från första kontakt till färdig flytt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow connector */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-black opacity-20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Vanliga frågor om {service.name.toLowerCase()}
            </h2>
            <p className="text-xl text-gray-600">
              Här är svar på de mest vanliga frågorna vi får
            </p>
          </motion.div>

          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-smidig-lightgray to-white rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-smidig-blue focus:ring-opacity-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black pr-4">
                      {item.question}
                    </h3>
                    <div className={`transform transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}>
                      <div className="w-6 h-6 text-black-blue">+</div>
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gradient-to-br from-smidig-lightgray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-darkblue mb-6">
              Relaterade tjänster
            </h2>
            <p className="text-xl text-white">
              Kanske behöver du även dessa tjänster?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.related_services.map((relatedService, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={relatedService.link}
                  className="block bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-600 mb-4 group-hover:text-black transition-colors">
                    {relatedService.name}
                  </h3>
                  <div className="flex items-center text-black group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Läs mer</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redo att boka {service.name.toLowerCase()}?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Kontakta oss idag för en offert anpassad för dina behov
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/offert"
                className="bg-gradient-cta text-black-darkblue px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär offert nu
              </Link>
              <a
                href="tel:08270909"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Ring: 08-27 09 09
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-black-lightyellow" />
                <div className="font-semibold">4.8/5 stjärnor</div>
                <div className="text-sm text-gray-300">100% nöjda kunder</div>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2 text-black-lightyellow" />
                <div className="font-semibold">Snabb service</div>
                <div className="text-sm text-gray-300">Svar samma dag</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-black-lightyellow" />
                <div className="font-semibold">Kvalitetsgaranti</div>
                <div className="text-sm text-gray-300">100% nöjd eller pengarna tillbaka</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
