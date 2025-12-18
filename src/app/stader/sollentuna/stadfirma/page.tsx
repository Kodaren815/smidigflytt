import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Sollentuna - Professionell hemstädning i Sollentuna | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Sollentuna? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Sollentuna. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma sollentuna, städtjänster, hemstäd, städning sollentuna',
  openGraph: {
    title: 'Städfirma Sollentuna - Professionell hemstädning i Sollentuna | Smidigflytt',
    description: 'Trygg städtjänster och service i Sollentuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sollentuna/stadfirma',
  },
}

export default function SollentunaStädfirmaPage() {
  const cityData = {
    name: "Sollentuna",
    region: "Stockholm",
    description: "Sollentuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Sollentuna kommun.",
    localInfo: "I Sollentuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
    services: [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ],
    specialties: [
      "Miljövänliga städprodukter",
      "Försäkrad personal",
      "Kvalitetsgaranti på allt arbete",
      "Flexibla tider även kvällar och helger"
    ],
    areas: [
      "Sollentuna centrum",
      "Sollentuna kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
