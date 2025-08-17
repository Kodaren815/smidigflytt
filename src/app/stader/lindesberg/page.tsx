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
    title: `${serviceType} Lindesberg - Professionell ${serviceDescription} i Lindesberg | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Lindesberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Lindesberg. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} lindesberg, ${serviceDescription} lindesberg, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} lindesberg, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} lindesberg`,
    openGraph: {
      title: `${serviceType} Lindesberg - Professionell ${serviceDescription} i Lindesberg | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Lindesberg. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function LindesbergPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Lindesberg",
    region: "Örebro län",
    description: isStadfirma
      ? "Lindesberg är en historisk bergslingsstad med rikt kulturarv och vacker bebyggelse. Vi erbjuder professionella städtjänster i hela Lindesberg kommun."
      : "Lindesberg är en historisk bergslingsstad med rikt kulturarv och vacker bebyggelse. Vi erbjuder professionella flyttjänster i hela Lindesberg kommun.",
    localInfo: isStadfirma
      ? "I Lindesberg täcker vi alla områden från den medeltida stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens historiska värden."
      : "I Lindesberg täcker vi alla områden från den medeltida stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens historiska värden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Lindesberg kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Lindesberg",
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
      "Specialister på bergslingstäder och kulturmiljöer",
      "Lokalkännedom i historiska stadskärnor", 
      "Varsam hantering av äldre byggnader",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på bergslingstäder och kulturmiljöer",
      "Lokalkännedom i historiska stadskärnor", 
      "Varsam hantering av äldre byggnader",
      "Expertis på medeltida arkitektur"
    
    ],
    areas: [

      "Lindesberg centrum", "Frövi", "Gusselby", "Vedevåg", 
      "Ramsberg", "Ljusnarsberg", "Fellingsbro", "Kårsta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}