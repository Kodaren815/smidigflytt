import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Ekerö Flyttfirma - Professionell flytthjälp på Ekerö | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma på Ekerö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "ekerö flyttfirma, flytthjälp ekerö, flyttstädning ekerö, flytt ekerö",
    openGraph: {
      title: "Ekerö Flyttfirma - Professionell flytthjälp på Ekerö | Smidigflytt",
      description: "Trygg flytthjälp och städservice på Ekerö. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function EkeroPage() {
  const cityData = {
    name: "Ekerö",
    region: "Stockholm",
    description: "Ekerö är en ö-kommun väster om Stockholm med cirka 28 000 invånare, känd för Drottningholms slott och vacker skärgårdsmiljö. Vi erbjuder professionella flyttjänster och städservice i hela Ekerö kommun.",
    localInfo: "I Ekerö täcker vi alla områden från Ekerö centrum och Stenhamra till Drottningholm och Färentuna. Vi har stor erfarenhet av flytt på öar och känner väl till de logistiska utmaningar som kan uppstå.",
    services: [
      "Bohagsflytt privatflytt i hela Ekerö kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Ekerö",
      "Transport till och från öar",
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
      "Expertis på ö-logistik",
      "Specialiserade på skärgårdsmiljöer", 
      "Professionell hantering av historiska miljöer",
      "Erfarenhet av kulturmiljöer och slottsmiljöer"
    ],
    areas: [
      "Ekerö centrum", "Stenhamra", "Drottningholm", "Färentuna", 
      "Munsö", "Adelsö", "Lovö", "Kärsön",
      "Tappström", "Skå", "Mälaröarna", "Björkö"
    ]
  }

  return <CityPage city={cityData} />
}
