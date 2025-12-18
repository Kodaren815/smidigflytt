import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Köping - Professionell hemstädning i Köping | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Köping? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Köping. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma köping, städtjänster, hemstäd, städning köping',
  openGraph: {
    title: 'Städfirma Köping - Professionell hemstädning i Köping | Smidigflytt',
    description: 'Trygg städtjänster och service i Köping. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/koping/stadfirma',
  },
}

export default function KpingStädfirmaPage() {
  const cityData = {
    name: "Köping",
    region: "Västmanland",
    description: "Köping är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Köping kommun.",
    localInfo: "I Köping täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Köping centrum",
      "Köping kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
