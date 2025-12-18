import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Strängnäs - Professionell flytthjälp i Strängnäs | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Strängnäs? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Strängnäs. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma strängnäs, flytthjälp, flyttstädning, flytt strängnäs',
  openGraph: {
    title: 'Flyttfirma Strängnäs - Professionell flytthjälp i Strängnäs | Smidigflytt',
    description: 'Trygg flytthjälp och service i Strängnäs. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/strangnas/flyttfirma',
  },
}

export default function StrngnsFlyttfirmaPage() {
  const cityData = {
    name: "Strängnäs",
    region: "Södermanland",
    description: "Strängnäs är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Strängnäs kommun.",
    localInfo: "I Strängnäs täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Strängnäs centrum",
      "Strängnäs kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
