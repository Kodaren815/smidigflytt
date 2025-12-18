import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Nynäshamn - Professionell flytthjälp i Nynäshamn | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Nynäshamn? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Nynäshamn. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma nynäshamn, flytthjälp, flyttstädning, flytt nynäshamn',
  openGraph: {
    title: 'Flyttfirma Nynäshamn - Professionell flytthjälp i Nynäshamn | Smidigflytt',
    description: 'Trygg flytthjälp och service i Nynäshamn. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nynashamn/flyttfirma',
  },
}

export default function NynshamnFlyttfirmaPage() {
  const cityData = {
    name: "Nynäshamn",
    region: "Stockholm",
    description: "Nynäshamn är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Nynäshamn kommun.",
    localInfo: "I Nynäshamn täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nynäshamn centrum",
      "Nynäshamn kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
