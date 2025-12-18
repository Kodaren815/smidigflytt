import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Eskilstuna - Professionell flytthjälp i Eskilstuna | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Eskilstuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Eskilstuna. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma eskilstuna, flytthjälp, flyttstädning, flytt eskilstuna',
  openGraph: {
    title: 'Flyttfirma Eskilstuna - Professionell flytthjälp i Eskilstuna | Smidigflytt',
    description: 'Trygg flytthjälp och service i Eskilstuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/eskilstuna/flyttfirma',
  },
}

export default function EskilstunaFlyttfirmaPage() {
  const cityData = {
    name: "Eskilstuna",
    region: "Södermanland",
    description: "Eskilstuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Eskilstuna kommun.",
    localInfo: "I Eskilstuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Eskilstuna centrum",
      "Eskilstuna kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
