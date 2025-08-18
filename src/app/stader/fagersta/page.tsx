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
    title: `${serviceType} Fagersta - Professionell ${serviceDescription} i Fagersta | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Fagersta? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Fagersta. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} fagersta, ${serviceDescription} fagersta, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} fagersta, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} fagersta`,
    openGraph: {
      title: `${serviceType} Fagersta - Professionell ${serviceDescription} i Fagersta | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Fagersta. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function FagerstaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Fagersta",
    region: "Västmanlands län",
    description: isStadfirma 
      ? "Fagersta är en industristad med stolt järnbrukstradition och modern utveckling. Vi erbjuder professionella städtjänster i hela Fagersta kommun."
      : "Fagersta är en industristad med stolt järnbrukstradition och modern utveckling. Vi erbjuder professionella flyttjänster i hela Fagersta kommun.",
    localInfo: isStadfirma
      ? "I Fagersta täcker vi alla områden från industri- till bostadskvarter. Vi förstår de unika städbehoven i denna industrikommun och erbjuder specialiserade städlösningar."
      : "I Fagersta täcker vi alla områden från industri- till bostadskvarter. Vi hjälper ofta kunder med flytt och förstår de unika behoven i denna industrikommun.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll",
      "Städning av industrianläggningar"
    ] : [
      "Bohagsflytt privatflytt i hela Fagersta kommun",
      "Företagsflytt för industri- och lokalföretag",
      "Utlandsflytt från Fagersta",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Industriell utrustningsflyt"
    ],
    specialties: isStadfirma ? [
      "Expertis på industriell städning",
      "Lokalkännedom i Fagerstas industriområden", 
      "Flexibla tider för skiftarbetare",
      "Specialiserad städning för järnbruksbygden"
    ] : [
      "Expertis på industriflytt och tung utrustning",
      "Lokalkännedom i Fagerstas industriområden", 
      "Flexibla tider för skiftarbetare",
      "Specialiserade transporter för järnbruksbygden"
    ],
    areas: [
      "Fagersta centrum", "Ängelsberg", "Västanfors", "Ramnäs", 
      "Virsbo", "Millhög", "Österby", "Södra Fagersta"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Fagersta - Professionell ${serviceDescription} i Fagersta | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Fagersta? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Fagersta. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} fagersta, ${serviceDescription} fagersta, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} fagersta, ${isStadfirma ? 'städning' : 'flytt'} fagersta`}
        url={`https://smidigflytt.se/stader/fagersta${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
