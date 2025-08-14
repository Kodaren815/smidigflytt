'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import SEO from '@/components/SEO'

const faqData = [
  {
    category: "Allmänt",
    questions: [
      {
        question: "Vilka områden täcker ni?",
        answer: "Vi täcker hela Sverige med våra flyttjänster och städservice. Vårt huvudkontor ligger i Södermanland, men vi har partners och team över hela landet för att säkerställa hög kvalitet överallt."
      },
      {
        question: "Hur bokar jag era tjänster?",
        answer: "Du kan boka våra tjänster på flera sätt: genom vårt onlineformulär, via telefon eller genom att skicka e-post till info@smidigflytt365.nu. Vi återkommer alltid inom 24 timmar med en offert."
      },
      {
        question: "Är ni försäkrade?",
        answer: "Ja, vi har fullständig ansvarsförsäkring som täcker eventuella skador under transporten. All vår personal är också försäkrad och vi använder endast professionell utrustning."
      }
    ]
  },
  {
    category: "Flyttjänster",
    questions: [
      {
        question: "Vad ingår i flytthjälpen?",
        answer: "Vår flytthjälp inkluderar packning, säker transport, möbelmontering/demontering och uppackning. Vi tillhandahåller också allt packningsmaterial och har full försäkring för era tillhörigheter."
      },
      {
        question: "Hur lång tid tar en flytt?",
        answer: "Det beror på storleken på flytten. En tvårumslägenhet tar ofta 4-6 timmar, medan en större villa kan ta 8-12 timmar. Vi ger dig en tidsuppskattning i offerten baserat på dina specifika behov."
      },
      {
        question: "Kan jag få RUT-avdrag?",
        answer: "Ja, du kan få 50% RUT-avdrag på arbetstimmar för flytthjälp i hemmet. Vi sköter all administration och du betalar endast din del direkt till oss. RUT-avdraget gäller för privatpersoner."
      },
      {
        question: "Vad händer om något går sönder under flytten?",
        answer: "Vi har en omfattande försäkring som täcker eventuella skador. Alla skador rapporteras omedelbart och hanteras snabbt genom vår försäkring. Vi tar alltid ansvar för vårt arbete."
      }
    ]
  },
  {
    category: "Städtjänster",
    questions: [
      {
        question: "Vad ingår i flyttstädningen?",
        answer: "Vår flyttstädning inkluderar grundstädning av alla rum, toppstädning av kök och badrum, fönsterputs invändigt, rengöring av ugn och kylskåp. Vi garanterar att städningen blir godkänd av hyresvärd eller mäklare."
      },
      {
        question: "Garanterar ni att städningen blir godkänd?",
        answer: "Ja, vi garanterar att vår flyttstädning blir godkänd. Om det skulle uppstå problem kommer vi tillbaka och åtgärdar det utan extra kostnad. Vi har mångårig erfarenhet och vet vad som krävs."
      },
      {
        question: "Behöver jag vara hemma under städningen?",
        answer: "Nej, du behöver inte vara hemma under städningen. Vi kan ta emot nycklar och återlämna dem enligt överenskommelse. All vår personal är bakgrundskontrollerad och pålitlig."
      }
    ]
  },
  {
    category: "Bokning & Betalning",
    questions: [
      {
        question: "Hur långt i förväg behöver jag boka?",
        answer: "Vi rekommenderar att du bokar minst 1-2 veckor i förväg, särskilt under högsäsong (sommarmånader och månadsskiften). För akuta fall kan vi ofta ordna hjälp inom 24-48 timmar."
      },
      {
        question: "Vilka betalningsmetoder accepterar ni?",
        answer: "Vi accepterar banköverföring, Swish, kortbetalning och kontanter. För RUT-avdrag sker betalningen delvis direkt till oss och delvis via Skatteverkets system."
      },
      {
        question: "Kan jag avboka eller ändra min bokning?",
        answer: "Ja, du kan avboka eller ändra din bokning fram till 24 timmar före planerad tid utan kostnad. Vid senare avbokning eller ändring kan en avgift tillkomma."
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <>
      <SEO
        title="Vanliga frågor - FAQ | Smidigflytt"
        description="Hitta svar på vanliga frågor om våra flyttjänster och städservice. Läs mer om priser, försäkring, RUT-avdrag och bokning."
        keywords="faq, vanliga frågor, flyttfirma, städservice, hjälp, svar"
      />
      
      <div className="min-h-screen bg-gradient-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vanliga <span className="text-smidig-lightyellow">Frågor</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Här hittar du svar på de vanligaste frågorna om våra tjänster. Hittar du inte svaret? Kontakta oss direkt!
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8 text-black">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-smidig-darkblue mb-6 border-b border-gray-200 pb-4">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const questionId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openQuestion === questionId
                    
                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                        >
                          <span className="font-semibold text-gray-900">{item.question}</span>
                          <ChevronDown 
                            className={`h-5 w-5 text-smidig-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 bg-white">
                                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-white rounded-3xl p-8 text-center shadow-2xl text-black">
            <h3 className="text-2xl font-bold text-smidig-darkblue mb-4">
              Hittar du inte svaret på din fråga?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontakta oss direkt så hjälper vi dig med alla dina frågor och funderingar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+46-10-544-05-77"
                className="bg-gradient-cta text-smidig-darkblue px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring oss direkt
              </a>
              <a 
                href="/kontakt"
                className="border-2 border-smidig-blue text-smidig-blue px-8 py-4 rounded-full font-semibold hover:bg-smidig-blue hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Skicka meddelande
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
