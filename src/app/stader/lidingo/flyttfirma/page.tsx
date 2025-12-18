import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Lidingö - Professionell flytthjälp i Lidingö | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Lidingö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Lidingö. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma lidingö, flytthjälp, flyttstädning, flytt lidingö',
  openGraph: {
    title: 'Flyttfirma Lidingö - Professionell flytthjälp i Lidingö | Smidigflytt',
    description: 'Trygg flytthjälp och service i Lidingö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/lidingo/flyttfirma',
  },
}

export default function LidingFlyttfirmaPage() {
  const cityData = {
    name: "Lidingö",
    region: "Stockholm",
    description: "Lidingö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Lidingö kommun.",
    localInfo: "I Lidingö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Lidingö centrum",
      "Lidingö kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
