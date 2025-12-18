import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Huddinge - Professionell hemstädning i Huddinge | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Huddinge? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Huddinge. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma huddinge, städtjänster, hemstäd, städning huddinge',
  openGraph: {
    title: 'Städfirma Huddinge - Professionell hemstädning i Huddinge | Smidigflytt',
    description: 'Trygg städtjänster och service i Huddinge. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/huddinge/stadfirma',
  },
}

export default function HuddingeStädfirmaPage() {
  const cityData = {
    name: "Huddinge",
    region: "Stockholm",
    description: "Huddinge är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Huddinge kommun.",
    localInfo: "I Huddinge täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Huddinge centrum",
      "Huddinge kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
