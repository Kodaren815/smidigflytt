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
    title: `${serviceType} Nora - Professionell ${serviceDescription} i Nora | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nora? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nora. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} nora, ${serviceDescription} nora, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} nora, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} nora`,
    openGraph: {
      title: `${serviceType} Nora - Professionell ${serviceDescription} i Nora | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Nora. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function NoraPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Nora",
    region: "Örebro län",
    description: isStadfirma
      ? "Nora är en välbevarad trästad med charmig småstadskänsla och rikt kulturarv. Vi erbjuder professionella städtjänster i hela Nora kommun."
      : "Nora är en välbevarad trästad med charmig småstadskänsla och rikt kulturarv. Vi erbjuder professionella flyttjänster i hela Nora kommun.",
    localInfo: isStadfirma
      ? "I Nora täcker vi alla områden från den bevarade trästadsmiljön till omgivande naturområden. Vi hjälper ofta kunder i Pershyttan, Gyttorp och Järnboås och uppskattar stadens kulturhistoriska värden."
      : "I Nora täcker vi alla områden från den bevarade trästadsmiljön till omgivande naturområden. Vi hjälper ofta kunder i Pershyttan, Gyttorp och Järnboås och uppskattar stadens kulturhistoriska värden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Nora kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Nora",
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
      "Specialister på träbyggnader och kulturmiljöer",
      "Lokalkännedom i historiska småstäder", 
      "Varsam hantering av äldre arkitektur",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på träbyggnader och kulturmiljöer",
      "Lokalkännedom i historiska småstäder", 
      "Varsam hantering av äldre arkitektur",
      "Personlig service i välbevarad miljö"
    
    ],
    areas: [

      "Nora centrum", "Gamla staden", "Järle", "Vikers", 
      "Gyttorp", "Hidinge", "Lindesberg", "Örebro",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Nora - Professionell ${serviceDescription} i Nora | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nora? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nora. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} nora, ${serviceDescription} nora, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} nora, ${isStadfirma ? 'städning' : 'flytt'} nora`}
        url={`https://smidigflytt365.se/stader/nora${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}