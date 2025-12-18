import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Sala - Professionell flytthjälp i Sala | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Sala? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Sala. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma sala, flytthjälp, flyttstädning, flytt sala',
  openGraph: {
    title: 'Flyttfirma Sala - Professionell flytthjälp i Sala | Smidigflytt',
    description: 'Trygg flytthjälp och service i Sala. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sala/flyttfirma',
  },
}

export default function SalaFlyttfirmaPage() {
  const cityData = {
    name: "Sala",
    region: "Västmanland",
    description: "Sala är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Sala kommun.",
    localInfo: "I Sala täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Sala centrum",
      "Sala kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
