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
    title: `${serviceType} Vallentuna - Professionell ${serviceDescription} i Vallentuna | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Vallentuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Vallentuna. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} vallentuna, ${serviceDescription} vallentuna, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} vallentuna, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} vallentuna`,
    openGraph: {
      title: `${serviceType} Vallentuna - Professionell ${serviceDescription} i Vallentuna | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Vallentuna. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function VallentunaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Vallentuna",
    region: "Stockholm",
    description: isStadfirma
      ? "Vallentuna är en kommun nordost om Stockholm med över 34 000 invånare, känd för sina gröna miljöer och villaområden. Vi erbjuder professionella städtjänster i hela Vallentuna kommun."
      : "Vallentuna är en kommun nordost om Stockholm med över 34 000 invånare, känd för sina gröna miljöer och villaområden. Vi erbjuder professionella flyttjänster i hela Vallentuna kommun.",
    localInfo: isStadfirma
      ? "I Vallentuna täcker vi alla områden från centrum och Lindholmen till Brottby och Kårsta. Vi har stor erfarenhet av städning i villaområden och lantliga miljöer."
      : "I Vallentuna täcker vi alla områden från centrum och Lindholmen till Brottby och Kårsta. Vi har stor erfarenhet av flytt i villaområden och lantliga miljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Vallentuna kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Vallentuna",
      "Transport inom Stockholm och till landsbygden",
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
      "Expertis på städning i villaområden",
      "Specialiserade på lantliga miljöer", 
      "Professionell hantering av större fastigheter",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på villaområden",
      "Specialiserade på lantliga miljöer", 
      "Professionell hantering av större fastigheter",
      "Erfarenhet av gröna förorter"
    
    ],
    areas: [

      "Vallentuna centrum", "Lindholmen", "Brottby", "Kårsta", 
      "Rickeby", "Angarn", "Sågarbo", "Karby",
      "Välsta", "Haga", "Viksta", "Rydbo"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Vallentuna - Professionell ${serviceDescription} i Vallentuna | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Vallentuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Vallentuna. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} vallentuna, ${serviceDescription} vallentuna, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} vallentuna, ${isStadfirma ? 'städning' : 'flytt'} vallentuna`}
        url={`https://smidigflytt.se/stader/vallentuna${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}