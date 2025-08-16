import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Salem Flyttfirma - Professionell flytthjälp i Salem | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Salem? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "salem flyttfirma, flytthjälp salem, flyttstädning salem, flytt salem",
    openGraph: {
      title: "Salem Flyttfirma - Professionell flytthjälp i Salem | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Salem. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SalemPage() {
  const cityData = {
    name: "Salem",
    region: "Stockholm",
    description: "Salem är en kommun söder om Stockholm med över 17 000 invånare, känd för sina villaområden och närhet till naturen. Vi erbjuder professionella flyttjänster och städservice i hela Salem kommun.",
    localInfo: "I Salem täcker vi alla områden från Salem centrum och Rönninge till Högantorp och Mölnbo. Vi har stor erfarenhet av flytt i villaområden och naturmiljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Salem kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Salem",
      "Transport inom Stockholm och omgivande områden",
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
      "Specialiserade på mindre kommuner", 
      "Professionell hantering av naturmiljöer",
      "Erfarenhet av lugna bostadsområden"
    ],
    areas: [
      "Salem centrum", "Rönninge", "Högantorp", "Mölnbo", 
      "Kvarnberga", "Stora Vika", "Rödsta", "Vagnhärad",
      "Salems kyrkby", "Rönninge station", "Salems golf", "Kvarnberga industriområde"
    ]
  }

  return <CityPage city={cityData} />
}
