import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Askersund - Professionell flytthjälp i Askersund | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Askersund? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Askersund. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma askersund, flytthjälp, flyttstädning, flytt askersund',
  openGraph: {
    title: 'Flyttfirma Askersund - Professionell flytthjälp i Askersund | Smidigflytt',
    description: 'Trygg flytthjälp och service i Askersund. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/askersund/flyttfirma',
  },
}

export default function AskersundFlyttfirmaPage() {
  const cityData = {
    name: "Askersund",
    region: "Örebro län",
    description: "Askersund är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Askersund kommun.",
    localInfo: "I Askersund täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Askersund centrum",
      "Askersund kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
