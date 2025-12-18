import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Upplands-Bro - Professionell hemstädning i Upplands-Bro | Smidigflytt',
  description: 'Letar du efter en pålitlig stadfirma i Upplands-Bro? Smidigflytt erbjuder trygg städtjänster, hemstäd och kontorsstäd i hela Upplands-Bro. RUT-avdrag och försäkring ingår.',
  keywords: 'stadfirma upplands-bro, städtjänster, hemstäd, städning upplands-bro',
  openGraph: {
    title: 'Städfirma Upplands-Bro - Professionell hemstädning i Upplands-Bro | Smidigflytt',
    description: 'Trygg städtjänster och service i Upplands-Bro. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/upplands-bro/stadfirma',
  },
}

export default function UpplandsBroStädfirmaPage() {
  const cityData = {
    name: "Upplands-Bro",
    region: "Stockholm",
    description: "Upplands-Bro är en kommun med vacker natur och trevlig atmosfär. Vi erbjuder professionella städtjänster i hela Upplands-Bro kommun.",
    localInfo: "I Upplands-Bro täcker vi alla områden och hjälper ofta kunder i hela kommunen. Vi uppskattar den lokala servicen och den personliga kontakten.",
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
      "Upplands-Bro centrum",
      "Upplands-Bro kommun",
      "Närliggande områden"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
