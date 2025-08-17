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
    title: `${serviceType} Torshälla - Professionell ${serviceDescription} i Torshälla | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Torshälla? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Torshälla. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} torshälla, ${serviceDescription} torshälla, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} torshälla, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} torshälla`,
    openGraph: {
      title: `${serviceType} Torshälla - Professionell ${serviceDescription} i Torshälla | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Torshälla. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function TorshllaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Torshälla",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Torshälla är en historisk handelsstad vid Eskilstunaån med charmig småstadskänsla. Vi erbjuder professionella städtjänster i hela Torshälla och omgivning."
      : "Torshälla är en historisk handelsstad vid Eskilstunaån med charmig småstadskänsla. Vi erbjuder professionella flyttjänster i hela Torshälla och omgivning.",
    localInfo: isStadfirma
      ? "I Torshälla täcker vi alla områden från den gamla handelsstaden till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens historiska charm."
      : "I Torshälla täcker vi alla områden från den gamla handelsstaden till moderna bostadsområden. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens historiska charm.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Torshälla",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Torshälla",
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
      "Specialister på småstadsmiljöer",
      "Lokalkännedom i historiska handelsstäder", 
      "Personlig service i mindre orter",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på småstadsmiljöer",
      "Lokalkännedom i historiska handelsstäder", 
      "Personlig service i mindre orter",
      "Flexibla lösningar för äldre byggnader"
    
    ],
    areas: [

      "Torshälla centrum", "Gamla staden", "Nyby", "Hyndevad", 
      "Sundbyholm", "Jäder", "Söderby", "Råcksta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}