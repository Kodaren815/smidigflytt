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
    title: `${serviceType} Skinnskatteberg - Professionell ${serviceDescription} i Skinnskatteberg | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Skinnskatteberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Skinnskatteberg. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} skinnskatteberg, ${serviceDescription} skinnskatteberg, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} skinnskatteberg, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} skinnskatteberg`,
    openGraph: {
      title: `${serviceType} Skinnskatteberg - Professionell ${serviceDescription} i Skinnskatteberg | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Skinnskatteberg. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SkinnskatterbergPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Skinnskatteberg",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Skinnskatteberg är en charmig småstad med rik industrihistoria i Bergslagen. Vi erbjuder professionella städtjänster i hela Skinnskatteberg kommun."
      : "Skinnskatteberg är en charmig småstad med rik industrihistoria i Bergslagen. Vi erbjuder professionella flyttjänster i hela Skinnskatteberg kommun.",
    localInfo: isStadfirma
      ? "I Skinnskatteberg täcker vi alla områden från centrala tätorten till de omgivande byarna. Vi känner till kommunens särskilda behov och levererar städtjänster av hög kvalitet."
      : "I Skinnskatteberg täcker vi alla områden från centrala tätorten till de omgivande byarna. Vi känner till kommunens särskilda behov och levererar flyttjänster av hög kvalitet.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [
      "Bohagsflytt privatflytt i hela Skinnskatteberg kommun",
      "Kontorsflytt och företagsflytt",
      "Utlandsflytt från Skinnskatteberg",
      "Packning och uppackning",
      "Flyttstädning",
      "Magasinering av bohag",
      "Bortforsling och återvinning"
    ],
    specialties: isStadfirma ? [
      "Städning av äldre hus och villor",
      "Industrilokalstädning",
      "Bergslagens särskilda miljöer"
    ] : [
      "Expertis på småstadsflytt",
      "Flytt mellan Bergslagsorter", 
      "Lokala transportlösningar"
    ],
    areas: [
      "Skinnskatteberg centrum", "Riddarhyttan", "Engelsberg", "Virsbo",
      "Ramnäs", "Ängelsberg", "Surahammar", "Hallstahammar"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Skinnskatteberg - Professionell ${serviceDescription} i Skinnskatteberg | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Skinnskatteberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Skinnskatteberg. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} skinnskatteberg, ${serviceDescription} skinnskatteberg, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} skinnskatteberg, ${isStadfirma ? 'städning' : 'flytt'} skinnskatteberg`}
        url={`https://smidigflytt365.se/stader/skinnskatteberg${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
