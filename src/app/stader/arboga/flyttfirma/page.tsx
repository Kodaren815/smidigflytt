import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Arboga - Professionell flytthjälp i Arboga | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Arboga? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Arboga. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma arboga, flytthjälp, flyttstädning, flytt arboga',
  openGraph: {
    title: 'Flyttfirma Arboga - Professionell flytthjälp i Arboga | Smidigflytt',
    description: 'Trygg flytthjälp och service i Arboga. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/arboga/flyttfirma',
  },
}

export default function ArbogaFlyttfirmaPage() {
  const cityData = {
    name: "Arboga",
    region: "Västmanland",
    description: "Arboga är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Arboga kommun.",
    localInfo: "I Arboga täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Arboga centrum",
      "Arboga kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
