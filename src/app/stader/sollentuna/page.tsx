import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Sollentuna Flyttfirma - Professionell flytthjälp i Sollentuna | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Sollentuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "sollentuna flyttfirma, flytthjälp sollentuna, flyttstädning sollentuna, flytt sollentuna",
    openGraph: {
      title: "Sollentuna Flyttfirma - Professionell flytthjälp i Sollentuna | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Sollentuna. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SollentunaPage() {
  const cityData = {
    name: "Sollentuna",
    region: "Stockholm",
    description: "Sollentuna är en kommun norr om Stockholm med över 71 000 invånare, känd för sina gröna miljöer och närhet till både city och natur. Vi erbjuder professionella flyttjänster och städservice i hela Sollentuna kommun.",
    localInfo: "I Sollentuna täcker vi alla områden från Sollentuna centrum och Rotebro till Tureberg och Viby. Vi har stor erfarenhet av flytt i både villaområden och lägenhetskvarter.",
    services: [
      "Bohagsflytt privatflytt i hela Sollentuna kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Sollentuna",
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
      "Expertis på gröna förorter",
      "Specialiserade på villaområden", 
      "Professionell hantering av naturmiljöer",
      "Erfarenhet av större familjehushåll"
    ],
    areas: [
      "Sollentuna centrum", "Rotebro", "Tureberg", "Viby", 
      "Helenelund", "Norrviken", "Edsberg", "Häggvik",
      "Norrviken", "Söderhöjden", "Vintervägen", "Edsberg slott"
    ]
  }

  return <CityPage city={cityData} />
}
