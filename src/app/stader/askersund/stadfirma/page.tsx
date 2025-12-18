import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Askersund - Professionell hemstädning i Askersund | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Askersund? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Askersund. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma askersund, städtjänster, hemstäd, städning askersund',
  openGraph: {
    title: 'Städfirma Askersund - Professionell hemstädning i Askersund | Smidigflytt',
    description: 'Trygg städtjänster och service i Askersund. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/askersund/stadfirma',
  },
}

export default function AskersundStädfirmaPage() {
  const cityData = {
    name: "Askersund",
    region: "Örebro län",
    description: "Askersund är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Askersund kommun.",
    localInfo: "I Askersund täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Askersund centrum",
      "Askersund kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
