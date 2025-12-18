import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Karlskoga - Professionell hemstädning i Karlskoga | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Karlskoga? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Karlskoga. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma karlskoga, städtjänster, hemstäd, städning karlskoga',
  openGraph: {
    title: 'Städfirma Karlskoga - Professionell hemstädning i Karlskoga | Smidigflytt',
    description: 'Trygg städtjänster och service i Karlskoga. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/karlskoga/stadfirma',
  },
}

export default function KarlskogaStädfirmaPage() {
  const cityData = {
    name: "Karlskoga",
    region: "Örebro län",
    description: "Karlskoga är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Karlskoga kommun.",
    localInfo: "I Karlskoga täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Karlskoga centrum",
      "Karlskoga kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
