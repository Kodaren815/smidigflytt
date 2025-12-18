import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Lidingö - Professionell hemstädning i Lidingö | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Lidingö? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Lidingö. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma lidingö, städtjänster, hemstäd, städning lidingö',
  openGraph: {
    title: 'Städfirma Lidingö - Professionell hemstädning i Lidingö | Smidigflytt',
    description: 'Trygg städtjänster och service i Lidingö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/lidingo/stadfirma',
  },
}

export default function LidingStädfirmaPage() {
  const cityData = {
    name: "Lidingö",
    region: "Stockholm",
    description: "Lidingö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Lidingö kommun.",
    localInfo: "I Lidingö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Lidingö centrum",
      "Lidingö kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
