import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Salem - Professionell flytthjälp i Salem | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Salem? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Salem. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma salem, flytthjälp, flyttstädning, flytt salem',
  openGraph: {
    title: 'Flyttfirma Salem - Professionell flytthjälp i Salem | Smidigflytt',
    description: 'Trygg flytthjälp och service i Salem. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/salem/flyttfirma',
  },
}

export default function SalemFlyttfirmaPage() {
  const cityData = {
    name: "Salem",
    region: "Stockholm",
    description: "Salem är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Salem kommun.",
    localInfo: "I Salem täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Salem centrum",
      "Salem kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
