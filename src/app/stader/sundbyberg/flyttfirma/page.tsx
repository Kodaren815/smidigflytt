import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Sundbyberg - Professionell flytthjälp i Sundbyberg | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Sundbyberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Sundbyberg. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma sundbyberg, flytthjälp, flyttstädning, flytt sundbyberg',
  openGraph: {
    title: 'Flyttfirma Sundbyberg - Professionell flytthjälp i Sundbyberg | Smidigflytt',
    description: 'Trygg flytthjälp och service i Sundbyberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sundbyberg/flyttfirma',
  },
}

export default function SundbybergFlyttfirmaPage() {
  const cityData = {
    name: "Sundbyberg",
    region: "Stockholm",
    description: "Sundbyberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Sundbyberg kommun.",
    localInfo: "I Sundbyberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
    services: [
      "Fullservice flytt med packning",
      "Transport av möbler och inventarier", 
      "Packning och uppackning",
      "Flyttstädning efter flytt",
      "Magasinering av möbler",
      "Pianoflytt och specialtransporter",
      "Företagsflytt och kontorsflytt"
    ],
    specialties: [
      "Försäkrad och utbildad personal",
      "Moderna transportfordon", 
      "Kvalitetsgaranti på alla tjänster",
      "Flexibla tider även kvällar och helger"
    ],
    areas: [
      "Sundbyberg centrum",
      "Sundbyberg kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
