import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Mariefred - Professionell hemstädning i Mariefred | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Mariefred? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Mariefred. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma mariefred, städtjänster, hemstäd, städning mariefred',
  openGraph: {
    title: 'Städfirma Mariefred - Professionell hemstädning i Mariefred | Smidigflytt',
    description: 'Trygg städtjänster och service i Mariefred. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/mariefred/stadfirma',
  },
}

export default function MariefredStädfirmaPage() {
  const cityData = {
    name: "Mariefred",
    region: "Södermanland",
    description: "Mariefred är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Mariefred kommun.",
    localInfo: "I Mariefred täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Mariefred centrum",
      "Mariefred kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
