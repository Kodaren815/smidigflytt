import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Järfälla Flyttfirma - Professionell flytthjälp i Järfälla | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Järfälla? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "järfälla flyttfirma, flytthjälp järfälla, flyttstädning järfälla, flytt järfälla",
    openGraph: {
      title: "Järfälla Flyttfirma - Professionell flytthjälp i Järfälla | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Järfälla. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function JarfallaPage() {
  const cityData = {
    name: "Järfälla",
    region: "Stockholm",
    description: "Järfälla är en kommun nordväst om Stockholm med över 78 000 invånare, känd för sin närhet till Mälaren och snabba förbindelser till Stockholm. Vi erbjuder professionella flyttjänster och städservice i hela Järfälla kommun.",
    localInfo: "I Järfälla täcker vi alla områden från Jakobsberg och Kallhäll till Barkarby och Viksjö. Vi har stor erfarenhet av flytt i både äldre villaområden och moderna bostadsprojekt.",
    services: [
      "Bohagsflytt privatflytt i hela Järfälla kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Järfälla",
      "Transport inom Stockholm och till Mälaren",
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
      "Expertis på Mälarnära områden",
      "Specialiserade på pendlarkommuner", 
      "Professionell hantering av moderna bostadsprojekt",
      "Erfarenhet av villaområden och radhus"
    ],
    areas: [
      "Jakobsberg", "Kallhäll", "Barkarby", "Viksjö", 
      "Järfälla centrum", "Skälby", "Vällingby", "Tensta",
      "Barkarbystaden", "Jakobsbergs centrum", "Hässelby", "Rinkeby"
    ]
  }

  return <CityPage city={cityData} />
}
