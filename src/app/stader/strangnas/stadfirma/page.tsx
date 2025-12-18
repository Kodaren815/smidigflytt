import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Strängnäs - Professionell hemstädning i Strängnäs | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Strängnäs? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Strängnäs. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma strängnäs, städtjänster, hemstäd, städning strängnäs',
  openGraph: {
    title: 'Städfirma Strängnäs - Professionell hemstädning i Strängnäs | Smidigflytt',
    description: 'Trygg städtjänster och service i Strängnäs. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/strangnas/stadfirma',
  },
}

export default function StrngnsStädfirmaPage() {
  const cityData = {
    name: "Strängnäs",
    region: "Södermanland",
    description: "Strängnäs är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Strängnäs kommun.",
    localInfo: "I Strängnäs täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Strängnäs centrum",
      "Strängnäs kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
