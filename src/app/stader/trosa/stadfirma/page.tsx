import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Trosa - Professionell hemstädning i Trosa | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Trosa? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Trosa. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma trosa, städtjänster, hemstäd, städning trosa',
  openGraph: {
    title: 'Städfirma Trosa - Professionell hemstädning i Trosa | Smidigflytt',
    description: 'Trygg städtjänster och service i Trosa. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/trosa/stadfirma',
  },
}

export default function TrosaStädfirmaPage() {
  const cityData = {
    name: "Trosa",
    region: "Södermanland",
    description: "Trosa är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Trosa kommun.",
    localInfo: "I Trosa täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Trosa centrum",
      "Trosa kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
