import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Upplands-Bro - Professionell flytthjälp i Upplands-Bro | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Upplands-Bro? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Upplands-Bro. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma upplands-bro, flytthjälp, flyttstädning, flytt upplands-bro',
  openGraph: {
    title: 'Flyttfirma Upplands-Bro - Professionell flytthjälp i Upplands-Bro | Smidigflytt',
    description: 'Trygg flytthjälp och service i Upplands-Bro. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/upplands-bro/flyttfirma',
  },
}

export default function UpplandsBroFlyttfirmaPage() {
  const cityData = {
    name: "Upplands-Bro",
    region: "Stockholm",
    description: "Upplands-Bro är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Upplands-Bro kommun.",
    localInfo: "I Upplands-Bro täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Upplands-Bro centrum",
      "Upplands-Bro kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
