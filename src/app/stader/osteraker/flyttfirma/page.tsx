import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Österåker - Professionell flytthjälp i Österåker | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Österåker? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Österåker. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma österåker, flytthjälp, flyttstädning, flytt österåker',
  openGraph: {
    title: 'Flyttfirma Österåker - Professionell flytthjälp i Österåker | Smidigflytt',
    description: 'Trygg flytthjälp och service i Österåker. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/osteraker/flyttfirma',
  },
}

export default function sterkerFlyttfirmaPage() {
  const cityData = {
    name: "Österåker",
    region: "Stockholm",
    description: "Österåker är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Österåker kommun.",
    localInfo: "I Österåker täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Österåker centrum",
      "Österåker kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
