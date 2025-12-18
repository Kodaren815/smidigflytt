import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Nora - Professionell hemstädning i Nora | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Nora? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Nora. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma nora, städtjänster, hemstäd, städning nora',
  openGraph: {
    title: 'Städfirma Nora - Professionell hemstädning i Nora | Smidigflytt',
    description: 'Trygg städtjänster och service i Nora. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nora/stadfirma',
  },
}

export default function NoraStädfirmaPage() {
  const cityData = {
    name: "Nora",
    region: "Örebro län",
    description: "Nora är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Nora kommun.",
    localInfo: "I Nora täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nora centrum",
      "Nora kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
