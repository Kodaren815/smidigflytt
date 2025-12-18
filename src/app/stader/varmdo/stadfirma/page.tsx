import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Värmdö - Professionell hemstädning i Värmdö | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Värmdö? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Värmdö. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma värmdö, städtjänster, hemstäd, städning värmdö',
  openGraph: {
    title: 'Städfirma Värmdö - Professionell hemstädning i Värmdö | Smidigflytt',
    description: 'Trygg städtjänster och service i Värmdö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/varmdo/stadfirma',
  },
}

export default function VrmdStädfirmaPage() {
  const cityData = {
    name: "Värmdö",
    region: "Stockholm",
    description: "Värmdö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Värmdö kommun.",
    localInfo: "I Värmdö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Värmdö centrum",
      "Värmdö kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
