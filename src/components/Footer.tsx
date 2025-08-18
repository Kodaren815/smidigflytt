import Link from 'next/link'
import { Phone, Mail, MapPin, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">S</span>
              </div>
              <div>
                <div className="text-xl font-bold">Smidigflytt</div>
                <div className="text-sm text-yellow-300">Din flyttpartner i Mälardalen</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Vi erbjuder professionell flytthjälp och städservice i hela Sverige. 
              Med trygghet och kvalitet hjälper vi dig att göra din flytt smidig och stressfri.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-200" />
              ))}
              <span className="ml-2 text-sm text-gray-300">4.8/5 (Nöjda kunder)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-black">
            <h3 className="text-lg font-semibold text-black">Våra tjänster</h3>
            <nav className="space-y-2 text-black">
              <Link href="/tjanster/bohagsflytt-privatflytt" className="block text-black hover:text-white transition-colors text-sm">
                Bohagsflytt privatflytt
              </Link>
              <Link href="/tjanster/foretagsflytt" className="block text-black hover:text-white transition-colors text-sm">
                Företagsflytt
              </Link>
              <Link href="/tjanster/utlandsflytt" className="block text-black hover:text-white transition-colors text-sm">
                Utlandsflytt
              </Link>
              <Link href="/tjanster/barhjalp" className="block text-black hover:text-white transition-colors text-sm">
                Bärhjälp
              </Link>
              <Link href="/tjanster/packhjalp-vid-flytt" className="block text-black hover:text-white transition-colors text-sm">
                Packhjälp vid flytt
              </Link>
              <Link href="/tjanster/bortforsling-av-mobler" className="block text-black hover:text-white transition-colors text-sm">
                Bortforsling av möbler
              </Link>
              <Link href="/tjanster/magasinering-av-mobler" className="block text-black hover:text-white transition-colors text-sm">
                Magasinering av möbler
              </Link>
              <Link href="/tjanster/flyttstadning" className="block text-black hover:text-white transition-colors text-sm">
                Flyttstädning
              </Link>
              <Link href="/tjanster/byggstadning" className="block text-black hover:text-white transition-colors text-sm">
                Byggstädning
              </Link>
              <Link href="/tjanster/fonsterputsning" className="block text-black hover:text-white transition-colors text-sm">
                Fönsterputsning
              </Link>
            </nav>
          </div>

          {/* Popular Cities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-300">Populära städer</h3>
            <nav className="space-y-2">
              <Link href="/stader/stockholm" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Stockholm
              </Link>
              <Link href="/stader/goteborg" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Göteborg
              </Link>
              <Link href="/stader/malmo" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Malmö
              </Link>
              <Link href="/stader/vasteras" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Västerås
              </Link>
              <Link href="/stader/eskilstuna" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Eskilstuna
              </Link>
              <Link href="/stader/uppsala" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Uppsala
              </Link>
              <Link href="/stader/orebro" className="block text-black hover:text-white transition-colors text-sm">
                Flyttfirma Örebro
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-300">Kontaktuppgifter</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <a href="tel:+46-10-544-05-77" className="text-black hover:text-white transition-colors text-sm">
                  Kommer snart
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a href="mailto:info@smidigflytt365.se" className="text-black hover:text-white transition-colors text-sm">
                  info@smidigflytt365.se
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="text-black text-sm">
                  <div>Täcker hela Sverige</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Huvudkontor: Mälardalen
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/offert"
                className="block w-full bg-gradient-cta text-blue-900 text-center px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Begär Offert
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Smidigflytt. Alla rättigheter förbehållna.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/integritet" className="text-gray-400 hover:text-white transition-colors">
                Integritetspolicy
              </Link>
              <Link href="/villkor" className="text-gray-400 hover:text-white transition-colors">
                Användarvillkor
              </Link>
              <Link href="/reklamation" className="text-gray-400 hover:text-white transition-colors">
                Reklamation & Skadeanmälan
              </Link>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>🛡️ Försäkrade</span>
                <span>💳 RUT-avdrag</span>
                <span>⭐ F-skatt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
