import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

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
    title: `${serviceType} Malmö - Professionell ${serviceDescription} i Malmö | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Malmö? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Malmö. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} malmö, ${serviceDescription} malmö, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} malmö, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} malmö`,
    openGraph: {
      title: `${serviceType} Malmö - Professionell ${serviceDescription} i Malmö | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Malmö. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function MalmPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Malmö",
    region: "Skåne län",
    description: isStadfirma
      ? "Malmö är Skånes största stad och Sveriges tredje största stad med över 350 000 invånare. Vi erbjuder professionella städtjänster i hela Malmöregionen."
      : "Malmö är Skånes största stad och Sveriges tredje största stad med över 350 000 invånare. Vi erbjuder professionella flyttjänster i hela Malmöregionen.",
    localInfo: isStadfirma
      ? "I Malmö täcker vi alla områden från Gamla Staden till Västra Hamnen, från Rosengård till Limhamn. Vi känner till stadens moderna stadsutveckling och särskilda städrelaterade förutsättningar."
      : "I Malmö täcker vi alla områden från Gamla Staden till Västra Hamnen, från Rosengård till Limhamn. Vi känner till stadens moderna stadsutveckling och särskilda logistiska förutsättningar.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Flytthjälp i alla Malmös stadsdelar",
      "Flyttstädning för lägenhet och kontor", 
      "Magasinering i säkra lokaler",
      "Kontorsflytt i city och förorter",
      "Packning och uppackning",
      "Internationella flytt via Öresundsbron"
    
    ],
    specialties: isStadfirma ? [
      "Öresundsbro-specialister för städning till/från Danmark",
      "Moderna bostadsområden som Västra Hamnen", 
      "Effektiv navigering i Malmös city",
      "Miljövänliga städmetoder"
    ] : [

      "Öresundsbro-specialister för flytt till/från Danmark",
      "Moderna bostadsområden som Västra Hamnen", 
      "Effektiv navigering i Malmös city",
      "Skånes platta terräng-fördelar"
    
    ],
    areas: [

      "Centrum", "Gamla Staden", "Västra Hamnen", "Rosengård", 
      "Limhamn-Bunkeflo", "Husie", "Oxie", "Fosie",
      "Burlöv", "Staffanstorp", "Vellinge", "Svedala"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Malmö - Professionell ${serviceDescription} i Malmö | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Malmö? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Malmö. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} malmo, ${serviceDescription} malmo, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} malmo, ${isStadfirma ? 'städning' : 'flytt'} malmo`}
        url={`https://smidigflytt365.se/stader/malmo${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}