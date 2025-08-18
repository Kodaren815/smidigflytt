import { NextRequest, NextResponse } from 'next/server'
import { addMessage, getMessagesByType } from '@/lib/storage'

interface QuoteRequest {
  id: string
  type: 'quote'
  timestamp: string
  serviceType: string
  date: string
  address: string
  postalCode: string
  fromAddress: string
  fromPostalCode: string
  toAddress: string
  toPostalCode: string
  // Dual housing info for moving services
  fromHousingType: string
  fromSquareMeters: string
  fromFloor: string
  fromHasElevator: boolean | null
  fromHasBalcony: boolean | null
  toHousingType: string
  toSquareMeters: string
  toFloor: string
  toHasElevator: boolean | null
  toHasBalcony: boolean | null
  // Single housing info for cleaning services
  housingType: string
  squareMeters: string
  floor: string
  hasElevator: boolean | null
  hasBalcony: boolean | null
  name: string
  phone: string
  email: string
  extraInfo: string
}

async function saveQuoteRequest(quote: QuoteRequest) {
  // Type assertion to ensure compatibility with BaseMessage
  addMessage(quote as QuoteRequest & { [key: string]: unknown })
  console.log('Quote request saved:', quote.id, quote.name, quote.serviceType)
}

// GET method for admin access
export async function GET() {
  try {
    const quotes = getMessagesByType('quote')
    return NextResponse.json(quotes)
  } catch (error) {
    console.error('Error fetching quotes:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod när offerterna skulle hämtas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      serviceType,
      date,
      address,
      postalCode,
      fromAddress,
      fromPostalCode,
      toAddress,
      toPostalCode,
      // Dual housing info for moving services
      fromHousingType,
      fromSquareMeters,
      fromFloor,
      fromHasElevator,
      fromHasBalcony,
      toHousingType,
      toSquareMeters,
      toFloor,
      toHasElevator,
      toHasBalcony,
      // Single housing info for cleaning services
      housingType,
      squareMeters,
      floor,
      hasElevator,
      hasBalcony,
      name,
      phone,
      email,
      extraInfo
    } = body

    // Validate required fields
    if (!serviceType || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Tjänsttyp, namn, e-post och telefon är obligatoriska' },
        { status: 400 }
      )
    }

    const quoteRequest: QuoteRequest = {
      id: Date.now().toString(),
      type: 'quote',
      timestamp: new Date().toISOString(),
      serviceType,
      date: date || '',
      address: address || '',
      postalCode: postalCode || '',
      fromAddress: fromAddress || '',
      fromPostalCode: fromPostalCode || '',
      toAddress: toAddress || '',
      toPostalCode: toPostalCode || '',
      // Dual housing info for moving services
      fromHousingType: fromHousingType || '',
      fromSquareMeters: fromSquareMeters || '',
      fromFloor: fromFloor || '',
      fromHasElevator,
      fromHasBalcony,
      toHousingType: toHousingType || '',
      toSquareMeters: toSquareMeters || '',
      toFloor: toFloor || '',
      toHasElevator,
      toHasBalcony,
      // Single housing info for cleaning services
      housingType: housingType || '',
      squareMeters: squareMeters || '',
      floor: floor || '',
      hasElevator,
      hasBalcony,
      name,
      phone,
      email,
      extraInfo: extraInfo || ''
    }

    await saveQuoteRequest(quoteRequest)

    return NextResponse.json(
      { message: 'Offertförfrågan skickad framgångsrikt' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod när offertförfrågan skulle skickas' },
      { status: 500 }
    )
  }
}
