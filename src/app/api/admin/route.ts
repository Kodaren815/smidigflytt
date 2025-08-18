import { NextRequest, NextResponse } from 'next/server'
import { getAllMessages, getStorageInfo } from '@/lib/storage'

// Hardcoded password (as requested)
const ADMIN_PASSWORD = 'smidigflytt2024smidigflytt365'

export async function GET(request: NextRequest) {
  try {
    console.log('Admin GET request received')
    
    const { searchParams } = new URL(request.url)
    const password = searchParams.get('password')

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get storage info for debugging
    const storageInfo = getStorageInfo()
    console.log('Storage info:', storageInfo)

    // Get all messages from shared storage
    const allMessages = getAllMessages()
    console.log(`Found ${allMessages.length} messages in admin route`)
    
    // Categorize messages by type
    const contacts = allMessages.filter(msg => msg.type === 'contact')
    const quotes = allMessages.filter(msg => msg.type === 'quote')
    const damageReports = allMessages.filter(msg => msg.type === 'damage-report')

    console.log(`Contacts: ${contacts.length}, Quotes: ${quotes.length}, Damage reports: ${damageReports.length}`)

    const response = {
      messages: allMessages,
      stats: {
        totalContacts: contacts.length,
        totalQuotes: quotes.length,
        totalDamageReports: damageReports.length,
        totalMessages: allMessages.length
      },
      debugInfo: {
        storageInitialized: storageInfo.initialized,
        totalInStorage: storageInfo.messageCount,
        timestamp: new Date().toISOString()
      },
      note: "Data is stored in memory and resets on each deployment. For persistent storage, consider upgrading to Vercel Pro with KV database or use an external database."
    }

    console.log('Admin response stats:', response.stats)
    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching admin data:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
