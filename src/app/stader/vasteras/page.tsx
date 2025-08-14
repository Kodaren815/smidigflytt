import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Västerås - Professionell flytthjälp i Västerås | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Västerås? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Västerås. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma västerås, flytthjälp västerås, flyttstädning västerås, flytt västerås",
    openGraph: {
      title: "Flyttfirma Västerås - Professionell flytthjälp i Västerås | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Västerås. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function VasterasPage() {
  const cityData = {
    name: "Västerås",
    region: "Västmanlands län",
    description: "Västerås är Västmanlands residensstad och en av Sveriges största städer med över 150 000 invånare. Vi erbjuder professionella flyttjänster och städservice i hela Västerås kommun.",
    localInfo: "I Västerås täcker vi alla områden från centrala staden till förorten som Hallstahammar och Surahammar. Vi känner till stadens bostadsområden och kan navigera effektivt genom både gamla och nya stadsdelar.",
    services: [
      "Bohagsflytt privatflytt i hela Västerås kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Västerås",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Fönsterputsning för hem och företag"
    ],
    specialties: [
      "Specialister på villa- och villaområden",
      "Effektiv hantering av långa transportvägar", 
      "Expertis på student- och familjeflytt",
      "Flexibla lösningar för Mälardalens behov"
    ],
    areas: [
      "Centrum", "Väster", "Bäckby", "Malmaberg", 
      "Viksäng", "Lundby", "Östhaga", "Tillberga",
      "Barkarby", "Skiljebo", "Irsta", "Hallstahammar"
    ]
  }

  return <CityPage city={cityData} />
}
