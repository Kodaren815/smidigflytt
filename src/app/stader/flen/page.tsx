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
    title: `${serviceType} Flen - Professionell ${serviceDescription} i Flen | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Flen? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Flen. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} flen, ${serviceDescription} flen, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} flen, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} flen`,
    openGraph: {
      title: `${serviceType} Flen - Professionell ${serviceDescription} i Flen | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Flen. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function FlenPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Flen",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Flen är en tätort i Sörmlands inland med närhet till både natur och större städer. Vi erbjuder professionella städtjänster i hela Flen kommun."
      : "Flen är en tätort i Sörmlands inland med närhet till både natur och större städer. Vi erbjuder professionella flyttjänster i hela Flen kommun.",
    localInfo: isStadfirma
      ? "I Flen täcker vi alla områden från centrala tätorten till omkringliggande landsbygd. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både urban och rural miljö."
      : "I Flen täcker vi alla områden från centrala tätorten till omkringliggande landsbygd. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både urban och rural miljö.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Flen kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Flen",
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
      "Flexibla lösningar för mindre tätorter",
      "Lokalkännedom i Sörmlands inland", 
      "Personlig service i lantlig miljö",
      "Miljövänliga städmetoder"
    ] : [

      "Flexibla lösningar för mindre tätorter",
      "Lokalkännedom i Sörmlands inland", 
      "Personlig service i lantlig miljö",
      "Snabba transporter till större städer"
    
    ],
    areas: [

      "Flen centrum", "Malmköping", "Sparreholm", "Bettna", 
      "Vadsbro", "Hälleforsnäs", "Blacksta", "Dunker",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Flen - Professionell ${serviceDescription} i Flen | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Flen? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Flen. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} flen, ${serviceDescription} flen, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} flen, ${isStadfirma ? 'städning' : 'flytt'} flen`}
        url={`https://smidigflytt365.se/stader/flen${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}