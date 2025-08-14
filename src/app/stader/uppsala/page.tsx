import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

export default function UppsalaPage() {
  const cityData = {
    name: "Uppsala",
    region: "Uppsala län",
    description: "Uppsala är Sveriges fjärde största stad med över 230 000 invånare och hem till ett av världens äldsta universitet. Vi erbjuder professionella flyttjänster och städservice i hela Uppsala kommun.",
    localInfo: "I Uppsala täcker vi alla områden från historiska centrum till moderna studentbostäder och villaområden. Vi förstår studenternas och familjernas olika behov och anpassar våra tjänster därefter.",
    services: [
      "Studentflytt och familjeflytt",
      "Flyttstädning för studentbostäder och lägenheter", 
      "Korttidsmagasinering under sommaren",
      "Kontorsflytt för universitet och företag",
      "Packning och uppackning",
      "Specialiserade studenttjänster"
    ],
    specialties: [
      "Studentflytt-experter med flexibla lösningar",
      "Historiska byggnader och känslig hantering", 
      "Campus-nära service och kunskap",
      "Anpassning till akademiska terminer"
    ],
    areas: [
      "Centrum", "Fålhagen", "Luthagen", "Eriksberg", 
      "Gottsunda", "Vaksala", "Sunnersta", "Stenhagen",
      "Enköping", "Håbo", "Tierp", "Östhammar"
    ]
  }

  return (
    <>
      <SEO
        title="Flyttfirma Uppsala - Professionell flytthjälp i Uppsala | Smidigflytt"
        description="Letar du efter en pålitlig flyttfirma i Uppsala? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. Specialiserade på studentflytt och familjer."
        keywords="flyttfirma uppsala, flytthjälp uppsala, studentflytt uppsala, flytt uppsala"
      />
      <CityPage city={cityData} />
    </>
  )
}
