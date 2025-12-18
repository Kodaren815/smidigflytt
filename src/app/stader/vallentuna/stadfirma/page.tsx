import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Vallentuna - Professionell hemstädning i Vallentuna | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Vallentuna? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Vallentuna. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma vallentuna, städtjänster, hemstäd, städning vallentuna',
  openGraph: {
    title: 'Städfirma Vallentuna - Professionell hemstädning i Vallentuna | Smidigflytt',
    description: 'Trygg städtjänster och service i Vallentuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/vallentuna/stadfirma',
  },
}

export default function VallentunaStädfirmaPage() {
  const cityData = {
    name: "Vallentuna",
    region: "Stockholm",
    description: "Vallentuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Vallentuna kommun.",
    localInfo: "I Vallentuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Vallentuna centrum",
      "Vallentuna kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
