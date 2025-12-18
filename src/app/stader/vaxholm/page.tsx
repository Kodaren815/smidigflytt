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
    title: `${serviceType} Vaxholm - Professionell ${serviceDescription} i Vaxholm | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Vaxholm? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Vaxholm. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} vaxholm, ${serviceDescription} vaxholm, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} vaxholm, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} vaxholm`,
    openGraph: {
      title: `${serviceType} Vaxholm - Professionell ${serviceDescription} i Vaxholm | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Vaxholm. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function VaxholmPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Vaxholm",
    region: "Stockholms län",
    description: isStadfirma
      ? "Vaxholm är Sveriges skärgårdsstad med unik karaktär och vacker miljö vid vatten. Vi erbjuder professionella städtjänster i hela Vaxholm kommun, anpassade för skärgårdsmiljöer."
      : "Vaxholm är Sveriges skärgårdsstad med unik karaktär och vacker miljö vid vatten. Vi erbjuder professionella flyttjänster i hela Vaxholm kommun, anpassade för skärgårdsmiljöer.",
    localInfo: isStadfirma
      ? "I Vaxholm täcker vi alla områden från den charmiga stadskärnan till öarna och villaområdena. Vi har erfarenhet av skärgårdsmiljöers speciella förutsättningar och saltpåverkan."
      : "I Vaxholm täcker vi alla områden från den charmiga stadskärnan till öarna och villaområdena. Vi har erfarenhet av skärgårdsmiljöers speciella förutsättningar och båttransporter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning med saltvattenspecialitet",
      "Djuprengöring av hushåll",
      "Sommarstugestädning"
    ] : [
      "Bohagsflytt privatflytt i hela Vaxholm kommun",
      "Kontorsflytt och företagsflytt",
      "Utlandsflytt från Vaxholm",
      "Packning och uppackning",
      "Flyttstädning",
      "Magasinering av bohag",
      "Bortforsling och återvinning"
    ],
    specialties: isStadfirma ? [
      "Skärgårdsmiljöer",
      "Saltvattensskador", 
      "Historiska träbyggnader"
    ] : [
      "Expertis på skärgårdsflytt",
      "Båttransporter", 
      "Öflytt och sommarstugor"
    ],
    areas: [
      "Vaxholm centrum", "Resarö", "Rindö", "Tynningö",
      "Bogesund", "Ramsö", "Vaxön", "Kullö"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Vaxholm - Professionell ${serviceDescription} i Vaxholm | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Vaxholm? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Vaxholm. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} vaxholm, ${serviceDescription} vaxholm, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} vaxholm, ${isStadfirma ? 'städning' : 'flytt'} vaxholm`}
        url={`https://smidigflytt365.se/stader/vaxholm${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
