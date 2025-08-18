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
    title: `${serviceType} Nynäshamn - Professionell ${serviceDescription} i Nynäshamn | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nynäshamn? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nynäshamn. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} nynäshamn, ${serviceDescription} nynäshamn, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} nynäshamn, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} nynäshamn`,
    openGraph: {
      title: `${serviceType} Nynäshamn - Professionell ${serviceDescription} i Nynäshamn | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Nynäshamn. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function NynshamnPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Nynäshamn",
    region: "Stockholm",
    description: isStadfirma
      ? "Nynäshamn är en kommun söder om Stockholm med över 27 000 invånare, känd för sin hamn och närhet till skärgården. Vi erbjuder professionella städtjänster i hela Nynäshamn kommun."
      : "Nynäshamn är en kommun söder om Stockholm med över 27 000 invånare, känd för sin hamn och närhet till skärgården. Vi erbjuder professionella flyttjänster i hela Nynäshamn kommun.",
    localInfo: isStadfirma
      ? "I Nynäshamn täcker vi alla områden från centrum och Ösmo till Sorunda och Nynäs slott. Vi har stor erfarenhet av städning i hamnstäder och kustmiljöer."
      : "I Nynäshamn täcker vi alla områden från centrum och Ösmo till Sorunda och Nynäs slott. Vi har stor erfarenhet av flytt i hamnstäder och kustmiljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Nynäshamn kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Nynäshamn",
      "Transport till färjor och hamnar",
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
      "Expertis på städning i hamnlogistik",
      "Specialiserade på kustmiljöer", 
      "Professionell hantering av färjtransporter",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på hamnlogistik",
      "Specialiserade på kustmiljöer", 
      "Professionell hantering av färjtransporter",
      "Erfarenhet av internationella förbindelser"
    
    ],
    areas: [

      "Nynäshamn centrum", "Ösmo", "Sorunda", "Nynäs slott", 
      "Hamnen", "Segersäng", "Älby", "Berga",
      "Nynäshamn station", "Stora Vika", "Muskö", "Tystberga"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Nynäshamn - Professionell ${serviceDescription} i Nynäshamn | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nynäshamn? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nynäshamn. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} nynashamn, ${serviceDescription} nynashamn, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} nynashamn, ${isStadfirma ? 'städning' : 'flytt'} nynashamn`}
        url={`https://smidigflytt365.se/stader/nynashamn${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}