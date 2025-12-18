import CityPage from '@/components/CityPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Städfirma Stockholm stad - Professionell hemstädning i Stockholm | Smidigflytt',
  description: 'Letar du efter en pålitlig städfirma i Stockholm stad? Smidigflytt erbjuder trygg städtjänster, hemstädning och kontorsstädning i hela Stockholm. RUT-avdrag och försäkring ingår.',
  keywords: 'städfirma stockholm stad, städtjänster stockholm, hemstädning stockholm, kontorsstädning stockholm',
  openGraph: {
    title: 'Städfirma Stockholm stad - Professionell hemstädning i Stockholm | Smidigflytt',
    description: 'Trygg städtjänster och service i Stockholm stad. RUT-avdrag och försäkring ingår.',
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: 'https://smidigflytt.se/stader/stockholm-stad/stadfirma',
  },
}

export default function StockholmStadStädfirmaPage() {
  const cityData = {
    name: "Stockholm stad",
    region: "Stockholm",
    description: "Stockholm stad är Sveriges huvudstad och landets största stad. Vi erbjuder professionella städtjänster i hela Stockholm stad med fokus på kvalitet och kundnöjdhet.",
    localInfo: "I Stockholm stad täcker vi alla stadsdelar från Gamla stan till Södermalm, från Norrmalm till Östermalm. Vi känner till stadens unika behov och levererar städtjänster av högsta kvalitet.",
    services: [
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Flyttstädning för lägenheter och kontor",
      "Byggstädning efter renovering",
      "Fönsterputsning",
      "Djuprengöring och sanering",
      "Trappstädning och gemensamma utrymmen",
      "Periodisk städning och underhåll"
    ],
    specialties: [
      "Expertis på stadsmiljö och lägenheter",
      "Miljövänliga städprodukter",
      "Försäkrad och utbildad personal",
      "Flexibla tider för upptagna stockholmare",
      "Specialiserade på kontorsstädning i city"
    ],
    areas: [
      "Gamla stan",
      "Norrmalm",
      "Södermalm", 
      "Östermalm",
      "Vasastan",
      "Kungsholmen",
      "Djurgården",
      "Skeppsholmen"
    ],
    serviceType: "stadfirma" as "flyttfirma" | "städfirma"
  };

  return <CityPage city={cityData} />
}
