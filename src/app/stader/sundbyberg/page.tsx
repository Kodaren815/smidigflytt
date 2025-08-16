import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Sundbyberg Flyttfirma - Professionell flytthjälp i Sundbyberg | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Sundbyberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "sundbyberg flyttfirma, flytthjälp sundbyberg, flyttstädning sundbyberg, flytt sundbyberg",
    openGraph: {
      title: "Sundbyberg Flyttfirma - Professionell flytthjälp i Sundbyberg | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Sundbyberg. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SundbybergPage() {
  const cityData = {
    name: "Sundbyberg",
    region: "Stockholm",
    description: "Sundbyberg är en tät förort till Stockholm med drygt 50 000 invånare, känd för sitt livliga centrum och närhet till Stockholm. Vi erbjuder professionella flyttjänster och städservice i hela Sundbyberg stad.",
    localInfo: "I Sundbyberg täcker vi hela staden från centrum till Ör och Rissne. Vi har stor erfarenhet av flytt i täta stadsområden och känner väl till Sundbybergs unika utmaningar med parkeringsrestriktioner och trappuppgångar.",
    services: [
      "Bohagsflytt privatflytt i hela Sundbyberg stad",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Sundbyberg",
      "Transport till närliggande områden",
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
      "Expertis på täta stadsområden",
      "Specialiserade på trappflytt", 
      "Professionell hantering av parkeringstillstånd",
      "Erfarenhet av centrala lägen"
    ],
    areas: [
      "Sundbyberg centrum", "Ör", "Rissne", "Hallonbergen", 
      "Duvbo", "Lilla Alby", "Stora Ursvik", "Bällsta",
      "Sundbybergs industriområde", "Solna", "Stockholm", "Järfälla"
    ]
  }

  return <CityPage city={cityData} />
}
