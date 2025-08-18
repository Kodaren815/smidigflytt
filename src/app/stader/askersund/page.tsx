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
    title: `${serviceType} Askersund - Professionell ${serviceDescription} i Askersund | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Askersund? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Askersund. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} askersund, ${serviceDescription} askersund, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} askersund, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} askersund`,
    openGraph: {
      title: `${serviceType} Askersund - Professionell ${serviceDescription} i Askersund | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Askersund. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function AskersundPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Askersund",
    region: "Örebro län",
    description: isStadfirma
      ? "Askersund är en pittoresk badort vid Vätterns norra strand med vacker träbebyggelse och rik historia. Vi erbjuder professionella städtjänster i hela Askersund kommun."
      : "Askersund är en pittoresk badort vid Vätterns norra strand med vacker träbebyggelse och rik historia. Vi erbjuder professionella flyttjänster i hela Askersund kommun.",
    localInfo: isStadfirma
      ? "I Askersund täcker vi hela kommunen från kustnära områden vid Vättern till inlandet. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både samhällen och glesbygd."
      : "I Askersund täcker vi hela kommunen från kustnära områden vid Vättern till inlandet. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både samhällen och glesbygd.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Askersund kommun",
      "Företagsflytt för turism- och serviceföretag",
      "Utlandsflytt från Askersund",
      "Transport till fritidshus vid Vättern",
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
      "Specialiserade på kustområden vid Vättern",
      "Expertis på fritidshustransporter", 
      "Lokalkännedom i badortsmiljö",
      "Miljövänliga städmetoder"
    ] : [

      "Specialiserade på kustområden vid Vättern",
      "Expertis på fritidshustransporter", 
      "Lokalkännedom i badortsmiljö",
      "Flexibla sommarsäsongslösningar"
    
    ],
    areas: [

      "Askersund centrum", "Zinkgruvan", "Laxå", "Motala", 
      "Örebro", "Lindesberg", "Karlskoga", "Degerfors",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Askersund - Professionell ${serviceDescription} i Askersund | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Askersund? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Askersund. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} askersund, ${serviceDescription} askersund, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} askersund, ${isStadfirma ? 'städning' : 'flytt'} askersund`}
        url={`https://smidigflytt.se/stader/askersund${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}