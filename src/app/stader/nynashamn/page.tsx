import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Nynäshamn Flyttfirma - Professionell flytthjälp i Nynäshamn | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Nynäshamn? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "nynäshamn flyttfirma, flytthjälp nynäshamn, flyttstädning nynäshamn, flytt nynäshamn",
    openGraph: {
      title: "Nynäshamn Flyttfirma - Professionell flytthjälp i Nynäshamn | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Nynäshamn. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function NynashamnPage() {
  const cityData = {
    name: "Nynäshamn",
    region: "Stockholm",
    description: "Nynäshamn är en kommun söder om Stockholm med över 27 000 invånare, känd för sin hamn och närhet till skärgården. Vi erbjuder professionella flyttjänster och städservice i hela Nynäshamn kommun.",
    localInfo: "I Nynäshamn täcker vi alla områden från centrum och Ösmo till Sorunda och Nynäs slott. Vi har stor erfarenhet av flytt i hamnstäder och kustmiljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Nynäshamn kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Nynäshamn",
      "Transport till färjor och hamnar",
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
      "Expertis på hamnlogistik",
      "Specialiserade på kustmiljöer", 
      "Professionell hantering av färjtransporter",
      "Erfarenhet av internationella förbindelser"
    ],
    areas: [
      "Nynäshamn centrum", "Ösmo", "Sorunda", "Nynäs slott", 
      "Hamnen", "Segersäng", "Älby", "Berga",
      "Nynäshamn station", "Stora Vika", "Muskö", "Tystberga"
    ]
  }

  return <CityPage city={cityData} />
}
