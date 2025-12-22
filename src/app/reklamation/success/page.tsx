import Link from 'next/link'
import { Check } from 'lucide-react'
import SEO from '@/components/SEO'

export default function ReklamationSuccessPage() {
  return (
    <>
      <SEO
        title="Skadeanmälan skickad | Smidigflytt"
        description="Din skadeanmälan har skickats. Vi återkommer inom kort med information om ärendet."
      />
      <div className="min-h-screen bg-gradient-secondary py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="h-10 w-10 text-white" />
            </div>
            
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Skadeanmälan mottagen
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              Tack för din skadeanmälan. Vi har mottagit din anmälan och kommer att behandla den snarast möjligt. 
              Du kommer att få besked från oss inom kort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-smidig-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-smidig-darkblue transition-colors"
              >
                Tillbaka till startsidan
              </Link>
              <Link 
                href="/kontakt"
                className="border-2 border-smidig-blue text-black px-8 py-3 rounded-full font-semibold hover:bg-smidig-blue hover:text-white transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
