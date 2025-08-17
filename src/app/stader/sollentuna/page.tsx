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
    title: `${serviceType} Sollentuna - Professionell ${serviceDescription} i Sollentuna | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Sollentuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Sollentuna. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} sollentuna, ${serviceDescription} sollentuna, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} sollentuna, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} sollentuna`,
    openGraph: {
      title: `${serviceType} Sollentuna - Professionell ${serviceDescription} i Sollentuna | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Sollentuna. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SollentunaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Sollentuna",
    region: "Stockholm",
    description: isStadfirma
      ? "Sollentuna är en kommun norr om Stockholm med över 71 000 invånare, känd för sina gröna miljöer och närhet till både city och natur. Vi erbjuder professionella städtjänster i hela Sollentuna kommun."
      : "Sollentuna är en kommun norr om Stockholm med över 71 000 invånare, känd för sina gröna miljöer och närhet till både city och natur. Vi erbjuder professionella flyttjänster i hela Sollentuna kommun.",
    localInfo: isStadfirma
      ? "I Sollentuna täcker vi alla områden från Sollentuna centrum och Rotebro till Tureberg och Viby. Vi har stor erfarenhet av städning i både villaområden och lägenhetskvarter."
      : "I Sollentuna täcker vi alla områden från Sollentuna centrum och Rotebro till Tureberg och Viby. Vi har stor erfarenhet av flytt i både villaområden och lägenhetskvarter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Sollentuna kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Sollentuna",
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
      "Expertis på städning i gröna förorter",
      "Specialiserade på villaområden", 
      "Professionell hantering av naturmiljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på gröna förorter",
      "Specialiserade på villaområden", 
      "Professionell hantering av naturmiljöer",
      "Erfarenhet av större familjehushåll"
    
    ],
    areas: [

      "Sollentuna centrum", "Rotebro", "Tureberg", "Viby", 
      "Helenelund", "Norrviken", "Edsberg", "Häggvik",
      "Norrviken", "Söderhöjden", "Vintervägen", "Edsberg slott"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}