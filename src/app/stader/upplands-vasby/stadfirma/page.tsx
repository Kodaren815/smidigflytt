import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Upplands Väsby - Professionell hemstädning i Upplands Väsby | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Upplands Väsby? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Upplands Väsby. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma upplands väsby, städtjänster, hemstäd, städning upplands väsby',
  openGraph: {
    title: 'Städfirma Upplands Väsby - Professionell hemstädning i Upplands Väsby | Smidigflytt',
    description: 'Trygg städtjänster och service i Upplands Väsby. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/upplands-vasby/stadfirma',
  },
}

export default function UpplandsVsbyStädfirmaPage() {
  const cityData = {
    name: "Upplands Väsby",
    region: "Stockholm",
    description: "Upplands Väsby är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Upplands Väsby kommun.",
    localInfo: "I Upplands Väsby täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Upplands Väsby centrum",
      "Upplands Väsby kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
