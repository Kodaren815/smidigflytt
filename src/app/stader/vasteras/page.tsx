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
    title: `${serviceType} Västerås - Professionell ${serviceDescription} i Västerås | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Västerås? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Västerås. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} västerås, ${serviceDescription} västerås, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} västerås, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} västerås`,
    openGraph: {
      title: `${serviceType} Västerås - Professionell ${serviceDescription} i Västerås | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Västerås. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function VasterasPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  const cityData = {
    name: "Västerås",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Västerås är Västmanlands residensstad och en av Sveriges största städer med över 150 000 invånare. Vi erbjuder professionella städtjänster i hela Västerås kommun."
      : "Västerås är Västmanlands residensstad och en av Sveriges största städer med över 150 000 invånare. Vi erbjuder professionella flyttjänster i hela Västerås kommun.",
    localInfo: isStadfirma
      ? "I Västerås täcker vi alla områden från centrala staden till förorten som Hallstahammar och Surahammar. Vi känner till stadens bostadsområden och erbjuder specialiserad städservice för både gamla och nya stadsdelar."
      : "I Västerås täcker vi alla områden från centrala staden till förorten som Hallstahammar och Surahammar. Vi känner till stadens bostadsområden och kan navigera effektivt genom både gamla och nya stadsdelar.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll",
      "Trappstädning i flerfamiljshus"
    ] : [
      "Bohagsflytt privatflytt i hela Västerås kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Västerås",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Transport inom Västmanlands län"
    ],
    specialties: isStadfirma ? [
      "Specialister på städning i villa- och villaområden",
      "Effektiv städning av stora bostadsytor", 
      "Expertis på familje- och företagsstädning",
      "Flexibla städlösningar för Mälardalens behov"
    ] : [
      "Specialister på villa- och villaområden",
      "Effektiv hantering av långa transportvägar", 
      "Expertis på student- och familjeflytt",
      "Flexibla lösningar för Mälardalens behov"
    ],
    areas: [
      "Centrum", "Väster", "Bäckby", "Malmaberg", 
      "Viksäng", "Lundby", "Östhaga", "Tillberga",
      "Barkarby", "Skiljebo", "Irsta", "Hallstahammar"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}
