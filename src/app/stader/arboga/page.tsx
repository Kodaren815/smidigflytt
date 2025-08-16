import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Arboga - Professionell flytthjälp i Arboga | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Arboga? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Arboga. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma arboga, flytthjälp arboga, flyttstädning arboga, flytt arboga",
    openGraph: {
      title: "Flyttfirma Arboga - Professionell flytthjälp i Arboga | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Arboga. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function ArbogaPage() {
  const cityData = {
    name: "Arboga",
    region: "Västmanlands län",
    description: "Arboga är en av Sveriges äldsta städer med medeltida charm och modern utveckling. Vi erbjuder professionella flyttjänster och städservice i hela Arboga kommun.",
    localInfo: "I Arboga täcker vi alla områden från den historiska stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens kulturhistoriska värden.",
    services: [
      "Bohagsflytt privatflytt i hela Arboga kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Arboga",
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
      "Specialister på medeltida byggnader och kulturmiljöer",
      "Varsam hantering i historiska kvarter", 
      "Lokalkännedom i Sveriges äldsta städer",
      "Flexibel service för kulturarvsbyggnader"
    ],
    areas: [
      "Arboga centrum", "Sankt Nikolaj", "Götlunda", "Målhammar", 
      "Valskog", "Arboga landsförsamling", "Möklinta", "Säby",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
