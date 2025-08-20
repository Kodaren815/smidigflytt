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
    title: `${serviceType} Kungsör - Professionell ${serviceDescription} i Kungsör | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Kungsör? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Kungsör. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} kungsör, ${serviceDescription} kungsör, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} kungsör, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} kungsör`,
    openGraph: {
      title: `${serviceType} Kungsör - Professionell ${serviceDescription} i Kungsör | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Kungsör. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function KungsrPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Kungsör",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Kungsör är en pittoresk tätort vid Mälaren med vacker natur och lugn atmosfär. Vi erbjuder professionella städtjänster i hela Kungsör kommun."
      : "Kungsör är en pittoresk tätort vid Mälaren med vacker natur och lugn atmosfär. Vi erbjuder professionella flyttjänster i hela Kungsör kommun.",
    localInfo: isStadfirma
      ? "I Kungsör täcker vi alla områden från centrala tätorten till vackra Mälarområdena. Vi hjälper ofta kunder i Valdemarsvik, Ärla och Tortuna och uppskattar den naturnära miljön."
      : "I Kungsör täcker vi alla områden från centrala tätorten till vackra Mälarområdena. Vi hjälper ofta kunder i Valdemarsvik, Ärla och Tortuna och uppskattar den naturnära miljön.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Kungsör kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Kungsör",
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
      "Specialister på Mälaröernas unika förhållanden",
      "Lokalkännedom vid vatten och naturområden", 
      "Varsam transport i känsliga miljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på Mälaröernas unika förhållanden",
      "Lokalkännedom vid vatten och naturområden", 
      "Varsam transport i känsliga miljöer",
      "Flexibel service för sommarstugor och fritidshus"
    
    ],
    areas: [

      "Kungsör centrum", "Kungsör-Munktorp", "Valsta", "Segersäng", 
      "Aspnäs", "Ölsta", "Tibble", "Härad",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Kungsor - Professionell ${serviceDescription} i Kungsor | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Kungsor? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Kungsor. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} kungsor, ${serviceDescription} kungsor, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} kungsor, ${isStadfirma ? 'städning' : 'flytt'} kungsor`}
        url={`https://smidigflytt365.se/stader/kungsor${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}