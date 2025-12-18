import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Katrineholm - Professionell hemstädning i Katrineholm | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Katrineholm? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Katrineholm. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma katrineholm, städtjänster, hemstäd, städning katrineholm',
  openGraph: {
    title: 'Städfirma Katrineholm - Professionell hemstädning i Katrineholm | Smidigflytt',
    description: 'Trygg städtjänster och service i Katrineholm. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/katrineholm/stadfirma',
  },
}

export default function KatrineholmStädfirmaPage() {
  const cityData = {
    name: "Katrineholm",
    region: "Södermanland",
    description: "Katrineholm är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Katrineholm kommun.",
    localInfo: "I Katrineholm täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Katrineholm centrum",
      "Katrineholm kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
