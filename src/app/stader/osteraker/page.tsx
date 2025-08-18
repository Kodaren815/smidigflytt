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
    title: `${serviceType} Österåker - Professionell ${serviceDescription} i Österåker | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Österåker? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Österåker. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} österåker, ${serviceDescription} österåker, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} österåker, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} österåker`,
    openGraph: {
      title: `${serviceType} Österåker - Professionell ${serviceDescription} i Österåker | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Österåker. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function sterkerPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Österåker",
    region: "Stockholm",
    description: isStadfirma
      ? "Österåker är en kommun nordost om Stockholm med över 44 000 invånare, känd för sina vackra skärgårdsmiljöer och närhet till både stad och natur. Vi erbjuder professionella städtjänster i hela Österåker kommun."
      : "Österåker är en kommun nordost om Stockholm med över 44 000 invånare, känd för sina vackra skärgårdsmiljöer och närhet till både stad och natur. Vi erbjuder professionella flyttjänster i hela Österåker kommun.",
    localInfo: isStadfirma
      ? "I Österåker täcker vi alla områden från Åkersberga och Margretelund till Ljusterö och Rödlöga. Vi har stor erfarenhet av städning i skärgårdsmiljöer och känner väl till de städrelaterade utmaningarna."
      : "I Österåker täcker vi alla områden från Åkersberga och Margretelund till Ljusterö och Rödlöga. Vi har stor erfarenhet av flytt i skärgårdsmiljöer och känner väl till de logistiska utmaningarna.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Österåker kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Österåker",
      "Transport till skärgård och öar",
      "Båttransporter vid behov",
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
      "Expertis på städning i skärgårdstransporter",
      "Specialiserade på ö-logistik", 
      "Professionell hantering av båttransporter",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på skärgårdstransporter",
      "Specialiserade på ö-logistik", 
      "Professionell hantering av båttransporter",
      "Erfarenhet av komplexa skärgårdsförhållanden"
    
    ],
    areas: [

      "Åkersberga", "Margretelund", "Ljusterö", "Rödlöga", 
      "Täby kyrkby", "Östra Ryd", "Husby-Sjuhundra", "Rö",
      "Spillersboda", "Frötuna", "Björkö-Arholma", "Siarö"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Österåker - Professionell ${serviceDescription} i Österåker | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Österåker? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Österåker. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} osteraker, ${serviceDescription} osteraker, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} osteraker, ${isStadfirma ? 'städning' : 'flytt'} osteraker`}
        url={`https://smidigflytt.se/stader/osteraker${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}