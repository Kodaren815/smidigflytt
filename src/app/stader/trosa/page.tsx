import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Trosa Flyttfirma - Professionell flytthjälp i Trosa | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Trosa? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "trosa flyttfirma, flytthjälp trosa, flyttstädning trosa, flytt trosa",
    openGraph: {
      title: "Trosa Flyttfirma - Professionell flytthjälp i Trosa | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Trosa. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function TrosaPage() {
  const cityData = {
    name: "Trosa",
    region: "Södermanlands län",
    description: "Trosa är en pittoresk kuststad känd som 'Sveriges minsta stad' med charmig träbebyggelse och maritim atmosfär. Vi erbjuder professionella flyttjänster och städservice i hela Trosa kommun.",
    localInfo: "I Trosa täcker vi alla områden från den idylliska trästaden till skärgårdsmiljöer. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har särskild erfarenhet av kustnära och kulturhistoriska miljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Trosa kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Trosa",
      "Sommarstugetransporter",
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
      "Expertis på träbyggnader och kulturmiljöer",
      "Lokalkännedom i kustnära småstad", 
      "Specialiserad på sommarstugemiljöer",
      "Varsam hantering av historiska byggnader"
    ],
    areas: [
      "Trosa centrum", "Gamla Trosa", "Vagnhärad", "Tullgarn", 
      "Hölö", "Uttersberg", "Vrena", "Mariefred",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
