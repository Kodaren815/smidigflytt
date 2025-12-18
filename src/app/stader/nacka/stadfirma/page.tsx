import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Nacka - Professionell hemstädning i Nacka | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Nacka? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Nacka. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma nacka, städtjänster, hemstäd, städning nacka',
  openGraph: {
    title: 'Städfirma Nacka - Professionell hemstädning i Nacka | Smidigflytt',
    description: 'Trygg städtjänster och service i Nacka. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/nacka/stadfirma',
  },
}

export default function NackaStädfirmaPage() {
  const cityData = {
    name: "Nacka",
    region: "Stockholm",
    description: "Nacka är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Nacka kommun.",
    localInfo: "I Nacka täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Nacka centrum",
      "Nacka kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
