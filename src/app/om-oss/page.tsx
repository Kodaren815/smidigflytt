import { Metadata } from 'next'
import { Truck, Users, Shield, Award, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Om oss - Smidigflytt | Din pålitliga flyttpartner i Mälardalen",
  description: "Lär dig mer om Smidigflytt, vårt huvudkontor i Eskilstuna och vårt engagemang för professionella flytt- och städtjänster i hela Mälardalen.",
  keywords: "om smidigflytt, flyttfirma eskilstuna, huvudkontor, företagsinformation, flyttpartner",
  openGraph: {
    title: "Om oss - Smidigflytt | Din pålitliga flyttpartner i Mälardalen",
    description: "Lär dig mer om Smidigflytt, vårt huvudkontor i Eskilstuna och vårt engagemang för professionella flytt- och städtjänster i hela Mälardalen.",
  },
}

export default function AboutUsPage() {
  const stats = [
    { icon: Users, label: "Nöjda kunder", value: "1000+" },
    { icon: Truck, label: "Genomförda flyttar", value: "2500+" },
    { icon: Award, label: "År av erfarenhet", value: "10+" },
    { icon: MapPin, label: "Städer vi betjänar", value: "50+" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trygghet och säkerhet",
      description: "Vi prioriterar säkerheten för ditt bohag och har fullständig försäkring för alla våra tjänster."
    },
    {
      icon: CheckCircle,
      title: "Professionalism",
      description: "Våra erfarna medarbetare utbildas kontinuerligt för att leverera högsta kvalitet."
    },
    {
      icon: Users,
      title: "Personlig service",
      description: "Vi tar oss tid att förstå dina behov och skräddarsyr våra tjänster efter dig."
    },
    {
      icon: Award,
      title: "Kvalitetsgaranti",
      description: "Vi står bakom vårt arbete med full kvalitetsgaranti och tydliga reklamationsrätter."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-600 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Om Smidigflytt
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Din pålitliga partner för flytt- och städtjänster i hela Mälardalen med huvudkontor i Eskilstuna
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Vår historia och vision
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Smidigflytt grundades med en enkel men kraftfull vision: att göra flytt- och städtjänster 
                  enkla, trygga och prisvärd för alla i Mälardalen. Med vårt huvudkontor strategiskt placerat 
                  i Eskilstuna har vi byggt upp ett starkt nätverk som täcker hela regionen.
                </p>
                <p>
                  Vi startade som en liten familjedriven verksamhet och har vuxit till att bli en av de 
                  mest pålitliga flyttfirmorna i området. Vårt fokus har alltid varit på kvalitet, 
                  trygghet och personlig service – värden som fortfarande genomsyrar allt vi gör idag.
                </p>
                <p>
                  Från vårt huvudkontor i Eskilstuna koordinerar vi tjänster över hela Mälardalen, 
                  från Stockholm i öster till Örebro i väster, alltid med samma höga kvalitetsstandard.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-gray-300 to-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-900 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-900">Vårt huvudkontor</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Adress:</strong> Eskilstuna, Södermanlands län</p>
                  <p><strong>Täckningsområde:</strong> Hela Mälardalen</p>
                  <p><strong>Specialitet:</strong> Flytt- och städtjänster</p>
                  <p><strong>Grundat:</strong> Med över 10 års erfarenhet</p>
                </div>
                <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-blue-900 font-semibold text-sm">
                    📍 Strategiskt placerat i Eskilstuna för optimal täckning av hela Mälardalen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-gray-300 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Smidigflytt i siffror
            </h2>
            <p className="text-xl text-gray-600">
              Resultat som talar för sig själva
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <stat.icon className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Våra värderingar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De principer som styr vårt arbete och bygger förtroende med våra kunder
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-900 to-yellow-400 p-3 rounded-full mr-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vårt täckningsområde
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Från vårt huvudkontor i Eskilstuna betjänar vi hela Mälardalen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              'Västmanlands län',
              'Stockholms län', 
              'Södermanlands län',
              'Örebro län'
            ].map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{area}</h3>
                <p className="text-white/80 text-sm">
                  Komplett service inom hela länet
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏢 Huvudkontor: Eskilstuna
              </h3>
              <p className="text-white/90 leading-relaxed">
                Vårt huvudkontor i Eskilstuna ger oss perfekt tillgång till hela Mälardalen. 
                Härifrån koordinerar vi alla våra tjänster och säkerställer högsta kvalitet 
                oavsett var i regionen du befinner dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Redo att flytta eller städa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontakta oss idag för en kostnadsfri offert och låt oss visa varför tusentals kunder litar på Smidigflytt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/offert"
              className="bg-gradient-to-r from-blue-900 to-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Begär Offert
            </a>
            <a 
              href="tel:+46-10-544-05-77"
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
            >
              Ring oss nu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
