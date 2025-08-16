import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Haninge Flyttfirma - Professionell flytthjälp i Haninge | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Haninge? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "haninge flyttfirma, flytthjälp haninge, flyttstädning haninge, flytt haninge",
    openGraph: {
      title: "Haninge Flyttfirma - Professionell flytthjälp i Haninge | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Haninge. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function HaningePage() {
  const cityData = {
    name: "Haninge",
    region: "Stockholm",
    description: "Haninge är en kommun söder om Stockholm med över 95 000 invånare, känd för sin närhet till skärgården och moderna bostadsområden. Vi erbjuder professionella flyttjänster och städservice i hela Haninge kommun.",
    localInfo: "I Haninge täcker vi alla områden från Handen och Brandbergen till Västerhaninge och Årsta. Vi har stor erfarenhet av flytt i både moderna miljonprogramsområden och äldre villakvarter.",
    services: [
      "Bohagsflytt privatflytt i hela Haninge kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Haninge",
      "Transport inom Stockholm och till skärgården",
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
      "Expertis på skärgårdsnära miljöer",
      "Specialiserade på miljonprogramsområden", 
      "Professionell hantering av moderna bostadsområden",
      "Erfarenhet av komplexa transportlösningar"
    ],
    areas: [
      "Handen", "Brandbergen", "Västerhaninge", "Årsta", 
      "Haninge centrum", "Vendelsö", "Rudalen", "Jordbro",
      "Tungelsta", "Ösmo", "Dalarö", "Muskö"
    ]
  }

  return <CityPage city={cityData} />
}
