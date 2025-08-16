import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Nora Flyttfirma - Professionell flytthjälp i Nora | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Nora? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "nora flyttfirma, flytthjälp nora, flyttstädning nora, flytt nora",
    openGraph: {
      title: "Nora Flyttfirma - Professionell flytthjälp i Nora | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Nora. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function NoraPage() {
  const cityData = {
    name: "Nora",
    region: "Örebro län",
    description: "Nora är en välbevarad trästad med charmig småstadskänsla och rikt kulturarv. Vi erbjuder professionella flyttjänster och städservice i hela Nora kommun.",
    localInfo: "I Nora täcker vi alla områden från den bevarade trästadsmiljön till omgivande naturområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens kulturhistoriska värden.",
    services: [
      "Bohagsflytt privatflytt i hela Nora kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Nora",
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
      "Specialister på träbyggnader och kulturmiljöer",
      "Lokalkännedom i historiska småstäder", 
      "Varsam hantering av äldre arkitektur",
      "Personlig service i välbevarad miljö"
    ],
    areas: [
      "Nora centrum", "Gamla staden", "Järle", "Vikers", 
      "Gyttorp", "Hidinge", "Lindesberg", "Örebro",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
