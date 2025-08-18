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
    title: `${serviceType} Skultuna - Professionell ${serviceDescription} i Skultuna | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Skultuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Skultuna. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} skultuna, ${serviceDescription} skultuna, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} skultuna, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} skultuna`,
    openGraph: {
      title: `${serviceType} Skultuna - Professionell ${serviceDescription} i Skultuna | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Skultuna. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SkultunaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Skultuna",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Skultuna är känt för sin traditionella mässingsbruk och hantverkstradition. Vi erbjuder professionella städtjänster i hela Skultuna med respekt för stadens kulturarv."
      : "Skultuna är känt för sin traditionella mässingsbruk och hantverkstradition. Vi erbjuder professionella flyttjänster i hela Skultuna med respekt för stadens kulturarv.",
    localInfo: isStadfirma
      ? "I Skultuna täcker vi alla områden från den historiska bruksmiljön till moderna bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens hantverkstraditioner."
      : "I Skultuna täcker vi alla områden från den historiska bruksmiljön till moderna bostadskvarter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och uppskattar stadens hantverkstraditioner.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Skultuna kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Skultuna",
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
      "Specialister på bruksmiljöer och hantverkstradition",
      "Varsam hantering av konsthantverk och antikviteter", 
      "Lokalkännedom i Sveriges mässingsbruksområden",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på bruksmiljöer och hantverkstradition",
      "Varsam hantering av konsthantverk och antikviteter", 
      "Lokalkännedom i Sveriges mässingsbruksområden",
      "Respektfull service i kulturhistoriska miljöer"
    
    ],
    areas: [

      "Skultuna centrum", "Skultuna bruksområde", "Enviken", "Kärrbo", 
      "Tortuna", "Ängelsberg", "Virsbo", "Strömsholm",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Skultuna - Professionell ${serviceDescription} i Skultuna | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Skultuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Skultuna. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} skultuna, ${serviceDescription} skultuna, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} skultuna, ${isStadfirma ? 'städning' : 'flytt'} skultuna`}
        url={`https://smidigflytt365.se/stader/skultuna${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}