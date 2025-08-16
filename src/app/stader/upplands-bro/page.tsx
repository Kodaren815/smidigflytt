import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Upplands-Bro Flyttfirma - Professionell flytthjälp i Upplands-Bro | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Upplands-Bro? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "upplands-bro flyttfirma, flytthjälp upplands-bro, flyttstädning upplands-bro, flytt bro",
    openGraph: {
      title: "Upplands-Bro Flyttfirma - Professionell flytthjälp i Upplands-Bro | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Upplands-Bro. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function UpplandsbroPage() {
  const cityData = {
    name: "Upplands-Bro",
    region: "Stockholm",
    description: "Upplands-Bro är en kommun väster om Stockholm med över 28 000 invånare, känd för sina historiska miljöer och närhet till Mälaren. Vi erbjuder professionella flyttjänster och städservice i hela Upplands-Bro kommun.",
    localInfo: "I Upplands-Bro täcker vi alla områden från Kungsängen och Tibble till Brunna och Håbo-Tibble. Vi har stor erfarenhet av flytt i både historiska och moderna miljöer.",
    services: [
      "Bohagsflytt privatflytt i hela Upplands-Bro kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Upplands-Bro",
      "Transport inom Stockholm och till Mälardalen",
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
      "Expertis på historiska miljöer",
      "Specialiserade på Mälarnära områden", 
      "Professionell hantering av kulturmiljöer",
      "Erfarenhet av små kommuner"
    ],
    areas: [
      "Kungsängen", "Tibble", "Brunna", "Håbo-Tibble", 
      "Bro kyrka", "Bro industriområde", "Lejondal", "Tibblemalm",
      "Håbo", "Ekerö-Bro", "Övre Malma", "Utter"
    ]
  }

  return <CityPage city={cityData} />
}
