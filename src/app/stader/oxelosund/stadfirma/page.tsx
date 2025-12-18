import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Oxelösund - Professionell hemstädning i Oxelösund | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Oxelösund? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Oxelösund. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma oxelösund, städtjänster, hemstäd, städning oxelösund',
  openGraph: {
    title: 'Städfirma Oxelösund - Professionell hemstädning i Oxelösund | Smidigflytt',
    description: 'Trygg städtjänster och service i Oxelösund. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/oxelosund/stadfirma',
  },
}

export default function OxelsundStädfirmaPage() {
  const cityData = {
    name: "Oxelösund",
    region: "Södermanland",
    description: "Oxelösund är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Oxelösund kommun.",
    localInfo: "I Oxelösund täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Oxelösund centrum",
      "Oxelösund kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
