'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Home, Truck, Sparkles, MapPin, User, Package, FileText } from 'lucide-react'
import CustomCalendar from './CustomCalendar'

interface FormData {
  serviceType: 'flyttjänster' | 'städtjänster' | 'flyttjänster-och-städtjänster' | ''
  date: string
  fromAddress: string
  fromPostalCode: string
  toAddress: string
  toPostalCode: string
  address: string
  postalCode: string
  // Dual housing info for moving services
  fromHousingType: 'lägenhet' | 'radhus' | 'villa' | ''
  fromSquareMeters: string
  fromFloor: string
  fromHasElevator: boolean | null
  fromHasBalcony: boolean | null
  toHousingType: 'lägenhet' | 'radhus' | 'villa' | ''
  toSquareMeters: string
  toFloor: string
  toHasElevator: boolean | null
  toHasBalcony: boolean | null
  // Single housing info for cleaning services
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
  fromAddress: '',
  fromPostalCode: '',
  toAddress: '',
  toPostalCode: '',
  address: '',
  postalCode: '',
  // Dual housing info for moving services
  fromHousingType: '',
  fromSquareMeters: '',
  fromFloor: '',
  fromHasElevator: null,
  fromHasBalcony: null,
  toHousingType: '',
  toSquareMeters: '',
  toFloor: '',
  toHasElevator: null,
  toHasBalcony: null,
  // Single housing info for cleaning services
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

  const totalSteps = formData.serviceType === 'städtjänster' ? 10 : 15

