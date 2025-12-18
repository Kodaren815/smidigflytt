import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Sala - Professionell hemstädning i Sala | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Sala? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Sala. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma sala, städtjänster, hemstäd, städning sala',
  openGraph: {
    title: 'Städfirma Sala - Professionell hemstädning i Sala | Smidigflytt',
    description: 'Trygg städtjänster och service i Sala. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/sala/stadfirma',
  },
}

export default function SalaStädfirmaPage() {
  const cityData = {
    name: "Sala",
    region: "Västmanland",
    description: "Sala är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Sala kommun.",
    localInfo: "I Sala täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Sala centrum",
      "Sala kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
