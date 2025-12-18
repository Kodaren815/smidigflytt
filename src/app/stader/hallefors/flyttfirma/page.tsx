import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Hallefors - Professionell flytthjälp i Hallefors | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Hallefors? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Hallefors. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma hallefors, flytthjälp, flyttstädning, flytt hallefors',
  openGraph: {
    title: 'Flyttfirma Hallefors - Professionell flytthjälp i Hallefors | Smidigflytt',
    description: 'Trygg flytthjälp och service i Hallefors. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/hallefors/flyttfirma',
  },
}

export default function HalleforsFlyttfirmaPage() {
  const cityData = {
    name: "Hallefors",
    region: "Örebro län",
    description: "Hallefors är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Hallefors kommun.",
    localInfo: "I Hallefors täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Hallefors centrum",
      "Hallefors kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
