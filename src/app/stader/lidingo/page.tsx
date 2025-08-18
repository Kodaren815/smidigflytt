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
    title: `${serviceType} Lidingö - Professionell ${serviceDescription} i Lidingö | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Lidingö? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Lidingö. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} lidingö, ${serviceDescription} lidingö, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} lidingö, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} lidingö`,
    openGraph: {
      title: `${serviceType} Lidingö - Professionell ${serviceDescription} i Lidingö | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Lidingö. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function LidingPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Lidingö",
    region: "Stockholm",
    description: isStadfirma
      ? "Lidingö är en ö-kommun öster om Stockholm med nästan 48 000 invånare, känd för sina natursköna områden och välmående villakvarter. Vi erbjuder professionella städtjänster på hela Lidingö."
      : "Lidingö är en ö-kommun öster om Stockholm med nästan 48 000 invånare, känd för sina natursköna områden och välmående villakvarter. Vi erbjuder professionella flyttjänster på hela Lidingö.",
    localInfo: isStadfirma
      ? "På Lidingö täcker vi hela ön från Hersby till Gåshaga och Bodal. Vi har gedigen erfarenhet av städning på öar och känner väl till Lidingös unika geografi med broförbindelser och naturområden."
      : "På Lidingö täcker vi hela ön från Hersby till Gåshaga och Bodal. Vi har gedigen erfarenhet av flytt på öar och känner väl till Lidingös unika geografi med broförbindelser och naturområden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt på hela Lidingö",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Lidingö",
      "Transport via broförbindelser",
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
      "Expertis på städning i ö-transporter",
      "Specialiserade på villaområden", 
      "Professionell hantering av bropassager",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på ö-transporter",
      "Specialiserade på villaområden", 
      "Professionell hantering av bropassager",
      "Erfarenhet av naturskön miljö"
    
    ],
    areas: [

      "Lidingö centrum", "Hersby", "Gåshaga", "Bodal", 
      "Käppala", "Brevik", "Torsvik", "Sticklinge",
      "Millesgården", "Djurgården", "Stockholm", "Danderyd"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Lidingö - Professionell ${serviceDescription} i Lidingö | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Lidingö? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Lidingö. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} lidingo, ${serviceDescription} lidingo, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} lidingo, ${isStadfirma ? 'städning' : 'flytt'} lidingo`}
        url={`https://smidigflytt365.se/stader/lidingo${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}