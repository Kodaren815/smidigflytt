import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Hällefors Flyttfirma - Professionell flytthjälp i Hällefors | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Hällefors? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "hällefors flyttfirma, flytthjälp hällefors, flyttstädning hällefors, flytt hällefors",
    openGraph: {
      title: "Hällefors Flyttfirma - Professionell flytthjälp i Hällefors | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Hällefors. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function HalleforsPage() {
  const cityData = {
    name: "Hällefors",
    region: "Örebro län",
    description: "Hällefors är en skogskommun i Bergslagen med närhet till vildmark och naturupplevelser. Vi erbjuder professionella flyttjänster och städservice i hela Hällefors kommun.",
    localInfo: "I Hällefors täcker vi alla områden från tätorten till avlägsna skogsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har erfarenhet av både urban och glesbygdsmiljö.",
    services: [
      "Bohagsflytt privatflytt i hela Hällefors kommun",
      "Företagsflytt för skogs- och naturföretag",
      "Utlandsflytt från Hällefors",
      "Transport till avlägsna områden",
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
      "Expertis på glesbygdstransporter",
      "Lokalkännedom i Bergslagens skogar", 
      "Flexibla lösningar för avlägsna adresser",
      "Specialiserade på naturområden"
    ],
    areas: [
      "Hällefors centrum", "Grythyttan", "Laxå", "Filipstad", 
      "Kristinehamn", "Degerfors", "Lindesberg", "Örebro",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
