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
    title: `${serviceType} Upplands Väsby - Professionell ${serviceDescription} i Upplands Väsby | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Upplands Väsby? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Upplands Väsby. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} upplands väsby, ${serviceDescription} upplands väsby, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} upplands väsby, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} upplands väsby`,
    openGraph: {
      title: `${serviceType} Upplands Väsby - Professionell ${serviceDescription} i Upplands Väsby | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Upplands Väsby. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function UpplandsVsbyPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Upplands Väsby",
    region: "Stockholm",
    description: isStadfirma
      ? "Upplands Väsby är en kommun norr om Stockholm med över 46 000 invånare, känd för sin närhet till Arlanda och goda kommunikationer. Vi erbjuder professionella städtjänster i hela Upplands Väsby kommun."
      : "Upplands Väsby är en kommun norr om Stockholm med över 46 000 invånare, känd för sin närhet till Arlanda och goda kommunikationer. Vi erbjuder professionella flyttjänster i hela Upplands Väsby kommun.",
    localInfo: isStadfirma
      ? "I Upplands Väsby täcker vi alla områden från centrum och Runby till Hammarby och Ed. Vi har stor erfarenhet av städning i pendlarkommuner och känner väl till kommunens städrelaterade fördelar."
      : "I Upplands Väsby täcker vi alla områden från centrum och Runby till Hammarby och Ed. Vi har stor erfarenhet av flytt i pendlarkommuner och känner väl till kommunens logistiska fördelar.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Upplands Väsby kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Upplands Väsby",
      "Transport till Arlanda och Stockholm",
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
      "Expertis på städning i flygplatsnära områden",
      "Specialiserade på pendlarkommuner", 
      "Professionell hantering av internationella städning",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på flygplatsnära områden",
      "Specialiserade på pendlarkommuner", 
      "Professionell hantering av internationella flytt",
      "Erfarenhet av snabba transportlösningar"
    
    ],
    areas: [

      "Upplands Väsby centrum", "Runby", "Hammarby", "Ed", 
      "Vilundaberg", "Fresta", "Lövsta", "Skogsäng",
      "Tibble", "Bollstanäs", "Skälby", "Granby"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Upplands-Vasby - Professionell ${serviceDescription} i Upplands-Vasby | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Upplands-Vasby? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Upplands-Vasby. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} upplands-vasby, ${serviceDescription} upplands-vasby, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} upplands-vasby, ${isStadfirma ? 'städning' : 'flytt'} upplands-vasby`}
        url={`https://smidigflytt.se/stader/upplands-vasby${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}