  const updateFormData = (field: keyof FormData, value: string | number | boolean | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
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
    enter: () => ({
      opacity: 0
    }),
    center: {
      zIndex: 1,
      opacity: 1
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen mobile-safe bg-gradient-secondary py-8 md:py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <Check className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Tack för din förfrågan!
            </h1>
            
            <div className="bg-gray-100 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="font-bold text-blue-900 mb-3 md:mb-4 text-sm md:text-base">Sammanfattning av din förfrågan:</h3>
              <div className="space-y-1 md:space-y-2 text-left text-black text-sm md:text-base">
                <div><strong>Tjänst:</strong> {
                  formData.serviceType === 'flyttjänster-och-städtjänster' 
                    ? 'Flyttjänster och Städtjänster' 
                    : formData.serviceType
                }</div>
                <div><strong>Datum:</strong> {formData.date}</div>
                {formData.serviceType === 'städtjänster' ? (
                  <>
                    <div><strong>Adress:</strong> {formData.address} {formData.postalCode}</div>
                    <div><strong>Boendetyp:</strong> {formData.housingType}</div>
                    <div><strong>Yta:</strong> {formData.squareMeters} m²</div>
                    <div><strong>Våning:</strong> {formData.floor}</div>
                    {formData.hasElevator !== null && <div><strong>Hiss:</strong> {formData.hasElevator ? 'Ja' : 'Nej'}</div>}
                    {formData.hasBalcony !== null && <div><strong>Balkong/Altan:</strong> {formData.hasBalcony ? 'Ja' : 'Nej'}</div>}
                  </>
                ) : (
                  <>
                    <div><strong>Från adress:</strong> {formData.fromAddress} {formData.fromPostalCode}</div>
                    <div><strong>Till adress:</strong> {formData.toAddress} {formData.toPostalCode}</div>
                    <div className="mt-3"><strong>Ursprungsadress:</strong></div>
                    <div className="ml-4">
                      <div><strong>Boendetyp:</strong> {formData.fromHousingType}</div>
                      <div><strong>Yta:</strong> {formData.fromSquareMeters} m²</div>
                      <div><strong>Våning:</strong> {formData.fromFloor}</div>
                      {formData.fromHasElevator !== null && <div><strong>Hiss:</strong> {formData.fromHasElevator ? 'Ja' : 'Nej'}</div>}
                      {formData.fromHasBalcony !== null && <div><strong>Balkong/Altan:</strong> {formData.fromHasBalcony ? 'Ja' : 'Nej'}</div>}
                    </div>
                    <div className="mt-3"><strong>Destinationsadress:</strong></div>
                    <div className="ml-4">
                      <div><strong>Boendetyp:</strong> {formData.toHousingType}</div>
                      <div><strong>Yta:</strong> {formData.toSquareMeters} m²</div>
                      <div><strong>Våning:</strong> {formData.toFloor}</div>
                      {formData.toHasElevator !== null && <div><strong>Hiss:</strong> {formData.toHasElevator ? 'Ja' : 'Nej'}</div>}
                      {formData.toHasBalcony !== null && <div><strong>Balkong/Altan:</strong> {formData.toHasBalcony ? 'Ja' : 'Nej'}</div>}
                    </div>
                  </>
                )}
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
                className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors text-sm md:text-base"
              >
                Skicka ny förfrågan
              </button>
              <a 
                href="tel:+46-10-544-05-77"
                className="text-black border-2 border-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors text-sm md:text-base"
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
                className="group p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-600"
              >
                <Truck className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Flyttjänster</h3>
                <p className="text-sm md:text-base text-black">Professionell flytthjälp, packning och transport</p>
              </button>
              <button
                onClick={() => {
                  updateFormData('serviceType', 'städtjänster')
                  nextStep()
                }}
                className="group p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-600"
              >
                <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Städtjänster</h3>
                <p className="text-sm md:text-base text-black">Flyttstädning och grundlig rengöring</p>
              </button>
              <button
                onClick={() => {
                  updateFormData('serviceType', 'flyttjänster-och-städtjänster')
                  nextStep()
                }}
                className="group p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-600"
              >
                <div className="flex justify-center items-center space-x-2 mb-3 md:mb-4">
                  <Truck className="h-8 w-8 md:h-10 md:w-10 text-black" />
                  <span className="text-black text-2xl">+</span>
                  <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-black" />
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
              onDateSelect={(date) => {
                updateFormData('date', date);
                nextStep();
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              minDate={new Date().toISOString().split('T')[0]}
            />
          </div>
        )

      case 2:
        // If service is only städtjänster, show single address
        if (formData.serviceType === 'städtjänster') {
          return (
            <div className="text-center text-black">
              <MapPin className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8" style={{ color: '#162F65' }}>
                Vilken adress gäller det?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 max-w-2xl mx-auto">
                  <div className="flex gap-4 min-w-0 w-full">
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => updateFormData('address', e.target.value)}
                      placeholder="Ange fullständig adress..."
                      className="flex-1 min-w-0 px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:outline-none transition-colors"
                      style={{ borderColor: formData.address ? '#3361AC' : '#E5E7EB' }}
                    />
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => updateFormData('postalCode', e.target.value)}
                      placeholder="Postkod*"
                      className="w-20 md:w-40 lg:w-56 max-w-[192px] px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:outline-none transition-colors flex-shrink-0"
                      style={{ borderColor: formData.postalCode ? '#3361AC' : '#E5E7EB' }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        }
        
        // If service includes flyttjänster, show dual addresses
        return (
          <div className="text-center text-black">
            <MapPin className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8" style={{ color: '#162F65' }}>
              Från vilken adress och till vilken adress?
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              {/* From Address */}
              <div>
                <label className="block text-left text-lg font-semibold mb-2" style={{ color: '#162F65' }}>
                  Från:
                </label>
                <div className="flex gap-4">
                  <div className="flex gap-4 min-w-0">
                    <input
                      type="text"
                      value={formData.fromAddress}
                      onChange={(e) => updateFormData('fromAddress', e.target.value)}
                      placeholder="Ange ursprungsadress..."
                      className="flex-1 min-w-0 px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:outline-none transition-colors"
                      style={{ borderColor: formData.fromAddress ? '#3361AC' : '#E5E7EB' }}
                    />
                    <input
                      type="text"
                      value={formData.fromPostalCode}
                      onChange={(e) => updateFormData('fromPostalCode', e.target.value)}
                      placeholder="Postkod*"
                      className="w-20 md:w-40 lg:w-56 max-w-[192px] px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:outline-none transition-colors flex-shrink-0"
                      style={{ borderColor: formData.fromPostalCode ? '#3361AC' : '#E5E7EB' }}
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* To Address */}
              <div>
                <label className="block text-left text-lg font-semibold mb-2" style={{ color: '#162F65' }}>
                  Till:
                </label>
                <div className="flex gap-4">
                  <div className="flex gap-4 min-w-0">
                    <input
                      type="text"
                      value={formData.toAddress}
                      onChange={(e) => updateFormData('toAddress', e.target.value)}
                      placeholder="Ange destinationsadress..."
                      className="flex-1 min-w-0 px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:outline-none transition-colors"
                      style={{ borderColor: formData.toAddress ? '#3361AC' : '#E5E7EB' }}
                    />
                    <input
                      type="text"
                      value={formData.toPostalCode}
                      onChange={(e) => updateFormData('toPostalCode', e.target.value)}
                      placeholder="Postkod*"
                      className="w-20 md:w-40 lg:w-56 max-w-[192px] px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:outline-none transition-colors flex-shrink-0"
                      style={{ borderColor: formData.toPostalCode ? '#3361AC' : '#E5E7EB' }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        // For städtjänster, show single housing type
        if (formData.serviceType === 'städtjänster') {
          return (
            <div className="text-center text-black">
              <Home className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
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
                    className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-600 capitalize"
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
        }
        
        // For moving services, show FROM address housing type
        return (
          <div className="text-center text-black">
            <Home className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              Boendetyp för {formData.fromAddress || 'ursprungsadressen'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {['lägenhet', 'radhus', 'villa'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    updateFormData('fromHousingType', type)
                    nextStep()
                  }}
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-600 capitalize"
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
        // For städtjänster, show single square meters
        if (formData.serviceType === 'städtjänster') {
          return (
            <div className="text-center text-black">
              <Package className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
                Boyta (kvm)
              </h2>
              <input
                type="number"
                value={formData.squareMeters}
                onChange={(e) => updateFormData('squareMeters', e.target.value)}
                placeholder="Ange antal kvadratmeter..."
                min="1"
                className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors text-black"
              />
            </div>
          )
        }
        
        // For moving services, show FROM square meters
        return (
          <div className="text-center text-black">
            <Package className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
              Boyta (kvm) för {formData.fromAddress || 'ursprungsadressen'}
            </h2>
            <input
              type="number"
              value={formData.fromSquareMeters}
              onChange={(e) => updateFormData('fromSquareMeters', e.target.value)}
              placeholder="Ange antal kvadratmeter..."
              min="1"
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors text-black"
            />
          </div>
        )

      case 5:
        // For städtjänster, show single floor
        if (formData.serviceType === 'städtjänster') {
          return (
            <div className="text-center text-black">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏢</div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
                Vilken våning bor du på?
              </h2>
              <input
                type="number"
                value={formData.floor}
                onChange={(e) => updateFormData('floor', e.target.value)}
                placeholder="Våning (t.ex. 3)..."
                min="0"
                className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>
          )
        }
        
        // For moving services, show FROM floor
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏢</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              Vilken våning på {formData.fromAddress || 'ursprungsadressen'}?
            </h2>
            <input
              type="number"
              value={formData.fromFloor}
              onChange={(e) => updateFormData('fromFloor', e.target.value)}
              placeholder="Våning (t.ex. 3)..."
              min="0"
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>
        )

      case 6:
        // For städtjänster, show single elevator
        if (formData.serviceType === 'städtjänster') {
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
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
                >
                  <div className="text-3xl md:text-4xl mb-2">✅</div>
                  <div className="text-base md:text-lg font-semibold text-black">Ja</div>
                </button>
                <button
                  onClick={() => {
                    updateFormData('hasElevator', false)
                    nextStep()
                  }}
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
                >
                  <div className="text-3xl md:text-4xl mb-2">❌</div>
                  <div className="text-base md:text-lg font-semibold text-black">Nej</div>
                </button>
              </div>
            </div>
          )
        }
        
        // For moving services, show FROM elevator
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🛗</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Finns det hiss på {formData.fromAddress || 'ursprungsadressen'}?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('fromHasElevator', true)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-3xl md:text-4xl mb-2">✅</div>
                <div className="text-base md:text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('fromHasElevator', false)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-3xl md:text-4xl mb-2">❌</div>
                <div className="text-base md:text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 7:
        // For städtjänster, show single balcony
        if (formData.serviceType === 'städtjänster') {
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
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
                >
                  <div className="text-3xl md:text-4xl mb-2">✅</div>
                  <div className="text-base md:text-lg font-semibold text-black">Ja</div>
                </button>
                <button
                  onClick={() => {
                    updateFormData('hasBalcony', false)
                    nextStep()
                  }}
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
                >
                  <div className="text-3xl md:text-4xl mb-2">❌</div>
                  <div className="text-base md:text-lg font-semibold text-black">Nej</div>
                </button>
              </div>
            </div>
          )
        }
        
        // For moving services, show FROM balcony
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏡</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Finns det inglasad balkong/altan på {formData.fromAddress || 'ursprungsadressen'}?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('fromHasBalcony', true)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-3xl md:text-4xl mb-2">✅</div>
                <div className="text-base md:text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('fromHasBalcony', false)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-3xl md:text-4xl mb-2">❌</div>
                <div className="text-base md:text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 8:
        // For städtjänster, show extra info (skip TO address steps)
        if (formData.serviceType === 'städtjänster') {
          return (
            <div className="text-center text-black">
              <FileText className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
                Ytterligare information
              </h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Finns det något mer du vill berätta om din städning? (Valfritt)
              </p>
              <textarea
                value={formData.extraInfo}
                onChange={(e) => updateFormData('extraInfo', e.target.value)}
                placeholder="T.ex. speciella förhållanden, tidpunkter att undvika..."
                rows={4}
                className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
              />
            </div>
          )
        }
        
        // For moving services, show TO address housing type
        return (
          <div className="text-center text-black">
            <Home className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              Boendetyp för {formData.toAddress || 'destinationsadressen'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {['lägenhet', 'radhus', 'villa'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    updateFormData('toHousingType', type)
                    nextStep()
                  }}
                  className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-600 capitalize"
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

      case 9:
        // For städtjänster, show contact info
        if (formData.serviceType === 'städtjänster') {
          return (
            <div className="text-center text-black">
              <User className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
                Kontaktuppgifter
              </h2>
              <div className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Ditt namn*"
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="Telefonnummer*"
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="E-postadress*"
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )
        }
        
        // For moving services, show TO square meters
        return (
          <div className="text-center text-black">
            <Package className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
              Boyta (kvm) för {formData.toAddress || 'destinationsadressen'}
            </h2>
            <input
              type="number"
              value={formData.toSquareMeters}
              onChange={(e) => updateFormData('toSquareMeters', e.target.value)}
              placeholder="Ange antal kvadratmeter..."
              min="1"
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors text-black"
            />
          </div>
        )

      case 10:
        // For moving services, show TO floor
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏢</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              Vilken våning på {formData.toAddress || 'destinationsadressen'}?
            </h2>
            <input
              type="number"
              value={formData.toFloor}
              onChange={(e) => updateFormData('toFloor', e.target.value)}
              placeholder="Våning (t.ex. 3)..."
              min="0"
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>
        )

      case 11:
        // For moving services, show TO elevator
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🛗</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Finns det hiss på {formData.toAddress || 'destinationsadressen'}?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('toHasElevator', true)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-3xl md:text-4xl mb-2">✅</div>
                <div className="text-base md:text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('toHasElevator', false)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-3xl md:text-4xl mb-2">❌</div>
                <div className="text-base md:text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 12:
        // For moving services, show TO balcony
        return (
          <div className="text-center text-black">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🏡</div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Finns det inglasad balkong/altan på {formData.toAddress || 'destinationsadressen'}?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  updateFormData('toHasBalcony', true)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="text-3xl md:text-4xl mb-2">✅</div>
                <div className="text-base md:text-lg font-semibold text-black">Ja</div>
              </button>
              <button
                onClick={() => {
                  updateFormData('toHasBalcony', false)
                  nextStep()
                }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
              >
                <div className="text-3xl md:text-4xl mb-2">❌</div>
                <div className="text-base md:text-lg font-semibold text-black">Nej</div>
              </button>
            </div>
          </div>
        )

      case 13:
        // For moving services, show extra info
        return (
          <div className="text-center text-black">
            <FileText className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
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
              className="w-full max-w-md mx-auto px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
            />
          </div>
        )

      case 14:
        // For moving services, show contact info
        return (
          <div className="text-center text-black">
            <User className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              Kontaktuppgifter
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Ditt namn*"
                required
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Telefonnummer*"
                required
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="E-postadress*"
                required
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>
          </div>
        )

      case 9:
        return (
          <div className="text-center text-black">
            <User className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              Kontaktuppgifter
            </h2>
            <div className="space-y-4 md:space-y-6 max-w-md mx-auto">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Ditt namn..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Telefonnummer..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="E-postadress..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
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
      case 2: 
        if (formData.serviceType === 'städtjänster') {
          return formData.address !== '' && formData.postalCode !== ''
        } else {
          return formData.fromAddress !== '' && formData.fromPostalCode !== '' && 
                 formData.toAddress !== '' && formData.toPostalCode !== ''
        }
      case 3: 
        if (formData.serviceType === 'städtjänster') {
          return formData.housingType !== ''
        } else {
          return formData.fromHousingType !== ''
        }
      case 4: 
        if (formData.serviceType === 'städtjänster') {
          return formData.squareMeters !== ''
        } else {
          return formData.fromSquareMeters !== ''
        }
      case 5: 
        if (formData.serviceType === 'städtjänster') {
          return formData.floor !== ''
        } else {
          return formData.fromFloor !== ''
        }
      case 6: 
        if (formData.serviceType === 'städtjänster') {
          return formData.hasElevator !== null
        } else {
          return formData.fromHasElevator !== null
        }
      case 7: 
        if (formData.serviceType === 'städtjänster') {
          return formData.hasBalcony !== null
        } else {
          return formData.fromHasBalcony !== null
        }
      case 8: 
        if (formData.serviceType === 'städtjänster') {
          return true // extraInfo is optional
        } else {
          return formData.toHousingType !== ''
        }
      case 9: 
        if (formData.serviceType === 'städtjänster') {
          return formData.name !== '' && formData.phone !== '' && formData.email !== ''
        } else {
          return formData.toSquareMeters !== ''
        }
      case 10: 
        if (formData.serviceType === 'städtjänster') {
          return true
        } else {
          return formData.toFloor !== ''
        }
      case 11: return formData.toHasElevator !== null
      case 12: return formData.toHasBalcony !== null
      case 13: return true // extraInfo is optional
      case 14: return formData.name !== '' && formData.phone !== '' && formData.email !== ''
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
                  className="flex items-center px-6 md:px-8 py-2 md:py-3 bg-gradient-cta text-blue-900 rounded-full font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
                  {!isSubmitting && <Check className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />}
                </button>
              </div>
            ) : (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-cta text-smidig-darkblue rounded-full font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
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
