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
    title: `${serviceType} Järfälla - Professionell ${serviceDescription} i Järfälla | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Järfälla? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Järfälla. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} järfälla, ${serviceDescription} järfälla, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} järfälla, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} järfälla`,
    openGraph: {
      title: `${serviceType} Järfälla - Professionell ${serviceDescription} i Järfälla | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Järfälla. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function JrfllaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Järfälla",
    region: "Stockholm",
    description: isStadfirma
      ? "Järfälla är en kommun nordväst om Stockholm med över 78 000 invånare, känd för sin närhet till Mälaren och snabba förbindelser till Stockholm. Vi erbjuder professionella städtjänster i hela Järfälla kommun."
      : "Järfälla är en kommun nordväst om Stockholm med över 78 000 invånare, känd för sin närhet till Mälaren och snabba förbindelser till Stockholm. Vi erbjuder professionella flyttjänster i hela Järfälla kommun.",
    localInfo: isStadfirma
      ? "I Järfälla täcker vi alla områden från Jakobsberg och Kallhäll till Barkarby och Viksjö. Vi har stor erfarenhet av städning i både äldre villaområden och moderna bostadsprojekt."
      : "I Järfälla täcker vi alla områden från Jakobsberg och Kallhäll till Barkarby och Viksjö. Vi har stor erfarenhet av flytt i både äldre villaområden och moderna bostadsprojekt.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Järfälla kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Järfälla",
      "Transport inom Stockholm och till Mälaren",
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
      "Expertis på städning i Mälarnära områden",
      "Specialiserade på pendlarkommuner", 
      "Professionell hantering av moderna bostadsprojekt",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på Mälarnära områden",
      "Specialiserade på pendlarkommuner", 
      "Professionell hantering av moderna bostadsprojekt",
      "Erfarenhet av villaområden och radhus"
    
    ],
    areas: [

      "Jakobsberg", "Kallhäll", "Barkarby", "Viksjö", 
      "Järfälla centrum", "Skälby", "Vällingby", "Tensta",
      "Barkarbystaden", "Jakobsbergs centrum", "Hässelby", "Rinkeby"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Järfälla - Professionell ${serviceDescription} i Järfälla | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Järfälla? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Järfälla. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} jarfalla, ${serviceDescription} jarfalla, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} jarfalla, ${isStadfirma ? 'städning' : 'flytt'} jarfalla`}
        url={`https://smidigflytt.se/stader/jarfalla${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}