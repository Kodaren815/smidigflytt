import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Fagersta - Professionell hemstädning i Fagersta | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Fagersta? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Fagersta. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma fagersta, städtjänster, hemstäd, städning fagersta',
  openGraph: {
    title: 'Städfirma Fagersta - Professionell hemstädning i Fagersta | Smidigflytt',
    description: 'Trygg städtjänster och service i Fagersta. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/fagersta/stadfirma',
  },
}

export default function FagerstaStädfirmaPage() {
  const cityData = {
    name: "Fagersta",
    region: "Västmanland",
    description: "Fagersta är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Fagersta kommun.",
    localInfo: "I Fagersta täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Fagersta centrum",
      "Fagersta kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
