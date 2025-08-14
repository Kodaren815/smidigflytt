import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

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

const DATA_DIR = path.join(process.cwd(), 'data')
const CONTACT_FILE = path.join(DATA_DIR, 'contacts.json')

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

async function readContactMessages(): Promise<ContactMessage[]> {
  try {
    if (!existsSync(CONTACT_FILE)) {
      return []
    }
    const data = await readFile(CONTACT_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading contact messages:', error)
    return []
  }
}

async function saveContactMessage(message: ContactMessage) {
  await ensureDataDir()
  const messages = await readContactMessages()
  messages.unshift(message) // Add to beginning of array
  await writeFile(CONTACT_FILE, JSON.stringify(messages, null, 2))
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
