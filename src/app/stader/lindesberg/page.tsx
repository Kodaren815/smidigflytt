import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Lindesberg Flyttfirma - Professionell flytthjälp i Lindesberg | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Lindesberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "lindesberg flyttfirma, flytthjälp lindesberg, flyttstädning lindesberg, flytt lindesberg",
    openGraph: {
      title: "Lindesberg Flyttfirma - Professionell flytthjälp i Lindesberg | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Lindesberg. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function LindesbergPage() {
  const cityData = {
    name: "Lindesberg",
    region: "Örebro län",
    description: "Lindesberg är en historisk bergslingsstad med rikt kulturarv och vacker bebyggelse. Vi erbjuder professionella flyttjänster och städservice i hela Lindesberg kommun.",
    localInfo: "I Lindesberg täcker vi alla områden från den medeltida stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens historiska värden.",
    services: [
      "Bohagsflytt privatflytt i hela Lindesberg kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Lindesberg",
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
      "Specialister på bergslingstäder och kulturmiljöer",
      "Lokalkännedom i historiska stadskärnor", 
      "Varsam hantering av äldre byggnader",
      "Expertis på medeltida arkitektur"
    ],
    areas: [
      "Lindesberg centrum", "Frövi", "Gusselby", "Vedevåg", 
      "Ramsberg", "Ljusnarsberg", "Fellingsbro", "Kårsta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
