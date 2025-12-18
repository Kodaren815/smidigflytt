import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Lindesberg - Professionell hemstädning i Lindesberg | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Lindesberg? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Lindesberg. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma lindesberg, städtjänster, hemstäd, städning lindesberg',
  openGraph: {
    title: 'Städfirma Lindesberg - Professionell hemstädning i Lindesberg | Smidigflytt',
    description: 'Trygg städtjänster och service i Lindesberg. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/lindesberg/stadfirma',
  },
}

export default function LindesbergStädfirmaPage() {
  const cityData = {
    name: "Lindesberg",
    region: "Örebro län",
    description: "Lindesberg är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Lindesberg kommun.",
    localInfo: "I Lindesberg täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Lindesberg centrum",
      "Lindesberg kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
