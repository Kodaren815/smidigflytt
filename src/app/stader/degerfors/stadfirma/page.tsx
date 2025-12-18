import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Degerfors - Professionell hemstädning i Degerfors | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Degerfors? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Degerfors. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma degerfors, städtjänster, hemstäd, städning degerfors',
  openGraph: {
    title: 'Städfirma Degerfors - Professionell hemstädning i Degerfors | Smidigflytt',
    description: 'Trygg städtjänster och service i Degerfors. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/degerfors/stadfirma',
  },
}

export default function DegerforsStädfirmaPage() {
  const cityData = {
    name: "Degerfors",
    region: "Örebro län",
    description: "Degerfors är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Degerfors kommun.",
    localInfo: "I Degerfors täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Degerfors centrum",
      "Degerfors kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
