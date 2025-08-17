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
    title: `${serviceType} Nyköping - Professionell ${serviceDescription} i Nyköping | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nyköping? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nyköping. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} nyköping, ${serviceDescription} nyköping, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} nyköping, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} nyköping`,
    openGraph: {
      title: `${serviceType} Nyköping - Professionell ${serviceDescription} i Nyköping | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Nyköping. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function NykpingPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Nyköping",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Nyköping är en historisk stad vid Östersjökusten med charmig atmosfär och närhet till både Stockholm och Skavsta flygplats. Vi erbjuder professionella städtjänster i hela Nyköping kommun."
      : "Nyköping är en historisk stad vid Östersjökusten med charmig atmosfär och närhet till både Stockholm och Skavsta flygplats. Vi erbjuder professionella flyttjänster i hela Nyköping kommun.",
    localInfo: isStadfirma
      ? "I Nyköping täcker vi alla områden från den medeltida stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både kust- och inlandsmiljöer."
      : "I Nyköping täcker vi alla områden från den medeltida stadskärnan till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både kust- och inlandsmiljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Nyköping kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Nyköping",
      "Flygplatstransporter till/från Skavsta",
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
      "Expertis på städning i flygplatstransporter",
      "Lokalkännedom i kustnära miljöer", 
      "Flexibla lösningar för semester- och fritidshus",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på flygplatstransporter",
      "Lokalkännedom i kustnära miljöer", 
      "Flexibla lösningar för semester- och fritidshus",
      "Snabba transporter till Stockholm"
    
    ],
    areas: [

      "Nyköping centrum", "Högbrunn", "Brandkärr", "Arnö", 
      "Stigtomta", "Jönåker", "Tystberga", "Lästringe",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}