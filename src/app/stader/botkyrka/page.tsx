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
    title: `${serviceType} Botkyrka - Professionell ${serviceDescription} i Botkyrka | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Botkyrka? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Botkyrka. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} botkyrka, ${serviceDescription} botkyrka, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} botkyrka, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} botkyrka`,
    openGraph: {
      title: `${serviceType} Botkyrka - Professionell ${serviceDescription} i Botkyrka | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Botkyrka. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function BotkyrkaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Botkyrka",
    region: "Stockholms län",
    description: isStadfirma 
      ? "Botkyrka är en kommun söder om Stockholm med över 90 000 invånare, känd för sin mångfald och närhet till både storstaden och naturen. Vi erbjuder professionella städtjänster i hela Botkyrka kommun."
      : "Botkyrka är en kommun söder om Stockholm med över 90 000 invånare, känd för sin mångfald och närhet till både storstaden och naturen. Vi erbjuder professionella flyttjänster i hela Botkyrka kommun.",
    localInfo: isStadfirma
      ? "I Botkyrka täcker vi alla områden från Tumba och Fittja till Hallunda och Alby. Vi har stor erfarenhet av städning i både moderna bostadsområden och traditionella villakvarter, samt känner väl till kommunens varierade städbehov."
      : "I Botkyrka täcker vi alla områden från Tumba och Fittja till Hallunda och Alby. Vi har stor erfarenhet av flytt i både moderna bostadsområden och traditionella villakvarter, samt känner väl till kommunens varierade karaktär.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll",
      "Specialstädning för flerfamiljshus"
    ] : [
      "Bohagsflytt privatflytt i hela Botkyrka kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Botkyrka",
      "Transport inom Stockholm och omgivande kommuner",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler"
    ],
    specialties: isStadfirma ? [
      "Mångfald och integration",
      "Specialiserade på städning i flerfamiljshus", 
      "Professionell städning av större bostadsområden",
      "Erfarenhet av komplexa städlogistik"
    ] : [
      "Mångfald och integration",
      "Specialiserade på flytt i flerfamiljshus", 
      "Professionell hantering av större bostadsområden",
      "Erfarenhet av komplexa logistiklösningar"
    ],
    areas: [
      "Tumba", "Fittja", "Hallunda", "Alby", 
      "Norsborg", "Tullinge", "Salem", "Rönninge",
      "Eriksberg", "Botkyrka centrum", "Grödinge", "Vårby"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Botkyrka - Professionell ${serviceDescription} i Botkyrka | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Botkyrka? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Botkyrka. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} botkyrka, ${serviceDescription} botkyrka, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} botkyrka, ${isStadfirma ? 'städning' : 'flytt'} botkyrka`}
        url={`https://smidigflytt.se/stader/botkyrka${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
