import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Ekerö - Professionell hemstädning i Ekerö | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Ekerö? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Ekerö. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma ekerö, städtjänster, hemstäd, städning ekerö',
  openGraph: {
    title: 'Städfirma Ekerö - Professionell hemstädning i Ekerö | Smidigflytt',
    description: 'Trygg städtjänster och service i Ekerö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/ekero/stadfirma',
  },
}

export default function EkerStädfirmaPage() {
  const cityData = {
    name: "Ekerö",
    region: "Stockholm",
    description: "Ekerö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Ekerö kommun.",
    localInfo: "I Ekerö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Ekerö centrum",
      "Ekerö kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
