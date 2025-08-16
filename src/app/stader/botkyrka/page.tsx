import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Botkyrka Flyttfirma - Professionell flytthjälp i Botkyrka | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Botkyrka? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "botkyrka flyttfirma, flytthjälp botkyrka, flyttstädning botkyrka, flytt botkyrka",
    openGraph: {
      title: "Botkyrka Flyttfirma - Professionell flytthjälp i Botkyrka | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Botkyrka. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function BotkyrkaPage() {
  const cityData = {
    name: "Botkyrka",
    region: "Stockholm",
    description: "Botkyrka är en kommun söder om Stockholm med över 90 000 invånare, känd för sin mångfald och närhet till både storstaden och naturen. Vi erbjuder professionella flyttjänster och städservice i hela Botkyrka kommun.",
    localInfo: "I Botkyrka täcker vi alla områden från Tumba och Fittja till Hallunda och Alby. Vi har stor erfarenhet av flytt i både moderna bostadsområden och traditionella villakvarter, samt känner väl till kommunens varierade karaktär.",
    services: [
      "Bohagsflytt privatflytt i hela Botkyrka kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Botkyrka",
      "Transport inom Stockholm och omgivande kommuner",
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
      "Mångfald och integration",
      "Specialiserade på flerfamiljshus", 
      "Professionell hantering av större bostadsområden",
      "Erfarenhet av komplexa logistiklösningar"
    ],
    areas: [
      "Tumba", "Fittja", "Hallunda", "Alby", 
      "Norsborg", "Tullinge", "Salem", "Rönninge",
      "Eriksberg", "Botkyrka centrum", "Grödinge", "Vårby"
    ]
  }

  return <CityPage city={cityData} />
}
