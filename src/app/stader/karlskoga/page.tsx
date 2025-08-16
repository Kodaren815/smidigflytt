import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Karlskoga Flyttfirma - Professionell flytthjälp i Karlskoga | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Karlskoga? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "karlskoga flyttfirma, flytthjälp karlskoga, flyttstädning karlskoga, flytt karlskoga",
    openGraph: {
      title: "Karlskoga Flyttfirma - Professionell flytthjälp i Karlskoga | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Karlskoga. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function KarlskogaPage() {
  const cityData = {
    name: "Karlskoga",
    region: "Örebro län",
    description: "Karlskoga är känt för sitt industriarv och Alfred Nobels koppling till staden. Vi erbjuder professionella flyttjänster och städservice i hela Karlskoga kommun.",
    localInfo: "I Karlskoga täcker vi alla områden från industrikvarteren till bostadsområden vid sjöarna. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både industri- och naturmiljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Karlskoga kommun",
      "Företagsflytt för industri och kontor",
      "Utlandsflytt från Karlskoga",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag"
    ],
    specialties: [
      "Expertis på industriflytt och tung utrustning",
      "Lokalkännedom i Nobels hemstad", 
      "Flexibla lösningar vid sjömiljöer",
      "Specialiserade på skiftarbetares behov"
    ],
    areas: [
      "Karlskoga centrum", "Bofors", "Björkborn", "Degerfors", 
      "Kristinehamn", "Laxå", "Filipstad", "Storfors",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
