import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Nykvarn Flyttfirma - Professionell flytthjälp i Nykvarn | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Nykvarn? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "nykvarn flyttfirma, flytthjälp nykvarn, flyttstädning nykvarn, flytt nykvarn",
    openGraph: {
      title: "Nykvarn Flyttfirma - Professionell flytthjälp i Nykvarn | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Nykvarn. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function NykvarnPage() {
  const cityData = {
    name: "Nykvarn",
    region: "Stockholm",
    description: "Nykvarn är en kommun väster om Stockholm med över 11 000 invånare, känd för sin landsbygdskaraktär och närhet till större städer. Vi erbjuder professionella flyttjänster och städservice i hela Nykvarn kommun.",
    localInfo: "I Nykvarn täcker vi alla områden från Nykvarn centrum och Läggesta till Taxinge och Pershagen. Vi har stor erfarenhet av flytt i mindre kommuner och lantliga miljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Nykvarn kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Nykvarn",
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
      "Expertis på små kommuner",
      "Specialiserade på lantliga miljöer", 
      "Professionell hantering av landsbygdsflytt",
      "Erfarenhet av större fastigheter"
    ],
    areas: [
      "Nykvarn centrum", "Läggesta", "Taxinge", "Pershagen", 
      "Nykvarn station", "Björkbacken", "Aspnäs", "Skillingaryd",
      "Sanda", "Nykvarn industriområde", "Läggesta kyrka", "Järna närområde"
    ]
  }

  return <CityPage city={cityData} />
}
