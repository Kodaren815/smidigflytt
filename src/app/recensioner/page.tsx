'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '@/components/SEO'

const reviews = [
  {
    name: "Anna Lindqvist",
    location: "Stockholm",
    rating: 5,
    service: "Flytthjälp",
    date: "2024-01-15",
    text: "Fantastisk service! Teamet kom i tid, var professionella och hanterade alla våra saker med stor omsorg. Flytten från vår villa gick smidigt och vi är så tacksamma för all hjälp.",
    avatar: "AL"
  },
  {
    name: "Erik Johansson",
    location: "Västerås",
    rating: 5,
    service: "Flyttstädning",
    date: "2024-01-10",
    text: "Otrolig flyttstädning! Lägenheten var skinande ren och allt blev godkänt direkt av hyresvärden. Sparade mig mycket tid och stress. Rekommenderar starkt!",
    avatar: "EJ"
  },
  {
    name: "Maria Andersson",
    location: "Göteborg",
    rating: 5,
    service: "Kontorsflytt",
    date: "2024-01-08",
    text: "Professionell hantering av vår kontorsflytt. Minimal störning av verksamheten och allt var på plats och fungerande nästa dag. Imponerande organisation!",
    avatar: "MA"
  },
  {
    name: "Lars Nilsson",
    location: "Uppsala",
    rating: 5,
    service: "Flytthjälp",
    date: "2024-01-05",
    text: "Snabb och effektiv service. Teamet var vänliga och hjälpsamma. Flytten från min tvåa gick mycket snabbare än förväntat. Mycket nöjd kund!",
    avatar: "LN"
  },
  {
    name: "Sofia Bergström",
    location: "Malmö",
    rating: 5,
    service: "Packningstjänst",
    date: "2024-01-03",
    text: "Experterna packade allt så noggrant och säkert. Inte en enda sak gick sönder under flytten. Värt varenda krona för den trygghet det gav oss.",
    avatar: "SB"
  },
  {
    name: "David Karlsson",
    location: "Stockholm",
    rating: 5,
    service: "Magasinering",
    date: "2024-01-01",
    text: "Behövde förvara möbler under renoveringen. Säkra lokaler och smidig hantering. Allt var i perfekt skick när vi hämtade ut det efter tre månader.",
    avatar: "DK"
  },
  {
    name: "Emma Petersson",
    location: "Örebro",
    rating: 5,
    service: "Flytthjälp",
    date: "2023-12-28",
    text: "Flyttade från villa till lägenhet och var nervös för alla tunga möbler. Teamet var så hjälpsamma och fick till och med in min stora soffa som jag trodde var omöjlig. Professionellt och enkelt!",
    avatar: "EP"
  },
  {
    name: "Thomas Gustafsson",
    location: "Västerås",
    rating: 5,
    service: "Flyttstädning",
    date: "2023-12-25",
    text: "Perfekt städning av vårt hus innan försäljning. Köparna var mycket imponerade av standarden. Gjorde verkligen skillnad för försäljningen!",
    avatar: "TG"
  },
  {
    name: "Linda Hansson",
    location: "Stockholm",
    rating: 5,
    service: "Tungtransport",
    date: "2023-12-20",
    text: "Behövde flytta ett tungt piano till tredje våningen utan hiss. Teamet löste det med specialutrustning och stor skicklighet. Imponerande!",
    avatar: "LH"
  }
]

export default function RecensionerPage() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  
  return (
    <>
      <SEO
        title="Kundrecensioner - Vad våra kunder säger | Smidigflytt"
        description="Läs vad våra nöjda kunder säger om våra flyttjänster och städservice. Över 1000 femstjärniga recensioner från hela Sverige."
        keywords="recensioner, kundutlåtanden, flyttfirma, betyg, nöjda kunder"
      />
      
      <div className="min-h-screen bg-gradient-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Vad våra kunder <span className="text-gray">säger</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto mb-8">
              Vi är stolta över våra nöjda kunder. Läs vad de säger om våra tjänster.
            </p>
            
            {/* Rating Summary */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-200" />
                ))}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{averageRating.toFixed(1)}/5</div>
              <div className="text-smidig-lightyellow">Baserat på {reviews.length}+ recensioner</div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-200" />
                    ))}
                  </div>
                </div>

                {/* Service & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-smidig-blue/10 text-smidig-blue px-3 py-1 rounded-full text-sm font-medium">
                    {review.service}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString('sv-SE')}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-white rounded-3xl p-8 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-smidig-darkblue mb-6">
              Därför litar våra kunder på oss
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-smidig-blue mb-2"></div>
                <div className="text-gray-600">Nöjda kunder</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-smidig-blue mb-2">4.8/5</div>
                <div className="text-gray-600">Genomsnittligt betyg</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-smidig-blue mb-2">100%</div>
                <div className="text-gray-600">Försäkrade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-smidig-blue mb-2">5+</div>
                <div className="text-gray-600">År av erfarenhet</div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="/offert"
                className="bg-gradient-cta text-smidig-darkblue px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
              >
                Bli nästa nöjda kund
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
