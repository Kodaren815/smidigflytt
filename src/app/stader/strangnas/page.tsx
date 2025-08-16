import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Strängnäs Flyttfirma - Professionell flytthjälp i Strängnäs | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Strängnäs? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "strängnäs flyttfirma, flytthjälp strängnäs, flyttstädning strängnäs, flytt strängnäs",
    openGraph: {
      title: "Strängnäs Flyttfirma - Professionell flytthjälp i Strängnäs | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Strängnäs. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function StragnasPage() {
  const cityData = {
    name: "Strängnäs",
    region: "Södermanlands län",
    description: "Strängnäs är en historisk domkyrkostad vid Mälaren med vacker arkitektur och kulturarv. Vi erbjuder professionella flyttjänster och städservice i hela Strängnäs kommun.",
    localInfo: "I Strängnäs täcker vi alla områden från den medeltida domkyrkan till moderna Mälarområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens kulturhistoriska värden.",
    services: [
      "Bohagsflytt privatflytt i hela Strängnäs kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Strängnäs",
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
      "Specialister på kulturhistoriska byggnader",
      "Lokalkännedom vid Mälaren", 
      "Varsam hantering i domkyrkostad",
      "Expertis på äldre arkitektur"
    ],
    areas: [
      "Strängnäs centrum", "Domkyrkan", "Södermalm", "Rogsta", 
      "Mariefred", "Läggesta", "Stallarholmen", "Åkers styckebruk",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
