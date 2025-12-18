import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Österåker - Professionell hemstädning i Österåker | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Österåker? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Österåker. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma österåker, städtjänster, hemstäd, städning österåker',
  openGraph: {
    title: 'Städfirma Österåker - Professionell hemstädning i Österåker | Smidigflytt',
    description: 'Trygg städtjänster och service i Österåker. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/osteraker/stadfirma',
  },
}

export default function sterkerStädfirmaPage() {
  const cityData = {
    name: "Österåker",
    region: "Stockholm",
    description: "Österåker är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Österåker kommun.",
    localInfo: "I Österåker täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Österåker centrum",
      "Österåker kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
