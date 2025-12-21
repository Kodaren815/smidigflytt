'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Upload, FileText, Check, X } from 'lucide-react'
import SEO from '@/components/SEO'

interface DamageReportForm {
  // Personal Information
  fullName: string
  orderNumber: string
  personalNumber: string
  email: string
  phone: string
  
  // Damage Information
  damageDateTime: string
  damageLocation: string
  damageDescription: string
  brand: string
  acquisitionValue: string
  manufacturedYear: string
  insuranceCompany: string
  purchaseDate: string
  claimAmount: string
  witnessInfo: string
  
  // Files
  files: File[]
  
  // Confirmation
  confirmed: boolean
}

const initialFormData: DamageReportForm = {
  fullName: '',
  orderNumber: '',
  personalNumber: '',
  email: '',
  phone: '',
  damageDateTime: '',
  damageLocation: '',
  damageDescription: '',
  brand: '',
  acquisitionValue: '',
  manufacturedYear: '',
  insuranceCompany: '',
  purchaseDate: '',
  claimAmount: '',
  witnessInfo: '',
  files: [],
  confirmed: false
}

export default function ReklamationPage() {
  const [formData, setFormData] = useState<DamageReportForm>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ 
        ...prev, 
        files: Array.from(e.target.files || [])
      }))
    }
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.confirmed) {
      setErrorMessage('Du måste bekräfta att uppgifterna är korrekta')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Create FormData for Netlify Forms submission
      const netlifyFormData = new FormData()
      netlifyFormData.append('form-name', 'damage-report')
      
      // Add all form fields
      netlifyFormData.append('fullName', formData.fullName)
      netlifyFormData.append('orderNumber', formData.orderNumber)
      netlifyFormData.append('personalNumber', formData.personalNumber)
      netlifyFormData.append('email', formData.email)
      netlifyFormData.append('phone', formData.phone)
      netlifyFormData.append('damageDateTime', formData.damageDateTime)
      netlifyFormData.append('damageLocation', formData.damageLocation)
      netlifyFormData.append('damageDescription', formData.damageDescription)
      netlifyFormData.append('brand', formData.brand)
      netlifyFormData.append('acquisitionValue', formData.acquisitionValue)
      netlifyFormData.append('manufacturedYear', formData.manufacturedYear)
      netlifyFormData.append('insuranceCompany', formData.insuranceCompany)
      netlifyFormData.append('purchaseDate', formData.purchaseDate)
      netlifyFormData.append('claimAmount', formData.claimAmount)
      netlifyFormData.append('witnessInfo', formData.witnessInfo)
      
      // Add files
      formData.files.forEach((file) => {
        netlifyFormData.append('files', file)
      })

      const response = await fetch('/', {
        method: 'POST',
        body: netlifyFormData,
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
      } else {
        setErrorMessage('Ett fel uppstod när anmälan skulle skickas')
        setSubmitStatus('error')
      }
    } catch {
      setErrorMessage('Ett fel uppstod när anmälan skulle skickas')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <>
        <SEO
          title="Skadeanmälan skickad | Smidigflytt"
          description="Din skadeanmälan har skickats. Vi återkommer inom kort med information om ärendet."
        />
        <div className="min-h-screen bg-gradient-secondary py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
            >
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
            </motion.div>
          </div>
        </div>
      </>
    )
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
              onSubmit={handleSubmit} 
              className="space-y-8"
              name="damage-report"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="damage-report" />
              
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Dina uppgifter
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      För- och efternamn *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Ditt fullständiga namn"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order nr
                    </label>
                    <input
                      type="text"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Ordernummer om tillgängligt"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Personnummer *
                    </label>
                    <input
                      type="text"
                      name="personalNumber"
                      value={formData.personalNumber}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="YYYYMMDD-XXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="din.epost@exempel.se"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Datum och klockslag skadan inträffade *
                    </label>
                    <input
                      type="datetime-local"
                      name="damageDateTime"
                      value={formData.damageDateTime}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skadeplats (fullständig adress) *
                    </label>
                    <input
                      type="text"
                      name="damageLocation"
                      value={formData.damageLocation}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Fullständig adress där skadan inträffade"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beskriv så utförligt som möjligt hur skadan inträffade *
                    </label>
                    <textarea
                      name="damageDescription"
                      value={formData.damageDescription}
                      onChange={handleInputChange}
                      rows={5}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Detaljerad beskrivning av hur skadan uppstod..."
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fabrikat och Modell
                      </label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="t.ex. IKEA Billy, Samsung TV"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anskaffningsvärde (kr)
                      </label>
                      <input
                        type="number"
                        name="acquisitionValue"
                        value={formData.acquisitionValue}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="Ursprungligt inköpspris"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tillverkat år
                      </label>
                      <input
                        type="number"
                        name="manufacturedYear"
                        value={formData.manufacturedYear}
                        onChange={handleInputChange}
                        min="1900"
                        max={new Date().getFullYear()}
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="YYYY"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ditt försäkringsbolag
                      </label>
                      <input
                        type="text"
                        name="insuranceCompany"
                        value={formData.insuranceCompany}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="t.ex. Länsförsäkringar, If, Folksam"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inköpsdatum
                      </label>
                      <input
                        type="date"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anspråk (kr)
                      </label>
                      <input
                        type="number"
                        name="claimAmount"
                        value={formData.claimAmount}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                        placeholder="Begärt ersättningsbelopp"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Om vittne finns (namn, adress, mobil)
                    </label>
                    <textarea
                      name="witnessInfo"
                      value={formData.witnessInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="Vittnes namn, adress och telefonnummer om tillämpligt"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Bifoga filer
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ladda upp komplettering till anmälan (ex. bilder, kvitto, kontoudrag, skiss, skadeblankett)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-smidig-blue transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-smidig-darkblue focus-within:outline-none">
                            <span>Ladda upp filer</span>
                            <input
                              id="file-upload"
                              name="files"
                              type="file"
                              multiple
                              accept="image/*,.pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">eller dra och släpp</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, PDF, DOC upp till 10MB per fil
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* File List */}
                  {formData.files.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-700">Valda filer:</h3>
                      {formData.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-900">{file.name}</span>
                            <span className="text-xs text-gray-500 ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">Vid skadeanmälan skall följande uppgifter bifogas:</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Kvitto/kontoutdrag eller liknande som kan påvisa anskaffningsvärdet</li>
                      <li>• Bilder på det skadade föremålet</li>
                    </ul>
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
                      name="confirmed"
                      checked={formData.confirmed}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-black focus:ring-smidig-blue border-gray-300 rounded"
                      required
                    />
                    <label className="ml-3 text-sm text-gray-700">
                      Härmed intygar jag att ovanstående uppgifter är korrekta och sanningsenliga *
                    </label>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      Efter att skadeanmälan har behandlats kommer Flytt & Städ Sverige AB att återkomma till Er med ett beslut i ärendet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Messages */}
              {(submitStatus === 'error' || errorMessage) && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                  {errorMessage || 'Ett fel uppstod när anmälan skulle skickas. Försök igen.'}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.confirmed}
                  className="bg-gradient-cta text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Skickar anmälan...' : 'Skicka skadeanmälan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
