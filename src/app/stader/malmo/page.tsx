import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

export default function MalmoPage() {
  const cityData = {
    name: "Malmö",
    region: "Skåne län",
    description: "Malmö är Skånes största stad och Sveriges tredje största stad med över 350 000 invånare. Vi erbjuder professionella flyttjänster och städservice i hela Malmöregionen.",
    localInfo: "I Malmö täcker vi alla områden från Gamla Staden till Västra Hamnen, från Rosengård till Limhamn. Vi känner till stadens moderna stadsutveckling och särskilda logistiska förutsättningar.",
    services: [
      "Flytthjälp i alla Malmös stadsdelar",
      "Flyttstädning för lägenhet och kontor", 
      "Magasinering i säkra lokaler",
      "Kontorsflytt i city och förorter",
      "Packning och uppackning",
      "Internationella flytt via Öresundsbron"
    ],
    specialties: [
      "Öresundsbro-specialister för flytt till/från Danmark",
      "Moderna bostadsområden som Västra Hamnen", 
      "Effektiv navigering i Malmös city",
      "Skånes platta terräng-fördelar"
    ],
    areas: [
      "Centrum", "Gamla Staden", "Västra Hamnen", "Rosengård", 
      "Limhamn-Bunkeflo", "Husie", "Oxie", "Fosie",
      "Burlöv", "Staffanstorp", "Vellinge", "Svedala"
    ]
  }

  return (
    <>
      <SEO
        title="Flyttfirma Malmö - Professionell flytthjälp i Malmö | Smidigflytt"
        description="Letar du efter en pålitlig flyttfirma i Malmö? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Malmöregionen. RUT-avdrag och försäkring ingår."
        keywords="flyttfirma malmö, flytthjälp malmö, flyttstädning malmö, flytt malmö"
      />
      <CityPage city={cityData} />
    </>
  )
}
