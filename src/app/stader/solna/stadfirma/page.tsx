import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Solna - Professionell hemstädning i Solna | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Solna? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Solna. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma solna, städtjänster, hemstäd, städning solna',
  openGraph: {
    title: 'Städfirma Solna - Professionell hemstädning i Solna | Smidigflytt',
    description: 'Trygg städtjänster och service i Solna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/solna/stadfirma',
  },
}

export default function SolnaStädfirmaPage() {
  const cityData = {
    name: "Solna",
    region: "Stockholm",
    description: "Solna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Solna kommun.",
    localInfo: "I Solna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Solna centrum",
      "Solna kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
