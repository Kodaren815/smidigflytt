import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Fagersta - Professionell flytthjälp i Fagersta | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Fagersta? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Fagersta. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma fagersta, flytthjälp fagersta, flyttstädning fagersta, flytt fagersta",
    openGraph: {
      title: "Flyttfirma Fagersta - Professionell flytthjälp i Fagersta | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Fagersta. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function FagerstaPage() {
  const cityData = {
    name: "Fagersta",
    region: "Västmanlands län",
    description: "Fagersta är en industristad med stolt järnbrukstradition och modern utveckling. Vi erbjuder professionella flyttjänster och städservice i hela Fagersta kommun.",
    localInfo: "I Fagersta täcker vi alla områden från industri- till bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och förstår de unika behoven i denna industrikommun.",
    services: [
      "Bohagsflytt privatflytt i hela Fagersta kommun",
      "Företagsflytt för industri- och lokalföretag",
      "Utlandsflytt från Fagersta",
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
      "Expertis på industriflytt och tung utrustning",
      "Lokalkännedom i Fagerstas industriområden", 
      "Flexibla tider för skiftarbetare",
      "Specialiserade transporter för järnbruksbygden"
    ],
    areas: [
      "Fagersta centrum", "Ängelsberg", "Västanfors", "Ramnäs", 
      "Virsbo", "Millhög", "Österby", "Södra Fagersta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
