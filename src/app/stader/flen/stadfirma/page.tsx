import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Flen - Professionell hemstädning i Flen | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Flen? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Flen. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma flen, städtjänster, hemstäd, städning flen',
  openGraph: {
    title: 'Städfirma Flen - Professionell hemstädning i Flen | Smidigflytt',
    description: 'Trygg städtjänster och service i Flen. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/flen/stadfirma',
  },
}

export default function FlenStädfirmaPage() {
  const cityData = {
    name: "Flen",
    region: "Södermanland",
    description: "Flen är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Flen kommun.",
    localInfo: "I Flen täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Flen centrum",
      "Flen kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
