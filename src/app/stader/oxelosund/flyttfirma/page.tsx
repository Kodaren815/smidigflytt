import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Oxelösund - Professionell flytthjälp i Oxelösund | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Oxelösund? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Oxelösund. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma oxelösund, flytthjälp, flyttstädning, flytt oxelösund',
  openGraph: {
    title: 'Flyttfirma Oxelösund - Professionell flytthjälp i Oxelösund | Smidigflytt',
    description: 'Trygg flytthjälp och service i Oxelösund. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/oxelosund/flyttfirma',
  },
}

export default function OxelsundFlyttfirmaPage() {
  const cityData = {
    name: "Oxelösund",
    region: "Södermanland",
    description: "Oxelösund är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Oxelösund kommun.",
    localInfo: "I Oxelösund täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Oxelösund centrum",
      "Oxelösund kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
