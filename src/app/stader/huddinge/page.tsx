import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Huddinge Flyttfirma - Professionell flytthjälp i Huddinge | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Huddinge? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "huddinge flyttfirma, flytthjälp huddinge, flyttstädning huddinge, flytt huddinge",
    openGraph: {
      title: "Huddinge Flyttfirma - Professionell flytthjälp i Huddinge | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Huddinge. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function HuddingePage() {
  const cityData = {
    name: "Huddinge",
    region: "Stockholm",
    description: "Huddinge är en kommun söder om Stockholm med över 110 000 invånare, känd för Karolinska Institutet och moderna bostadsområden. Vi erbjuder professionella flyttjänster och städservice i hela Huddinge kommun.",
    localInfo: "I Huddinge täcker vi alla områden från Flemingsberg och Skogås till Segeltorp och Trångsund. Vi har stor erfarenhet av flytt runt universitetsområden och känner väl till kommunens varierade karaktär.",
    services: [
      "Bohagsflytt privatflytt i hela Huddinge kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Studentflytt och universitetsrelaterade flytt",
      "Utlandsflytt från Huddinge",
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
      "Expertis på universitetsområden",
      "Specialiserade på studentflytt", 
      "Professionell hantering av moderna bostadsområden",
      "Erfarenhet av sjukhus- och forskningsområden"
    ],
    areas: [
      "Flemingsberg", "Skogås", "Segeltorp", "Trångsund", 
      "Huddinge centrum", "Stuvsta", "Fullersta", "Snättringe",
      "Glömsta", "Vårby gård", "Länna", "Vistaberg"
    ]
  }

  return <CityPage city={cityData} />
}
