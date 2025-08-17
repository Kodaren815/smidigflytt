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
    title: `${serviceType} Sundbyberg - Professionell ${serviceDescription} i Sundbyberg | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Sundbyberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Sundbyberg. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} sundbyberg, ${serviceDescription} sundbyberg, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} sundbyberg, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} sundbyberg`,
    openGraph: {
      title: `${serviceType} Sundbyberg - Professionell ${serviceDescription} i Sundbyberg | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Sundbyberg. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SundbybergPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Sundbyberg",
    region: "Stockholm",
    description: isStadfirma
      ? "Sundbyberg är en tät förort till Stockholm med drygt 50 000 invånare, känd för sitt livliga centrum och närhet till Stockholm. Vi erbjuder professionella städtjänster i hela Sundbyberg stad."
      : "Sundbyberg är en tät förort till Stockholm med drygt 50 000 invånare, känd för sitt livliga centrum och närhet till Stockholm. Vi erbjuder professionella flyttjänster i hela Sundbyberg stad.",
    localInfo: isStadfirma
      ? "I Sundbyberg täcker vi hela staden från centrum till Ör och Rissne. Vi har stor erfarenhet av städning i täta stadsområden och känner väl till Sundbybergs unika utmaningar med parkeringsrestriktioner och trappuppgångar."
      : "I Sundbyberg täcker vi hela staden från centrum till Ör och Rissne. Vi har stor erfarenhet av flytt i täta stadsområden och känner väl till Sundbybergs unika utmaningar med parkeringsrestriktioner och trappuppgångar.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Sundbyberg stad",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Sundbyberg",
      "Transport till närliggande områden",
      "Bärhjälp för tunga lyft i trappor",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag"
    
    ],
    specialties: isStadfirma ? [
      "Expertis på städning i täta stadsområden",
      "Specialiserade på trappflytt", 
      "Professionell hantering av parkeringstillstånd",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på täta stadsområden",
      "Specialiserade på trappflytt", 
      "Professionell hantering av parkeringstillstånd",
      "Erfarenhet av centrala lägen"
    
    ],
    areas: [

      "Sundbyberg centrum", "Ör", "Rissne", "Hallonbergen", 
      "Duvbo", "Lilla Alby", "Stora Ursvik", "Bällsta",
      "Sundbybergs industriområde", "Solna", "Stockholm", "Järfälla"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}