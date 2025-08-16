import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Södertälje Flyttfirma - Professionell flytthjälp i Södertälje | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Södertälje? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "södertälje flyttfirma, flytthjälp södertälje, flyttstädning södertälje, flytt södertälje",
    openGraph: {
      title: "Södertälje Flyttfirma - Professionell flytthjälp i Södertälje | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Södertälje. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SodertaljePage() {
  const cityData = {
    name: "Södertälje",
    region: "Stockholm",
    description: "Södertälje är en kommun sydväst om Stockholm med över 98 000 invånare, känd för sina industrier och närhet till Mälaren. Vi erbjuder professionella flyttjänster och städservice i hela Södertälje kommun.",
    localInfo: "I Södertälje täcker vi alla områden från centrum och Geneta till Hovsjö och Järna. Vi har stor erfarenhet av flytt i både industriområden och bostadskvarter.",
    services: [
      "Bohagsflytt privatflytt i hela Södertälje kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Industriflytt och specialtransporter",
      "Utlandsflytt från Södertälje",
      "Transport inom Stockholm och till Mälardalen",
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
      "Expertis på industriområden",
      "Specialiserade på större företagsflytt", 
      "Professionell hantering av tunga transporter",
      "Erfarenhet av komplexa logistiklösningar"
    ],
    areas: [
      "Södertälje centrum", "Geneta", "Hovsjö", "Järna", 
      "Ronna", "Fornhöjden", "Weda", "Skridskoåsen",
      "Mörkö", "Tveta", "Mälarviken", "Brunnsäng"
    ]
  }

  return <CityPage city={cityData} />
}
