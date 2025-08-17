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
    title: `${serviceType} Södertälje - Professionell ${serviceDescription} i Södertälje | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Södertälje? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Södertälje. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} södertälje, ${serviceDescription} södertälje, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} södertälje, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} södertälje`,
    openGraph: {
      title: `${serviceType} Södertälje - Professionell ${serviceDescription} i Södertälje | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Södertälje. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SdertljePage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Södertälje",
    region: "Stockholm",
    description: isStadfirma
      ? "Södertälje är en kommun sydväst om Stockholm med över 98 000 invånare, känd för sina industrier och närhet till Mälaren. Vi erbjuder professionella städtjänster i hela Södertälje kommun."
      : "Södertälje är en kommun sydväst om Stockholm med över 98 000 invånare, känd för sina industrier och närhet till Mälaren. Vi erbjuder professionella flyttjänster i hela Södertälje kommun.",
    localInfo: isStadfirma
      ? "I Södertälje täcker vi alla områden från centrum och Geneta till Hovsjö och Järna. Vi har stor erfarenhet av städning i både industriområden och bostadskvarter."
      : "I Södertälje täcker vi alla områden från centrum och Geneta till Hovsjö och Järna. Vi har stor erfarenhet av flytt i både industriområden och bostadskvarter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Södertälje kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Industriflytt och specialtransporter",
      "Utlandsflytt från Södertälje",
      "Transport inom Stockholm och till Mälardalen",
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
      "Expertis på städning i industriområden",
      "Specialiserade på större företagsflytt", 
      "Professionell hantering av tunga transporter",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på industriområden",
      "Specialiserade på större företagsflytt", 
      "Professionell hantering av tunga transporter",
      "Erfarenhet av komplexa logistiklösningar"
    
    ],
    areas: [

      "Södertälje centrum", "Geneta", "Hovsjö", "Järna", 
      "Ronna", "Fornhöjden", "Weda", "Skridskoåsen",
      "Mörkö", "Tveta", "Mälarviken", "Brunnsäng"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}