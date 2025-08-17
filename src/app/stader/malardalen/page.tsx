import CityPage from '@/components/CityPage'

interface Props {
  searchParams: Promise<{
    type?: 'flyttfirma' | 'stadfirma'
  }>
}

export async function generateMetadata({ searchParams }: Props) {
  
  const resolvedSearchParams = await searchParams
  const serviceType = resolvedSearchParams.type === 'stadfirma' ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = resolvedSearchParams.type === 'stadfirma' ? 'städtjänster' : 'flytthjälp'
  
  return {
    title: `${serviceType} Mälardalen - Professionell ${serviceDescription} i Mälardalen | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Mälardalen? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Mälardalen. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} mälardalen, ${serviceDescription} mälardalen, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} mälardalen, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} mälardalen`,
    openGraph: {
      title: `${serviceType} Mälardalen - Professionell ${serviceDescription} i Mälardalen | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Mälardalen. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function MlardalenPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Mälardalen",
    region: "Mälardalsregionen",
    description: isStadfirma
      ? "Mälardalen är Sveriges mest centrala region med dess unika kombination av städer, industriområden och natursköna miljöer. Som vår hemmaregion känner vi varje krok och vrå."
      : "Mälardalen är Sveriges mest centrala region med dess unika kombination av städer, industriområden och natursköna miljöer. Som vår hemmaregion känner vi varje krok och vrå.",
    localInfo: isStadfirma
      ? "I Mälardalen är vi experter på både de större städerna som Stockholm, Västerås och Uppsala, samt alla mindre orter däremellan. Vår lokala kunskap ger oss en unik fördel när det gäller att planera effektiva och smidiga städningar i hela regionen."
      : "I Mälardalen är vi experter på både de större städerna som Stockholm, Västerås och Uppsala, samt alla mindre orter däremellan. Vår lokala kunskap ger oss en unik fördel när det gäller att planera effektiva och smidiga flyttar i hela regionen.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

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
    specialties: isStadfirma ? [
      "Hemmaplansfördel med djup regional kunskap",
      "Expertis på både städer och landsbygd", 
      "Lokala kontakter och nätverk",
      "Miljövänliga städmetoder"
    ] : [

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
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}