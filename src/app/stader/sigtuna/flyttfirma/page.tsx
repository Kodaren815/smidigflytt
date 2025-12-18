import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Sigtuna - Professionell flytthjälp i Sigtuna | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Sigtuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Sigtuna. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma sigtuna, flytthjälp, flyttstädning, flytt sigtuna',
  openGraph: {
    title: 'Flyttfirma Sigtuna - Professionell flytthjälp i Sigtuna | Smidigflytt',
    description: 'Trygg flytthjälp och service i Sigtuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sigtuna/flyttfirma',
  },
}

export default function SigtunaFlyttfirmaPage() {
  const cityData = {
    name: "Sigtuna",
    region: "Stockholm",
    description: "Sigtuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Sigtuna kommun.",
    localInfo: "I Sigtuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Sigtuna centrum",
      "Sigtuna kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
