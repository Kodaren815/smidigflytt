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
    title: `${serviceType} Katrineholm - Professionell ${serviceDescription} i Katrineholm | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Katrineholm? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Katrineholm. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} katrineholm, ${serviceDescription} katrineholm, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} katrineholm, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} katrineholm`,
    openGraph: {
      title: `${serviceType} Katrineholm - Professionell ${serviceDescription} i Katrineholm | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Katrineholm. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function KatrineholmPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Katrineholm",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Katrineholm är en järnvägsknut med rik historia och strategiskt läge i Sörmland. Vi erbjuder professionella städtjänster i hela Katrineholm kommun."
      : "Katrineholm är en järnvägsknut med rik historia och strategiskt läge i Sörmland. Vi erbjuder professionella flyttjänster i hela Katrineholm kommun.",
    localInfo: isStadfirma
      ? "I Katrineholm täcker vi alla områden från järnvägsstaden till omgivande landsbygd. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kunskap om logistik tack vare stadens järnvägshistoria."
      : "I Katrineholm täcker vi alla områden från järnvägsstaden till omgivande landsbygd. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kunskap om logistik tack vare stadens järnvägshistoria.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Katrineholm kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Katrineholm",
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
      "Expertis på städning i järnvägstransporter",
      "Lokalkännedom i Sörmlands inland", 
      "Flexibla lösningar för pendlarfamiljer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på järnvägstransporter",
      "Lokalkännedom i Sörmlands inland", 
      "Flexibla lösningar för pendlarfamiljer",
      "Logistikkunnande från järnvägshistoria"
    
    ],
    areas: [

      "Katrineholm centrum", "Björkvik", "Valla", "Åker", 
      "Bie", "Julita", "Sköldinge", "Rönö",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Katrineholm - Professionell ${serviceDescription} i Katrineholm | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Katrineholm? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Katrineholm. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} katrineholm, ${serviceDescription} katrineholm, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} katrineholm, ${isStadfirma ? 'städning' : 'flytt'} katrineholm`}
        url={`https://smidigflytt365.se/stader/katrineholm${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}