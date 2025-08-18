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
    title: `${serviceType} Norberg - Professionell ${serviceDescription} i Norberg | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Norberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Norberg. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} norberg, ${serviceDescription} norberg, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} norberg, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} norberg`,
    openGraph: {
      title: `${serviceType} Norberg - Professionell ${serviceDescription} i Norberg | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Norberg. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function NorbergPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Norberg",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Norberg är en historisk gruvstad med rikt kulturarv och vacker bergslandskap. Vi erbjuder professionella städtjänster i hela Norberg kommun."
      : "Norberg är en historisk gruvstad med rikt kulturarv och vacker bergslandskap. Vi erbjuder professionella flyttjänster i hela Norberg kommun.",
    localInfo: isStadfirma
      ? "I Norberg täcker vi alla områden från den historiska stadskärnan till omgivande bergsbyar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens industrihistoriska arv."
      : "I Norberg täcker vi alla områden från den historiska stadskärnan till omgivande bergsbyar. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och respekterar stadens industrihistoriska arv.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Norberg kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Norberg",
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
      "Specialister på bergsområdenes utmaningar",
      "Lokalkännedom i gruv- och industrihistoriska områden", 
      "Flexibla lösningar för kuperad terräng",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på bergsområdenes utmaningar",
      "Lokalkännedom i gruv- och industrihistoriska områden", 
      "Flexibla lösningar för kuperad terräng",
      "Erfarna med kulturhistoriska byggnader"
    
    ],
    areas: [

      "Norberg centrum", "Kloten", "Kärrgruvan", "Tobo", 
      "Riddarhyttan", "Karaktären", "Rådansberg", "Järnskäl",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Norberg - Professionell ${serviceDescription} i Norberg | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Norberg? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Norberg. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} norberg, ${serviceDescription} norberg, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} norberg, ${isStadfirma ? 'städning' : 'flytt'} norberg`}
        url={`https://smidigflytt365.se/stader/norberg${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}