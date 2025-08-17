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
    title: `${serviceType} Strängnäs - Professionell ${serviceDescription} i Strängnäs | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Strängnäs? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Strängnäs. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} strängnäs, ${serviceDescription} strängnäs, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} strängnäs, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} strängnäs`,
    openGraph: {
      title: `${serviceType} Strängnäs - Professionell ${serviceDescription} i Strängnäs | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Strängnäs. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function StrngnsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Strängnäs",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Strängnäs är en historisk domkyrkostad vid Mälaren med vacker arkitektur och kulturarv. Vi erbjuder professionella städtjänster i hela Strängnäs kommun."
      : "Strängnäs är en historisk domkyrkostad vid Mälaren med vacker arkitektur och kulturarv. Vi erbjuder professionella flyttjänster i hela Strängnäs kommun.",
    localInfo: isStadfirma
      ? "I Strängnäs täcker vi alla områden från den medeltida domkyrkan till moderna Mälarområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens kulturhistoriska värden."
      : "I Strängnäs täcker vi alla områden från den medeltida domkyrkan till moderna Mälarområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens kulturhistoriska värden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Strängnäs kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Strängnäs",
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
      "Specialister på kulturhistoriska byggnader",
      "Lokalkännedom vid Mälaren", 
      "Varsam hantering i domkyrkostad",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på kulturhistoriska byggnader",
      "Lokalkännedom vid Mälaren", 
      "Varsam hantering i domkyrkostad",
      "Expertis på äldre arkitektur"
    
    ],
    areas: [

      "Strängnäs centrum", "Domkyrkan", "Södermalm", "Rogsta", 
      "Mariefred", "Läggesta", "Stallarholmen", "Åkers styckebruk",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}