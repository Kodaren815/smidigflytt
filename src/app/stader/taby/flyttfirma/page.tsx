import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Täby - Professionell flytthjälp i Täby | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Täby? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Täby. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma täby, flytthjälp, flyttstädning, flytt täby',
  openGraph: {
    title: 'Flyttfirma Täby - Professionell flytthjälp i Täby | Smidigflytt',
    description: 'Trygg flytthjälp och service i Täby. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/taby/flyttfirma',
  },
}

export default function TbyFlyttfirmaPage() {
  const cityData = {
    name: "Täby",
    region: "Stockholm",
    description: "Täby är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Täby kommun.",
    localInfo: "I Täby täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Täby centrum",
      "Täby kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
