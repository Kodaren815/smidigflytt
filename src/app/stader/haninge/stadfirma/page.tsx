import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Haninge - Professionell hemstädning i Haninge | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Haninge? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Haninge. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma haninge, städtjänster, hemstäd, städning haninge',
  openGraph: {
    title: 'Städfirma Haninge - Professionell hemstädning i Haninge | Smidigflytt',
    description: 'Trygg städtjänster och service i Haninge. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/haninge/stadfirma',
  },
}

export default function HaningeStädfirmaPage() {
  const cityData = {
    name: "Haninge",
    region: "Stockholm",
    description: "Haninge är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Haninge kommun.",
    localInfo: "I Haninge täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Haninge centrum",
      "Haninge kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
