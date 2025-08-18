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
    title: `${serviceType} Värmdö - Professionell ${serviceDescription} i Värmdö | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Värmdö? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Värmdö. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} värmdö, ${serviceDescription} värmdö, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} värmdö, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} värmdö`,
    openGraph: {
      title: `${serviceType} Värmdö - Professionell ${serviceDescription} i Värmdö | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Värmdö. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function VrmdPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Värmdö",
    region: "Stockholm",
    description: isStadfirma
      ? "Värmdö är en skärgårdskommun öster om Stockholm med över 46 000 invånare, känd för sina många öar och vacker skärgårdsnatur. Vi erbjuder professionella städtjänster i hela Värmdö kommun."
      : "Värmdö är en skärgårdskommun öster om Stockholm med över 46 000 invånare, känd för sina många öar och vacker skärgårdsnatur. Vi erbjuder professionella flyttjänster i hela Värmdö kommun.",
    localInfo: isStadfirma
      ? "I Värmdö täcker vi hela kommunen från Gustavsberg till Sandhamn och alla öar däremellan. Vi har specialiserad erfarenhet av skärgårdstransporter och känner väl till kommunens unika utmaningar med färjor och båttransporter."
      : "I Värmdö täcker vi hela kommunen från Gustavsberg till Sandhamn och alla öar däremellan. Vi har specialiserad erfarenhet av skärgårdstransporter och känner väl till kommunens unika utmaningar med färjor och båttransporter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Värmdö kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Värmdö",
      "Transport med färja till öar",
      "Specialiserade båttransporter",
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
      "Expertis på städning i skärgårdstransporter",
      "Specialiserade på färjeresor", 
      "Professionell hantering av båttransporter",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på skärgårdstransporter",
      "Specialiserade på färjeresor", 
      "Professionell hantering av båttransporter",
      "Erfarenhet av sommarstugemiljö"
    
    ],
    areas: [

      "Gustavsberg", "Djurö", "Runmarö", "Nämdö", 
      "Ornö", "Utö", "Sandhamn", "Grinda",
      "Vaxholm", "Möja", "Nacka", "Stockholm"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Värmdö - Professionell ${serviceDescription} i Värmdö | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Värmdö? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Värmdö. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} varmdo, ${serviceDescription} varmdo, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} varmdo, ${isStadfirma ? 'städning' : 'flytt'} varmdo`}
        url={`https://smidigflytt365.se/stader/varmdo${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}