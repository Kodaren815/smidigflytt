import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Hallstahammar - Professionell hemstädning i Hallstahammar | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Hallstahammar? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Hallstahammar. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma hallstahammar, städtjänster, hemstäd, städning hallstahammar',
  openGraph: {
    title: 'Städfirma Hallstahammar - Professionell hemstädning i Hallstahammar | Smidigflytt',
    description: 'Trygg städtjänster och service i Hallstahammar. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/hallstahammar/stadfirma',
  },
}

export default function HallstahammarStädfirmaPage() {
  const cityData = {
    name: "Hallstahammar",
    region: "Västmanland",
    description: "Hallstahammar är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Hallstahammar kommun.",
    localInfo: "I Hallstahammar täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Hallstahammar centrum",
      "Hallstahammar kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
