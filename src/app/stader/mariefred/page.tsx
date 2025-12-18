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
    title: `${serviceType} Mariefred - Professionell ${serviceDescription} i Mariefred | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Mariefred? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Mariefred. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} mariefred, ${serviceDescription} mariefred, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} mariefred, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} mariefred`,
    openGraph: {
      title: `${serviceType} Mariefred - Professionell ${serviceDescription} i Mariefred | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Mariefred. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function MariefredPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Mariefred",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Mariefred är en vacker småstad vid Mälaren med rikt kulturarv och charmig bebyggelse. Vi erbjuder professionella städtjänster i hela Mariefred med omsorg om stadens historiska miljöer."
      : "Mariefred är en vacker småstad vid Mälaren med rikt kulturarv och charmig bebyggelse. Vi erbjuder professionella flyttjänster i hela Mariefred med omsorg om stadens historiska miljöer.",
    localInfo: isStadfirma
      ? "I Mariefred täcker vi alla områden från den vackra stadskärnan vid Gripsholms slott till villaområdena och moderna bostadsområden. Vi har stor respekt för stadens kulturhistoriska värden."
      : "I Mariefred täcker vi alla områden från den vackra stadskärnan vid Gripsholms slott till villaområdena och moderna bostadsområden. Vi har stor respekt för stadens kulturhistoriska värden.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Historiska byggnaders specialstädning"
    ] : [
      "Bohagsflytt privatflytt i hela Mariefred kommun",
      "Kontorsflytt och företagsflytt",
      "Utlandsflytt från Mariefred",
      "Packning och uppackning",
      "Flyttstädning",
      "Magasinering av bohag",
      "Bortforsling och återvinning"
    ],
    specialties: isStadfirma ? [
      "Kulturhistoriska byggnader",
      "Äldre stadsmiljöer", 
      "Slottsmiljöer och museer"
    ] : [
      "Expertis på historiska byggnader",
      "Flytt vid Mälaren", 
      "Varsam hantering av antikviteter"
    ],
    areas: [
      "Mariefred centrum", "Gripsholm", "Kärnbo", "Läggesta",
      "Strängnäs", "Åkers styckebruk", "Stallarholmen", "Torshälla"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Mariefred - Professionell ${serviceDescription} i Mariefred | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Mariefred? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Mariefred. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} mariefred, ${serviceDescription} mariefred, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} mariefred, ${isStadfirma ? 'städning' : 'flytt'} mariefred`}
        url={`https://smidigflytt365.se/stader/mariefred${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
