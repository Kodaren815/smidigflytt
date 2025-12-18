import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Gnesta - Professionell hemstädning i Gnesta | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Gnesta? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Gnesta. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma gnesta, städtjänster, hemstäd, städning gnesta',
  openGraph: {
    title: 'Städfirma Gnesta - Professionell hemstädning i Gnesta | Smidigflytt',
    description: 'Trygg städtjänster och service i Gnesta. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/gnesta/stadfirma',
  },
}

export default function GnestaStädfirmaPage() {
  const cityData = {
    name: "Gnesta",
    region: "Södermanland",
    description: "Gnesta är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Gnesta kommun.",
    localInfo: "I Gnesta täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Gnesta centrum",
      "Gnesta kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
