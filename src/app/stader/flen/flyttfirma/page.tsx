import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Flen - Professionell flytthjälp i Flen | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Flen? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Flen. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma flen, flytthjälp, flyttstädning, flytt flen',
  openGraph: {
    title: 'Flyttfirma Flen - Professionell flytthjälp i Flen | Smidigflytt',
    description: 'Trygg flytthjälp och service i Flen. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/flen/flyttfirma',
  },
}

export default function FlenFlyttfirmaPage() {
  const cityData = {
    name: "Flen",
    region: "Södermanland",
    description: "Flen är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Flen kommun.",
    localInfo: "I Flen täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Flen centrum",
      "Flen kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
