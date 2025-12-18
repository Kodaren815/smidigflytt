import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Tyresö - Professionell hemstädning i Tyresö | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Tyresö? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Tyresö. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma tyresö, städtjänster, hemstäd, städning tyresö',
  openGraph: {
    title: 'Städfirma Tyresö - Professionell hemstädning i Tyresö | Smidigflytt',
    description: 'Trygg städtjänster och service i Tyresö. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/tyreso/stadfirma',
  },
}

export default function TyresStädfirmaPage() {
  const cityData = {
    name: "Tyresö",
    region: "Stockholm",
    description: "Tyresö är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Tyresö kommun.",
    localInfo: "I Tyresö täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Tyresö centrum",
      "Tyresö kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
