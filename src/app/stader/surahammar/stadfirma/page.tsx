import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Surahammar - Professionell hemstädning i Surahammar | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Surahammar? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Surahammar. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma surahammar, städtjänster, hemstäd, städning surahammar',
  openGraph: {
    title: 'Städfirma Surahammar - Professionell hemstädning i Surahammar | Smidigflytt',
    description: 'Trygg städtjänster och service i Surahammar. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/surahammar/stadfirma',
  },
}

export default function SurahammarStädfirmaPage() {
  const cityData = {
    name: "Surahammar",
    region: "Västmanland",
    description: "Surahammar är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Surahammar kommun.",
    localInfo: "I Surahammar täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Surahammar centrum",
      "Surahammar kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
