import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Hallefors - Professionell hemstädning i Hallefors | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Hallefors? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Hallefors. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma hallefors, städtjänster, hemstäd, städning hallefors',
  openGraph: {
    title: 'Städfirma Hallefors - Professionell hemstädning i Hallefors | Smidigflytt',
    description: 'Trygg städtjänster och service i Hallefors. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/hallefors/stadfirma',
  },
}

export default function HalleforsStädfirmaPage() {
  const cityData = {
    name: "Hallefors",
    region: "Örebro län",
    description: "Hallefors är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Hallefors kommun.",
    localInfo: "I Hallefors täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Hallefors centrum",
      "Hallefors kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
