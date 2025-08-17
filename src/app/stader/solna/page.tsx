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
    title: `${serviceType} Solna - Professionell ${serviceDescription} i Solna | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Solna? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Solna. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} solna, ${serviceDescription} solna, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} solna, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} solna`,
    openGraph: {
      title: `${serviceType} Solna - Professionell ${serviceDescription} i Solna | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Solna. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SolnaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Solna",
    region: "Stockholm",
    description: isStadfirma
      ? "Solna är en modern förort till Stockholm med över 80 000 invånare, känd för Mall of Scandinavia och Friends Arena. Vi erbjuder professionella städtjänster i hela Solna stad."
      : "Solna är en modern förort till Stockholm med över 80 000 invånare, känd för Mall of Scandinavia och Friends Arena. Vi erbjuder professionella flyttjänster i hela Solna stad.",
    localInfo: isStadfirma
      ? "I Solna täcker vi alla områden från Solna centrum till Hagalund och Råsunda. Vi har gedigen erfarenhet av städning i både moderna lägenhetsområden och villakvarter, samt känner väl till områdets infrastruktur och parkeringsmöjligheter."
      : "I Solna täcker vi alla områden från Solna centrum till Hagalund och Råsunda. Vi har gedigen erfarenhet av flytt i både moderna lägenhetsområden och villakvarter, samt känner väl till områdets infrastruktur och parkeringsmöjligheter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Solna stad",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Solna",
      "Transport till närliggande områden",
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
      "Expertis på städning i moderna lägenhetsområden",
      "Specialiserade på närförorter till Stockholm", 
      "Professionell hantering av parkeringstillstånd",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på moderna lägenhetsområden",
      "Specialiserade på närförorter till Stockholm", 
      "Professionell hantering av parkeringstillstånd",
      "Erfarenhet av både villa och lägenhet"
    
    ],
    areas: [

      "Solna centrum", "Hagalund", "Råsunda", "Ulriksdal", 
      "Bergshamra", "Huvudsta", "Järva", "Frösunda",
      "Solna Business Park", "Karolinska", "Haga", "Vasastan"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}