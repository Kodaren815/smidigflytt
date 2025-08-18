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
    title: `${serviceType} Karlskoga - Professionell ${serviceDescription} i Karlskoga | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Karlskoga? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Karlskoga. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} karlskoga, ${serviceDescription} karlskoga, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} karlskoga, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} karlskoga`,
    openGraph: {
      title: `${serviceType} Karlskoga - Professionell ${serviceDescription} i Karlskoga | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Karlskoga. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function KarlskogaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Karlskoga",
    region: "Örebro län",
    description: isStadfirma
      ? "Karlskoga är känt för sitt industriarv och Alfred Nobels koppling till staden. Vi erbjuder professionella städtjänster i hela Karlskoga kommun."
      : "Karlskoga är känt för sitt industriarv och Alfred Nobels koppling till staden. Vi erbjuder professionella flyttjänster i hela Karlskoga kommun.",
    localInfo: isStadfirma
      ? "I Karlskoga täcker vi alla områden från industrikvarteren till bostadsområden vid sjöarna. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både industri- och naturmiljöer."
      : "I Karlskoga täcker vi alla områden från industrikvarteren till bostadsområden vid sjöarna. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både industri- och naturmiljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Karlskoga kommun",
      "Företagsflytt för industri och kontor",
      "Utlandsflytt från Karlskoga",
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
      "Expertis på städning i industristädning och tung utrustning",
      "Lokalkännedom i Nobels hemstad", 
      "Flexibla lösningar vid sjömiljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på industriflytt och tung utrustning",
      "Lokalkännedom i Nobels hemstad", 
      "Flexibla lösningar vid sjömiljöer",
      "Specialiserade på skiftarbetares behov"
    
    ],
    areas: [

      "Karlskoga centrum", "Bofors", "Björkborn", "Degerfors", 
      "Kristinehamn", "Laxå", "Filipstad", "Storfors",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Karlskoga - Professionell ${serviceDescription} i Karlskoga | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Karlskoga? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Karlskoga. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} karlskoga, ${serviceDescription} karlskoga, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} karlskoga, ${isStadfirma ? 'städning' : 'flytt'} karlskoga`}
        url={`https://smidigflytt365.se/stader/karlskoga${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}