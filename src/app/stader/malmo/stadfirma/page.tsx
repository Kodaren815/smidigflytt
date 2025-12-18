import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Malmö - Professionell hemstädning i Malmö | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Malmö? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Malmö. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma malmö, städtjänster, hemstäd, städning malmö',
  openGraph: {
    title: 'Städfirma Malmö - Professionell hemstädning i Malmö | Smidigflytt',
    description: 'Trygg städtjänster och service i Malmö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/malmo/stadfirma',
  },
}

export default function MalmStädfirmaPage() {
  const cityData = {
    name: "Malmö",
    region: "Skåne",
    description: "Malmö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Malmö kommun.",
    localInfo: "I Malmö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Malmö centrum",
      "Malmö kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
