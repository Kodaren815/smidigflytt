import CityPage from '@/components/CityPage'

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
    title: `${serviceType} Uppsala - Professionell ${serviceDescription} i Uppsala | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Uppsala? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Uppsala. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} uppsala, ${serviceDescription} uppsala, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} uppsala, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} uppsala`,
    openGraph: {
      title: `${serviceType} Uppsala - Professionell ${serviceDescription} i Uppsala | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Uppsala. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function UppsalaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Uppsala",
    region: "Uppsala län",
    description: isStadfirma
      ? "Uppsala är Sveriges fjärde största stad med över 230 000 invånare och hem till ett av världens äldsta universitet. Vi erbjuder professionella städtjänster i hela Uppsala kommun."
      : "Uppsala är Sveriges fjärde största stad med över 230 000 invånare och hem till ett av världens äldsta universitet. Vi erbjuder professionella flyttjänster i hela Uppsala kommun.",
    localInfo: isStadfirma
      ? "I Uppsala täcker vi alla områden från historiska centrum till moderna studentbostäder och villaområden. Vi förstår studenternas och familjernas olika behov och anpassar våra tjänster därefter."
      : "I Uppsala täcker vi alla områden från historiska centrum till moderna studentbostäder och villaområden. Vi förstår studenternas och familjernas olika behov och anpassar våra tjänster därefter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Studentflytt och familjeflytt",
      "Flyttstädning för studentbostäder och lägenheter", 
      "Korttidsmagasinering under sommaren",
      "Kontorsflytt för universitet och företag",
      "Packning och uppackning",
      "Specialiserade studenttjänster"
    
    ],
    specialties: isStadfirma ? [
      "Studentstädning-experter med flexibla lösningar",
      "Historiska byggnader och känslig hantering", 
      "Campus-nära service och kunskap",
      "Miljövänliga städmetoder"
    ] : [

      "Studentflytt-experter med flexibla lösningar",
      "Historiska byggnader och känslig hantering", 
      "Campus-nära service och kunskap",
      "Anpassning till akademiska terminer"
    
    ],
    areas: [

      "Centrum", "Fålhagen", "Luthagen", "Eriksberg", 
      "Gottsunda", "Vaksala", "Sunnersta", "Stenhagen",
      "Enköping", "Håbo", "Tierp", "Östhammar"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}