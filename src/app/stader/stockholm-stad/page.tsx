import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Stockholm Flyttfirma - Professionell flytthjälp i Stockholm | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Stockholm? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "stockholm flyttfirma, flytthjälp stockholm, flyttstädning stockholm, flytt stockholm",
    openGraph: {
      title: "Stockholm Flyttfirma - Professionell flytthjälp i Stockholm | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Stockholm. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function StockholmPage() {
  const cityData = {
    name: "Stockholm",
    region: "Stockholm",
    description: "Stockholm är Sveriges huvudstad och största stad med över 980 000 invånare. Vi erbjuder professionella flyttjänster och städservice i hela Stockholm stad och alla stadsdelar.",
    localInfo: "I Stockholm täcker vi alla stadsdelar och öar från Gamla Stan till moderna områden som Hammarby Sjöstad. Vi har mångårig erfarenhet av flytt i tätbebyggd stadsmiljö och känner väl till Stockholms unika utmaningar som parkeringsrestriktioner och trappa tillgänglighet.",
    services: [
      "Bohagsflytt privatflytt i hela Stockholm stad",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Stockholm",
      "Transport mellan Stockholms öar",
      "Bärhjälp för tunga lyft i trappor",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag"
    ],
    specialties: [
      "Expertis på stadsmiljö och trappflytt",
      "Specialiserade på gamla stadskärnor", 
      "Professionell hantering av parkering",
      "Erfarenhet av alla Stockholms stadsdelar"
    ],
    areas: [
      "Gamla Stan", "Norrmalm", "Östermalm", "Södermalm", 
      "Vasastan", "Kungsholmen", "Djurgården", "Skeppsholmen",
      "Hammarby Sjöstad", "Liljeholmen", "Hornstull", "Söderort"
    ]
  }

  return <CityPage city={cityData} />
}
