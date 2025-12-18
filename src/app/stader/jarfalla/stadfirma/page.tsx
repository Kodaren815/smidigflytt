import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Järfälla - Professionell hemstädning i Järfälla | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Järfälla? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Järfälla. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma järfälla, städtjänster, hemstäd, städning järfälla',
  openGraph: {
    title: 'Städfirma Järfälla - Professionell hemstädning i Järfälla | Smidigflytt',
    description: 'Trygg städtjänster och service i Järfälla. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/jarfalla/stadfirma',
  },
}

export default function JrfllaStädfirmaPage() {
  const cityData = {
    name: "Järfälla",
    region: "Stockholm",
    description: "Järfälla är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Järfälla kommun.",
    localInfo: "I Järfälla täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Järfälla centrum",
      "Järfälla kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
