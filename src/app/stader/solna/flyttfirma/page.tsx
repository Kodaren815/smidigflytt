import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Solna - Professionell flytthjälp i Solna | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Solna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Solna. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma solna, flytthjälp, flyttstädning, flytt solna',
  openGraph: {
    title: 'Flyttfirma Solna - Professionell flytthjälp i Solna | Smidigflytt',
    description: 'Trygg flytthjälp och service i Solna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/solna/flyttfirma',
  },
}

export default function SolnaFlyttfirmaPage() {
  const cityData = {
    name: "Solna",
    region: "Stockholm",
    description: "Solna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Solna kommun.",
    localInfo: "I Solna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Solna centrum",
      "Solna kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
