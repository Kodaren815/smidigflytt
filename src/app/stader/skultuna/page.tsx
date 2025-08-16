import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Skultuna - Professionell flytthjälp i Skultuna | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Skultuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Skultuna. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma skultuna, flytthjälp skultuna, flyttstädning skultuna, flytt skultuna",
    openGraph: {
      title: "Flyttfirma Skultuna - Professionell flytthjälp i Skultuna | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Skultuna. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SkultunaPage() {
  const cityData = {
    name: "Skultuna",
    region: "Västmanlands län",
    description: "Skultuna är känt för sin traditionella mässingsbruk och hantverkstradition. Vi erbjuder professionella flyttjänster och städservice i hela Skultuna med respekt för stadens kulturarv.",
    localInfo: "I Skultuna täcker vi alla områden från den historiska bruksmiljön till moderna bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens hantverkstraditioner.",
    services: [
      "Bohagsflytt privatflytt i hela Skultuna kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Skultuna",
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
      "Specialister på bruksmiljöer och hantverkstradition",
      "Varsam hantering av konsthantverk och antikviteter", 
      "Lokalkännedom i Sveriges mässingsbruksområden",
      "Respektfull service i kulturhistoriska miljöer"
    ],
    areas: [
      "Skultuna centrum", "Skultuna bruksområde", "Enviken", "Kärrbo", 
      "Tortuna", "Ängelsberg", "Virsbo", "Strömsholm",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
