import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Ekerö - Professionell flytthjälp i Ekerö | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Ekerö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Ekerö. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma ekerö, flytthjälp, flyttstädning, flytt ekerö',
  openGraph: {
    title: 'Flyttfirma Ekerö - Professionell flytthjälp i Ekerö | Smidigflytt',
    description: 'Trygg flytthjälp och service i Ekerö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/ekero/flyttfirma',
  },
}

export default function EkerFlyttfirmaPage() {
  const cityData = {
    name: "Ekerö",
    region: "Stockholm",
    description: "Ekerö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Ekerö kommun.",
    localInfo: "I Ekerö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Ekerö centrum",
      "Ekerö kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
