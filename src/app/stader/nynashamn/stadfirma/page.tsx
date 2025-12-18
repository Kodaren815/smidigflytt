import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Nynäshamn - Professionell hemstädning i Nynäshamn | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Nynäshamn? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Nynäshamn. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma nynäshamn, städtjänster, hemstäd, städning nynäshamn',
  openGraph: {
    title: 'Städfirma Nynäshamn - Professionell hemstädning i Nynäshamn | Smidigflytt',
    description: 'Trygg städtjänster och service i Nynäshamn. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nynashamn/stadfirma',
  },
}

export default function NynshamnStädfirmaPage() {
  const cityData = {
    name: "Nynäshamn",
    region: "Stockholm",
    description: "Nynäshamn är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Nynäshamn kommun.",
    localInfo: "I Nynäshamn täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nynäshamn centrum",
      "Nynäshamn kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
