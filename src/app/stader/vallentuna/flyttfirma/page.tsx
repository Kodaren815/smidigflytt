import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Vallentuna - Professionell flytthjälp i Vallentuna | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Vallentuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Vallentuna. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma vallentuna, flytthjälp, flyttstädning, flytt vallentuna',
  openGraph: {
    title: 'Flyttfirma Vallentuna - Professionell flytthjälp i Vallentuna | Smidigflytt',
    description: 'Trygg flytthjälp och service i Vallentuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/vallentuna/flyttfirma',
  },
}

export default function VallentunaFlyttfirmaPage() {
  const cityData = {
    name: "Vallentuna",
    region: "Stockholm",
    description: "Vallentuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Vallentuna kommun.",
    localInfo: "I Vallentuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Vallentuna centrum",
      "Vallentuna kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
