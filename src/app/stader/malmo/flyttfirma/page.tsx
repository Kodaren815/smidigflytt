import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Malmö - Professionell flytthjälp i Malmö | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Malmö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Malmö. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma malmö, flytthjälp, flyttstädning, flytt malmö',
  openGraph: {
    title: 'Flyttfirma Malmö - Professionell flytthjälp i Malmö | Smidigflytt',
    description: 'Trygg flytthjälp och service i Malmö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/malmo/flyttfirma',
  },
}

export default function MalmFlyttfirmaPage() {
  const cityData = {
    name: "Malmö",
    region: "Skåne",
    description: "Malmö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Malmö kommun.",
    localInfo: "I Malmö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Malmö centrum",
      "Malmö kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
