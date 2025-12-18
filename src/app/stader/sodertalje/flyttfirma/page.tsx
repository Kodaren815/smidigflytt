import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Södertälje - Professionell flytthjälp i Södertälje | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Södertälje? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Södertälje. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma södertälje, flytthjälp, flyttstädning, flytt södertälje',
  openGraph: {
    title: 'Flyttfirma Södertälje - Professionell flytthjälp i Södertälje | Smidigflytt',
    description: 'Trygg flytthjälp och service i Södertälje. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sodertalje/flyttfirma',
  },
}

export default function SdertljeFlyttfirmaPage() {
  const cityData = {
    name: "Södertälje",
    region: "Stockholm",
    description: "Södertälje är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Södertälje kommun.",
    localInfo: "I Södertälje täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Södertälje centrum",
      "Södertälje kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
