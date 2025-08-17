'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      badge: "Pålitlig flytttjänst i hela Mälardalen",
      title: "Din flytt blir",
      highlight: "Enkel & Bekymmersfri",
      description: "Vi sköter allt från start till mål - packning, transport och upppackning. Fokusera på ditt nya kapitel medan vi tar hand om resten.",
      image: "/hero-1.jpg"
    },
    {
      badge: "Expertis inom flyttstädning",
      title: "Städning som",
      highlight: "Överträffar Förväntningar",
      description: "Professionell flyttstädning med garanti för godkänt resultat. Vi ser till att allt skinnar av renhet när vi är klara.",
      image: "/hero-2.jpg"
    },
    {
      badge: "Försäkrad och trygg hantering",
      title: "Service som du kan",
      highlight: "Förlita Dig På",
      description: "Över tusen nöjda familjer har redan valt oss. Med komplett försäkring och professionell hantering är din flytt i trygga händer.",
      image: "/hero-3.jpg"
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div style={{ maxWidth: '70vw', margin: '0 auto' }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-36">
        {/* Hero Content - Reversed Layout */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Visual Section - Now First */}
          <motion.div 
            className="order-2 lg:order-1 relative mb-12 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main hero image */}
              <div className="aspect-square bg-gradient-primary rounded-3xl p-4 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                    src="/hero-keys.jpg" 
                    alt="Nycklar till ditt nya hem - Smidigflytt"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    
                  </div>
                </div>
              </div>

              {/* Floating elements - repositioned */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Svar inom</div>
                    <div className="text-xs text-gray-600">24 timmar</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-smidig-darkblue">15%</div>
                  <div className="text-xs text-smidig-darkblue">Välkomstrabatt</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - Now Second */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-5 py-3 rounded-full bg-smidig-yellow/20 text-smidig-darkblue text-sm font-medium mb-8">
              {slides[currentSlide].badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {slides[currentSlide].title}
              <br />
              <span className="text-smidig-lightyellow">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            <p className="text-xl text-white mb-10 leading-relaxed max-w-lg">
              {slides[currentSlide].description}
            </p>

            {/* Action Buttons - Stacked Layout */}
            <div className="space-y-4 mb-10">
                <Link
                href="/offert"
                className="w-full group bg-gradient-cta text-smidig-darkblue px-8 py-5 rounded-full text-sm md:text-base font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                Få din kostnadsfria offert
                <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              <Link
                href="tel:+46-10-544-05-77"
                className="w-full bg-white/10 backdrop-blur-md text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Kontakta oss direkt
              </Link>
            </div>

            {/* Trust Indicators - Horizontal Layout */}
            <div className="flex justify-between items-center pt-8 border-t border-white/20">
              <div className="text-center flex-1">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-200" />
                  ))}
                </div>
                <div className="text-sm text-gray-200 font-semibold">4.8/5</div>
                <div className="text-xs text-gray-300"></div>
              </div>
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-smidig-lightyellow mb-1">Regional</div>
                <div className="text-sm text-gray-200 font-semibold">Lokal kunskap</div>
                <div className="text-xs text-gray-300">Hela Mälardalen</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-smidig-lightyellow mb-1">Säker</div>
                <div className="text-sm text-gray-200 font-semibold">Fullförsäkrad</div>
                <div className="text-xs text-gray-300">Garanterad service</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-smidig-lightyellow w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
