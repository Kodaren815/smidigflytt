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
    title: `${serviceType} Sigtuna - Professionell ${serviceDescription} i Sigtuna | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Sigtuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Sigtuna. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} sigtuna, ${serviceDescription} sigtuna, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} sigtuna, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} sigtuna`,
    openGraph: {
      title: `${serviceType} Sigtuna - Professionell ${serviceDescription} i Sigtuna | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Sigtuna. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function SigtunaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Sigtuna",
    region: "Stockholm",
    description: isStadfirma
      ? "Sigtuna är en kommun nordväst om Stockholm med över 47 000 invånare, känd som Sveriges äldsta stad och för sin närhet till Arlanda. Vi erbjuder professionella städtjänster i hela Sigtuna kommun."
      : "Sigtuna är en kommun nordväst om Stockholm med över 47 000 invånare, känd som Sveriges äldsta stad och för sin närhet till Arlanda. Vi erbjuder professionella flyttjänster i hela Sigtuna kommun.",
    localInfo: isStadfirma
      ? "I Sigtuna täcker vi alla områden från Sigtuna stad och Märsta till Rosersberg och Arlanda. Vi har stor erfarenhet av städning runt flygplatsen och historiska miljöer."
      : "I Sigtuna täcker vi alla områden från Sigtuna stad och Märsta till Rosersberg och Arlanda. Vi har stor erfarenhet av flytt runt flygplatsen och historiska miljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Sigtuna kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Sigtuna och Arlanda",
      "Transport till och från Arlanda flygplats",
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
      "Expertis på städning i flygplatsnära logistik",
      "Specialiserade på historiska miljöer", 
      "Professionell hantering av internationella städning",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på flygplatsnära logistik",
      "Specialiserade på historiska miljöer", 
      "Professionell hantering av internationella flytt",
      "Erfarenhet av Arlanda-transporter"
    
    ],
    areas: [

      "Sigtuna stad", "Märsta", "Rosersberg", "Arlanda", 
      "Steninge", "Odensala", "Skå", "Upplands-Bro",
      "Håbo-Tibble", "Venngarn", "Alsike", "Skokloster"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}