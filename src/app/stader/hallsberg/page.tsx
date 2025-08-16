import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Hallsberg Flyttfirma - Professionell flytthjälp i Hallsberg | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Hallsberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "hallsberg flyttfirma, flytthjälp hallsberg, flyttstädning hallsberg, flytt hallsberg",
    openGraph: {
      title: "Hallsberg Flyttfirma - Professionell flytthjälp i Hallsberg | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Hallsberg. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function HallsbergPage() {
  const cityData = {
    name: "Hallsberg",
    region: "Örebro län",
    description: "Hallsberg är Sveriges viktigaste järnvägsknut och en central logistikhub. Vi erbjuder professionella flyttjänster och städservice i hela Hallsberg kommun.",
    localInfo: "I Hallsberg täcker vi alla områden från järnvägsstationen till omkringliggande tätorter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och drar nytta av stadens excellenta logistikläge.",
    services: [
      "Bohagsflytt privatflytt i hela Hallsberg kommun",
      "Företagsflytt för logistik och transport",
      "Utlandsflytt från Hallsberg",
      "Järnvägstransporter och logistik",
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
      "Expertis på järnvägslogistik",
      "Sveriges bästa transportläge", 
      "Specialiserade på logistikföretag",
      "Snabba transporter i alla riktningar"
    ],
    areas: [
      "Hallsberg centrum", "Pålsboda", "Motala", "Skövde", 
      "Kumla", "Örebro", "Mjölby", "Katrineholm",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
