import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Danderyd Flyttfirma - Professionell flytthjälp i Danderyd | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Danderyd? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "danderyd flyttfirma, flytthjälp danderyd, flyttstädning danderyd, flytt danderyd",
    openGraph: {
      title: "Danderyd Flyttfirma - Professionell flytthjälp i Danderyd | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Danderyd. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function DanderydsPage() {
  const cityData = {
    name: "Danderyd",
    region: "Stockholm",
    description: "Danderyd är en välmående kommun norr om Stockholm med nästan 34 000 invånare, känd för sina villaområden och närhet till naturen. Vi erbjuder professionella flyttjänster och städservice i hela Danderyds kommun.",
    localInfo: "I Danderyd täcker vi alla områden från Stocksund till Djursholm och Enebyberg. Vi har mångårig erfarenhet av flytt i villaområden och känner väl till kommunens karaktär med stora fastigheter och kräsna kunder.",
    services: [
      "Bohagsflytt privatflytt i hela Danderyds kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Danderyd",
      "Transport av värdefulla föremål",
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
      "Expertis på exklusiva villaområden",
      "Specialiserade på värdefullt gods", 
      "Diskret och professionell service",
      "Erfarenhet av stora fastigheter"
    ],
    areas: [
      "Djursholm", "Stocksund", "Enebyberg", "Danderyds kyrka", 
      "Rinkebyholm", "Mörby", "Täby", "Lidingö",
      "Österåker", "Sollentuna", "Stockholm", "Solna"
    ]
  }

  return <CityPage city={cityData} />
}
