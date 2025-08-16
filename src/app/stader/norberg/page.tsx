import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Norberg - Professionell flytthjälp i Norberg | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Norberg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Norberg. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma norberg, flytthjälp norberg, flyttstädning norberg, flytt norberg",
    openGraph: {
      title: "Flyttfirma Norberg - Professionell flytthjälp i Norberg | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Norberg. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function NorbergPage() {
  const cityData = {
    name: "Norberg",
    region: "Västmanlands län",
    description: "Norberg är en historisk gruvstad med rikt kulturarv och vacker bergslandskap. Vi erbjuder professionella flyttjänster och städservice i hela Norberg kommun.",
    localInfo: "I Norberg täcker vi alla områden från den historiska stadskärnan till omgivande bergsbyar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens industrihistoriska arv.",
    services: [
      "Bohagsflytt privatflytt i hela Norberg kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Norberg",
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
      "Specialister på bergsområdenes utmaningar",
      "Lokalkännedom i gruv- och industrihistoriska områden", 
      "Flexibla lösningar för kuperad terräng",
      "Erfarna med kulturhistoriska byggnader"
    ],
    areas: [
      "Norberg centrum", "Kloten", "Kärrgruvan", "Tobo", 
      "Riddarhyttan", "Karaktären", "Rådansberg", "Järnskäl",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
