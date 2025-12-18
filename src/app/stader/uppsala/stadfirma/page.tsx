import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Uppsala - Professionell hemstädning i Uppsala | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Uppsala? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Uppsala. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma uppsala, städtjänster, hemstäd, städning uppsala',
  openGraph: {
    title: 'Städfirma Uppsala - Professionell hemstädning i Uppsala | Smidigflytt',
    description: 'Trygg städtjänster och service i Uppsala. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/uppsala/stadfirma',
  },
}

export default function UppsalaStädfirmaPage() {
  const cityData = {
    name: "Uppsala",
    region: "Uppsala",
    description: "Uppsala är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Uppsala kommun.",
    localInfo: "I Uppsala täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Uppsala centrum",
      "Uppsala kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
