import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Södertälje - Professionell hemstädning i Södertälje | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Södertälje? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Södertälje. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma södertälje, städtjänster, hemstäd, städning södertälje',
  openGraph: {
    title: 'Städfirma Södertälje - Professionell hemstädning i Södertälje | Smidigflytt',
    description: 'Trygg städtjänster och service i Södertälje. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sodertalje/stadfirma',
  },
}

export default function SdertljeStädfirmaPage() {
  const cityData = {
    name: "Södertälje",
    region: "Stockholm",
    description: "Södertälje är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Södertälje kommun.",
    localInfo: "I Södertälje täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Södertälje centrum",
      "Södertälje kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
