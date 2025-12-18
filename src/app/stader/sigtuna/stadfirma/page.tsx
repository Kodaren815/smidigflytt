import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Sigtuna - Professionell hemstädning i Sigtuna | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Sigtuna? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Sigtuna. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma sigtuna, städtjänster, hemstäd, städning sigtuna',
  openGraph: {
    title: 'Städfirma Sigtuna - Professionell hemstädning i Sigtuna | Smidigflytt',
    description: 'Trygg städtjänster och service i Sigtuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sigtuna/stadfirma',
  },
}

export default function SigtunaStädfirmaPage() {
  const cityData = {
    name: "Sigtuna",
    region: "Stockholm",
    description: "Sigtuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Sigtuna kommun.",
    localInfo: "I Sigtuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Sigtuna centrum",
      "Sigtuna kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
