import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Botkyrka - Professionell flytthjälp i Botkyrka | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Botkyrka? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Botkyrka. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma botkyrka, flytthjälp, flyttstädning, flytt botkyrka',
  openGraph: {
    title: 'Flyttfirma Botkyrka - Professionell flytthjälp i Botkyrka | Smidigflytt',
    description: 'Trygg flytthjälp och service i Botkyrka. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/botkyrka/flyttfirma',
  },
}

export default function BotkyrkaFlyttfirmaPage() {
  const cityData = {
    name: "Botkyrka",
    region: "Stockholm",
    description: "Botkyrka är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Botkyrka kommun.",
    localInfo: "I Botkyrka täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Botkyrka centrum",
      "Botkyrka kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
