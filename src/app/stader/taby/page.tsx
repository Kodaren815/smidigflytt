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
    title: `${serviceType} Täby - Professionell ${serviceDescription} i Täby | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Täby? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Täby. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} täby, ${serviceDescription} täby, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} täby, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} täby`,
    openGraph: {
      title: `${serviceType} Täby - Professionell ${serviceDescription} i Täby | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Täby. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function TbyPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Täby",
    region: "Stockholm",
    description: isStadfirma
      ? "Täby är en välmående kommun norr om Stockholm med över 70 000 invånare, känd för Täby Centrum galleria och sina attraktiva villaområden. Vi erbjuder professionella städtjänster i hela Täby kommun."
      : "Täby är en välmående kommun norr om Stockholm med över 70 000 invånare, känd för Täby Centrum galleria och sina attraktiva villaområden. Vi erbjuder professionella flyttjänster i hela Täby kommun.",
    localInfo: isStadfirma
      ? "I Täby täcker vi hela kommunen från Täby centrum till Roslags-Näsby och Viggbyholm. Vi har omfattande erfarenhet av städning i välmående villaområden och känner väl till kommunens höga standard och krav på kvalitet."
      : "I Täby täcker vi hela kommunen från Täby centrum till Roslags-Näsby och Viggbyholm. Vi har omfattande erfarenhet av flytt i välmående villaområden och känner väl till kommunens höga standard och krav på kvalitet.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Täby kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Täby",
      "Transport av värdefulla föremål",
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
      "Expertis på städning i attraktiva villaområden",
      "Specialiserade på högkvalitativ service", 
      "Diskret och professionell hantering",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på attraktiva villaområden",
      "Specialiserade på högkvalitativ service", 
      "Diskret och professionell hantering",
      "Erfarenhet av galleriområden"
    
    ],
    areas: [

      "Täby centrum", "Roslags-Näsby", "Viggbyholm", "Gribbylund", 
      "Täby kyrkby", "Näsby Park", "Ensta", "Tibble",
      "Vallentuna", "Danderyd", "Sollentuna", "Stockholm"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Täby - Professionell ${serviceDescription} i Täby | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Täby? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Täby. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} taby, ${serviceDescription} taby, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} taby, ${isStadfirma ? 'städning' : 'flytt'} taby`}
        url={`https://smidigflytt365.se/stader/taby${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}