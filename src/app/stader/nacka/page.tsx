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
    title: `${serviceType} Nacka - Professionell ${serviceDescription} i Nacka | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Nacka? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Nacka. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} nacka, ${serviceDescription} nacka, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} nacka, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} nacka`,
    openGraph: {
      title: `${serviceType} Nacka - Professionell ${serviceDescription} i Nacka | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Nacka. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function NackaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Nacka",
    region: "Stockholm",
    description: isStadfirma
      ? "Nacka är en kommun sydost om Stockholm med över 100 000 invånare, känd för sin mix av moderna bostadsområden och vacker skärgårdsnatur. Vi erbjuder professionella städtjänster i hela Nacka kommun."
      : "Nacka är en kommun sydost om Stockholm med över 100 000 invånare, känd för sin mix av moderna bostadsområden och vacker skärgårdsnatur. Vi erbjuder professionella flyttjänster i hela Nacka kommun.",
    localInfo: isStadfirma
      ? "I Nacka täcker vi alla områden från Sickla och Järla till Boo och Saltsjöbaden. Vi har stor erfarenhet av städning i både moderna lägenhetsområden och traditionella villakvarter, samt känner väl till kommunens varierade karaktär."
      : "I Nacka täcker vi alla områden från Sickla och Järla till Boo och Saltsjöbaden. Vi har stor erfarenhet av flytt i både moderna lägenhetsområden och traditionella villakvarter, samt känner väl till kommunens varierade karaktär.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Bohagsflytt privatflytt i hela Nacka kommun",
      "Företagsflytt för alla typer av verksamheter",
      "Utlandsflytt från Nacka",
      "Transport till skärgårdsområden",
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
      "Expertis på städning i skärgårdsmiljöer",
      "Specialiserade på moderna bostadsområden", 
      "Professionell hantering av kuperad terräng",
      "Miljövänliga städmetoder"
    ] : [

      "Expertis på skärgårdsmiljöer",
      "Specialiserade på moderna bostadsområden", 
      "Professionell hantering av kuperad terräng",
      "Erfarenhet av båtransporter vid behov"
    
    ],
    areas: [

      "Nacka centrum", "Sickla", "Järla", "Boo", 
      "Saltsjöbaden", "Fisksätra", "Duvnäs", "Neglinge",
      "Älta", "Tungelsta", "Gustavsberg", "Värmdö"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}