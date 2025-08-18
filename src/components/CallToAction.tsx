'use client'

import Link from 'next/link'
import { Phone, Mail, Calculator, Calendar, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Content */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Redo för en <span className="text-smidig-lightyellow">smidig flytt?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kontakta oss idag och få en offert på din flytt. 
            Vi hjälper dig att göra din flytt enkel, trygg och stressfri.
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/offert"
              className="group bg-gradient-cta text-smidig-darkblue px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <Calculator className="mr-3 h-6 w-6" />
              Begär offert
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+46-10-544-05-77"
              className="group bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border-2 border-white/30"
            >
              <Phone className="mr-3 h-6 w-6" />
              Ring nu: Kommer snart
            </a>
          </div>
        </motion.div>

        {/* Contact Options Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ring oss direkt</h3>
            <p className="text-gray-200 mb-4">
              Prata med en expert och få svar på dina frågor direkt
            </p>
            <a 
              href="tel:+46-10-544-05-77"
              className="text-smidig-lightyellow font-semibold hover:text-white transition-colors"
            >
              Kommer snart
            </a>
            <div className="text-sm text-gray-300 mt-2">
              Vardagar 08:00-18:00
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Skicka ett mail</h3>
            <p className="text-gray-200 mb-4">
              Beskriv din flytt så återkommer vi inom 24 timmar
            </p>
            <a 
              href="mailto:info@smidigflytt365.se"
              className="text-smidig-lightyellow font-semibold hover:text-white transition-colors"
            >
              info@smidigflytt365.se
            </a>
            <div className="text-sm text-gray-300 mt-2">
              Svarstid: Inom 24h
            </div>
          </div>

          {/* Online Booking */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Boka online</h3>
            <p className="text-white mb-4">
              Använd vårt formulär och boka direkt online
            </p>
            <Link 
              href="/prisberknare"
              className="text-smidig-lightyellow font-semibold hover:text-white transition-colors"
            >
              Starta förfrågan
            </Link>
            <div className="text-sm text-gray-300 mt-2">
              Öppet 24/7
            </div>
          </div>
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-white font-semibold">Hembesök & offert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-white font-semibold">Försäkring & RUT-avdrag</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-white font-semibold">Kvalitetsgaranti</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
