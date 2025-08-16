import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Nyköping Flyttfirma - Professionell flytthjälp i Nyköping | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Nyköping? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "nyköping flyttfirma, flytthjälp nyköping, flyttstädning nyköping, flytt nyköping",
    openGraph: {
      title: "Nyköping Flyttfirma - Professionell flytthjälp i Nyköping | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Nyköping. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function NykopingPage() {
  const cityData = {
    name: "Nyköping",
    region: "Södermanlands län",
    description: "Nyköping är en historisk stad vid Östersjökusten med charmig atmosfär och närhet till både Stockholm och Skavsta flygplats. Vi erbjuder professionella flyttjänster och städservice i hela Nyköping kommun.",
    localInfo: "I Nyköping täcker vi alla områden från den medeltida stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både kust- och inlandsmiljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Nyköping kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Nyköping",
      "Flygplatstransporter till/från Skavsta",
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
      "Expertis på flygplatstransporter",
      "Lokalkännedom i kustnära miljöer", 
      "Flexibla lösningar för semester- och fritidshus",
      "Snabba transporter till Stockholm"
    ],
    areas: [
      "Nyköping centrum", "Högbrunn", "Brandkärr", "Arnö", 
      "Stigtomta", "Jönåker", "Tystberga", "Lästringe",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
