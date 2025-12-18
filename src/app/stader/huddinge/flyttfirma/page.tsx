import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Huddinge - Professionell flytthjälp i Huddinge | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Huddinge? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Huddinge. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma huddinge, flytthjälp, flyttstädning, flytt huddinge',
  openGraph: {
    title: 'Flyttfirma Huddinge - Professionell flytthjälp i Huddinge | Smidigflytt',
    description: 'Trygg flytthjälp och service i Huddinge. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/huddinge/flyttfirma',
  },
}

export default function HuddingeFlyttfirmaPage() {
  const cityData = {
    name: "Huddinge",
    region: "Stockholm",
    description: "Huddinge är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Huddinge kommun.",
    localInfo: "I Huddinge täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Huddinge centrum",
      "Huddinge kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
