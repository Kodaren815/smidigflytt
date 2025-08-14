'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: "Anna Karlsson",
    location: "Stockholm",
    service: "Flytthjälp + Städning",
    rating: 5,
    date: "2024-01-15",
    text: "Fantastisk service från början till slut! Grabbarna kom i tid, var otroligt professionella och hanterade alla våra saker med största försiktighet. Städningen var perfekt - hyresvärden godkände direkt. Rekommenderar varmt!",
    verified: true
  },
  {
    name: "Erik Lindström",
    location: "Västerås",
    service: "Kontorsflytt",
    rating: 5,
    date: "2024-01-10",
    text: "Vi behövde flytta vårt kontor över en helg för att minimera störningar. Smidigflytt planerade allt perfekt och genomförde flytten utan problem. Inget gick sönder och allt var klart på måndag morgon. Toppenklass!",
    verified: true
  },
  {
    name: "Maria Johansson",
    location: "Uppsala",
    service: "Flyttstädning",
    rating: 5,
    date: "2024-01-08",
    text: "Hade hört skräckhistorier om flyttstädning men Smidigflytt levererade verkligen. Lägenheten var skinande ren och hyresvärden var imponerad. Värt varenda krona och sparade mig massor av tid och stress.",
    verified: true
  },
  {
    name: "Johan Andersson", 
    location: "Örebro",
    service: "Privat flytt",
    rating: 5,
    date: "2024-01-05",
    text: "Flyttade från villa till lägenhet och var nervös för alla tunga möbler. Teamet var så hjälpsamma och fick till och med in min stora soffa som jag trodde var omöjlig. Professionellt och enkelt!",
    verified: true
  },
  {
    name: "Lisa Svensson",
    location: "Göteborg", 
    service: "Magasinering + Flytt",
    rating: 5,
    date: "2024-01-03",
    text: "Behövde förvara möbler i några månader mellan flytt. Magasinet var rent och säkert, och när det var dags att hämta var allt i perfekt skick. Smidig process från början till slut.",
    verified: true
  },
  {
    name: "David Petersson",
    location: "Malmö",
    service: "Akutflytt",
    rating: 5,
    date: "2024-01-01", 
    text: "Behövde flytta med kort varsel och Smidigflytt kom till undsättning samma vecka. Otroligt flexibla och hjälpsamma. Förstår verkligen att man kan ha bråttom ibland. Stort tack!",
    verified: true
  }
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % reviews.length
      } else {
        return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      }
    })
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Vad våra <span className="text-smidig-blue">kunder säger</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4 text-black">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-yellow-500 text-yellow-200" />
            ))}
            <span className="text-2xl font-bold text-smidig-darkblue ml-4">4.8/5</span>
          </div>
          <p className="text-lg text-gray-600">
            Baserat på <span className="font-semibold"></span> verifierade recensioner
          </p>
        </motion.div>

        {/* Main Review Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden min-h-[400px] flex items-center">
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <Quote className="absolute top-8 left-8 h-12 w-12 text-smidig-lightyellow opacity-50" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-6">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-200" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                    &ldquo;{currentReview.text}&rdquo;
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <div className="text-lg font-bold">{currentReview.name}</div>
                        {currentReview.verified && (
                          <div className="bg-smidig-yellow text-smidig-darkblue text-xs px-2 py-1 rounded-full font-semibold">
                            Verifierad
                          </div>
                        )}
                      </div>
                      <div className="text-gray-300 text-center md:text-left">
                        {currentReview.location} • {currentReview.service}
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm mt-2 md:mt-0 text-center md:text-right">
                      {new Date(currentReview.date).toLocaleDateString('sv-SE', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 backdrop-blur-md"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 backdrop-blur-md"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-smidig-blue w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-smidig-blue mb-2">Kvalite</div>
            <div className="text-gray-600">Nöjda kunder</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-smidig-blue mb-2">4.8/5</div>
            <div className="text-gray-600">Medelbetyg</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-smidig-blue mb-2">98%</div>
            <div className="text-gray-600">Rekommenderar oss</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-smidig-blue mb-2">10+</div>
            <div className="text-gray-600">År i branschen</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
