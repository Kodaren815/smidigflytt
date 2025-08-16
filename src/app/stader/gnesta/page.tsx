import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Gnesta Flyttfirma - Professionell flytthjälp i Gnesta | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Gnesta? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "gnesta flyttfirma, flytthjälp gnesta, flyttstädning gnesta, flytt gnesta",
    openGraph: {
      title: "Gnesta Flyttfirma - Professionell flytthjälp i Gnesta | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Gnesta. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function GnestaPage() {
  const cityData = {
    name: "Gnesta",
    region: "Södermanlands län",
    description: "Gnesta är en mindre kommun i Sörmland med vacker natur och lugn atmosfär. Vi erbjuder professionella flyttjänster och städservice i hela Gnesta kommun.",
    localInfo: "I Gnesta täcker vi alla områden från tätorten till de vackra naturområdena. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar den naturnära miljön och den personliga servicen.",
    services: [
      "Bohagsflytt privatflytt i hela Gnesta kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Gnesta",
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
      "Specialister på mindre kommuner",
      "Lokalkännedom i naturnära miljöer", 
      "Personlig service och flexibilitet",
      "Miljövänliga transportlösningar"
    ],
    areas: [
      "Gnesta centrum", "Björnlunda", "Laxne", "Frustuna", 
      "Winö", "Aspnäs", "Stjärnholm", "Sånga",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
