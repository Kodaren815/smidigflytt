import { NextRequest, NextResponse } from 'next/server'

// Hardcoded password (as requested)
const ADMIN_PASSWORD = 'smidigflytt2024smidigflytt365'

interface Message {
  id: string
  type: string
  timestamp: string
  [key: string]: unknown
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const password = searchParams.get('password')

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Since we're using in-memory storage, we'll return empty arrays
    // In a real application, these would come from a persistent database
    const contacts: Message[] = []
    const quotes: Message[] = []
    const damageReports: Message[] = []

    // Combine and sort by timestamp (newest first)
    const allMessages = [...contacts, ...quotes, ...damageReports].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    return NextResponse.json({
      messages: allMessages,
      stats: {
        totalContacts: contacts.length,
        totalQuotes: quotes.length,
        totalDamageReports: damageReports.length,
        totalMessages: allMessages.length
      },
      note: "Data is stored in memory and resets on each deployment. For persistent storage, consider upgrading to Vercel Pro with KV database or use an external database."
    })
  } catch (error) {
    console.error('Error fetching admin data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
