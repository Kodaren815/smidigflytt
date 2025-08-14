import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

interface QuoteRequest {
  id: string
  type: 'quote'
  timestamp: string
  serviceType: string
  date: string
  address: string
  housingType: string
  squareMeters: string
  floor: string
  hasElevator: boolean | null
  hasBalcony: boolean | null
  name: string
  phone: string
  email: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const QUOTES_FILE = path.join(DATA_DIR, 'quotes.json')

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

async function readQuoteRequests(): Promise<QuoteRequest[]> {
  try {
    if (!existsSync(QUOTES_FILE)) {
      return []
    }
    const data = await readFile(QUOTES_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading quote requests:', error)
    return []
  }
}

async function saveQuoteRequest(quote: QuoteRequest) {
  await ensureDataDir()
  const quotes = await readQuoteRequests()
  quotes.unshift(quote) // Add to beginning of array
  await writeFile(QUOTES_FILE, JSON.stringify(quotes, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      serviceType,
      date,
      address,
      housingType,
      squareMeters,
      floor,
      hasElevator,
      hasBalcony,
      name,
      phone,
      email
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
      housingType: housingType || '',
      squareMeters: squareMeters || '',
      floor: floor || '',
      hasElevator,
      hasBalcony,
      name,
      phone,
      email
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
