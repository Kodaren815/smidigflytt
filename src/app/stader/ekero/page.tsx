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
    title: `${serviceType} Ekerö - Professionell ${serviceDescription} i Ekerö | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Ekerö? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Ekerö. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} ekerö, ${serviceDescription} ekerö, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} ekerö, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} ekerö`,
    openGraph: {
      title: `${serviceType} Ekerö - Professionell ${serviceDescription} i Ekerö | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Ekerö. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function EkerPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Ekerö",
    region: "Stockholm",
    description: isStadfirma
      ? "Ekerö är en ö-kommun väster om Stockholm med cirka 28 000 invånare, känd för Drottningholms slott och vacker skärgårdsmiljö. Vi erbjuder professionella städtjänster i hela Ekerö kommun."
      : "Ekerö är en ö-kommun väster om Stockholm med cirka 28 000 invånare, känd för Drottningholms slott och vacker skärgårdsmiljö. Vi erbjuder professionella flyttjänster i hela Ekerö kommun.",
    localInfo: isStadfirma
      ? "I Ekerö täcker vi alla områden från Ekerö centrum och Stenhamra till Drottningholm och Färentuna. Vi har stor erfarenhet av städning på öar och känner väl till de städrelaterade utmaningar som kan uppstå."
      : "I Ekerö täcker vi alla områden från Ekerö centrum och Stenhamra till Drottningholm och Färentuna. Vi har stor erfarenhet av flytt på öar och känner väl till de logistiska utmaningar som kan uppstå.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Ekerö kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Ekerö",
      "Transport till och från öar",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag"
    
    ],
    specialties: isStadfirma ? [
      "Expertis på städning i ö-logistik",
      "Specialiserade på skärgårdsmiljöer", 
      "Professionell hantering av historiska miljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på ö-logistik",
      "Specialiserade på skärgårdsmiljöer", 
      "Professionell hantering av historiska miljöer",
      "Erfarenhet av kulturmiljöer och slottsmiljöer"
    
    ],
    areas: [

      "Ekerö centrum", "Stenhamra", "Drottningholm", "Färentuna", 
      "Munsö", "Adelsö", "Lovö", "Kärsön",
      "Tappström", "Skå", "Mälaröarna", "Björkö"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}