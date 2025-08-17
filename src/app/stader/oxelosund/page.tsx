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
    title: `${serviceType} Oxelösund - Professionell ${serviceDescription} i Oxelösund | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Oxelösund? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Oxelösund. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} oxelösund, ${serviceDescription} oxelösund, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} oxelösund, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} oxelösund`,
    openGraph: {
      title: `${serviceType} Oxelösund - Professionell ${serviceDescription} i Oxelösund | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Oxelösund. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function OxelsundPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Oxelösund",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Oxelösund är en hamnstad vid Östersjön känd för sitt stålverk och maritima atmosfär. Vi erbjuder professionella städtjänster i hela Oxelösund kommun."
      : "Oxelösund är en hamnstad vid Östersjön känd för sitt stålverk och maritima atmosfär. Vi erbjuder professionella flyttjänster i hela Oxelösund kommun.",
    localInfo: isStadfirma
      ? "I Oxelösund täcker vi alla områden från hamnområdet till bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har erfarenhet av industriella miljöer och kustnära förhållanden."
      : "I Oxelösund täcker vi alla områden från hamnområdet till bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har erfarenhet av industriella miljöer och kustnära förhållanden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Oxelösund kommun",
      "Företagsflytt för industri och hamn",
      "Utlandsflytt från Oxelösund",
      "Hamntransporter och logistik",
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
      "Expertis på städning i hamn- och industrimiljöer",
      "Lokalkännedom vid Östersjökusten", 
      "Flexibla lösningar för skiftarbetare",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på hamn- och industrimiljöer",
      "Lokalkännedom vid Östersjökusten", 
      "Flexibla lösningar för skiftarbetare",
      "Maritim logistikkunskap"
    
    ],
    areas: [

      "Oxelösund centrum", "Hamnen", "Stålverket", "Tunaberg", 
      "Nävekvarn", "Sköldinge", "Tuna", "Stjärnholm",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}