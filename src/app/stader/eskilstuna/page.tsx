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
    title: `${serviceType} Eskilstuna - Professionell ${serviceDescription} i Eskilstuna | Smidigflytt`,
    description: `Letar du efter en pålitlig ${serviceType.toLowerCase()} i Eskilstuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'}. RUT-avdrag och försäkring ingår.`,
    keywords: `${serviceType.toLowerCase()} eskilstuna, ${serviceDescription} eskilstuna, ${resolvedSearchParams.type === 'stadfirma' ? 'hemstäd' : 'flyttstädning'} eskilstuna, ${resolvedSearchParams.type === 'stadfirma' ? 'städning' : 'flytt'} eskilstuna`,
    openGraph: {
      title: `${serviceType} Eskilstuna - Professionell ${serviceDescription} i Eskilstuna | Smidigflytt`,
      description: `Trygg ${serviceDescription} och service i Eskilstuna. RUT-avdrag och försäkring ingår.`,
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default async function EskilstunaPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  
  const cityData = {
    name: "Eskilstuna",
    region: "Södermanlands län",
    description: isStadfirma
      ? "Eskilstuna är Södermanlands residensstad med rikt industriarv och modern utveckling. Vi erbjuder professionella städtjänster i hela Eskilstuna kommun."
      : "Eskilstuna är Södermanlands residensstad med rikt industriarv och modern utveckling. Vi erbjuder professionella flyttjänster i hela Eskilstuna kommun.",
    localInfo: isStadfirma
      ? "I Eskilstuna täcker vi alla områden från centrala staden till omkringliggande orter. Vi har gedigen kunskap om stadens förutsättningar för städtjänster och erbjuder specialiserade lösningar."
      : "I Eskilstuna täcker vi alla områden från centrala staden till omkringliggande orter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har gedigen kunskap om stadens logistiska förutsättningar.",
    services: isStadfirma ? [
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag",
      "Fönsterputsning",
      "Djuprengöring av hushåll",
      "Periodisk städning och underhåll"
    ] : [
      "Bohagsflytt privatflytt i hela Eskilstuna kommun",
      "Företagsflytt för industri och kontor",
      "Utlandsflytt från Eskilstuna",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler"
    ],
    specialties: isStadfirma ? [
      "Expertis på städning i industristäder",
      "Lokalkännedom i Sörmlands största stad", 
      "Flexibla städlösningar för både privat och företag",
      "Miljövänliga städmetoder"
    ] : [
      "Expertis på industristäders logistik",
      "Lokalkännedom i Sörmlands största stad", 
      "Flexibla lösningar för både privat och företag",
      "Snabba transporter inom regionen"
    ],
    areas: [
      "Eskilstuna centrum", "Torshälla", "Skogstorp", "Vilsta", 
      "Munktellstaden", "Råby", "Årby", "Kjula",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

  return <CityPage city={cityData} />
}
