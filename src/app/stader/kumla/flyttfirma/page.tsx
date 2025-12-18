import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Kumla - Professionell flytthjälp i Kumla | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Kumla? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Kumla. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma kumla, flytthjälp, flyttstädning, flytt kumla',
  openGraph: {
    title: 'Flyttfirma Kumla - Professionell flytthjälp i Kumla | Smidigflytt',
    description: 'Trygg flytthjälp och service i Kumla. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/kumla/flyttfirma',
  },
}

export default function KumlaFlyttfirmaPage() {
  const cityData = {
    name: "Kumla",
    region: "Örebro län",
    description: "Kumla är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Kumla kommun.",
    localInfo: "I Kumla täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Kumla centrum",
      "Kumla kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
