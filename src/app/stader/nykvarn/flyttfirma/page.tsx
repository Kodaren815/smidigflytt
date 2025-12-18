import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Nykvarn - Professionell flytthjälp i Nykvarn | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Nykvarn? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Nykvarn. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma nykvarn, flytthjälp, flyttstädning, flytt nykvarn',
  openGraph: {
    title: 'Flyttfirma Nykvarn - Professionell flytthjälp i Nykvarn | Smidigflytt',
    description: 'Trygg flytthjälp och service i Nykvarn. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nykvarn/flyttfirma',
  },
}

export default function NykvarnFlyttfirmaPage() {
  const cityData = {
    name: "Nykvarn",
    region: "Stockholm",
    description: "Nykvarn är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Nykvarn kommun.",
    localInfo: "I Nykvarn täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nykvarn centrum",
      "Nykvarn kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
