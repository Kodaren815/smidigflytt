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
    title: `${serviceType} Gnesta - Professionell ${serviceDescription} i Gnesta | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Gnesta? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Gnesta. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} gnesta, ${serviceDescription} gnesta, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} gnesta, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} gnesta`,
    openGraph: {
      title: `${serviceType} Gnesta - Professionell ${serviceDescription} i Gnesta | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Gnesta. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function GnestaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Gnesta",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Gnesta är en mindre kommun i Sörmland med vacker natur och lugn atmosfär. Vi erbjuder professionella städtjänster i hela Gnesta kommun."
      : "Gnesta är en mindre kommun i Sörmland med vacker natur och lugn atmosfär. Vi erbjuder professionella flyttjänster i hela Gnesta kommun.",
    localInfo: isStadfirma
      ? "I Gnesta täcker vi alla områden från tätorten till de vackra naturområdena. Vi hjälper ofta kunder i Järna, Årdala och Björnlunda och uppskattar den naturnära miljön och den personliga servicen."
      : "I Gnesta täcker vi alla områden från tätorten till de vackra naturområdena. Vi hjälper ofta kunder i Järna, Årdala och Björnlunda och uppskattar den naturnära miljön och den personliga servicen.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Gnesta kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Gnesta",
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
      "Specialister på mindre kommuner",
      "Lokalkännedom i naturnära miljöer", 
      "Personlig service och flexibilitet",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på mindre kommuner",
      "Lokalkännedom i naturnära miljöer", 
      "Personlig service och flexibilitet",
      "Miljövänliga transportlösningar"
    
    ],
    areas: [

      "Gnesta centrum", "Björnlunda", "Laxne", "Frustuna", 
      "Winö", "Aspnäs", "Stjärnholm", "Sånga",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Gnesta - Professionell ${serviceDescription} i Gnesta | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Gnesta? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Gnesta. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} gnesta, ${serviceDescription} gnesta, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} gnesta, ${isStadfirma ? 'städning' : 'flytt'} gnesta`}
        url={`https://smidigflytt365.se/stader/gnesta${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}