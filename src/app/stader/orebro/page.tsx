import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

export default function OrebroPage() {
  const cityData = {
    name: "Örebro",
    region: "Örebro län",
    description: "Örebro är Mellansveriges nav med över 155 000 invånare och strategiskt läge mellan Stockholm och Göteborg. Vi erbjuder professionella flyttjänster och städservice i hela Örebro kommun.",
    localInfo: "I Örebro täcker vi alla områden från centrala stan runt Svartån till moderna bostadsområden och villaförorter. Vi drar nytta av stadens utmärkta kommunikationer för effektiva transporter.",
    services: [
      "Flytthjälp i hela Örebro kommun",
      "Flyttstädning för lägenhet och villa", 
      "Magasinering i centrala lokaler",
      "Kontorsflytt för lokala företag",
      "Packning och uppackning",
      "Transporter till/från andra städer"
    ],
    specialties: [
      "Centralläge-fördelar för snabba transporter",
      "Varierande bostadstyper från lägenhet till villa", 
      "Effektiva kommunikationer (E18, E20)",
      "Flexibla lösningar för Mellansverige"
    ],
    areas: [
      "Centrum", "Norr", "Söder", "Väster", 
      "Vivalla", "Brickebacken", "Adolfsberg", "Karlslund",
      "Kumla", "Hallsberg", "Lindesberg", "Askersund"
    ]
  }

  return (
    <>
      <SEO
        title="Flyttfirma Örebro - Professionell flytthjälp i Örebro | Smidigflytt"
        description="Letar du efter en pålitlig flyttfirma i Örebro? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Örebro kommun. RUT-avdrag och försäkring ingår."
        keywords="flyttfirma örebro, flytthjälp örebro, flyttstädning örebro, flytt örebro"
      />
      <CityPage city={cityData} />
    </>
  )
}
