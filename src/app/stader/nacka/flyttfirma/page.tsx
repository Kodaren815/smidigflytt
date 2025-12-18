import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Nacka - Professionell flytthjälp i Nacka | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Nacka? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Nacka. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma nacka, flytthjälp, flyttstädning, flytt nacka',
  openGraph: {
    title: 'Flyttfirma Nacka - Professionell flytthjälp i Nacka | Smidigflytt',
    description: 'Trygg flytthjälp och service i Nacka. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nacka/flyttfirma',
  },
}

export default function NackaFlyttfirmaPage() {
  const cityData = {
    name: "Nacka",
    region: "Stockholm",
    description: "Nacka är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Nacka kommun.",
    localInfo: "I Nacka täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nacka centrum",
      "Nacka kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
