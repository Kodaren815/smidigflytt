import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Katrineholm Flyttfirma - Professionell flytthjälp i Katrineholm | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Katrineholm? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "katrineholm flyttfirma, flytthjälp katrineholm, flyttstädning katrineholm, flytt katrineholm",
    openGraph: {
      title: "Katrineholm Flyttfirma - Professionell flytthjälp i Katrineholm | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Katrineholm. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function KatrineholmPage() {
  const cityData = {
    name: "Katrineholm",
    region: "Södermanlands län",
    description: "Katrineholm är en järnvägsknut med rik historia och strategiskt läge i Sörmland. Vi erbjuder professionella flyttjänster och städservice i hela Katrineholm kommun.",
    localInfo: "I Katrineholm täcker vi alla områden från järnvägsstaden till omgivande landsbygd. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kunskap om logistik tack vare stadens järnvägshistoria.",
    services: [
      "Bohagsflytt privatflytt i hela Katrineholm kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Katrineholm",
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
      "Expertis på järnvägstransporter",
      "Lokalkännedom i Sörmlands inland", 
      "Flexibla lösningar för pendlarfamiljer",
      "Logistikkunnande från järnvägshistoria"
    ],
    areas: [
      "Katrineholm centrum", "Björkvik", "Valla", "Åker", 
      "Bie", "Julita", "Sköldinge", "Rönö",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
