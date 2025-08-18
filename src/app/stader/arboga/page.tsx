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
    title: `${serviceType} Arboga - Professionell ${serviceDescription} i Arboga | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Arboga? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Arboga. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} arboga, ${serviceDescription} arboga, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} arboga, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} arboga`,
    openGraph: {
      title: `${serviceType} Arboga - Professionell ${serviceDescription} i Arboga | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Arboga. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function ArbogaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Arboga",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Arboga är en av Sveriges äldsta städer med medeltida charm och modern utveckling. Vi erbjuder professionella städtjänster i hela Arboga kommun."
      : "Arboga är en av Sveriges äldsta städer med medeltida charm och modern utveckling. Vi erbjuder professionella flyttjänster i hela Arboga kommun.",
    localInfo: isStadfirma
      ? "I Arboga täcker vi alla områden från den historiska stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens kulturhistoriska värden."
      : "I Arboga täcker vi alla områden från den historiska stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens kulturhistoriska värden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Arboga kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Arboga",
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
      "Specialister på medeltida byggnader och kulturmiljöer",
      "Varsam hantering i historiska kvarter", 
      "Lokalkännedom i Sveriges äldsta städer",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på medeltida byggnader och kulturmiljöer",
      "Varsam hantering i historiska kvarter", 
      "Lokalkännedom i Sveriges äldsta städer",
      "Flexibel service för kulturarvsbyggnader"
    
    ],
    areas: [

      "Arboga centrum", "Sankt Nikolaj", "Götlunda", "Målhammar", 
      "Valskog", "Arboga landsförsamling", "Möklinta", "Säby",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Arboga - Professionell ${serviceDescription} i Arboga | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Arboga? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Arboga. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} arboga, ${serviceDescription} arboga, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} arboga, ${isStadfirma ? 'städning' : 'flytt'} arboga`}
        url={`https://smidigflytt365.se/stader/arboga${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}