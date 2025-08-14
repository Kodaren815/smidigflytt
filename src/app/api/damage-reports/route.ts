import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

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

const DATA_DIR = path.join(process.cwd(), 'data')
const DAMAGE_REPORTS_FILE = path.join(DATA_DIR, 'damage-reports.json')

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

async function readDamageReports(): Promise<DamageReport[]> {
  try {
    if (!existsSync(DAMAGE_REPORTS_FILE)) {
      return []
    }
    const data = await readFile(DAMAGE_REPORTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading damage reports:', error)
    return []
  }
}

async function saveDamageReport(report: DamageReport) {
  await ensureDataDir()
  const reports = await readDamageReports()
  reports.unshift(report) // Add to beginning of array
  await writeFile(DAMAGE_REPORTS_FILE, JSON.stringify(reports, null, 2))
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
