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
    title: `${serviceType} Kumla - Professionell ${serviceDescription} i Kumla | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Kumla? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Kumla. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} kumla, ${serviceDescription} kumla, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} kumla, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} kumla`,
    openGraph: {
      title: `${serviceType} Kumla - Professionell ${serviceDescription} i Kumla | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Kumla. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function KumlaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Kumla",
    region: "Örebro län",
    description: isStadfirma
      ? "Kumla är en växande kommun i Örebro län med närhet till både Örebro och Hallsberg. Vi erbjuder professionella städtjänster i hela Kumla kommun."
      : "Kumla är en växande kommun i Örebro län med närhet till både Örebro och Hallsberg. Vi erbjuder professionella flyttjänster i hela Kumla kommun.",
    localInfo: isStadfirma
      ? "I Kumla täcker vi alla områden från centrala tätorten till omkringliggande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och drar nytta av stadens centrala läge i länet."
      : "I Kumla täcker vi alla områden från centrala tätorten till omkringliggande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och drar nytta av stadens centrala läge i länet.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Kumla kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Kumla",
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
      "Centralt läge för snabba transporter",
      "Lokalkännedom i Örebro läns hjärta", 
      "Flexibla lösningar för växande kommun",
      "Miljövänliga städmetoder"
    ] : [

      "Centralt läge för snabba transporter",
      "Lokalkännedom i Örebro läns hjärta", 
      "Flexibla lösningar för växande kommun",
      "Närhet till större städer och järnväg"
    
    ],
    areas: [

      "Kumla centrum", "Hallsberg", "Kvarntorp", "Odensbacken", 
      "Sköllersta", "Vintrosa", "Hovsta", "Stora Mellösa",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}