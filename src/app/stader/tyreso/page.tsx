import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Tyresö Flyttfirma - Professionell flytthjälp i Tyresö | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Tyresö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "tyresö flyttfirma, flytthjälp tyresö, flyttstädning tyresö, flytt tyresö",
    openGraph: {
      title: "Tyresö Flyttfirma - Professionell flytthjälp i Tyresö | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Tyresö. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function TyresoPage() {
  const cityData = {
    name: "Tyresö",
    region: "Stockholm",
    description: "Tyresö är en kommun sydost om Stockholm med över 48 000 invånare, känd för sina natursköna miljöer och närhet till både skärgård och stad. Vi erbjuder professionella flyttjänster och städservice i hela Tyresö kommun.",
    localInfo: "I Tyresö täcker vi alla områden från Tyresö centrum och Trollbäcken till Tyresö strand och Bollmora. Vi har stor erfarenhet av flytt i både moderna villaområden och naturmiljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Tyresö kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Tyresö",
      "Transport till skärgård och Stockholm",
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
      "Expertis på skärgårdsmiljöer",
      "Specialiserade på villaområden", 
      "Professionell hantering av naturnära miljöer",
      "Erfarenhet av större enfamiljshus"
    ],
    areas: [
      "Tyresö centrum", "Trollbäcken", "Tyresö strand", "Bollmora", 
      "Tyresö by", "Krusboda", "Kolartorp", "Tyresö slott",
      "Tyresö golf", "Alby", "Gudöbroland", "Österängen"
    ]
  }

  return <CityPage city={cityData} />
}
