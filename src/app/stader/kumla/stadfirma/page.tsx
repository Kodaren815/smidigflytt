import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Kumla - Professionell hemstädning i Kumla | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Kumla? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Kumla. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma kumla, städtjänster, hemstäd, städning kumla',
  openGraph: {
    title: 'Städfirma Kumla - Professionell hemstädning i Kumla | Smidigflytt',
    description: 'Trygg städtjänster och service i Kumla. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/kumla/stadfirma',
  },
}

export default function KumlaStädfirmaPage() {
  const cityData = {
    name: "Kumla",
    region: "Örebro län",
    description: "Kumla är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Kumla kommun.",
    localInfo: "I Kumla täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Kumla centrum",
      "Kumla kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
