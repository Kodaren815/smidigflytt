import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Karlskoga - Professionell flytthjälp i Karlskoga | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Karlskoga? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Karlskoga. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma karlskoga, flytthjälp, flyttstädning, flytt karlskoga',
  openGraph: {
    title: 'Flyttfirma Karlskoga - Professionell flytthjälp i Karlskoga | Smidigflytt',
    description: 'Trygg flytthjälp och service i Karlskoga. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/karlskoga/flyttfirma',
  },
}

export default function KarlskogaFlyttfirmaPage() {
  const cityData = {
    name: "Karlskoga",
    region: "Örebro län",
    description: "Karlskoga är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Karlskoga kommun.",
    localInfo: "I Karlskoga täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Karlskoga centrum",
      "Karlskoga kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
