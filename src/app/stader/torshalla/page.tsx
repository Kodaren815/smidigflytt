import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Torshälla Flyttfirma - Professionell flytthjälp i Torshälla | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Torshälla? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "torshälla flyttfirma, flytthjälp torshälla, flyttstädning torshälla, flytt torshälla",
    openGraph: {
      title: "Torshälla Flyttfirma - Professionell flytthjälp i Torshälla | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Torshälla. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function TorshallaPage() {
  const cityData = {
    name: "Torshälla",
    region: "Södermanlands län",
    description: "Torshälla är en historisk handelsstad vid Eskilstunaån med charmig småstadskänsla. Vi erbjuder professionella flyttjänster och städservice i hela Torshälla och omgivning.",
    localInfo: "I Torshälla täcker vi alla områden från den gamla handelsstaden till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens historiska charm.",
    services: [
      "Bohagsflytt privatflytt i hela Torshälla",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Torshälla",
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
      "Specialister på småstadsmiljöer",
      "Lokalkännedom i historiska handelsstäder", 
      "Personlig service i mindre orter",
      "Flexibla lösningar för äldre byggnader"
    ],
    areas: [
      "Torshälla centrum", "Gamla staden", "Nyby", "Hyndevad", 
      "Sundbyholm", "Jäder", "Söderby", "Råcksta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
