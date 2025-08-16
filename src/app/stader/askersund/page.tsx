import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Askersund Flyttfirma - Professionell flytthjälp i Askersund | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Askersund? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "askersund flyttfirma, flytthjälp askersund, flyttstädning askersund, flytt askersund",
    openGraph: {
      title: "Askersund Flyttfirma - Professionell flytthjälp i Askersund | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Askersund. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function AskersundPage() {
  const cityData = {
    name: "Askersund",
    region: "Örebro län",
    description: "Askersund är en pittoresk badort vid Vätterns norra strand med vacker träbebyggelse och rik historia. Vi erbjuder professionella flyttjänster och städservice i hela Askersund kommun.",
    localInfo: "I Askersund täcker vi hela kommunen från kustnära områden vid Vättern till inlandet. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både samhällen och glesbygd.",
    services: [
      "Bohagsflytt privatflytt i hela Askersund kommun",
      "Företagsflytt för turism- och serviceföretag",
      "Utlandsflytt från Askersund",
      "Transport till fritidshus vid Vättern",
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
      "Specialiserade på kustområden vid Vättern",
      "Expertis på fritidshustransporter", 
      "Lokalkännedom i badortsmiljö",
      "Flexibla sommarsäsongslösningar"
    ],
    areas: [
      "Askersund centrum", "Zinkgruvan", "Laxå", "Motala", 
      "Örebro", "Lindesberg", "Karlskoga", "Degerfors",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
