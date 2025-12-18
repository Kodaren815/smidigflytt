import Link from 'next/link'
import { ArrowRight, Home, Sparkles, Package, Building, Globe, HelpingHand, Trash2, Archive, Construction, Droplets } from 'lucide-react'
import SEO from '@/components/SEO'

const services = [
  {
    icon: Home,
    title: "Bohagsflytt privatflytt",
    description: "Professionell bohagsflytt för privatpersoner. Vi tar hand om allt från packning till upppackning.",
    features: ["Packning & uppackning", "Transport", "Möbelmontering", "Försäkring"],
    link: "/tjanster/bohagsflytt-privatflytt",
    gradient: "from-[#2563eb] to-[#1e293b]", // blue to dark blue
    image: "/bohagsflytt-service.jpg"
  },
  {
    icon: Building,
    title: "Företagsflytt",
    description: "Specialiserade på företagsflytt med minimal störning av er verksamhet. Vi planerar allt i detalj.",
    features: ["Projektledning", "IT-support", "Möbelmontering", "Helglösningar"],
    link: "/tjanster/foretagsflytt",
    gradient: "from-[#facc15] to-[#fef08a]", // yellow to light yellow
    image: "/foretagsflytt-service.jpg"
  },
  {
    icon: Globe,
    title: "Utlandsflytt",
    description: "Internationella flyttar med expertis inom tullformaliteter och säker transport över gränserna.",
    features: ["Tullformaliteter", "Försäkring", "Packning", "Door-to-door service"],
    link: "/tjanster/utlandsflytt",
    gradient: "from-[#2563eb] to-[#fef08a]", // blue to light yellow
    image: "/utlandsflytt-service.jpg"
  },
  {
    icon: HelpingHand,
    title: "Bärhjälp",
    description: "Professionell bärhjälp när du behöver extra händer för tunga lyft och transport.",
    features: ["Professionella bärare", "Säker hantering", "Flexibla tider", "Försäkring"],
    link: "/tjanster/barhjalp",
    gradient: "from-[#1e293b] to-[#2563eb]", // dark blue to blue
    image: "/barhjalp-service.jpg"
  },
  {
    icon: Package,
    title: "Packhjälp vid flytt",
    description: "Låt våra experter packa dina tillhörigheter säkert och effektivt med professionellt material.",
    features: ["Professionell packning", "Kvalitetsmaterial", "Märkning & inventering", "Försäkring"],
    link: "/tjanster/packhjalp-vid-flytt",
    gradient: "from-[#2563eb] to-[#fef08a]", // blue to light yellow
    image: "/packhjalp-service.jpg"
  },
  {
    icon: Trash2,
    title: "Bortforsling av möbler",
    description: "Miljövänlig bortforsling av möbler och bohag. Vi ser till att allt återvinns på rätt sätt.",
    features: ["Miljövänlig hantering", "Återvinning", "Sortering", "Hämtning"],
    link: "/tjanster/bortforsling-av-mobler",
    gradient: "from-[#facc15] to-[#1e293b]", // yellow to dark blue
    image: "/bortforsling-service.jpg"
  },
  {
    icon: Archive,
    title: "Magasinering av möbler",
    description: "Säker förvaring av dina möbler i våra moderna och bevakade magasin.",
    features: ["Bevakade lokaler", "Klimatkontroll", "Flexibla avtal", "Försäkring ingår"],
    link: "/tjanster/magasinering-av-mobler",
    gradient: "from-[#1e293b] to-[#0f172a]", // dark blue to deep blue
    image: "/magasinering-service.jpg"
  },
  {
    icon: Sparkles,
    title: "Flyttstädning",
    description: "Garanterad godkänd flyttstädning som sparar dig tid och pengar. Vi städar så det glänser!",
    features: ["Grund- & toppstädning", "Fönsterputs", "Ugn & kylskåp", "Garanti på resultatet"],
    link: "/tjanster/flyttstadning",
    gradient: "from-[#fef08a] to-[#facc15]", // light yellow to yellow
    image: "/stadning-service.jpg"
  },
  {
    icon: Construction,
    title: "Byggstädning",
    description: "Professionell byggstädning efter renovering eller nybyggnation. Vi tar hand om allt damm och skräp.",
    features: ["Grovstädning", "Finstädning", "Fönsterputs", "Specialutrustning"],
    link: "/tjanster/byggstadning",
    gradient: "from-[#2563eb] to-[#facc15]", // blue to yellow
    image: "/byggstadning-service.jpg"
  },
  {
    icon: Droplets,
    title: "Fönsterputsning",
    description: "Kristallklara fönster för hem och företag. Vi putsar så att ljuset strömmar in!",
    features: ["In- & utsida", "Professionell utrustning", "Regelbundna besök", "Försäkring"],
    link: "/tjanster/fonsterputsning",
    gradient: "from-[#fef08a] to-[#2563eb]", // light yellow to blue
    image: "/fonsterputsning-service.jpg"
  }
]

export default function TjansterPage() {
  return (
    <>
      <SEO
        title="Våra tjänster - Flytt- och städservice | Smidigflytt"
        description="Vi erbjuder bohagsflytt, företagsflytt, utlandsflytt, bärhjälp, packhjälp, bortforsling, magasinering, flyttstädning, byggstädning och fönsterputsning. Professionell service med RUT-avdrag och försäkring."
        keywords="bohagsflytt, företagsflytt, utlandsflytt, bärhjälp, packhjälp, bortforsling, magasinering, flyttstädning, byggstädning, fönsterputsning"
      />
      
      <div className="min-h-screen text-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#fef08a] to-[#2563eb] py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Våra <span style={{ color: '#fef08a' }}>Tjänster</span>
              </h1>
              <p className="text-xl text-black-200 max-w-3xl mx-auto mb-8">
                Vi erbjuder kompletta lösningar för alla dina flytt- och städbehov. 
                Professionell service med försäkring och RUT-avdrag.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
                <Link
                  href="/offert"
                  className="bg-gradient-to-r from-[#fef08a] to-[#facc15] text-[#1e293b] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Begär offert
                </Link>
                <a
                  href="tel:08270909"
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Ring oss: 08-27 09 09
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative">
                      <service.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2" style={{ backgroundColor: '#2563eb', borderRadius: '9999px', marginRight: '0.75rem', flexShrink: 0 }}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-black hover:text-black font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Läs mer om {service.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{ color: 'black !important'}} className="py-20 bg-gradient-to-br from-[#f3f4f6] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Varför välja Smidigflytt?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-black">
                Vi kombinerar expertis, trygghet och kvalitet för att leverera den bästa flyttupplevelsen.
              </p>
            </div>

            <div className="WhyUs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
              <div className="text-center">
                <div className="w-16 h-16" style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Fullständigt försäkrade</h3>
                <p className="text-gray-600">All personal och utrustning är försäkrad för din trygghet.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16" style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">RUT-avdrag</h3>
                <p className="text-gray-600">50% RUT-avdrag på arbetstimmar för privatpersoner.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16" style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">F-skatt & tillstånd</h3>
                <p className="text-gray-600">Alla nödvändiga tillstånd och certifieringar.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16" style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Kvalitetsgaranti</h3>
                <p className="text-gray-600">Vi garanterar kvalitet på alla våra tjänster.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#fef08a] to-[#2563eb]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Redo att komma igång?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Kontakta oss idag för en offert anpassad för dina behov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offert"
                className="bg-gradient-to-r from-[#fef08a] to-[#facc15] text-[#1e293b] px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Begär offert
              </Link>
              <Link
                href="/kontakt"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1e293b] transition-all duration-300"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
