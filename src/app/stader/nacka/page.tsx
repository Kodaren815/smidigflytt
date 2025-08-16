import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Nacka Flyttfirma - Professionell flytthjälp i Nacka | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Nacka? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "nacka flyttfirma, flytthjälp nacka, flyttstädning nacka, flytt nacka",
    openGraph: {
      title: "Nacka Flyttfirma - Professionell flytthjälp i Nacka | Smidigflytt",
    description: "Trygg flytthjälp och städservice i Nacka. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function NackaPage() {
  const cityData = {
    name: "Nacka",
    region: "Stockholm",
    description: "Nacka är en kommun sydost om Stockholm med över 100 000 invånare, känd för sin mix av moderna bostadsområden och vacker skärgårdsnatur. Vi erbjuder professionella flyttjänster och städservice i hela Nacka kommun.",
    localInfo: "I Nacka täcker vi alla områden från Sickla och Järla till Boo och Saltsjöbaden. Vi har stor erfarenhet av flytt i både moderna lägenhetsområden och traditionella villakvarter, samt känner väl till kommunens varierade karaktär.",
    services: [
      "Bohagsflytt privatflytt i hela Nacka kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Nacka",
      "Transport till skärgårdsområden",
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
      "Expertis på skärgårdsmiljöer",
      "Specialiserade på moderna bostadsområden", 
      "Professionell hantering av kuperad terräng",
      "Erfarenhet av båtransporter vid behov"
    ],
    areas: [
      "Nacka centrum", "Sickla", "Järla", "Boo", 
      "Saltsjöbaden", "Fisksätra", "Duvnäs", "Neglinge",
      "Älta", "Tungelsta", "Gustavsberg", "Värmdö"
    ]
  }

  return <CityPage city={cityData} />
}
