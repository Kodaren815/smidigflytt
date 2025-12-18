import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Hallsberg - Professionell flytthjälp i Hallsberg | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Hallsberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Hallsberg. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma hallsberg, flytthjälp, flyttstädning, flytt hallsberg',
  openGraph: {
    title: 'Flyttfirma Hallsberg - Professionell flytthjälp i Hallsberg | Smidigflytt',
    description: 'Trygg flytthjälp och service i Hallsberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/hallsberg/flyttfirma',
  },
}

export default function HallsbergFlyttfirmaPage() {
  const cityData = {
    name: "Hallsberg",
    region: "Örebro län",
    description: "Hallsberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Hallsberg kommun.",
    localInfo: "I Hallsberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Hallsberg centrum",
      "Hallsberg kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
