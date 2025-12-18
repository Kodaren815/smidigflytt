import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Degerfors - Professionell flytthjälp i Degerfors | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Degerfors? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Degerfors. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma degerfors, flytthjälp, flyttstädning, flytt degerfors',
  openGraph: {
    title: 'Flyttfirma Degerfors - Professionell flytthjälp i Degerfors | Smidigflytt',
    description: 'Trygg flytthjälp och service i Degerfors. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/degerfors/flyttfirma',
  },
}

export default function DegerforsFlyttfirmaPage() {
  const cityData = {
    name: "Degerfors",
    region: "Örebro län",
    description: "Degerfors är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Degerfors kommun.",
    localInfo: "I Degerfors täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Degerfors centrum",
      "Degerfors kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
