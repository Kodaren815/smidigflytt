import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

export default function StockholmPage() {
  const cityData = {
    name: "Stockholm",
    region: "Stockholms län",
    description: "Stockholm är Sveriges huvudstad och största stad med över 2 miljoner invånare i storstadsområdet. Vi erbjuder professionella flyttjänster och städservice i hela Stockholmsregionen.",
    localInfo: "I Stockholm täcker vi alla stadsdel från Södermalm till Östermalm, från Gamla Stan till de moderna förorterna. Vi känner till stadens utmaningar som smala gränder, höga byggnader och begränsad parkering.",
    services: [
      "Bohagsflytt privatflytt i alla Stockholms stadsdel",
      "Företagsflytt för kontor och verksamheter",
      "Utlandsflytt från Stockholm",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för lägenhet och kontor", 
      "Byggstädning efter renovering",
      "Fönsterputsning för hem och företag"
    ],
    specialties: [
      "Experter på trånge gränder i Gamla Stan",
      "Höghusspecialister för moderna områden", 
      "Parkerings- och tillståndslösningar",
      "Snabba flytt inom innerstaden"
    ],
    areas: [
      "Södermalm", "Östermalm", "Norrmalm", "Gamla Stan", 
      "Vasastan", "Kungsholmen", "Djurgården", "Bromma",
      "Vällingby", "Rinkeby", "Tensta", "Handen"
    ]
  }

  return (
    <>
      <SEO
        title="Flyttfirma Stockholm - Professionell flytthjälp i hela Stockholm | Smidigflytt"
        description="Letar du efter en pålitlig flyttfirma i Stockholm? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Stockholmsregionen. RUT-avdrag och försäkring ingår."
        keywords="flyttfirma stockholm, flytthjälp stockholm, flyttstädning stockholm, flytt stockholm"
      />
      <CityPage city={cityData} />
    </>
  )
}
