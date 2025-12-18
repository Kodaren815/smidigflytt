import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Sollentuna - Professionell flytthjälp i Sollentuna | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Sollentuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Sollentuna. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma sollentuna, flytthjälp, flyttstädning, flytt sollentuna',
  openGraph: {
    title: 'Flyttfirma Sollentuna - Professionell flytthjälp i Sollentuna | Smidigflytt',
    description: 'Trygg flytthjälp och service i Sollentuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sollentuna/flyttfirma',
  },
}

export default function SollentunaFlyttfirmaPage() {
  const cityData = {
    name: "Sollentuna",
    region: "Stockholm",
    description: "Sollentuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Sollentuna kommun.",
    localInfo: "I Sollentuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Sollentuna centrum",
      "Sollentuna kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
