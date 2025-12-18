import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flyttfirma Fagersta - Professionell flytthjälp i Fagersta | Smidigflytt',
  description: 'Letar du efter en pålitlig flyttfirma i Fagersta? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Fagersta. RUT-avdrag och försäkring ingår.',
  keywords: 'flyttfirma fagersta, flytthjälp, flyttstädning, flytt fagersta',
  openGraph: {
    title: 'Flyttfirma Fagersta - Professionell flytthjälp i Fagersta | Smidigflytt',
    description: 'Trygg flytthjälp och service i Fagersta. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/fagersta/flyttfirma',
  },
}

export default function FagerstaFlyttfirmaPage() {
  const cityData = {
    name: "Fagersta",
    region: "Västmanland",
    description: "Fagersta är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella flyttjänster i hela Fagersta kommun.",
    localInfo: "I Fagersta täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Fagersta centrum",
      "Fagersta kommun",
      "Närliggande områden"
    ],
    serviceType: "flyttfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
