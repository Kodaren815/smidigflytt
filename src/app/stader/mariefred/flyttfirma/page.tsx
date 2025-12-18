import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Mariefred - Professionell flytthjälp i Mariefred | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Mariefred? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Mariefred. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma mariefred, flytthjälp, flyttstädning, flytt mariefred',
  openGraph: {
    title: 'Flyttfirma Mariefred - Professionell flytthjälp i Mariefred | Smidigflytt',
    description: 'Trygg flytthjälp och service i Mariefred. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/mariefred/flyttfirma',
  },
}

export default function MariefredFlyttfirmaPage() {
  const cityData = {
    name: "Mariefred",
    region: "Södermanland",
    description: "Mariefred är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Mariefred kommun.",
    localInfo: "I Mariefred täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Mariefred centrum",
      "Mariefred kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
