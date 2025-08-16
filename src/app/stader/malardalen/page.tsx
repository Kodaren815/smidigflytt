import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Flyttfirma Mälardalen - Lokala Flyttjänster | Smidigflytt",
  description: "Professionell flyttfirma i Mälardalen. Vi erbjuder lokala flyttjänster anpassade efter regionens unika förutsättningar.",
  keywords: "flyttfirma mälardalen, flytt mälardalen, flytthjälp mälardalen"
}

export default function MalardalenPage() {
  const cityData = {
    name: "Mälardalen",
    region: "Mälardalsregionen", 
    description: "Mälardalen är Sveriges mest centrala region med dess unika kombination av städer, industriområden och natursköna miljöer. Som vår hemmaregion känner vi varje krok och vrå.",
    localInfo: "I Mälardalen är vi experter på både de större städerna som Stockholm, Västerås och Uppsala, samt alla mindre orter däremellan. Vår lokala kunskap ger oss en unik fördel när det gäller att planera effektiva och smidiga flyttar i hela regionen.",
    services: [
      "Bohagsflytt privatflytt inom hela Mälardalen",
      "Företagsflytt för regionens näringsliv",
      "Utlandsflytt från Mälardalen",
      "Bärhjälp anpassad efter lokala förhållanden",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för hem och företag",
      "Byggstädning efter renovering",
      "Fönsterputsning för alla typer av fastigheter"
    ],
    specialties: [
      "Hemmaplansfördel med djup regional kunskap",
      "Expertis på både städer och landsbygd",
      "Lokala kontakter och nätverk",
      "Anpassning till regionens trafikmönster"
    ],
    areas: [
      "Stockholm", "Västerås", "Uppsala", "Enköping", 
      "Strängnäs", "Mariefred", "Eskilstuna", "Köping",
      "Sala", "Sandviken", "Gävle", "Södertälje",
      "Nyköping", "Katrineholm", "Flen", "Torshälla"
    ]
  }

  return (
    <>
      <SEO
        title="Flyttfirma Mälardalen - Professionell flytthjälp i regionen | Smidigflytt"
        description="Letar du efter en pålitlig flyttfirma i Mälardalen? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Mälardalsregionen. Lokal expertis och RUT-avdrag."
        keywords="flyttfirma mälardalen, flytthjälp mälardalen, flyttstädning mälardalen, flytt mälardalen"
      />
      <CityPage city={cityData} />
    </>
  )
}
