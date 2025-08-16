import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Hardcoded password (as requested)
// Hardcoded password (as requested)
const ADMIN_PASSWORD = 'smidigflytt2024smidigflytt365'

const DATA_DIR = path.join(process.cwd(), 'data')
const CONTACT_FILE = path.join(DATA_DIR, 'contacts.json')
const QUOTES_FILE = path.join(DATA_DIR, 'quotes.json')
const DAMAGE_REPORTS_FILE = path.join(DATA_DIR, 'damage-reports.json')

async function readJSONFile(filePath: string) {
  try {
    if (!existsSync(filePath)) {
      return []
    }
    const data = await readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    return []
  }
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

    const contacts = await readJSONFile(CONTACT_FILE)
    const quotes = await readJSONFile(QUOTES_FILE)
    const damageReports = await readJSONFile(DAMAGE_REPORTS_FILE)

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
      }
    })
  } catch (error) {
    console.error('Error fetching admin data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
