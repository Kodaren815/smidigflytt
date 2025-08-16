'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Eye, 
  EyeOff, 
  MessageCircle, 
  Calculator, 
  Mail, 
  Phone, 
  RefreshCw,
  FileText,
  Clock,
  AlertTriangle
} from 'lucide-react'

interface Message {
  id: string
  type: 'contact' | 'quote' | 'damage-report'
  timestamp: string
  name?: string
  fullName?: string
  email: string
  phone: string
  // Contact form fields
  subject?: string
  message?: string
  // Quote fields
  serviceType?: string
  date?: string
  address?: string
  housingType?: string
  squareMeters?: string
  floor?: string
  hasElevator?: boolean | null
  hasBalcony?: boolean | null
  extraInfo?: string
  // Damage report fields
  orderNumber?: string
  personalNumber?: string
  damageDateTime?: string
  damageLocation?: string
  damageDescription?: string
  brand?: string
  acquisitionValue?: string
  manufacturedYear?: string
  insuranceCompany?: string
  purchaseDate?: string
  claimAmount?: string
  witnessInfo?: string
  files?: Array<{
    name: string
    type: string
    size: number
    data: string
  }>
  confirmed?: boolean
}

interface Stats {
  totalContacts: number
  totalQuotes: number
  totalDamageReports: number
  totalMessages: number
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [stats, setStats] = useState<Stats>({ totalContacts: 0, totalQuotes: 0, totalDamageReports: 0, totalMessages: 0 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  const authenticate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/admin?password=${encodeURIComponent(password)}`)
      
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages)
        setStats(data.stats)
        setIsAuthenticated(true)
      } else {
        setError('Felaktigt lösenord')
      }
    } catch {
      setError('Ett fel uppstod vid inloggning')
    } finally {
      setLoading(false)
    }
  }

  const refreshData = async () => {
    if (!isAuthenticated) return
    
    setLoading(true)
    try {
      const response = await fetch(`/api/admin?password=${encodeURIComponent(password)}`)
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages)
        setStats(data.stats)
      }
    } catch {
      setError('Kunde inte uppdatera data')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('sv-SE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
              <p className="text-gray-600">Ange lösenord för att komma åt admin-panelen</p>
            </div>

            <form onSubmit={authenticate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lösenord
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors pr-12"
                    placeholder="Ange lösenord"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loggar in...' : 'Logga in'}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
              <p className="text-gray-600">Hantera kontaktmeddelanden och offertförfrågningar</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button
                onClick={refreshData}
                disabled={loading}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Uppdatera
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Logga ut
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Kontaktmeddelanden</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3">
                <Calculator className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Offertförfrågningar</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalQuotes}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="bg-red-100 rounded-full p-3">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Skadeanmälningar</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDamageReports}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-3">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Totalt meddelanden</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalMessages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Alla meddelanden</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {messages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                Inga meddelanden än
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedMessage(message)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`rounded-full p-2 ${
                          message.type === 'contact' 
                            ? 'bg-blue-100 text-blue-600' 
                            : message.type === 'quote'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {message.type === 'contact' ? (
                            <MessageCircle className="h-4 w-4" />
                          ) : message.type === 'quote' ? (
                            <Calculator className="h-4 w-4" />
                          ) : (
                            <AlertTriangle className="h-4 w-4" />
                          )}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          message.type === 'contact'
                            ? 'bg-blue-100 text-blue-800'
                            : message.type === 'quote'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {message.type === 'contact' ? 'Kontakt' : message.type === 'quote' ? 'Offert' : 'Skadeanmälan'}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-1">{message.name || message.fullName}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {message.email}
                        </span>
                        {message.phone && (
                          <span className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {message.phone}
                          </span>
                        )}
                      </div>
                      
                      {message.type === 'quote' && message.serviceType && (
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="font-medium">Tjänst:</span> {message.serviceType}
                        </div>
                      )}
                      
                      {message.type === 'damage-report' && message.files && message.files.length > 0 && (
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="font-medium">Bifogade filer:</span> {message.files.length} st
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Detail Modal */}
        <AnimatePresence>
          {selectedMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedMessage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedMessage.type === 'contact' ? 'Kontaktmeddelande' : 
                     selectedMessage.type === 'quote' ? 'Offertförfrågan' : 'Skadeanmälan'}
                  </h2>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Namn</label>
                      <p className="text-gray-900">{selectedMessage.name || selectedMessage.fullName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                      <p className="text-gray-900">{selectedMessage.email}</p>
                    </div>
                    {selectedMessage.phone && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <p className="text-gray-900">{selectedMessage.phone}</p>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Datum</label>
                      <p className="text-gray-900">{formatDate(selectedMessage.timestamp)}</p>
                    </div>
                    {selectedMessage.orderNumber && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ordernummer</label>
                        <p className="text-gray-900">{selectedMessage.orderNumber}</p>
                      </div>
                    )}
                    {selectedMessage.personalNumber && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Personnummer</label>
                        <p className="text-gray-900">{selectedMessage.personalNumber}</p>
                      </div>
                    )}
                  </div>

                  {selectedMessage.type === 'contact' && (
                    <>
                      {selectedMessage.subject && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Ämne</label>
                          <p className="text-gray-900">{selectedMessage.subject}</p>
                        </div>
                      )}
                      {selectedMessage.message && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
                          <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                        </div>
                      )}
                    </>
                  )}

                  {selectedMessage.type === 'quote' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Tjänsttyp</label>
                          <p className="text-gray-900">{selectedMessage.serviceType}</p>
                        </div>
                        {selectedMessage.date && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Önskat datum</label>
                            <p className="text-gray-900">{selectedMessage.date}</p>
                          </div>
                        )}
                        {selectedMessage.address && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Adress</label>
                            <p className="text-gray-900">{selectedMessage.address}</p>
                          </div>
                        )}
                        {selectedMessage.housingType && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bostadstyp</label>
                            <p className="text-gray-900">{selectedMessage.housingType}</p>
                          </div>
                        )}
                        {selectedMessage.squareMeters && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Kvadratmeter</label>
                            <p className="text-gray-900">{selectedMessage.squareMeters} m²</p>
                          </div>
                        )}
                        {selectedMessage.floor && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Våning</label>
                            <p className="text-gray-900">{selectedMessage.floor}</p>
                          </div>
                        )}
                        {selectedMessage.hasElevator !== null && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Hiss</label>
                            <p className="text-gray-900">{selectedMessage.hasElevator ? 'Ja' : 'Nej'}</p>
                          </div>
                        )}
                        {selectedMessage.hasBalcony !== null && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Balkong</label>
                            <p className="text-gray-900">{selectedMessage.hasBalcony ? 'Ja' : 'Nej'}</p>
                          </div>
                        )}
                        {selectedMessage.extraInfo && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Extra information</label>
                            <p className="text-gray-900">{selectedMessage.extraInfo}</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {selectedMessage.type === 'damage-report' && (
                    <>
                      {selectedMessage.damageDateTime && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Skadedatum och tid</label>
                          <p className="text-gray-900">{new Date(selectedMessage.damageDateTime).toLocaleString('sv-SE')}</p>
                        </div>
                      )}
                      {selectedMessage.damageLocation && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Skadeplats</label>
                          <p className="text-gray-900">{selectedMessage.damageLocation}</p>
                        </div>
                      )}
                      {selectedMessage.damageDescription && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Beskrivning av skada</label>
                          <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.damageDescription}</p>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedMessage.brand && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fabrikat och Modell</label>
                            <p className="text-gray-900">{selectedMessage.brand}</p>
                          </div>
                        )}
                        {selectedMessage.acquisitionValue && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Anskaffningsvärde</label>
                            <p className="text-gray-900">{selectedMessage.acquisitionValue} kr</p>
                          </div>
                        )}
                        {selectedMessage.manufacturedYear && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tillverkat år</label>
                            <p className="text-gray-900">{selectedMessage.manufacturedYear}</p>
                          </div>
                        )}
                        {selectedMessage.insuranceCompany && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Försäkringsbolag</label>
                            <p className="text-gray-900">{selectedMessage.insuranceCompany}</p>
                          </div>
                        )}
                        {selectedMessage.purchaseDate && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Inköpsdatum</label>
                            <p className="text-gray-900">{new Date(selectedMessage.purchaseDate).toLocaleDateString('sv-SE')}</p>
                          </div>
                        )}
                        {selectedMessage.claimAmount && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Anspråk</label>
                            <p className="text-gray-900">{selectedMessage.claimAmount} kr</p>
                          </div>
                        )}
                      </div>
                      {selectedMessage.witnessInfo && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Vittnesuppgifter</label>
                          <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.witnessInfo}</p>
                        </div>
                      )}
                      {selectedMessage.files && selectedMessage.files.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Bifogade filer ({selectedMessage.files.length})</label>
                          <div className="space-y-3">
                            {selectedMessage.files.map((file, index: number) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center">
                                    <FileText className="h-4 w-4 text-gray-400 mr-2" />
                                    <span className="text-sm font-medium text-gray-900">{file.name}</span>
                                    <span className="text-xs text-gray-500 ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                                  </div>
                                  {file.data && (
                                    <a
                                      href={file.data}
                                      download={file.name}
                                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                                    >
                                      Ladda ner
                                    </a>
                                  )}
                                </div>
                                {file.type && file.type.startsWith('image/') && file.data && (
                                  <div className="mt-2">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={file.data}
                                      alt={file.name}
                                      className="max-w-full h-auto max-h-64 rounded-lg border border-gray-200"
                                      style={{ objectFit: 'contain' }}
                                    />
                                  </div>
                                )}
                                {file.type && file.type === 'application/pdf' && file.data && (
                                  <div className="mt-2 p-3 bg-red-50 rounded border border-red-200">
                                    <p className="text-sm text-red-700">PDF-fil: {file.name}</p>
                                    <p className="text-xs text-red-600 mt-1">Klicka på &quot;Ladda ner&quot; för att visa PDF:en</p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
