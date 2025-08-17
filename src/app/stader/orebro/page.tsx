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
    title: `${serviceType} Örebro - Professionell ${serviceDescription} i Örebro | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Örebro? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Örebro. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} örebro, ${serviceDescription} örebro, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} örebro, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} örebro`,
    openGraph: {
      title: `${serviceType} Örebro - Professionell ${serviceDescription} i Örebro | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Örebro. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function rebroPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Örebro",
    region: "Örebro län",
    description: isStadfirma
      ? "Örebro är Mellansveriges nav med över 155 000 invånare och strategiskt läge mellan Stockholm och Göteborg. Vi erbjuder professionella städtjänster i hela Örebro kommun."
      : "Örebro är Mellansveriges nav med över 155 000 invånare och strategiskt läge mellan Stockholm och Göteborg. Vi erbjuder professionella flyttjänster i hela Örebro kommun.",
    localInfo: isStadfirma
      ? "I Örebro täcker vi alla områden från centrala stan runt Svartån till moderna bostadsområden och villaförorter. Vi drar nytta av stadens utmärkta kommunikationer för effektiva transporter."
      : "I Örebro täcker vi alla områden från centrala stan runt Svartån till moderna bostadsområden och villaförorter. Vi drar nytta av stadens utmärkta kommunikationer för effektiva transporter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Flytthjälp i hela Örebro kommun",
      "Flyttstädning för lägenhet och villa", 
      "Magasinering i centrala lokaler",
      "Kontorsflytt för lokala företag",
      "Packning och uppackning",
      "Transporter till/från andra städer"
    
    ],
    specialties: isStadfirma ? [
      "Centralläge-fördelar för snabba transporter",
      "Varierande bostadstyper från lägenhet till villa", 
      "Effektiva kommunikationer (E18",
      "Miljövänliga städmetoder"
    ] : [

      "Centralläge-fördelar för snabba transporter",
      "Varierande bostadstyper från lägenhet till villa", 
      "Effektiva kommunikationer (E18, E20)",
      "Flexibla lösningar för Mellansverige"
    
    ],
    areas: [

      "Centrum", "Norr", "Söder", "Väster", 
      "Vivalla", "Brickebacken", "Adolfsberg", "Karlslund",
      "Kumla", "Hallsberg", "Lindesberg", "Askersund"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}