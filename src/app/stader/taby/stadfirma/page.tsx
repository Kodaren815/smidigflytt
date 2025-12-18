import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Täby - Professionell hemstädning i Täby | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Täby? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Täby. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma täby, städtjänster, hemstäd, städning täby',
  openGraph: {
    title: 'Städfirma Täby - Professionell hemstädning i Täby | Smidigflytt',
    description: 'Trygg städtjänster och service i Täby. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/taby/stadfirma',
  },
}

export default function TbyStädfirmaPage() {
  const cityData = {
    name: "Täby",
    region: "Stockholm",
    description: "Täby är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Täby kommun.",
    localInfo: "I Täby täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Täby centrum",
      "Täby kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
