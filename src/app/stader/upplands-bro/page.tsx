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
    title: `${serviceType} Upplands-Bro - Professionell ${serviceDescription} i Upplands-Bro | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Upplands-Bro? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Upplands-Bro. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} upplands-bro, ${serviceDescription} upplands-bro, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} upplands-bro, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} upplands-bro`,
    openGraph: {
      title: `${serviceType} Upplands-Bro - Professionell ${serviceDescription} i Upplands-Bro | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Upplands-Bro. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function UpplandsBroPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Upplands-Bro",
    region: "Stockholm",
    description: isStadfirma
      ? "Upplands-Bro är en kommun väster om Stockholm med över 28 000 invånare, känd för sina historiska miljöer och närhet till Mälaren. Vi erbjuder professionella städtjänster i hela Upplands-Bro kommun."
      : "Upplands-Bro är en kommun väster om Stockholm med över 28 000 invånare, känd för sina historiska miljöer och närhet till Mälaren. Vi erbjuder professionella flyttjänster i hela Upplands-Bro kommun.",
    localInfo: isStadfirma
      ? "I Upplands-Bro täcker vi alla områden från Kungsängen och Tibble till Brunna och Håbo-Tibble. Vi har stor erfarenhet av städning i både historiska och moderna miljöer."
      : "I Upplands-Bro täcker vi alla områden från Kungsängen och Tibble till Brunna och Håbo-Tibble. Vi har stor erfarenhet av flytt i både historiska och moderna miljöer.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Upplands-Bro kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Upplands-Bro",
      "Transport inom Stockholm och till Mälardalen",
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
      "Expertis på städning i historiska miljöer",
      "Specialiserade på Mälarnära områden", 
      "Professionell hantering av kulturmiljöer",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på historiska miljöer",
      "Specialiserade på Mälarnära områden", 
      "Professionell hantering av kulturmiljöer",
      "Erfarenhet av små kommuner"
    
    ],
    areas: [

      "Kungsängen", "Tibble", "Brunna", "Håbo-Tibble", 
      "Bro kyrka", "Bro industriområde", "Lejondal", "Tibblemalm",
      "Håbo", "Ekerö-Bro", "Övre Malma", "Utter"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Upplands-Bro - Professionell ${serviceDescription} i Upplands-Bro | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Upplands-Bro? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Upplands-Bro. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} upplands-bro, ${serviceDescription} upplands-bro, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} upplands-bro, ${isStadfirma ? 'städning' : 'flytt'} upplands-bro`}
        url={`https://smidigflytt.se/stader/upplands-bro${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}