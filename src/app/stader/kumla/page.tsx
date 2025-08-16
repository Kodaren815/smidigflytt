import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Kumla Flyttfirma - Professionell flytthjälp i Kumla | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Kumla? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "kumla flyttfirma, flytthjälp kumla, flyttstädning kumla, flytt kumla",
    openGraph: {
      title: "Kumla Flyttfirma - Professionell flytthjälp i Kumla | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Kumla. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function KumlaPage() {
  const cityData = {
    name: "Kumla",
    region: "Örebro län",
    description: "Kumla är en växande kommun i Örebro län med närhet till både Örebro och Hallsberg. Vi erbjuder professionella flyttjänster och städservice i hela Kumla kommun.",
    localInfo: "I Kumla täcker vi alla områden från centrala tätorten till omkringliggande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och drar nytta av stadens centrala läge i länet.",
    services: [
      "Bohagsflytt privatflytt i hela Kumla kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Kumla",
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
      "Centralt läge för snabba transporter",
      "Lokalkännedom i Örebro läns hjärta", 
      "Flexibla lösningar för växande kommun",
      "Närhet till större städer och järnväg"
    ],
    areas: [
      "Kumla centrum", "Hallsberg", "Kvarntorp", "Odensbacken", 
      "Sköllersta", "Vintrosa", "Hovsta", "Stora Mellösa",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
