import { NextRequest, NextResponse } from 'next/server'
import { addMessage, getMessagesByType } from '@/lib/storage'

interface DamageReport {
  id: string
  type: 'damage-report'
  timestamp: string
  // Personal Information
  fullName: string
  orderNumber: string
  personalNumber: string
  email: string
  phone: string
  // Damage Information
  damageDateTime: string
  damageLocation: string
  damageDescription: string
  brand: string
  acquisitionValue: string
  manufacturedYear: string
  insuranceCompany: string
  purchaseDate: string
  claimAmount: string
  witnessInfo: string
  // Files
  files: Array<{
    name: string
    type: string
    size: number
    data: string
  }>
  // Confirmation
  confirmed: boolean
}

async function saveDamageReport(report: DamageReport) {
  // Type assertion to ensure compatibility with BaseMessage
  addMessage(report as DamageReport & { [key: string]: unknown })
  console.log('Damage report saved:', report.id, report.fullName, report.damageDateTime)
}

// GET method for admin access
export async function GET() {
  try {
    const damageReports = getMessagesByType('damage-report')
    return NextResponse.json(damageReports)
  } catch (error) {
    console.error('Error fetching damage reports:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod när skaderapporterna skulle hämtas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      orderNumber,
      personalNumber,
      email,
      phone,
      damageDateTime,
      damageLocation,
      damageDescription,
      brand,
      acquisitionValue,
      manufacturedYear,
      insuranceCompany,
      purchaseDate,
      claimAmount,
      witnessInfo,
      files,
      confirmed
    } = body

    // Validate required fields
    if (!fullName || !personalNumber || !email || !phone || !damageDateTime || !damageLocation || !damageDescription) {
      return NextResponse.json(
        { error: 'Alla obligatoriska fält måste fyllas i' },
        { status: 400 }
      )
    }

    if (!confirmed) {
      return NextResponse.json(
        { error: 'Du måste bekräfta att uppgifterna är korrekta' },
        { status: 400 }
      )
    }

    // Validate file sizes (max 10MB per file)
    if (files && Array.isArray(files)) {
      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) { // 10MB in bytes
          return NextResponse.json(
            { error: `Filen ${file.name} är för stor. Maximal filstorlek är 10MB.` },
            { status: 400 }
          )
        }
      }
    }

    const damageReport: DamageReport = {
      id: Date.now().toString(),
      type: 'damage-report',
      timestamp: new Date().toISOString(),
      fullName,
      orderNumber: orderNumber || '',
      personalNumber,
      email,
      phone,
      damageDateTime,
      damageLocation,
      damageDescription,
      brand: brand || '',
      acquisitionValue: acquisitionValue || '',
      manufacturedYear: manufacturedYear || '',
      insuranceCompany: insuranceCompany || '',
      purchaseDate: purchaseDate || '',
      claimAmount: claimAmount || '',
      witnessInfo: witnessInfo || '',
      files: files || [],
      confirmed
    }

    await saveDamageReport(damageReport)

    return NextResponse.json(
      { message: 'Skadeanmälan skickad framgångsrikt' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing damage report:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod när skadeanmälan skulle skickas' },
      { status: 500 }
    )
  }
}
