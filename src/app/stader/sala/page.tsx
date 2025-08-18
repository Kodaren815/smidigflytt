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
    title: `${serviceType} Sala - Professionell ${serviceDescription} i Sala | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Sala? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Sala. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} sala, ${serviceDescription} sala, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} sala, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} sala`,
    openGraph: {
      title: `${serviceType} Sala - Professionell ${serviceDescription} i Sala | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Sala. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SalaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Sala",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Sala är känt för sitt silvergruv-arv och vackra kulturmiljöer. Vi erbjuder professionella städtjänster i hela Sala kommun med fokus på personlig service."
      : "Sala är känt för sitt silvergruv-arv och vackra kulturmiljöer. Vi erbjuder professionella flyttjänster i hela Sala kommun med fokus på personlig service.",
    localInfo: isStadfirma
      ? "I Sala täcker vi alla områden från centrala staden till de pittoreska byarna i kommunen. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både äldre och moderna bostadsområden."
      : "I Sala täcker vi alla områden från centrala staden till de pittoreska byarna i kommunen. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både äldre och moderna bostadsområden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Sala kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Sala",
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
      "Specialister på historiska byggnader och kulturmiljöer",
      "Lokalkännedom i Sala silvergruveområde", 
      "Varsam hantering av antikviteter och värdeföremål",
      "Miljövänliga städmetoder"
    ] : [

      "Specialister på historiska byggnader och kulturmiljöer",
      "Lokalkännedom i Sala silvergruveområde", 
      "Varsam hantering av antikviteter och värdeföremål",
      "Flexibla lösningar för landsbygdens behov"
    
    ],
    areas: [

      "Sala centrum", "Ransta", "Möklinta", "Västerfärnebo", 
      "Heby", "Ängelsberg", "Tärna", "Kumla",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Sala - Professionell ${serviceDescription} i Sala | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Sala? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Sala. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} sala, ${serviceDescription} sala, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} sala, ${isStadfirma ? 'städning' : 'flytt'} sala`}
        url={`https://smidigflytt.se/stader/sala${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}