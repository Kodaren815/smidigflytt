import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Täby Flyttfirma - Professionell flytthjälp i Täby | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Täby? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "täby flyttfirma, flytthjälp täby, flyttstädning täby, flytt täby",
    openGraph: {
      title: "Täby Flyttfirma - Professionell flytthjälp i Täby | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Täby. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function TabyPage() {
  const cityData = {
    name: "Täby",
    region: "Stockholm",
    description: "Täby är en välmående kommun norr om Stockholm med över 70 000 invånare, känd för Täby Centrum galleria och sina attraktiva villaområden. Vi erbjuder professionella flyttjänster och städservice i hela Täby kommun.",
    localInfo: "I Täby täcker vi hela kommunen från Täby centrum till Roslags-Näsby och Viggbyholm. Vi har omfattande erfarenhet av flytt i välmående villaområden och känner väl till kommunens höga standard och krav på kvalitet.",
    services: [
      "Bohagsflytt privatflytt i hela Täby kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Täby",
      "Transport av värdefulla föremål",
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
      "Expertis på attraktiva villaområden",
      "Specialiserade på högkvalitativ service", 
      "Diskret och professionell hantering",
      "Erfarenhet av galleriområden"
    ],
    areas: [
      "Täby centrum", "Roslags-Näsby", "Viggbyholm", "Gribbylund", 
      "Täby kyrkby", "Näsby Park", "Ensta", "Tibble",
      "Vallentuna", "Danderyd", "Sollentuna", "Stockholm"
    ]
  }

  return <CityPage city={cityData} />
}
