'use client'

import Link from 'next/link'
import { ArrowRight, Home, Sparkles, Package, Building, Archive, Globe, HelpingHand, Trash2, Construction, Droplets } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Home,
    title: "Bohagsflytt privatflytt",
    description: "Professionell bohagsflytt för privatpersoner. Vi tar hand om allt från packning till upppackning.",
    features: ["Packning & uppackning", "Transport", "Möbelmontering", "Försäkring"],
    link: "/tjanster/bohagsflytt-privatflytt",
    gradient: "from-smidig-blue to-smidig-darkblue"
  },
  {
    icon: Building,
    title: "Företagsflytt",
    description: "Specialiserade på företagsflytt med minimal störning av er verksamhet. Vi planerar allt i detalj.",
    features: ["Projektledning", "IT-support", "Möbelmontering", "Helglösningar"],
    link: "/tjanster/foretagsflytt",
    gradient: "from-smidig-yellow to-smidig-lightyellow"
  },
  {
    icon: Globe,
    title: "Utlandsflytt",
    description: "Internationella flyttar med expertis inom tullformaliteter och säker transport över gränserna.",
    features: ["Tullformaliteter", "Försäkring", "Packning", "Door-to-door service"],
    link: "/tjanster/utlandsflytt",
    gradient: "from-smidig-blue to-smidig-lightyellow"
  },
  {
    icon: HelpingHand,
    title: "Bärhjälp",
    description: "Professionell bärhjälp när du behöver extra händer för tunga lyft och transport.",
    features: ["Professionella bärare", "Säker hantering", "Flexibla tider", "Försäkring"],
    link: "/tjanster/barhjalp",
    gradient: "from-smidig-darkblue to-smidig-blue"
  },
  {
    icon: Package,
    title: "Packhjälp vid flytt",
    description: "Låt våra experter packa dina tillhörigheter säkert och effektivt med professionellt material.",
    features: ["Professionell packning", "Kvalitetsmaterial", "Märkning & inventering", "Försäkring"],
    link: "/tjanster/packhjalp-vid-flytt",
    gradient: "from-smidig-blue to-smidig-lightyellow"
  },
  {
    icon: Trash2,
    title: "Bortforsling av möbler",
    description: "Miljövänlig bortforsling av möbler och bohag. Vi ser till att allt återvinns på rätt sätt.",
    features: ["Miljövänlig hantering", "Återvinning", "Sortering", "Hämtning"],
    link: "/tjanster/bortforsling-av-mobler",
    gradient: "from-smidig-yellow to-smidig-darkblue"
  },
  {
    icon: Archive,
    title: "Magasinering av möbler",
    description: "Säker förvaring av dina möbler i våra moderna och bevakade magasin.",
    features: ["Bevakade lokaler", "Klimatkontroll", "Flexibla avtal", "Försäkring ingår"],
    link: "/tjanster/magasinering-av-mobler",
    gradient: "from-smidig-darkblue to-smidig-deepblue"
  },
  {
    icon: Sparkles,
    title: "Flyttstädning",
    description: "Garanterad godkänd flyttstädning som sparar dig tid och pengar. Vi städar så det glänser!",
    features: ["Grund- & toppstädning", "Fönsterputs", "Ugn & kylskåp", "Garanti på resultatet"],
    link: "/tjanster/flyttstadning",
    gradient: "from-smidig-lightyellow to-smidig-yellow"
  },
  {
    icon: Construction,
    title: "Byggstädning",
    description: "Professionell byggstädning efter renovering eller nybyggnation. Vi tar hand om allt damm och skräp.",
    features: ["Grovstädning", "Finstädning", "Fönsterputs", "Specialutrustning"],
    link: "/tjanster/byggstadning",
    gradient: "from-smidig-blue to-smidig-yellow"
  },
  {
    icon: Droplets,
    title: "Fönsterputsning",
    description: "Kristallklara fönster för hem och företag. Vi putsar så att ljuset strömmar in!",
    features: ["In- & utsida", "Professionell utrustning", "Regelbundna besök", "Försäkring"],
    link: "/tjanster/fonsterputsning",
    gradient: "from-smidig-lightyellow to-smidig-blue"
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-smidig-lightgray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-smidig-darkblue mb-6">
            Våra <span className="text-smidig-blue">tjänster</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Vi erbjuder kompletta flytt- och städtjänster för privatpersoner och företag. 
            Alla tjänster utförs av professionella och försäkrade medarbetare.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 text-black relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <service.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-smidig-blue rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={service.link}
                  className="group/link inline-flex items-center text-smidig-blue font-semibold hover:text-smidig-darkblue transition-colors duration-200"
                >
                  <span className="text-black">Läs mer om {service.title.toLowerCase()}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-black mb-4">
              Behöver du flera tjänster?
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Vi erbjuder paketlösningar som kombinerar flera tjänster för maximal bekvämlighet. 
              Kontakta oss för en skräddarsydd offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offert"
                className="bg-gradient-cta text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär paketoffert
              </Link>
              <Link
                href="/tjanster"
                className="border-2 border-gray-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-smidig-blue hover:text-gray-600 transition-all duration-300"
              >
                Se alla tjänster
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
