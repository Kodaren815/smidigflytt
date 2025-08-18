import { NextRequest, NextResponse } from 'next/server'

interface ContactMessage {
  id: string
  type: 'contact'
  timestamp: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// In-memory storage for demo purposes (resets on each deployment)
// In production, you would use a database like Vercel KV, PostgreSQL, or MongoDB
const contacts: ContactMessage[] = []

async function saveContactMessage(message: ContactMessage) {
  contacts.unshift(message) // Add to beginning of array
  console.log('Contact message saved:', message.id, message.name, message.subject)
}

// GET method for admin access
export async function GET() {
  try {
    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod när kontaktmeddelandena skulle hämtas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Namn, e-post och meddelande är obligatoriska' },
        { status: 400 }
      )
    }

    const contactMessage: ContactMessage = {
      id: Date.now().toString(),
      type: 'contact',
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || '',
      subject: subject || 'Inget ämne',
      message
    }

    await saveContactMessage(contactMessage)

    return NextResponse.json(
      { message: 'Meddelande skickat framgångsrikt' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod när meddelandet skulle skickas' },
      { status: 500 }
    )
  }
}
