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
    title: `${serviceType} Trosa - Professionell ${serviceDescription} i Trosa | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Trosa? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Trosa. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} trosa, ${serviceDescription} trosa, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} trosa, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} trosa`,
    openGraph: {
      title: `${serviceType} Trosa - Professionell ${serviceDescription} i Trosa | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Trosa. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function TrosaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Trosa",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Trosa är en pittoresk kuststad känd som 'Sveriges minsta stad' med charmig träbebyggelse och maritim atmosfär. Vi erbjuder professionella städtjänster i hela Trosa kommun."
      : "Trosa är en pittoresk kuststad känd som 'Sveriges minsta stad' med charmig träbebyggelse och maritim atmosfär. Vi erbjuder professionella flyttjänster i hela Trosa kommun.",
    localInfo: isStadfirma
      ? "I Trosa täcker vi alla områden från den idylliska trästaden till skärgårdsmiljöer. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har särskild erfarenhet av kustnära och kulturhistoriska miljöer."
      : "I Trosa täcker vi alla områden från den idylliska trästaden till skärgårdsmiljöer. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har särskild erfarenhet av kustnära och kulturhistoriska miljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Trosa kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Trosa",
      "Sommarstugetransporter",
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
      "Expertis på städning i träbyggnader och kulturmiljöer",
      "Lokalkännedom i kustnära småstad", 
      "Specialiserad på sommarstugemiljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på träbyggnader och kulturmiljöer",
      "Lokalkännedom i kustnära småstad", 
      "Specialiserad på sommarstugemiljöer",
      "Varsam hantering av historiska byggnader"
    
    ],
    areas: [

      "Trosa centrum", "Gamla Trosa", "Vagnhärad", "Tullgarn", 
      "Hölö", "Uttersberg", "Vrena", "Mariefred",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Trosa - Professionell ${serviceDescription} i Trosa | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Trosa? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Trosa. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} trosa, ${serviceDescription} trosa, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} trosa, ${isStadfirma ? 'städning' : 'flytt'} trosa`}
        url={`https://smidigflytt365.se/stader/trosa${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}