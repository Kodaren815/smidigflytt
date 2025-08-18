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
    title: `${serviceType} Köping - Professionell ${serviceDescription} i Köping | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Köping? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Köping. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} köping, ${serviceDescription} köping, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} köping, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} köping`,
    openGraph: {
      title: `${serviceType} Köping - Professionell ${serviceDescription} i Köping | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Köping. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function KpingPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Köping",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Köping är en charmig stad i Västmanland med rikt historiskt arv och vacker natur vid Mälaren. Vi erbjuder professionella städtjänster i hela Köping kommun."
      : "Köping är en charmig stad i Västmanland med rikt historiskt arv och vacker natur vid Mälaren. Vi erbjuder professionella flyttjänster i hela Köping kommun.",
    localInfo: isStadfirma
      ? "I Köping täcker vi alla områden från centrala staden till omgivande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och känner till de lokala förhållandena väl."
      : "I Köping täcker vi alla områden från centrala staden till omgivande byar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och känner till de lokala förhållandena väl.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Köping kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Köping",
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
      "Expertis på städning i småstadsstädning och personlig service",
      "Lokalkännedom i Köping och omgivning", 
      "Flexibla lösningar för villa- och lägenhetsområden",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på småstadsflytt och personlig service",
      "Lokalkännedom i Köping och omgivning", 
      "Flexibla lösningar för villa- och lägenhetsområden",
      "Snabba transporter inom Mälardalen"
    
    ],
    areas: [

      "Köping centrum", "Kolbäck", "Munktorp", "Riddaryttan", 
      "Kolbäcks-Tibble", "Ramnäs", "Övre Sörby", "Orresta",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Koping - Professionell ${serviceDescription} i Koping | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Koping? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Koping. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} koping, ${serviceDescription} koping, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} koping, ${isStadfirma ? 'städning' : 'flytt'} koping`}
        url={`https://smidigflytt.se/stader/koping${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}