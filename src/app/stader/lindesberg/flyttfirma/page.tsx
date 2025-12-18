import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Lindesberg - Professionell flytthjälp i Lindesberg | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Lindesberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Lindesberg. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma lindesberg, flytthjälp, flyttstädning, flytt lindesberg',
  openGraph: {
    title: 'Flyttfirma Lindesberg - Professionell flytthjälp i Lindesberg | Smidigflytt',
    description: 'Trygg flytthjälp och service i Lindesberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/lindesberg/flyttfirma',
  },
}

export default function LindesbergFlyttfirmaPage() {
  const cityData = {
    name: "Lindesberg",
    region: "Örebro län",
    description: "Lindesberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Lindesberg kommun.",
    localInfo: "I Lindesberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Lindesberg centrum",
      "Lindesberg kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
