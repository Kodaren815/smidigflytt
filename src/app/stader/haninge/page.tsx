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
    title: `${serviceType} Haninge - Professionell ${serviceDescription} i Haninge | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Haninge? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Haninge. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} haninge, ${serviceDescription} haninge, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} haninge, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} haninge`,
    openGraph: {
      title: `${serviceType} Haninge - Professionell ${serviceDescription} i Haninge | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Haninge. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function HaningePage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Haninge",
    region: "Stockholm",
    description: isStadfirma
      ? "Haninge är en kommun söder om Stockholm med över 95 000 invånare, känd för sin närhet till skärgården och moderna bostadsområden. Vi erbjuder professionella städtjänster i hela Haninge kommun."
      : "Haninge är en kommun söder om Stockholm med över 95 000 invånare, känd för sin närhet till skärgården och moderna bostadsområden. Vi erbjuder professionella flyttjänster i hela Haninge kommun.",
    localInfo: isStadfirma
      ? "I Haninge täcker vi alla områden från Handen och Brandbergen till Västerhaninge och Årsta. Vi har stor erfarenhet av städning i både moderna miljonprogramsområden och äldre villakvarter."
      : "I Haninge täcker vi alla områden från Handen och Brandbergen till Västerhaninge och Årsta. Vi har stor erfarenhet av flytt i både moderna miljonprogramsområden och äldre villakvarter.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Haninge kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Haninge",
      "Transport inom Stockholm och till skärgården",
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
      "Expertis på städning i skärgårdsnära miljöer",
      "Specialiserade på miljonprogramsområden", 
      "Professionell hantering av moderna bostadsområden",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på skärgårdsnära miljöer",
      "Specialiserade på miljonprogramsområden", 
      "Professionell hantering av moderna bostadsområden",
      "Erfarenhet av komplexa transportlösningar"
    
    ],
    areas: [

      "Handen", "Brandbergen", "Västerhaninge", "Årsta", 
      "Haninge centrum", "Vendelsö", "Rudalen", "Jordbro",
      "Tungelsta", "Ösmo", "Dalarö", "Muskö"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}