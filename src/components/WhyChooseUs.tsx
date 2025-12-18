'use client'

import { Shield, Clock, CreditCard, Users, Award, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: "Trygghet & Försäkring",
    description: "Fullständig försäkring för alla dina tillhörigheter. F-skatt och godkända av Skatteverket.",
    highlight: "100% försäkrat"
  },
  {
    icon: CreditCard,
    title: "RUT-avdrag",
    description: "Få 50% rabatt på arbetstimmar genom RUT-avdrag. Vi sköter all administration åt dig.",
    highlight: "50% rabatt"
  },
  {
    icon: Clock,
    title: "Flexibla tider",
    description: "Vi arbetar när det passar dig - vardagar, helger eller kvällar. Din bekvämlighet kommer först.",
    highlight: "24/7 tillgänglig"
  },
  {
    icon: Users,
    title: "Erfarna flyttare",
    description: "Professionella flyttare med många års erfarenhet. Vi vet hur man hanterar alla typer av föremål.",
    highlight: "Professionellt jobb"
  },
  {
    icon: Award,
    title: "Kvalitetsgaranti",
    description: "Vi garanterar kvalitet på alla våra tjänster. Inte nöjd? Vi gör det rätt.",
    highlight: "100% garanti"
  },
  {
    icon: Truck,
    title: "Modern utrustning",
    description: "Moderna flyttbilar och professionell utrustning för säker transport av dina värdesaker.",
    highlight: "Senaste tekniken"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-white">
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
            Varför välja <span className="text-smidig-blue">Smidigflytt?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Vi kombinerar trygghet och kvalitet för att ge dig den bästa flyttupplevelsen. 
            Här är vad som gör oss speciella och varför din flytt blir både enkel och bekymmersfri med oss:
          </p>
          
          {/* Additional content paragraph */}
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-4">
              Som en etablerad flyttfirma förstår vi att varje flytt är unik. Oavsett om det handlar om bohagsflytt, 
              företagsflytt eller utlandsflytt, arbetar vi för att göra processen så enkel och stressfri som möjligt. 
              Med över 10 års erfarenhet i branschen har vi utvecklat metoder som säkerställer att din flytt 
              genomförs professionellt från början till slut.
            </p>
            <p className="mb-4">
              Vårt team består av erfarna flyttare som är utbildade inom säker hantering av alla typer av föremål - 
              från känslig elektronik till tunga möbler. Vi erbjuder även kompletterande tjänster som packhjälp, 
              bortforsling av möbler, magasinering och professionell flyttstädning som uppfyller alla krav för 
              bostadsrättsföreningar och hyresvärdar.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-smidig-blue/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-smidig-yellow text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-smidig-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary group-hover:w-full transition-all duration-300 rounded-b-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12">
            <div className="text-2xl md:text-3xl font-bold text-white mb-4">
              Redo att börja din flytt?
            </div>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en konsultation och personlig offert. 
              Vi gör din flytt enkel, trygg och stressfri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/offert"
                className="bg-gradient-cta text-smidig-darkblue px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär offert
              </a>
              <a
                href="tel:08270909"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Ring oss nu: 08-27 09 09
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
