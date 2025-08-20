'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      badge: "Pålitlig flytttjänst och städtjänst i hela Sverige",
      title: "Din flytt blir",
      highlight: "Enkel & Bekymmersfri",
      description: "Vi gör din flytt enkel och bekymmersfri genom att sköta allt från start till mål - packning, transport och upppackning. Fokusera på ditt nya kapitel medan vi tar hand om resten.",
      image: "/hero-keys.jpg"
    },
    {
      badge: "Expertis inom flyttstädning",
      title: "Städning som",
      highlight: "Överträffar Förväntningar", 
      description: "Professionell flyttstädning med garanti för godkänt resultat. Vi ser till att allt skinnar av renhet när vi är klara och gör din flytt bekymmersfri.",
      image: "/hero-keys.jpg"
    },
    {
      badge: "Försäkrad och trygg hantering",
      title: "Service som du kan",
      highlight: "Förlita Dig På",
      description: "Över tusen nöjda familjer har redan valt oss. Med komplett försäkring och professionell hantering är din flytt både enkel och trygg.",
      image: "/hero-keys.jpg"
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-36">
        {/* Hero Content */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Visual Section */}
          <div className="order-2 lg:order-1 relative mb-12 lg:mb-0 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src={slides[currentSlide].image}
                  alt="Smidig Flytt Service"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Trust indicators overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl py-3 px-2">
                    <div className="text-2xl font-bold text-blue-900">100%</div>
                    <div className="text-xs text-gray-700">Nöjda Kunder</div>
                  </div>
                  <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl py-3 px-2">
                    <div className="text-2xl font-bold text-blue-900">100%</div>
                    <div className="text-xs text-gray-700">Försäkrad</div>
                  </div>
                  <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl py-3 px-2">
                    <div className="text-2xl font-bold text-blue-900">24/7</div>
                    <div className="text-xs text-gray-700">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 text-white animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
              {slides[currentSlide].badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {slides[currentSlide].title}{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {slides[currentSlide].highlight}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              {slides[currentSlide].description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/offert"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Begär Kostnadsfri Offert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ring oss idag
              </Link>
            </div>
            
            {/* Social Proof Stars */}
            <div className="flex items-center space-x-2 text-white/90">
              <div className="flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-sm">4.8/5 stjärnor från över 500 recensioner</span>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
