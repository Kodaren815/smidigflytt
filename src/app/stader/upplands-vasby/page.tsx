import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Upplands Väsby Flyttfirma - Professionell flytthjälp i Upplands Väsby | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Upplands Väsby? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "upplands väsby flyttfirma, flytthjälp upplands väsby, flyttstädning upplands väsby, flytt väsby",
    openGraph: {
      title: "Upplands Väsby Flyttfirma - Professionell flytthjälp i Upplands Väsby | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Upplands Väsby. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function UpplandsVasbyPage() {
  const cityData = {
    name: "Upplands Väsby",
    region: "Stockholm",
    description: "Upplands Väsby är en kommun norr om Stockholm med över 46 000 invånare, känd för sin närhet till Arlanda och goda kommunikationer. Vi erbjuder professionella flyttjänster och städservice i hela Upplands Väsby kommun.",
    localInfo: "I Upplands Väsby täcker vi alla områden från centrum och Runby till Hammarby och Ed. Vi har stor erfarenhet av flytt i pendlarkommuner och känner väl till kommunens logistiska fördelar.",
    services: [
      "Bohagsflytt privatflytt i hela Upplands Väsby kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Upplands Väsby",
      "Transport till Arlanda och Stockholm",
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
      "Expertis på flygplatsnära områden",
      "Specialiserade på pendlarkommuner", 
      "Professionell hantering av internationella flytt",
      "Erfarenhet av snabba transportlösningar"
    ],
    areas: [
      "Upplands Väsby centrum", "Runby", "Hammarby", "Ed", 
      "Vilundaberg", "Fresta", "Lövsta", "Skogsäng",
      "Tibble", "Bollstanäs", "Skälby", "Granby"
    ]
  }

  return <CityPage city={cityData} />
}
