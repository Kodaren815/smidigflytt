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
    title: `${serviceType} Nykvarn - Professionell ${serviceDescription} i Nykvarn | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nykvarn? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nykvarn. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} nykvarn, ${serviceDescription} nykvarn, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} nykvarn, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} nykvarn`,
    openGraph: {
      title: `${serviceType} Nykvarn - Professionell ${serviceDescription} i Nykvarn | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Nykvarn. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function NykvarnPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Nykvarn",
    region: "Stockholm",
    description: isStadfirma
      ? "Nykvarn är en kommun väster om Stockholm med över 11 000 invånare, känd för sin landsbygdskaraktär och närhet till större städer. Vi erbjuder professionella städtjänster i hela Nykvarn kommun."
      : "Nykvarn är en kommun väster om Stockholm med över 11 000 invånare, känd för sin landsbygdskaraktär och närhet till större städer. Vi erbjuder professionella flyttjänster i hela Nykvarn kommun.",
    localInfo: isStadfirma
      ? "I Nykvarn täcker vi alla områden från Nykvarn centrum och Läggesta till Taxinge och Pershagen. Vi har stor erfarenhet av städning i mindre kommuner och lantliga miljöer."
      : "I Nykvarn täcker vi alla områden från Nykvarn centrum och Läggesta till Taxinge och Pershagen. Vi har stor erfarenhet av flytt i mindre kommuner och lantliga miljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Nykvarn kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Nykvarn",
      "Transport inom Stockholm och omgivande områden",
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
      "Expertis på städning i små kommuner",
      "Specialiserade på lantliga miljöer", 
      "Professionell hantering av landsbygdsstädning",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på små kommuner",
      "Specialiserade på lantliga miljöer", 
      "Professionell hantering av landsbygdsflytt",
      "Erfarenhet av större fastigheter"
    
    ],
    areas: [

      "Nykvarn centrum", "Läggesta", "Taxinge", "Pershagen", 
      "Nykvarn station", "Björkbacken", "Aspnäs", "Skillingaryd",
      "Sanda", "Nykvarn industriområde", "Läggesta kyrka", "Järna närområde"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}