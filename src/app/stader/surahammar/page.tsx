import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Surahammar - Professionell flytthjälp i Surahammar | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Surahammar? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Surahammar. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma surahammar, flytthjälp surahammar, flyttstädning surahammar, flytt surahammar",
    openGraph: {
      title: "Flyttfirma Surahammar - Professionell flytthjälp i Surahammar | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Surahammar. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SurahammarPage() {
  const cityData = {
    name: "Surahammar",
    region: "Västmanlands län",
    description: "Surahammar är en charmig tätort i Västmanland med närhet till naturen och goda kommunikationer. Vi erbjuder professionella flyttjänster och städservice i hela Surahammar kommun.",
    localInfo: "I Surahammar täcker vi alla områden från centrala tätorten till omkringliggande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och känner väl till de lokala förhållandena.",
    services: [
      "Bohagsflytt privatflytt i hela Surahammar kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Surahammar",
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
      "Personlig service i mindre tätorter",
      "Lokalkännedom i Mälardalens naturområden", 
      "Flexibla lösningar för lantliga miljöer",
      "Snabba transporter till större städer"
    ],
    areas: [
      "Surahammar centrum", "Virsbo", "Ramnäs", "Västanfors", 
      "Ängelsberg", "Bredsjö", "Millhög", "Österby",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
