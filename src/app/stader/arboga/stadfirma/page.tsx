import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Arboga - Professionell hemstädning i Arboga | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Arboga? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Arboga. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma arboga, städtjänster, hemstäd, städning arboga',
  openGraph: {
    title: 'Städfirma Arboga - Professionell hemstädning i Arboga | Smidigflytt',
    description: 'Trygg städtjänster och service i Arboga. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/arboga/stadfirma',
  },
}

export default function ArbogaStädfirmaPage() {
  const cityData = {
    name: "Arboga",
    region: "Västmanland",
    description: "Arboga är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Arboga kommun.",
    localInfo: "I Arboga täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Arboga centrum",
      "Arboga kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
