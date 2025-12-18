import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Upplands Väsby - Professionell flytthjälp i Upplands Väsby | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Upplands Väsby? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Upplands Väsby. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma upplands väsby, flytthjälp, flyttstädning, flytt upplands väsby',
  openGraph: {
    title: 'Flyttfirma Upplands Väsby - Professionell flytthjälp i Upplands Väsby | Smidigflytt',
    description: 'Trygg flytthjälp och service i Upplands Väsby. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/upplands-vasby/flyttfirma',
  },
}

export default function UpplandsVsbyFlyttfirmaPage() {
  const cityData = {
    name: "Upplands Väsby",
    region: "Stockholm",
    description: "Upplands Väsby är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Upplands Väsby kommun.",
    localInfo: "I Upplands Väsby täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Upplands Väsby centrum",
      "Upplands Väsby kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
