import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Nykvarn - Professionell hemstädning i Nykvarn | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Nykvarn? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Nykvarn. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma nykvarn, städtjänster, hemstäd, städning nykvarn',
  openGraph: {
    title: 'Städfirma Nykvarn - Professionell hemstädning i Nykvarn | Smidigflytt',
    description: 'Trygg städtjänster och service i Nykvarn. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nykvarn/stadfirma',
  },
}

export default function NykvarnStädfirmaPage() {
  const cityData = {
    name: "Nykvarn",
    region: "Stockholm",
    description: "Nykvarn är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Nykvarn kommun.",
    localInfo: "I Nykvarn täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nykvarn centrum",
      "Nykvarn kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
