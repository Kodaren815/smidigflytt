import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Järfälla - Professionell flytthjälp i Järfälla | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Järfälla? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Järfälla. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma järfälla, flytthjälp, flyttstädning, flytt järfälla',
  openGraph: {
    title: 'Flyttfirma Järfälla - Professionell flytthjälp i Järfälla | Smidigflytt',
    description: 'Trygg flytthjälp och service i Järfälla. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/jarfalla/flyttfirma',
  },
}

export default function JrfllaFlyttfirmaPage() {
  const cityData = {
    name: "Järfälla",
    region: "Stockholm",
    description: "Järfälla är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Järfälla kommun.",
    localInfo: "I Järfälla täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Järfälla centrum",
      "Järfälla kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
