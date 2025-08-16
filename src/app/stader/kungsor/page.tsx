import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Kungsör - Professionell flytthjälp i Kungsör | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Kungsör? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Kungsör. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma kungsör, flytthjälp kungsör, flyttstädning kungsör, flytt kungsör",
    openGraph: {
      title: "Flyttfirma Kungsör - Professionell flytthjälp i Kungsör | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Kungsör. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function KungsorPage() {
  const cityData = {
    name: "Kungsör",
    region: "Västmanlands län",
    description: "Kungsör är en pittoresk tätort vid Mälaren med vacker natur och lugn atmosfär. Vi erbjuder professionella flyttjänster och städservice i hela Kungsör kommun.",
    localInfo: "I Kungsör täcker vi alla områden från centrala tätorten till vackra Mälarområdena. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar den naturnära miljön.",
    services: [
      "Bohagsflytt privatflytt i hela Kungsör kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Kungsör",
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
      "Specialister på Mälaröernas unika förhållanden",
      "Lokalkännedom vid vatten och naturområden", 
      "Varsam transport i känsliga miljöer",
      "Flexibel service för sommarstugor och fritidshus"
    ],
    areas: [
      "Kungsör centrum", "Kungsör-Munktorp", "Valsta", "Segersäng", 
      "Aspnäs", "Ölsta", "Tibble", "Härad",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
