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
    title: `${serviceType} Tyresö - Professionell ${serviceDescription} i Tyresö | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Tyresö? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Tyresö. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} tyresö, ${serviceDescription} tyresö, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} tyresö, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} tyresö`,
    openGraph: {
      title: `${serviceType} Tyresö - Professionell ${serviceDescription} i Tyresö | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Tyresö. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function TyresPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Tyresö",
    region: "Stockholm",
    description: isStadfirma
      ? "Tyresö är en kommun sydost om Stockholm med över 48 000 invånare, känd för sina natursköna miljöer och närhet till både skärgård och stad. Vi erbjuder professionella städtjänster i hela Tyresö kommun."
      : "Tyresö är en kommun sydost om Stockholm med över 48 000 invånare, känd för sina natursköna miljöer och närhet till både skärgård och stad. Vi erbjuder professionella flyttjänster i hela Tyresö kommun.",
    localInfo: isStadfirma
      ? "I Tyresö täcker vi alla områden från Tyresö centrum och Trollbäcken till Tyresö strand och Bollmora. Vi har stor erfarenhet av städning i både moderna villaområden och naturmiljöer."
      : "I Tyresö täcker vi alla områden från Tyresö centrum och Trollbäcken till Tyresö strand och Bollmora. Vi har stor erfarenhet av flytt i både moderna villaområden och naturmiljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Tyresö kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Tyresö",
      "Transport till skärgård och Stockholm",
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
      "Expertis på städning i skärgårdsmiljöer",
      "Specialiserade på villaområden", 
      "Professionell hantering av naturnära miljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på skärgårdsmiljöer",
      "Specialiserade på villaområden", 
      "Professionell hantering av naturnära miljöer",
      "Erfarenhet av större enfamiljshus"
    
    ],
    areas: [

      "Tyresö centrum", "Trollbäcken", "Tyresö strand", "Bollmora", 
      "Tyresö by", "Krusboda", "Kolartorp", "Tyresö slott",
      "Tyresö golf", "Alby", "Gudöbroland", "Österängen"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Tyresö - Professionell ${serviceDescription} i Tyresö | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Tyresö? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Tyresö. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} tyreso, ${serviceDescription} tyreso, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} tyreso, ${isStadfirma ? 'städning' : 'flytt'} tyreso`}
        url={`https://smidigflytt365.se/stader/tyreso${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}