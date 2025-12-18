import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Hallstahammar - Professionell flytthjälp i Hallstahammar | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Hallstahammar? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Hallstahammar. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma hallstahammar, flytthjälp, flyttstädning, flytt hallstahammar',
  openGraph: {
    title: 'Flyttfirma Hallstahammar - Professionell flytthjälp i Hallstahammar | Smidigflytt',
    description: 'Trygg flytthjälp och service i Hallstahammar. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/hallstahammar/flyttfirma',
  },
}

export default function HallstahammarFlyttfirmaPage() {
  const cityData = {
    name: "Hallstahammar",
    region: "Västmanland",
    description: "Hallstahammar är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Hallstahammar kommun.",
    localInfo: "I Hallstahammar täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Hallstahammar centrum",
      "Hallstahammar kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
