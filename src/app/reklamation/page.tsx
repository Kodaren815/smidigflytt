'use client'

import { AlertTriangle, Upload } from 'lucide-react'
import SEO from '@/components/SEO'

export default function ReklamationPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const formData = new FormData(form)
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then((response) => {
        console.log('Form submission response:', response.status, response.statusText)
        if (response.ok || response.status === 200) {
          window.location.href = '/reklamation/success'
        } else {
          throw new Error('Form submission failed')
        }
      })
      .catch((error) => {
        alert('Ett fel uppstod. Försök igen.')
        console.error('Form submission error:', error)
      })
    
    e.preventDefault()
  }

  return (
    <>
      <SEO
        title="Reklamation och Skadeanmälan | Smidigflytt"
        description="Anmäl skador som uppstått under flytt eller städning. Fyll i vårt formulär för skadeanmälan."
        keywords="skadeanmälan, reklamation, försäkring, skada, flytt, ersättning"
      />
      
      <div className="min-h-screen bg-gradient-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Reklamation och <span className="text-white">Skadeanmälan</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Har det uppstått en skada under flytten eller städningen? Anmäl skadan här så behandlar vi ditt ärende snarast.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form 
              name="damage-report"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="damage-report" />
              
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Dina uppgifter
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                      För- och efternamn *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Ditt fullständiga namn"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Order nr
                    </label>
                    <input
                      type="text"
                      id="orderNumber"
                      name="orderNumber"
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Ordernummer om tillgängligt"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="personalNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Personnummer *
                    </label>
                    <input
                      type="text"
                      id="personalNumber"
                      name="personalNumber"
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="YYYYMMDD-XXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="din.epost@exempel.se"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="070-123 45 67"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Damage Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Information om skada
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="damageDateTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Datum och klockslag skadan inträffade *
                    </label>
                    <input
                      type="datetime-local"
                      id="damageDateTime"
                      name="damageDateTime"
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="damageLocation" className="block text-sm font-medium text-gray-700 mb-2">
                      Skadeplats (fullständig adress) *
                    </label>
                    <input
                      type="text"
                      id="damageLocation"
                      name="damageLocation"
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Fullständig adress där skadan inträffade"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="damageDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Beskriv så utförligt som möjligt hur skadan inträffade *
                    </label>
                    <textarea
                      id="damageDescription"
                      name="damageDescription"
                      rows={5}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Detaljerad beskrivning av hur skadan uppstod..."
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                        Fabrikat och Modell
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="t.ex. IKEA Billy, Samsung TV"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="acquisitionValue" className="block text-sm font-medium text-gray-700 mb-2">
                        Anskaffningsvärde (kr)
                      </label>
                      <input
                        type="number"
                        id="acquisitionValue"
                        name="acquisitionValue"
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="Ursprungligt inköpspris"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="manufacturedYear" className="block text-sm font-medium text-gray-700 mb-2">
                        Tillverkat år
                      </label>
                      <input
                        type="number"
                        id="manufacturedYear"
                        name="manufacturedYear"
                        min="1900"
                        max="2025"
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="YYYY"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="insuranceCompany" className="block text-sm font-medium text-gray-700 mb-2">
                        Ditt försäkringsbolag
                      </label>
                      <input
                        type="text"
                        id="insuranceCompany"
                        name="insuranceCompany"
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="t.ex. Länsförsäkringar, If, Folksam"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Inköpsdatum
                      </label>
                      <input
                        type="date"
                        id="purchaseDate"
                        name="purchaseDate"
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="claimAmount" className="block text-sm font-medium text-gray-700 mb-2">
                        Anspråk (kr)
                      </label>
                      <input
                        type="number"
                        id="claimAmount"
                        name="claimAmount"
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="Begärt ersättningsbelopp"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="witnessInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Om vittne finns (namn, adress, mobil)
                    </label>
                    <textarea
                      id="witnessInfo"
                      name="witnessInfo"
                      rows={3}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Vittnes namn, adress och telefonnummer om tillämpligt"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload - Note: File uploads removed to simplify Netlify Forms submission */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Bifoga filer
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">Skicka bilagor via e-post</h3>
                    <p className="text-sm text-blue-800 mb-2">
                      För att bifoga filer (bilder, kvitton, etc.), vänligen skicka dem till: <strong>info@smidigflytt365.se</strong>
                    </p>
                    <p className="text-sm text-blue-800">
                      Ange ditt namn och personnummer i e-postmeddelandet så att vi kan koppla filerna till din skadeanmälan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Confirmation */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Bekräfta anmälan
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="confirmed"
                      name="confirmed"
                      value="yes"
                      className="mt-1 h-4 w-4 text-black focus:ring-smidig-blue border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="confirmed" className="ml-3 text-sm text-gray-700">
                      Härmed intygar jag att ovanstående uppgifter är korrekta och sanningsenliga *
                    </label>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      Efter att skadeanmälan har behandlats kommer Smidigflytt365 AB att återkomma till Er med ett beslut i ärendet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-cta text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Skicka skadeanmälan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
