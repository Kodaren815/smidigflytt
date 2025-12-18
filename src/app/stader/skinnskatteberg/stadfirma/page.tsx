import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Skinnskatteberg - Professionell hemstädning i Skinnskatteberg | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Skinnskatteberg? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Skinnskatteberg. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma skinnskatteberg, städtjänster, hemstäd, städning skinnskatteberg',
  openGraph: {
    title: 'Städfirma Skinnskatteberg - Professionell hemstädning i Skinnskatteberg | Smidigflytt',
    description: 'Trygg städtjänster och service i Skinnskatteberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/skinnskatteberg/stadfirma',
  },
}

export default function SkinnskattebergStädfirmaPage() {
  const cityData = {
    name: "Skinnskatteberg",
    region: "Västmanland",
    description: "Skinnskatteberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Skinnskatteberg kommun.",
    localInfo: "I Skinnskatteberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Skinnskatteberg centrum",
      "Skinnskatteberg kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
