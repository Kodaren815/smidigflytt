'use client'

import { ExternalLink, Shield, Landmark, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TrustAndCredentials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl md:text-3xl font-bold text-black mb-4">
            Auktoriserad och pålitlig flyttfirma
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Som registrerad flyttfirma följer vi alla branschregler och är anslutna till relevanta 
            organisationer för att garantera högsta kvalitet och trygghet i våra tjänster.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Skatteverket */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Landmark className="h-8 w-8 text-green-600" />
            </div>
            <div className="font-semibold text-lg text-black mb-2">Skatteverket</div>
            <p className="text-gray-600 mb-3">
              Godkänd för RUT-avdrag och F-skatteregistrerad för trygg hantering av dina ärenden.
            </p>
            <a 
              href="https://www.skatteverket.se/privat/skatter/arbeteinkomstpension/rutavdrag.4.12fa2ce61594c38f24a80002975.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Läs mer om RUT-avdrag
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </motion.div>

          {/* Flyttförbundet */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="font-semibold text-lg text-black mb-2">Branschorganisation</div>
            <p className="text-gray-600 mb-3">
              Vi följer branschens etiska riktlinjer och kvalitetsstandarder för professionella flyttfirmor.
            </p>
            <a 
              href="https://www.konsumentverket.se/foretag/salja-varor-och-tjanster/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Konsumentverkets råd
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </motion.div>

          {/* Försäkring */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <div className="font-semibold text-lg text-black mb-2">Fullförsäkrad</div>
            <p className="text-gray-600 mb-3">
              Omfattande ansvars- och transportförsäkring som skyddar dina tillhörigheter under hela flytten.
            </p>
            <a 
              href="https://www.konsumentverket.se/konsument/konsumentstod/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
            >
              Om transportskydd
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </motion.div>
        </div>

        {/* Additional Trust Content */}
        <motion.div 
          className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-xl md:text-2xl font-bold text-black mb-4">
            Din trygghet är vår prioritet
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Som etablerad aktör på flyttmarknaden arbetar vi enligt alla gällande regelverk och branschstandarder. 
            Vi är medlemmar i relevanta branschorganisationer och följer <strong>Konsumentverkets riktlinjer</strong> för 
            flytttjänster. Våra medarbetare är utbildade enligt branschens bästa praxis och vi uppdaterar kontinuerligt 
            våra rutiner för att ge dig den bästa och tryggaste upplevelsen.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Godkänt för RUT-avdrag</span>
            <span>✓ F-skatteregistrerad</span>
            <span>✓ Branschcertifierad</span>
            <span>✓ Fullförsäkrad verksamhet</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
