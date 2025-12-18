import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Örebro - Professionell flytthjälp i Örebro | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Örebro? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Örebro. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma örebro, flytthjälp, flyttstädning, flytt örebro',
  openGraph: {
    title: 'Flyttfirma Örebro - Professionell flytthjälp i Örebro | Smidigflytt',
    description: 'Trygg flytthjälp och service i Örebro. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/orebro/flyttfirma',
  },
}

export default function rebroFlyttfirmaPage() {
  const cityData = {
    name: "Örebro",
    region: "Örebro län",
    description: "Örebro är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Örebro kommun.",
    localInfo: "I Örebro täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Örebro centrum",
      "Örebro kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
