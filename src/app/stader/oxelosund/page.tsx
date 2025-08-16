import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Oxelösund Flyttfirma - Professionell flytthjälp i Oxelösund | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Oxelösund? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "oxelösund flyttfirma, flytthjälp oxelösund, flyttstädning oxelösund, flytt oxelösund",
    openGraph: {
      title: "Oxelösund Flyttfirma - Professionell flytthjälp i Oxelösund | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Oxelösund. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function OxelosundPage() {
  const cityData = {
    name: "Oxelösund",
    region: "Södermanlands län",
    description: "Oxelösund är en hamnstad vid Östersjön känd för sitt stålverk och maritima atmosfär. Vi erbjuder professionella flyttjänster och städservice i hela Oxelösund kommun.",
    localInfo: "I Oxelösund täcker vi alla områden från hamnområdet till bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har erfarenhet av industriella miljöer och kustnära förhållanden.",
    services: [
      "Bohagsflytt privatflytt i hela Oxelösund kommun",
      "Företagsflytt för industri och hamn",
      "Utlandsflytt från Oxelösund",
      "Hamntransporter och logistik",
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
      "Expertis på hamn- och industrimiljöer",
      "Lokalkännedom vid Östersjökusten", 
      "Flexibla lösningar för skiftarbetare",
      "Maritim logistikkunskap"
    ],
    areas: [
      "Oxelösund centrum", "Hamnen", "Stålverket", "Tunaberg", 
      "Nävekvarn", "Sköldinge", "Tuna", "Stjärnholm",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
