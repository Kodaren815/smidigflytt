'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Home, Truck, Sparkles, Calendar, MapPin, User, Package } from 'lucide-react'

interface FormData {
  serviceType: 'flyttjänster' | 'städtjänster' | ''
  date: string
  address: string
  housingType: 'lägenhet' | 'radhus' | 'villa' | ''
  squareMeters: string
  floor: string
  hasElevator: boolean | null
  hasBalcony: boolean | null
  name: string
  phone: string
  email: string
}

const initialFormData: FormData = {
  serviceType: '',
  date: '',
  address: '',
  housingType: '',
  squareMeters: '',
  floor: '',
  hasElevator: null,
  hasBalcony: null,
  name: '',
  phone: '',
  email: ''
}

export default function PriceCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const totalSteps = 9

  const updateFormData = (field: keyof FormData, value: string | number | boolean | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        setSubmitError(errorData.error || 'Ett fel uppstod när förfrågan skulle skickas')
      }
    } catch {
      setSubmitError('Ett fel uppstod när förfrågan skulle skickas')
    } finally {
      setIsSubmitting(false)
    }
  }

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  if (isSubmitted) {
    return (
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
            
            <h1 className="text-black text-3xl md:text-4xl font-bold mb-6">
              Tack för din förfrågan!
            </h1>
            
            <div className="bg-smidig-lightgray rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-smidig-darkblue mb-4">Sammanfattning av din förfrågan:</h3>
              <div className="space-y-2 text-left text-black">
                <div><strong>Tjänst:</strong> {formData.serviceType}</div>
                <div><strong>Datum:</strong> {formData.date}</div>
                <div><strong>Adress:</strong> {formData.address}</div>
                <div><strong>Boendetyp:</strong> {formData.housingType}</div>
                <div><strong>Yta:</strong> {formData.squareMeters} m²</div>
                <div><strong>Våning:</strong> {formData.floor}</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Vi återkommer inom 24 timmar med en detaljerad offert skräddarsydd för dina behov!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setCurrentStep(0)
                  setFormData(initialFormData)
                  setSubmitError('')
                }}
                className="bg-smidig-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-smidig-darkblue transition-colors"
              >
                Skicka ny förfrågan
              </button>
              <a 
                href="tel:+46-10-544-05-77"
                className="text-black border-2 border-smidig-blue px-6 py-3 rounded-full font-semibold hover:bg-smidig-blue hover:text-white transition-colors"
              >
                Ring oss nu
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center">
            <h2  className="text-2xl md:text-3xl font-bold text-black mb-8">
              Vad vill du ha hjälp med?
            </h2>
            <div style={{color: 'black !important'}}className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button style={{color: 'black !important'}}
                onClick={() => {
                  updateFormData('serviceType', 'flyttjänster')
                  nextStep()
                }}
                className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue"
              >
                <Truck className="h-16 w-16 text-black mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-black mb-2">Flyttjänster</h3>
                <p className="text-black">Professionell flytthjälp, packning och transport</p>
              </button>
              <button
                onClick={() => {
                  updateFormData('serviceType', 'städtjänster')
                  nextStep()
                }}
                className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue"
              >
                <Sparkles className="h-16 w-16 text-black mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-black mb-2">Städtjänster</h3>
                <p className="text-black">Flyttstädning och grundlig rengöring</p>
              </button>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="text-center text-black">
            <Calendar className="h-16 w-16 text-smidig-blue mx-auto mb-6" />
            <h2 style={{color: 'black !important'}} className="text-2xl md:text-3xl font-bold mb-8">
             <p style={{color: 'black !important'}}> Vilket datum gäller det?</p>
            </h2>
            <input 
              type="date"
              value={formData.date}
              onChange={(e) => updateFormData('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full max-w-md mx-auto px-6 py-4 text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
              style={{color: 'black !important'}}
            />
          </div>
        )

      case 2:
        return (
          <div className="text-center text-black">
            <MapPin className="h-16 w-16 text-black mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-smidig-darkblue mb-8">
              Vilken adress gäller det?
            </h2>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => updateFormData('address', e.target.value)}
              placeholder="Ange fullständig adress..."
              className="w-full max-w-md mx-auto px-6 py-4 text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
            />
          </div>
        )

      case 3:
        return (
          <div className="text-center text-black">
            <Home className="h-16 w-16 text-smidig-blue mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-smidig-darkblue mb-8">
              Boendetyp
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['lägenhet', 'radhus', 'villa'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    updateFormData('housingType', type)
                    nextStep()
                  }}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue capitalize"
                >
                  <div className="text-4xl mb-4">
                    {type === 'lägenhet' ? '🏢' : type === 'radhus' ? '🏘️' : '🏠'}
                  </div>
                  <div className="text-lg font-semibold text-black">{type}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center text-black">
            <Package className="h-16 w-16 text-smidig-blue mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Boyta (kvm)
            </h2>
            <input
              type="number"
              value={formData.squareMeters}
              onChange={(e) => updateFormData('squareMeters', e.target.value)}
              placeholder="Ange antal kvadratmeter..."
              min="1"
              className="w-full max-w-md mx-auto px-6 py-4 text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors text-black"
            />
          </div>
        )

      case 5:
        return (
          <div className="text-center text-black">
            <div className="text-6xl mb-6">🏢</div>
            <h2 className="text-2xl md:text-3xl font-bold text-smidig-darkblue mb-8">
              Vilken våning bor du på?
            </h2>
            <input
              type="number"
              value={formData.floor}
              onChange={(e) => updateFormData('floor', e.target.value)}
              placeholder="Våning (t.ex. 3)..."
              min="0"
              className="w-full max-w-md mx-auto px-6 py-4 text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
            />
          </div>
        )

      case 6:
        return (
          <div className="text-center text-black">
            <div className="text-6xl mb-6">🛗</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Finns det hiss i byggnaden?
            </h2>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('hasElevator', true)
                  nextStep()
                }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-4xl mb-2">✅</div>
                <div className="text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('hasElevator', false)
                  nextStep()
                }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-4xl mb-2">❌</div>
                <div className="text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="text-center text-black">
            <div className="text-6xl mb-6">🏡</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Finns det inglasad balkong/altan?
            </h2>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('hasBalcony', true)
                  nextStep()
                }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-4xl mb-2">✅</div>
                <div className="text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('hasBalcony', false)
                  nextStep()
                }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-4xl mb-2">❌</div>
                <div className="text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="text-center text-black">
            <User className="h-16 w-16 text-smidig-blue mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-smidig-darkblue mb-8">
              Kontaktuppgifter
            </h2>
            <div className="space-y-6 max-w-md mx-auto">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Ditt namn..."
                className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Telefonnummer..."
                className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="E-postadress..."
                className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.serviceType !== ''
      case 1: return formData.date !== ''
      case 2: return formData.address !== ''
      case 3: return formData.housingType !== ''
      case 4: return formData.squareMeters !== ''
      case 5: return formData.floor !== ''
      case 6: return formData.hasElevator !== null
      case 7: return formData.hasBalcony !== null
      case 8: return formData.name !== '' && formData.phone !== '' && formData.email !== ''
      default: return true
    }
  }

  return (
    <div className="min-h-screen bg-gradient-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">Förfrågningsformulär</h1>
            <span className="text-white/80">{currentStep + 1} av {totalSteps}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <motion.div
              className="bg-gradient-cta h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl min-h-[500px] flex items-center">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        {![0, 3, 6, 7].includes(currentStep) && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              className="flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Tillbaka
            </button>
            
            {currentStep === totalSteps - 1 ? (
              <div className="flex flex-col items-end">
                {submitError && (
                  <div className="mb-3 px-4 py-2 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center px-8 py-3 bg-gradient-cta text-smidig-darkblue rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
                  {!isSubmitting && <Check className="ml-2 h-5 w-5" />}
                </button>
              </div>
            ) : (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center px-6 py-3 bg-gradient-cta text-smidig-darkblue rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Nästa
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
