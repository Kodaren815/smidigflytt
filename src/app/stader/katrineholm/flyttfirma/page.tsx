import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Katrineholm - Professionell flytthjälp i Katrineholm | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Katrineholm? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Katrineholm. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma katrineholm, flytthjälp, flyttstädning, flytt katrineholm',
  openGraph: {
    title: 'Flyttfirma Katrineholm - Professionell flytthjälp i Katrineholm | Smidigflytt',
    description: 'Trygg flytthjälp och service i Katrineholm. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/katrineholm/flyttfirma',
  },
}

export default function KatrineholmFlyttfirmaPage() {
  const cityData = {
    name: "Katrineholm",
    region: "Södermanland",
    description: "Katrineholm är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Katrineholm kommun.",
    localInfo: "I Katrineholm täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Katrineholm centrum",
      "Katrineholm kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
