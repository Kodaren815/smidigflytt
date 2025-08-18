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
    title: `${serviceType} Huddinge - Professionell ${serviceDescription} i Huddinge | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Huddinge? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Huddinge. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} huddinge, ${serviceDescription} huddinge, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} huddinge, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} huddinge`,
    openGraph: {
      title: `${serviceType} Huddinge - Professionell ${serviceDescription} i Huddinge | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Huddinge. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function HuddingePage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Huddinge",
    region: "Stockholm",
    description: isStadfirma
      ? "Huddinge är en kommun söder om Stockholm med över 110 000 invånare, känd för Karolinska Institutet och moderna bostadsområden. Vi erbjuder professionella städtjänster i hela Huddinge kommun."
      : "Huddinge är en kommun söder om Stockholm med över 110 000 invånare, känd för Karolinska Institutet och moderna bostadsområden. Vi erbjuder professionella flyttjänster i hela Huddinge kommun.",
    localInfo: isStadfirma
      ? "I Huddinge täcker vi alla områden från Flemingsberg och Skogås till Segeltorp och Trångsund. Vi har stor erfarenhet av städning runt universitetsområden och känner väl till kommunens varierade karaktär."
      : "I Huddinge täcker vi alla områden från Flemingsberg och Skogås till Segeltorp och Trångsund. Vi har stor erfarenhet av flytt runt universitetsområden och känner väl till kommunens varierade karaktär.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Huddinge kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Studentflytt och universitetsrelaterade flytt",
      "Utlandsflytt från Huddinge",
      "Transport inom Stockholm och omgivande områden",
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
      "Expertis på städning i universitetsområden",
      "Specialiserade på studentflytt", 
      "Professionell hantering av moderna bostadsområden",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på universitetsområden",
      "Specialiserade på studentflytt", 
      "Professionell hantering av moderna bostadsområden",
      "Erfarenhet av sjukhus- och forskningsområden"
    
    ],
    areas: [

      "Flemingsberg", "Skogås", "Segeltorp", "Trångsund", 
      "Huddinge centrum", "Stuvsta", "Fullersta", "Snättringe",
      "Glömsta", "Vårby gård", "Länna", "Vistaberg"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Huddinge - Professionell ${serviceDescription} i Huddinge | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Huddinge? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Huddinge. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} huddinge, ${serviceDescription} huddinge, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} huddinge, ${isStadfirma ? 'städning' : 'flytt'} huddinge`}
        url={`https://smidigflytt365.se/stader/huddinge${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}