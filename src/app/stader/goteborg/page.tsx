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
    title: `${serviceType} Göteborg - Professionell ${serviceDescription} i Göteborg | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Göteborg? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Göteborg. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} göteborg, ${serviceDescription} göteborg, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} göteborg, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} göteborg`,
    openGraph: {
      title: `${serviceType} Göteborg - Professionell ${serviceDescription} i Göteborg | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Göteborg. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function GteborgPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Göteborg",
    region: "Västra Götalands län",
    description: isStadfirma
      ? "Göteborg är Sveriges andra största stad och Västkustens huvudstad med över 1 miljon invånare i storstadsområdet. Vi erbjuder professionella städtjänster i hela Göteborgsregionen."
      : "Göteborg är Sveriges andra största stad och Västkustens huvudstad med över 1 miljon invånare i storstadsområdet. Vi erbjuder professionella flyttjänster i hela Göteborgsregionen.",
    localInfo: isStadfirma
      ? "I Göteborg täcker vi alla stadsdelar från Centrum till Hisingen, från Majorna till Angered. Vi känner till stadens utmaningar som branta backar, begränsad parkering och komplicerade trafikförhållanden."
      : "I Göteborg täcker vi alla stadsdelar från Centrum till Hisingen, från Majorna till Angered. Vi känner till stadens utmaningar som branta backar, begränsad parkering och komplicerade trafikförhållanden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [

      "Flytthjälp i alla Göteborgs stadsdelar",
      "Flyttstädning för lägenhet och kontor", 
      "Magasinering i säkra lokaler",
      "Kontorsflytt i city och förorter",
      "Packning och uppackning",
      "Specialtransport över broar"
    
    ],
    specialties: isStadfirma ? [
      "Backspecialister för Göteborgs kuperade terräng",
      "Bro- och tunnelexperter (Älvsborgsbron", 
      "Göta älvbron)",
      "Miljövänliga städmetoder"
    ] : [

      "Backspecialister för Göteborgs kuperade terräng",
      "Bro- och tunnelexperter (Älvsborgsbron, Göta älvbron)", 
      "Spårvägs- och kollektivtrafiknavigering",
      "Hamn- och industriområdeskunskap"
    
    ],
    areas: [

      "Centrum", "Majorna-Linné", "Hisingen", "Örgryte-Härlanda", 
      "Lundby", "Angered", "Askim-Frölunda-Högsbo", "Västra Göteborg",
      "Partille", "Mölndal", "Lerum", "Kungsbacka"
    
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}