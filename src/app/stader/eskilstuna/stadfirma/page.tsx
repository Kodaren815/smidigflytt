import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Eskilstuna - Professionell hemstädning i Eskilstuna | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Eskilstuna? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Eskilstuna. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma eskilstuna, städtjänster, hemstäd, städning eskilstuna',
  openGraph: {
    title: 'Städfirma Eskilstuna - Professionell hemstädning i Eskilstuna | Smidigflytt',
    description: 'Trygg städtjänster och service i Eskilstuna. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/eskilstuna/stadfirma',
  },
}

export default function EskilstunaStädfirmaPage() {
  const cityData = {
    name: "Eskilstuna",
    region: "Södermanland",
    description: "Eskilstuna är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Eskilstuna kommun.",
    localInfo: "I Eskilstuna täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Eskilstuna centrum",
      "Eskilstuna kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
