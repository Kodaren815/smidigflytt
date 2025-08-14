'use client'

import { useState } from 'react'
import SEO from '@/components/SEO'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <>
      <SEO
        title="Kontakt - Kom i kontakt med Smidigflytt | Smidigflytt"
        description="Kontakta Smidigflytt för professionell flytthjälp och städservice. Ring oss på Kommer snart eller skicka ett meddelande."
        keywords="kontakt, flyttfirma, telefonnummer, e-post, adress"
      />
      
      <div className="min-h-screen bg-gradient-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kontakta <span className="text-smidig-lightyellow">Smidigflytt</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Vi finns här för att hjälpa dig med din flytt. Kontakta oss idag för rådgivning och offert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Kontaktinformation</h2>
              
              <div className="space-y-8 text-black">
                <div className="flex items-start space-x-4 text-black">
                  <div className="bg-smidig-blue/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-smidig-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                    <a href="tel:+46-10-544-05-77" className="text-lg text-smidig-blue hover:text-smidig-darkblue transition-colors">
                      Kommer snart
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Ring för direkt kontakt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-smidig-blue/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-smidig-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-post</h3>
                    <a href="mailto:info@smidigflytt365.nu" className="text-lg text-smidig-blue hover:text-smidig-darkblue transition-colors">
                      info@smidigflytt365.nu
                    </a>
                    <p className="text-gray-600 text-sm mt-1">För offertförfrågningar och frågor</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-smidig-blue/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-smidig-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Område</h3>
                    <p className="text-lg text-gray-700">Hela Sverige</p>
                    <p className="text-gray-600 text-sm mt-1">Huvudkontor: Södermanland</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-smidig-blue/10 rounded-full p-3">
                    <Clock className="h-6 w-6 text-smidig-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Öppettider</h3>
                    <div className="text-gray-700">
                      <p>Måndag - Fredag: 07:00 - 18:00</p>
                      <p>Lördag: 08:00 - 16:00</p>
                      <p>Söndag: 09:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-white mb-4">Snabba åtgärder</h3>
                <div className="space-y-3">
                  <a href="/offert" className="block bg-gradient-cta text-white px-6 py-3 rounded-full text-center font-semibold hover:shadow-lg transition-all duration-200">
                    Begär offert
                  </a>
                  <a href="tel:+46-10-544-05-77" className="block border-2 border-black text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-smidig-blue hover:text-black transition-all duration-200">
                    Ring nu
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Skicka meddelande</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Namn</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                    placeholder="Ditt namn"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="din.epost@exempel.se"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                      placeholder="070-123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ämne</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                  >
                    <option value="">Välj ämne</option>
                    <option value="offert">Offertförfrågan</option>
                    <option value="fråga">Allmän fråga</option>
                    <option value="återkoppling">Återkoppling</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-smidig-blue focus:outline-none focus:ring-2 focus:ring-smidig-blue/20 transition-colors"
                    placeholder="Beskriv ditt behov eller din fråga..."
                    required
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                    Tack för ditt meddelande! Vi återkommer inom 24 timmar.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                    Ett fel uppstod när meddelandet skulle skickas. Försök igen.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-cta text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <MessageCircle className="inline mr-2 h-5 w-5 text-white" />
                  {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
