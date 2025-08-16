import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Vallentuna Flyttfirma - Professionell flytthjälp i Vallentuna | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Vallentuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "vallentuna flyttfirma, flytthjälp vallentuna, flyttstädning vallentuna, flytt vallentuna",
    openGraph: {
      title: "Vallentuna Flyttfirma - Professionell flytthjälp i Vallentuna | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Vallentuna. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function VallentunaPage() {
  const cityData = {
    name: "Vallentuna",
    region: "Stockholm",
    description: "Vallentuna är en kommun nordost om Stockholm med över 34 000 invånare, känd för sina gröna miljöer och villaområden. Vi erbjuder professionella flyttjänster och städservice i hela Vallentuna kommun.",
    localInfo: "I Vallentuna täcker vi alla områden från centrum och Lindholmen till Brottby och Kårsta. Vi har stor erfarenhet av flytt i villaområden och lantliga miljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Vallentuna kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Vallentuna",
      "Transport inom Stockholm och till landsbygden",
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
      "Expertis på villaområden",
      "Specialiserade på lantliga miljöer", 
      "Professionell hantering av större fastigheter",
      "Erfarenhet av gröna förorter"
    ],
    areas: [
      "Vallentuna centrum", "Lindholmen", "Brottby", "Kårsta", 
      "Rickeby", "Angarn", "Sågarbo", "Karby",
      "Välsta", "Haga", "Viksta", "Rydbo"
    ]
  }

  return <CityPage city={cityData} />
}
