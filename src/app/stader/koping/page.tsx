import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Köping - Professionell flytthjälp i Köping | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Köping? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Köping. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma köping, flytthjälp köping, flyttstädning köping, flytt köping",
    openGraph: {
      title: "Flyttfirma Köping - Professionell flytthjälp i Köping | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Köping. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function KopingPage() {
  const cityData = {
    name: "Köping",
    region: "Västmanlands län",
    description: "Köping är en charmig stad i Västmanland med rikt historiskt arv och vacker natur vid Mälaren. Vi erbjuder professionella flyttjänster och städservice i hela Köping kommun.",
    localInfo: "I Köping täcker vi alla områden från centrala staden till omgivande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och känner till de lokala förhållandena väl.",
    services: [
      "Bohagsflytt privatflytt i hela Köping kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Köping",
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
      "Expertis på småstadsflytt och personlig service",
      "Lokalkännedom i Köping och omgivning", 
      "Flexibla lösningar för villa- och lägenhetsområden",
      "Snabba transporter inom Mälardalen"
    ],
    areas: [
      "Köping centrum", "Kolbäck", "Munktorp", "Riddaryttan", 
      "Kolbäcks-Tibble", "Ramnäs", "Övre Sörby", "Orresta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
