import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Lidingö Flyttfirma - Professionell flytthjälp i Lidingö | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Lidingö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "lidingö flyttfirma, flytthjälp lidingö, flyttstädning lidingö, flytt lidingö",
    openGraph: {
      title: "Lidingö Flyttfirma - Professionell flytthjälp i Lidingö | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Lidingö. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function LidingoPage() {
  const cityData = {
    name: "Lidingö",
    region: "Stockholm",
    description: "Lidingö är en ö-kommun öster om Stockholm med nästan 48 000 invånare, känd för sina natursköna områden och välmående villakvarter. Vi erbjuder professionella flyttjänster och städservice på hela Lidingö.",
    localInfo: "På Lidingö täcker vi hela ön från Hersby till Gåshaga och Bodal. Vi har gedigen erfarenhet av flytt på öar och känner väl till Lidingös unika geografi med broförbindelser och naturområden.",
    services: [
      "Bohagsflytt privatflytt på hela Lidingö",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Lidingö",
      "Transport via broförbindelser",
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
      "Expertis på ö-transporter",
      "Specialiserade på villaområden", 
      "Professionell hantering av bropassager",
      "Erfarenhet av naturskön miljö"
    ],
    areas: [
      "Lidingö centrum", "Hersby", "Gåshaga", "Bodal", 
      "Käppala", "Brevik", "Torsvik", "Sticklinge",
      "Millesgården", "Djurgården", "Stockholm", "Danderyd"
    ]
  }

  return <CityPage city={cityData} />
}
