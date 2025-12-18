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
    title: `${serviceType} Danderyd - Professionell ${serviceDescription} i Danderyd | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Danderyd? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Danderyd. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} danderyd, ${serviceDescription} danderyd, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} danderyd, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} danderyd`,
    openGraph: {
      title: `${serviceType} Danderyd - Professionell ${serviceDescription} i Danderyd | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Danderyd. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function DanderydPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Danderyd",
    region: "Stockholm",
    description: isStadfirma
      ? "Danderyd är en välmående kommun norr om Stockholm med nästan 34 000 invånare, känd för sina villaområden och närhet till naturen. Vi erbjuder professionella städtjänster i hela Danderyds kommun."
      : "Danderyd är en välmående kommun norr om Stockholm med nästan 34 000 invånare, känd för sina villaområden och närhet till naturen. Vi erbjuder professionella flyttjänster i hela Danderyds kommun.",
    localInfo: isStadfirma
      ? "I Danderyd täcker vi alla områden från Stocksund till Djursholm och Enebyberg. Vi har mångårig erfarenhet av städning i villaområden och känner väl till kommunens karaktär med stora fastigheter och kräsna kunder."
      : "I Danderyd täcker vi alla områden från Stocksund till Djursholm och Enebyberg. Vi har mångårig erfarenhet av flytt i villaområden och känner väl till kommunens karaktär med stora fastigheter och kräsna kunder.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Danderyds kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Danderyd",
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
      "Expertis på städning i exklusiva villaområden",
      "Specialiserade på värdefullt gods", 
      "Diskret och professionell service",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på exklusiva villaområden",
      "Specialiserade på värdefullt gods", 
      "Diskret och professionell service",
      "Erfarenhet av stora fastigheter"
    
    ],
    areas: [

      "Djursholm", "Stocksund", "Enebyberg", "Danderyds kyrka", 
      "Rinkebyholm", "Mörby", "Täby", "Lidingö",
      "Österåker", "Sollentuna", "Stockholm", "Solna"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Danderyd - Professionell ${serviceDescription} i Danderyd | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Danderyd? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Danderyd. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} danderyd, ${serviceDescription} danderyd, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} danderyd, ${isStadfirma ? 'städning' : 'flytt'} danderyd`}
        url={`https://smidigflytt365.se/stader/danderyd${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}