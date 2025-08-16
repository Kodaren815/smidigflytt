import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Degerfors Flyttfirma - Professionell flytthjälp i Degerfors | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Degerfors? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "degerfors flyttfirma, flytthjälp degerfors, flyttstädning degerfors, flytt degerfors",
    openGraph: {
      title: "Degerfors Flyttfirma - Professionell flytthjälp i Degerfors | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Degerfors. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function DegerforsPage() {
  const cityData = {
    name: "Degerfors",
    region: "Örebro län",
    description: "Degerfors är en industrikommun med stolt stålbruks- och ishockeytradition. Vi erbjuder professionella flyttjänster och städservice i hela Degerfors kommun.",
    localInfo: "I Degerfors täcker vi alla områden från industriområdena till bostadskvarteren. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har erfarenhet av industriella miljöer och småstadsatmosfär.",
    services: [
      "Bohagsflytt privatflytt i hela Degerfors kommun",
      "Företagsflytt för industri och kontor",
      "Utlandsflytt från Degerfors",
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
      "Expertis på industrimiljöer",
      "Lokalkännedom i Bergslagen", 
      "Flexibla tider för skiftarbetare",
      "Specialiserade på tung industri"
    ],
    areas: [
      "Degerfors centrum", "Stålverket", "Karlskoga", "Kristinehamn", 
      "Filipstad", "Laxå", "Örebro", "Lindesberg",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
