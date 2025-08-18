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
    title: `${serviceType} Salem - Professionell ${serviceDescription} i Salem | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Salem? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Salem. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} salem, ${serviceDescription} salem, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} salem, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} salem`,
    openGraph: {
      title: `${serviceType} Salem - Professionell ${serviceDescription} i Salem | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Salem. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SalemPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Salem",
    region: "Stockholm",
    description: isStadfirma
      ? "Salem är en kommun söder om Stockholm med över 17 000 invånare, känd för sina villaområden och närhet till naturen. Vi erbjuder professionella städtjänster i hela Salem kommun."
      : "Salem är en kommun söder om Stockholm med över 17 000 invånare, känd för sina villaområden och närhet till naturen. Vi erbjuder professionella flyttjänster i hela Salem kommun.",
    localInfo: isStadfirma
      ? "I Salem täcker vi alla områden från Salem centrum och Rönninge till Högantorp och Mölnbo. Vi har stor erfarenhet av städning i villaområden och naturmiljöer."
      : "I Salem täcker vi alla områden från Salem centrum och Rönninge till Högantorp och Mölnbo. Vi har stor erfarenhet av flytt i villaområden och naturmiljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Salem kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Salem",
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
      "Expertis på städning i villaområden",
      "Specialiserade på mindre kommuner", 
      "Professionell hantering av naturmiljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på villaområden",
      "Specialiserade på mindre kommuner", 
      "Professionell hantering av naturmiljöer",
      "Erfarenhet av lugna bostadsområden"
    
    ],
    areas: [

      "Salem centrum", "Rönninge", "Högantorp", "Mölnbo", 
      "Kvarnberga", "Stora Vika", "Rödsta", "Vagnhärad",
      "Salems kyrkby", "Rönninge station", "Salems golf", "Kvarnberga industriområde"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Salem - Professionell ${serviceDescription} i Salem | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Salem? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Salem. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} salem, ${serviceDescription} salem, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} salem, ${isStadfirma ? 'städning' : 'flytt'} salem`}
        url={`https://smidigflytt365.se/stader/salem${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}