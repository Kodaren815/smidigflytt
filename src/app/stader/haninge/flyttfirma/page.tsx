import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Haninge - Professionell flytthjälp i Haninge | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Haninge? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Haninge. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma haninge, flytthjälp, flyttstädning, flytt haninge',
  openGraph: {
    title: 'Flyttfirma Haninge - Professionell flytthjälp i Haninge | Smidigflytt',
    description: 'Trygg flytthjälp och service i Haninge. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/haninge/flyttfirma',
  },
}

export default function HaningeFlyttfirmaPage() {
  const cityData = {
    name: "Haninge",
    region: "Stockholm",
    description: "Haninge är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Haninge kommun.",
    localInfo: "I Haninge täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Haninge centrum",
      "Haninge kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
