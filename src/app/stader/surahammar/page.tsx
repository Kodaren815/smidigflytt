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
    title: `${serviceType} Surahammar - Professionell ${serviceDescription} i Surahammar | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Surahammar? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Surahammar. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} surahammar, ${serviceDescription} surahammar, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} surahammar, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} surahammar`,
    openGraph: {
      title: `${serviceType} Surahammar - Professionell ${serviceDescription} i Surahammar | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Surahammar. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SurahammarPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Surahammar",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Surahammar är en charmig tätort i Västmanland med närhet till naturen och goda kommunikationer. Vi erbjuder professionella städtjänster i hela Surahammar kommun."
      : "Surahammar är en charmig tätort i Västmanland med närhet till naturen och goda kommunikationer. Vi erbjuder professionella flyttjänster i hela Surahammar kommun.",
    localInfo: isStadfirma
      ? "I Surahammar täcker vi alla områden från centrala tätorten till omkringliggande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och känner väl till de lokala förhållandena."
      : "I Surahammar täcker vi alla områden från centrala tätorten till omkringliggande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och känner väl till de lokala förhållandena.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Surahammar kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Surahammar",
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
      "Personlig service i mindre tätorter",
      "Lokalkännedom i Mälardalens naturområden", 
      "Flexibla lösningar för lantliga miljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Personlig service i mindre tätorter",
      "Lokalkännedom i Mälardalens naturområden", 
      "Flexibla lösningar för lantliga miljöer",
      "Snabba transporter till större städer"
    
    ],
    areas: [

      "Surahammar centrum", "Virsbo", "Ramnäs", "Västanfors", 
      "Ängelsberg", "Bredsjö", "Millhög", "Österby",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}