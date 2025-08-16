import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Österåker Flyttfirma - Professionell flytthjälp i Österåker | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Österåker? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "österåker flyttfirma, flytthjälp österåker, flyttstädning österåker, flytt österåker",
    openGraph: {
      title: "Österåker Flyttfirma - Professionell flytthjälp i Österåker | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Österåker. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function OsterakerPage() {
  const cityData = {
    name: "Österåker",
    region: "Stockholm",
    description: "Österåker är en kommun nordost om Stockholm med över 44 000 invånare, känd för sina vackra skärgårdsmiljöer och närhet till både stad och natur. Vi erbjuder professionella flyttjänster och städservice i hela Österåker kommun.",
    localInfo: "I Österåker täcker vi alla områden från Åkersberga och Margretelund till Ljusterö och Rödlöga. Vi har stor erfarenhet av flytt i skärgårdsmiljöer och känner väl till de logistiska utmaningarna.",
    services: [
      "Bohagsflytt privatflytt i hela Österåker kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Österåker",
      "Transport till skärgård och öar",
      "Båttransporter vid behov",
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
      "Specialiserade på ö-logistik", 
      "Professionell hantering av båttransporter",
      "Erfarenhet av komplexa skärgårdsförhållanden"
    ],
    areas: [
      "Åkersberga", "Margretelund", "Ljusterö", "Rödlöga", 
      "Täby kyrkby", "Östra Ryd", "Husby-Sjuhundra", "Rö",
      "Spillersboda", "Frötuna", "Björkö-Arholma", "Siarö"
    ]
  }

  return <CityPage city={cityData} />
}
