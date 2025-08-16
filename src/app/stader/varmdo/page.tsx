import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Värmdö Flyttfirma - Professionell flytthjälp i Värmdö | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Värmdö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "värmdö flyttfirma, flytthjälp värmdö, flyttstädning värmdö, flytt värmdö",
    openGraph: {
      title: "Värmdö Flyttfirma - Professionell flytthjälp i Värmdö | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Värmdö. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function VarmdoPage() {
  const cityData = {
    name: "Värmdö",
    region: "Stockholm",
    description: "Värmdö är en skärgårdskommun öster om Stockholm med över 46 000 invånare, känd för sina många öar och vacker skärgårdsnatur. Vi erbjuder professionella flyttjänster och städservice i hela Värmdö kommun.",
    localInfo: "I Värmdö täcker vi hela kommunen från Gustavsberg till Sandhamn och alla öar däremellan. Vi har specialiserad erfarenhet av skärgårdstransporter och känner väl till kommunens unika utmaningar med färjor och båttransporter.",
    services: [
      "Bohagsflytt privatflytt i hela Värmdö kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Värmdö",
      "Transport med färja till öar",
      "Specialiserade båttransporter",
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
      "Expertis på skärgårdstransporter",
      "Specialiserade på färjeresor", 
      "Professionell hantering av båttransporter",
      "Erfarenhet av sommarstugemiljö"
    ],
    areas: [
      "Gustavsberg", "Djurö", "Runmarö", "Nämdö", 
      "Ornö", "Utö", "Sandhamn", "Grinda",
      "Vaxholm", "Möja", "Nacka", "Stockholm"
    ]
  }

  return <CityPage city={cityData} />
}
