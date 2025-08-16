import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Solna Flyttfirma - Professionell flytthjälp i Solna | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Solna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "solna flyttfirma, flytthjälp solna, flyttstädning solna, flytt solna",
    openGraph: {
      title: "Solna Flyttfirma - Professionell flytthjälp i Solna | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Solna. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SolnaPage() {
  const cityData = {
    name: "Solna",
    region: "Stockholm",
    description: "Solna är en modern förort till Stockholm med över 80 000 invånare, känd för Mall of Scandinavia och Friends Arena. Vi erbjuder professionella flyttjänster och städservice i hela Solna stad.",
    localInfo: "I Solna täcker vi alla områden från Solna centrum till Hagalund och Råsunda. Vi har gedigen erfarenhet av flytt i både moderna lägenhetsområden och villakvarter, samt känner väl till områdets infrastruktur och parkeringsmöjligheter.",
    services: [
      "Bohagsflytt privatflytt i hela Solna stad",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Solna",
      "Transport till närliggande områden",
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
      "Expertis på moderna lägenhetsområden",
      "Specialiserade på närförorter till Stockholm", 
      "Professionell hantering av parkeringstillstånd",
      "Erfarenhet av både villa och lägenhet"
    ],
    areas: [
      "Solna centrum", "Hagalund", "Råsunda", "Ulriksdal", 
      "Bergshamra", "Huvudsta", "Järva", "Frösunda",
      "Solna Business Park", "Karolinska", "Haga", "Vasastan"
    ]
  }

  return <CityPage city={cityData} />
}
