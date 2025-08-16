import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Sigtuna Flyttfirma - Professionell flytthjälp i Sigtuna | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Sigtuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "sigtuna flyttfirma, flytthjälp sigtuna, flyttstädning sigtuna, flytt sigtuna",
    openGraph: {
      title: "Sigtuna Flyttfirma - Professionell flytthjälp i Sigtuna | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Sigtuna. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SigtunaPage() {
  const cityData = {
    name: "Sigtuna",
    region: "Stockholm",
    description: "Sigtuna är en kommun nordväst om Stockholm med över 47 000 invånare, känd som Sveriges äldsta stad och för sin närhet till Arlanda. Vi erbjuder professionella flyttjänster och städservice i hela Sigtuna kommun.",
    localInfo: "I Sigtuna täcker vi alla områden från Sigtuna stad och Märsta till Rosersberg och Arlanda. Vi har stor erfarenhet av flytt runt flygplatsen och historiska miljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Sigtuna kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Sigtuna och Arlanda",
      "Transport till och från Arlanda flygplats",
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
      "Expertis på flygplatsnära logistik",
      "Specialiserade på historiska miljöer", 
      "Professionell hantering av internationella flytt",
      "Erfarenhet av Arlanda-transporter"
    ],
    areas: [
      "Sigtuna stad", "Märsta", "Rosersberg", "Arlanda", 
      "Steninge", "Odensala", "Skå", "Upplands-Bro",
      "Håbo-Tibble", "Venngarn", "Alsike", "Skokloster"
    ]
  }

  return <CityPage city={cityData} />
}
