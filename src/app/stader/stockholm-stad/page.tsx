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
    title: `${serviceType} Stockholm - Professionell ${serviceDescription} i Stockholm | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Stockholm? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Stockholm. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} stockholm, ${serviceDescription} stockholm, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} stockholm, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} stockholm`,
    openGraph: {
      title: `${serviceType} Stockholm - Professionell ${serviceDescription} i Stockholm | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Stockholm. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function StockholmPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Stockholm",
    region: "Stockholm",
    description: isStadfirma
      ? "Stockholm är Sveriges huvudstad och största stad med över 980 000 invånare. Vi erbjuder professionella städtjänster i hela Stockholm stad och alla stadsdelar."
      : "Stockholm är Sveriges huvudstad och största stad med över 980 000 invånare. Vi erbjuder professionella flyttjänster i hela Stockholm stad och alla stadsdelar.",
    localInfo: isStadfirma
      ? "I Stockholm täcker vi alla stadsdelar och öar från Gamla Stan till moderna områden som Hammarby Sjöstad. Vi har mångårig erfarenhet av städning i tätbebyggd stadsmiljö och känner väl till Stockholms unika utmaningar som parkeringsrestriktioner och trappa tillgänglighet."
      : "I Stockholm täcker vi alla stadsdelar och öar från Gamla Stan till moderna områden som Hammarby Sjöstad. Vi har mångårig erfarenhet av flytt i tätbebyggd stadsmiljö och känner väl till Stockholms unika utmaningar som parkeringsrestriktioner och trappa tillgänglighet.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Stockholm stad",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Stockholm",
      "Transport mellan Stockholms öar",
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
      "Expertis på städning i stadsmiljö och trappstädning",
      "Specialiserade på gamla stadskärnor", 
      "Professionell hantering av parkering",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på stadsmiljö och trappflytt",
      "Specialiserade på gamla stadskärnor", 
      "Professionell hantering av parkering",
      "Erfarenhet av alla Stockholms stadsdelar"
    
    ],
    areas: [

      "Gamla Stan", "Norrmalm", "Östermalm", "Södermalm", 
      "Vasastan", "Kungsholmen", "Djurgården", "Skeppsholmen",
      "Hammarby Sjöstad", "Liljeholmen", "Hornstull", "Söderort"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}