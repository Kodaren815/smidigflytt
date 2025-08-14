import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

export default function GoteborgPage() {
  const cityData = {
    name: "Göteborg",
    region: "Västra Götalands län",
    description: "Göteborg är Sveriges andra största stad och Västkustens huvudstad med över 1 miljon invånare i storstadsområdet. Vi erbjuder professionella flyttjänster och städservice i hela Göteborgsregionen.",
    localInfo: "I Göteborg täcker vi alla stadsdelar från Centrum till Hisingen, från Majorna till Angered. Vi känner till stadens utmaningar som branta backar, begränsad parkering och komplicerade trafikförhållanden.",
    services: [
      "Flytthjälp i alla Göteborgs stadsdelar",
      "Flyttstädning för lägenhet och kontor", 
      "Magasinering i säkra lokaler",
      "Kontorsflytt i city och förorter",
      "Packning och uppackning",
      "Specialtransport över broar"
    ],
    specialties: [
      "Backspecialister för Göteborgs kuperade terräng",
      "Bro- och tunnelexperter (Älvsborgsbron, Göta älvbron)", 
      "Spårvägs- och kollektivtrafiknavigering",
      "Hamn- och industriområdeskunskap"
    ],
    areas: [
      "Centrum", "Majorna-Linné", "Hisingen", "Örgryte-Härlanda", 
      "Lundby", "Angered", "Askim-Frölunda-Högsbo", "Västra Göteborg",
      "Partille", "Mölndal", "Lerum", "Kungsbacka"
    ]
  }

  return (
    <>
      <SEO
        title="Flyttfirma Göteborg - Professionell flytthjälp i Göteborg | Smidigflytt"
        description="Letar du efter en pålitlig flyttfirma i Göteborg? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Göteborgsregionen. RUT-avdrag och försäkring ingår."
        keywords="flyttfirma göteborg, flytthjälp göteborg, flyttstädning göteborg, flytt göteborg"
      />
      <CityPage city={cityData} />
    </>
  )
}
