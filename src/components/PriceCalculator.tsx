'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Home, Truck, Sparkles, Calendar, MapPin, User, Package, FileText } from 'lucide-react'
import CustomCalendar from './CustomCalendar'

interface FormData {
  serviceType: 'flyttjänster' | 'städtjänster' | 'flyttjänster-och-städtjänster' | ''
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
  extraInfo: string
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
  email: '',
  extraInfo: ''
}

export default function PriceCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const totalSteps = 10

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
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: 0.98
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen mobile-safe bg-gradient-secondary py-8 md:py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <Check className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Tack för din förfrågan!
            </h1>
            
            <div className="bg-smidig-lightgray rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="font-bold text-smidig-darkblue mb-3 md:mb-4 text-sm md:text-base">Sammanfattning av din förfrågan:</h3>
              <div className="space-y-1 md:space-y-2 text-left text-black text-sm md:text-base">
                <div><strong>Tjänst:</strong> {
                  formData.serviceType === 'flyttjänster-och-städtjänster' 
                    ? 'Flyttjänster och Städtjänster' 
                    : formData.serviceType
                }</div>
                <div><strong>Datum:</strong> {formData.date}</div>
                <div><strong>Adress:</strong> {formData.address}</div>
                <div><strong>Boendetyp:</strong> {formData.housingType}</div>
                <div><strong>Yta:</strong> {formData.squareMeters} m²</div>
                <div><strong>Våning:</strong> {formData.floor}</div>
                {formData.extraInfo && <div><strong>Extra information:</strong> {formData.extraInfo}</div>}
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Vi återkommer inom 24 timmar med en detaljerad offert skräddarsydd för dina behov!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setCurrentStep(0)
                  setFormData(initialFormData)
                  setSubmitError('')
                }}
                className="bg-smidig-blue text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-smidig-darkblue transition-colors text-sm md:text-base"
              >
                Skicka ny förfrågan
              </button>
              <a 
                href="tel:+46-10-544-05-77"
                className="text-black border-2 border-smidig-blue px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-smidig-blue hover:text-white transition-colors text-sm md:text-base"
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
          <div className="text-center ">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
              Vad vill du ha hjälp med?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <button
                onClick={() => {
                  updateFormData('serviceType', 'flyttjänster')
                  nextStep()
                }}
                className="group p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue"
              >
                <Truck className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Flyttjänster</h3>
                <p className="text-sm md:text-base text-black">Professionell flytthjälp, packning och transport</p>
              </button>
              <button
                onClick={() => {
                  updateFormData('serviceType', 'städtjänster')
                  nextStep()
                }}
                className="group p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue"
              >
                <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Städtjänster</h3>
                <p className="text-sm md:text-base text-black">Flyttstädning och grundlig rengöring</p>
              </button>
              <button
                onClick={() => {
                  updateFormData('serviceType', 'flyttjänster-och-städtjänster')
                  nextStep()
                }}
                className="group p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue"
              >
                <div className="flex justify-center items-center space-x-2 mb-3 md:mb-4">
                  <Truck className="h-8 w-8 md:h-10 md:w-10 text-black group-hover:scale-110 transition-transform" />
                  <span className="text-black text-2xl">+</span>
                  <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-black group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Flyttjänster och Städtjänster</h3>
                <p className="text-sm md:text-base text-black">Komplett lösning med flytt och städning</p>
              </button>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="text-center text-black ">
            <CustomCalendar
              selectedDate={formData.date}
              onDateSelect={(date) => updateFormData('date', date)}
              minDate={new Date().toISOString().split('T')[0]}
            />
          </div>
        )

      case 2:
        return (
          <div className="text-center text-black">
            <MapPin className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-smidig-darkblue mb-6 md:mb-8">
              Vilken adress gäller det?
            </h2>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => updateFormData('address', e.target.value)}
              placeholder="Ange fullständig adress..."
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
            />
          </div>
        )

      case 3:
        return (
          <div className="text-center text-black">
            <Home className="h-12 w-12 md:h-16 md:w-16 text-smidig-blue mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-smidig-darkblue mb-6 md:mb-8">
              Boendetyp
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {['lägenhet', 'radhus', 'villa'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    updateFormData('housingType', type)
                    nextStep()
                  }}
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-smidig-blue capitalize"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                    {type === 'lägenhet' ? '🏢' : type === 'radhus' ? '🏘️' : '🏠'}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-black">{type}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center text-black">
            <Package className="h-12 w-12 md:h-16 md:w-16 text-smidig-blue mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
              Boyta (kvm)
            </h2>
            <input
              type="number"
              value={formData.squareMeters}
              onChange={(e) => updateFormData('squareMeters', e.target.value)}
              placeholder="Ange antal kvadratmeter..."
              min="1"
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors text-black"
            />
          </div>
        )

      case 5:
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏢</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-smidig-darkblue mb-6 md:mb-8">
              Vilken våning bor du på?
            </h2>
            <input
              type="number"
              value={formData.floor}
              onChange={(e) => updateFormData('floor', e.target.value)}
              placeholder="Våning (t.ex. 3)..."
              min="0"
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
            />
          </div>
        )

      case 6:
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🛗</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Finns det hiss i byggnaden?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('hasElevator', true)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-3xl md:text-4xl mb-2">✅</div>
                <div className="text-base md:text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('hasElevator', false)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-3xl md:text-4xl mb-2">❌</div>
                <div className="text-base md:text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏡</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Finns det inglasad balkong/altan?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('hasBalcony', true)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-3xl md:text-4xl mb-2">✅</div>
                <div className="text-base md:text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('hasBalcony', false)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-3xl md:text-4xl mb-2">❌</div>
                <div className="text-base md:text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="text-center text-black">
            <FileText className="h-12 w-12 md:h-16 md:w-16 text-smidig-blue mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-smidig-darkblue mb-6 md:mb-8">
              Ytterligare information
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Finns det något mer du vill berätta om din flytt eller städning? (Valfritt)
            </p>
            <textarea
              value={formData.extraInfo}
              onChange={(e) => updateFormData('extraInfo', e.target.value)}
              placeholder="T.ex. speciella förhållanden, tunga möbler, tidpunkter att undvika..."
              rows={4}
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors resize-none"
            />
          </div>
        )

      case 9:
        return (
          <div className="text-center text-black">
            <User className="h-12 w-12 md:h-16 md:w-16 text-smidig-blue mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-smidig-darkblue mb-6 md:mb-8">
              Kontaktuppgifter
            </h2>
            <div className="space-y-4 md:space-y-6 max-w-md mx-auto">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Ditt namn..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Telefonnummer..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="E-postadress..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-smidig-blue focus:outline-none transition-colors"
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
      case 8: return true // Extra info is optional
      case 9: return formData.name !== '' && formData.phone !== '' && formData.email !== ''
      default: return true
    }
  }

  return (
    <div className="min-h-screen mobile-safe bg-gradient-secondary py-8 md:py-20">
      <div className="w-full md:w-[60vw] max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 h-full">

        {/* Progress Bar */}
        <div className="mb-8 md:mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-white">Förfrågningsformulär</h1>
            <span className="text-white/80 text-sm md:text-base">{currentStep + 1} av {totalSteps}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 md:h-3">
            <motion.div
              className="bg-gradient-cta h-2 md:h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl min-h-[200px] md:min-h-[220px] flex items-center">
          <div className="w-full">
            <AnimatePresence mode="wait" custom={currentStep}>
              <motion.div
                key={currentStep}
                custom={currentStep}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.4, ease: "easeInOut" },
                  scale: { duration: 0.4, ease: "easeInOut" }
                }}
                className="w-full smooth-transition"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        {![0, 3, 6, 7].includes(currentStep) && (
          <div className="flex justify-between items-center mt-6 md:mt-8 gap-4">
            <button
              onClick={prevStep}
              className="flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm md:text-base"
            >
              <ArrowLeft className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              Tillbaka
            </button>
            
            {currentStep === totalSteps - 1 ? (
              <div className="flex flex-col items-end">
                {submitError && (
                  <div className="mb-3 px-3 md:px-4 py-2 bg-red-100 border border-red-300 text-red-700 rounded-lg text-xs md:text-sm max-w-xs">
                    {submitError}
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center px-6 md:px-8 py-2 md:py-3 bg-gradient-cta text-smidig-darkblue rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base"
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
                  {!isSubmitting && <Check className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />}
                </button>
              </div>
            ) : (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-cta text-smidig-darkblue rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base"
              >
                Nästa
                <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
