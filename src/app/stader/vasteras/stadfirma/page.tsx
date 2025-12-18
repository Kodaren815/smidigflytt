import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Västerås - Professionell hemstädning i Västerås | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Västerås? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Västerås. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma västerås, städtjänster, hemstäd, städning västerås',
  openGraph: {
    title: 'Städfirma Västerås - Professionell hemstädning i Västerås | Smidigflytt',
    description: 'Trygg städtjänster och service i Västerås. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/vasteras/stadfirma',
  },
}

export default function VstersStädfirmaPage() {
  const cityData = {
    name: "Västerås",
    region: "Västmanland",
    description: "Västerås är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Västerås kommun.",
    localInfo: "I Västerås täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Västerås centrum",
      "Västerås kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
