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
    title: `${serviceType} Hällefors - Professionell ${serviceDescription} i Hällefors | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Hällefors? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Hällefors. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} hällefors, ${serviceDescription} hällefors, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} hällefors, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} hällefors`,
    openGraph: {
      title: `${serviceType} Hällefors - Professionell ${serviceDescription} i Hällefors | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Hällefors. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function HlleforsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Hällefors",
    region: "Örebro län",
    description: isStadfirma
      ? "Hällefors är en skogskommun i Bergslagen med närhet till vildmark och naturupplevelser. Vi erbjuder professionella städtjänster i hela Hällefors kommun."
      : "Hällefors är en skogskommun i Bergslagen med närhet till vildmark och naturupplevelser. Vi erbjuder professionella flyttjänster i hela Hällefors kommun.",
    localInfo: isStadfirma
      ? "I Hällefors täcker vi alla områden från tätorten till avlägsna skogsområden. Vi hjälper ofta kunder i Grythyttan, Hjulsjö och Rödålund och har erfarenhet av både urban och glesbygdsmiljö."
      : "I Hällefors täcker vi alla områden från tätorten till avlägsna skogsområden. Vi hjälper ofta kunder i Grythyttan, Hjulsjö och Rödålund och har erfarenhet av både urban och glesbygdsmiljö.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Hällefors kommun",
      "Företagsflytt för skogs- och naturföretag",
      "Utlandsflytt från Hällefors",
      "Transport till avlägsna områden",
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
      "Expertis på städning i glesbygdstransporter",
      "Lokalkännedom i Bergslagens skogar", 
      "Flexibla lösningar för avlägsna adresser",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på glesbygdstransporter",
      "Lokalkännedom i Bergslagens skogar", 
      "Flexibla lösningar för avlägsna adresser",
      "Specialiserade på naturområden"
    
    ],
    areas: [

      "Hällefors centrum", "Grythyttan", "Laxå", "Filipstad", 
      "Kristinehamn", "Degerfors", "Lindesberg", "Örebro",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Hallefors - Professionell ${serviceDescription} i Hallefors | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Hallefors? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Hallefors. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} hallefors, ${serviceDescription} hallefors, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} hallefors, ${isStadfirma ? 'städning' : 'flytt'} hallefors`}
        url={`https://smidigflytt365.se/stader/hallefors${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}