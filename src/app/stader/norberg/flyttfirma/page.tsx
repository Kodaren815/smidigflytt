import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Norberg - Professionell flytthjälp i Norberg | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Norberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Norberg. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma norberg, flytthjälp, flyttstädning, flytt norberg',
  openGraph: {
    title: 'Flyttfirma Norberg - Professionell flytthjälp i Norberg | Smidigflytt',
    description: 'Trygg flytthjälp och service i Norberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/norberg/flyttfirma',
  },
}

export default function NorbergFlyttfirmaPage() {
  const cityData = {
    name: "Norberg",
    region: "Västmanland",
    description: "Norberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Norberg kommun.",
    localInfo: "I Norberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Norberg centrum",
      "Norberg kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
