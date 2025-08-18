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
    title: `${serviceType} Degerfors - Professionell ${serviceDescription} i Degerfors | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Degerfors? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Degerfors. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} degerfors, ${serviceDescription} degerfors, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} degerfors, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} degerfors`,
    openGraph: {
      title: `${serviceType} Degerfors - Professionell ${serviceDescription} i Degerfors | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Degerfors. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function DegerforsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  const cityData = {
    name: "Degerfors",
    region: "Örebro län",
    description: isStadfirma 
      ? "Degerfors är en industrikommun med stolt stålbruks- och ishockeytradition. Vi erbjuder professionella städtjänster i hela Degerfors kommun."
      : "Degerfors är en industrikommun med stolt stålbruks- och ishockeytradition. Vi erbjuder professionella flyttjänster i hela Degerfors kommun.",
    localInfo: isStadfirma
      ? "I Degerfors täcker vi alla områden från industriområdena till bostadskvarteren. Vi har erfarenhet av städning i industriella miljöer och specialiserad städning för småstadsatmosfär."
      : "I Degerfors täcker vi alla områden från industriområdena till bostadskvarteren. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har erfarenhet av industriella miljöer och småstadsatmosfär.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll",
      "Industristädning och specialstädning"
    ] : [
      "Bohagsflytt privatflytt i hela Degerfors kommun",
      "Företagsflytt för industri och kontor",
      "Utlandsflytt från Degerfors",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Industriell utrustningsflyttning"
    ],
    specialties: isStadfirma ? [
      "Expertis på industristädning",
      "Lokalkännedom i Bergslagen", 
      "Flexibla tider för skiftarbetare",
      "Specialiserad städning för industrimiljöer"
    ] : [
      "Expertis på industrimiljöer",
      "Lokalkännedom i Bergslagen", 
      "Flexibla tider för skiftarbetare",
      "Specialiserade på tung industri"
    ],
    areas: [
      "Degerfors centrum", "Stålverket", "Karlskoga", "Kristinehamn", 
      "Filipstad", "Laxå", "Örebro", "Lindesberg",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Degerfors - Professionell ${serviceDescription} i Degerfors | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Degerfors? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Degerfors. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} degerfors, ${serviceDescription} degerfors, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} degerfors, ${isStadfirma ? 'städning' : 'flytt'} degerfors`}
        url={`https://smidigflytt.se/stader/degerfors${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
