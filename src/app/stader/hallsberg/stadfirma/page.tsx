import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Hallsberg - Professionell hemstädning i Hallsberg | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Hallsberg? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Hallsberg. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma hallsberg, städtjänster, hemstäd, städning hallsberg',
  openGraph: {
    title: 'Städfirma Hallsberg - Professionell hemstädning i Hallsberg | Smidigflytt',
    description: 'Trygg städtjänster och service i Hallsberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/hallsberg/stadfirma',
  },
}

export default function HallsbergStädfirmaPage() {
  const cityData = {
    name: "Hallsberg",
    region: "Örebro län",
    description: "Hallsberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Hallsberg kommun.",
    localInfo: "I Hallsberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Hallsberg centrum",
      "Hallsberg kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
