import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Hallstahammar - Professionell flytthjälp i Hallstahammar | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Hallstahammar? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Hallstahammar. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma hallstahammar, flytthjälp hallstahammar, flyttstädning hallstahammar, flytt hallstahammar",
    openGraph: {
      title: "Flyttfirma Hallstahammar - Professionell flytthjälp i Hallstahammar | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Hallstahammar. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function HallstahammarPage() {
  const cityData = {
    name: "Hallstahammar",
    region: "Västmanlands län",
    description: "Hallstahammar är en tätort i Västmanland med närhet till både Västerås och natursköna Mälaren. Vi erbjuder professionella flyttjänster och städservice i hela Hallstahammar kommun.",
    localInfo: "I Hallstahammar täcker vi alla områden från centrala tätorten till omgivande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om lokalområdet.",
    services: [
      "Bohagsflytt privatflytt i hela Hallstahammar kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Hallstahammar",
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
      "Närhet och snabba transporter till Västerås",
      "Lokalkännedom i Mälardalens tätorter", 
      "Flexibla lösningar för pendlarfamiljer",
      "Specialiserade tjänster för mindre tätorter"
    ],
    areas: [
      "Hallstahammar centrum", "Badelunda", "Strömsholm", "Kolbäck", 
      "Dingtuna", "Trobro", "Ekeby", "Segersjö",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
