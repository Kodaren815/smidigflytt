import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Örebro - Professionell hemstädning i Örebro | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Örebro? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Örebro. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma örebro, städtjänster, hemstäd, städning örebro',
  openGraph: {
    title: 'Städfirma Örebro - Professionell hemstädning i Örebro | Smidigflytt',
    description: 'Trygg städtjänster och service i Örebro. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/orebro/stadfirma',
  },
}

export default function rebroStädfirmaPage() {
  const cityData = {
    name: "Örebro",
    region: "Örebro län",
    description: "Örebro är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Örebro kommun.",
    localInfo: "I Örebro täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Örebro centrum",
      "Örebro kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
