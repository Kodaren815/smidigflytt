import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Köping - Professionell flytthjälp i Köping | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Köping? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Köping. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma köping, flytthjälp, flyttstädning, flytt köping',
  openGraph: {
    title: 'Flyttfirma Köping - Professionell flytthjälp i Köping | Smidigflytt',
    description: 'Trygg flytthjälp och service i Köping. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/koping/flyttfirma',
  },
}

export default function KpingFlyttfirmaPage() {
  const cityData = {
    name: "Köping",
    region: "Västmanland",
    description: "Köping är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Köping kommun.",
    localInfo: "I Köping täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Köping centrum",
      "Köping kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
