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
    title: `${serviceType} Hallstahammar - Professionell ${serviceDescription} i Hallstahammar | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Hallstahammar? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Hallstahammar. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} hallstahammar, ${serviceDescription} hallstahammar, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} hallstahammar, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} hallstahammar`,
    openGraph: {
      title: `${serviceType} Hallstahammar - Professionell ${serviceDescription} i Hallstahammar | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Hallstahammar. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function HallstahammarPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Hallstahammar",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Hallstahammar är en tätort i Västmanland med närhet till både Västerås och natursköna Mälaren. Vi erbjuder professionella städtjänster i hela Hallstahammar kommun."
      : "Hallstahammar är en tätort i Västmanland med närhet till både Västerås och natursköna Mälaren. Vi erbjuder professionella flyttjänster i hela Hallstahammar kommun.",
    localInfo: isStadfirma
      ? "I Hallstahammar täcker vi alla områden från centrala tätorten till omgivande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om lokalområdet."
      : "I Hallstahammar täcker vi alla områden från centrala tätorten till omgivande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om lokalområdet.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Hallstahammar kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Hallstahammar",
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
      "Närhet och snabba transporter till Västerås",
      "Lokalkännedom i Mälardalens tätorter", 
      "Flexibla lösningar för pendlarfamiljer",
      "Miljövänliga städmetoder"
    ] : [

      "Närhet och snabba transporter till Västerås",
      "Lokalkännedom i Mälardalens tätorter", 
      "Flexibla lösningar för pendlarfamiljer",
      "Specialiserade tjänster för mindre tätorter"
    
    ],
    areas: [

      "Hallstahammar centrum", "Badelunda", "Strömsholm", "Kolbäck", 
      "Dingtuna", "Trobro", "Ekeby", "Segersjö",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}