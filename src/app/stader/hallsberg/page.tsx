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
    title: `${serviceType} Hallsberg - Professionell ${serviceDescription} i Hallsberg | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Hallsberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Hallsberg. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} hallsberg, ${serviceDescription} hallsberg, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} hallsberg, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} hallsberg`,
    openGraph: {
      title: `${serviceType} Hallsberg - Professionell ${serviceDescription} i Hallsberg | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Hallsberg. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function HallsbergPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Hallsberg",
    region: "Örebro län",
    description: isStadfirma
      ? "Hallsberg är Sveriges viktigaste järnvägsknut och en central logistikhub. Vi erbjuder professionella städtjänster i hela Hallsberg kommun."
      : "Hallsberg är Sveriges viktigaste järnvägsknut och en central logistikhub. Vi erbjuder professionella flyttjänster i hela Hallsberg kommun.",
    localInfo: isStadfirma
      ? "I Hallsberg täcker vi alla områden från järnvägsstationen till omkringliggande tätorter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och drar nytta av stadens excellenta logistikläge."
      : "I Hallsberg täcker vi alla områden från järnvägsstationen till omkringliggande tätorter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och drar nytta av stadens excellenta logistikläge.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Hallsberg kommun",
      "Företagsflytt för logistik och transport",
      "Utlandsflytt från Hallsberg",
      "Järnvägstransporter och logistik",
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
      "Expertis på städning i järnvägslogistik",
      "Sveriges bästa transportläge", 
      "Specialiserade på logistikföretag",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på järnvägslogistik",
      "Sveriges bästa transportläge", 
      "Specialiserade på logistikföretag",
      "Snabba transporter i alla riktningar"
    
    ],
    areas: [

      "Hallsberg centrum", "Pålsboda", "Motala", "Skövde", 
      "Kumla", "Örebro", "Mjölby", "Katrineholm",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Hallsberg - Professionell ${serviceDescription} i Hallsberg | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Hallsberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Hallsberg. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} hallsberg, ${serviceDescription} hallsberg, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} hallsberg, ${isStadfirma ? 'städning' : 'flytt'} hallsberg`}
        url={`https://smidigflytt.se/stader/hallsberg${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}