import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Danderyd - Professionell hemstädning i Danderyd | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Danderyd? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Danderyd. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma danderyd, städtjänster, hemstäd, städning danderyd',
  openGraph: {
    title: 'Städfirma Danderyd - Professionell hemstädning i Danderyd | Smidigflytt',
    description: 'Trygg städtjänster och service i Danderyd. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/danderyd/stadfirma',
  },
}

export default function DanderydStädfirmaPage() {
  const cityData = {
    name: "Danderyd",
    region: "Stockholm",
    description: "Danderyd är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Danderyd kommun.",
    localInfo: "I Danderyd täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Danderyd centrum",
      "Danderyd kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
