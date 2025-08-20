import CityPage from '@/components/CityPage'
import SEO from '@/components/SEO'

interface Props {
  searchParams: Promise<{
    type?: 'flyttfirma' | 'stadfirma'
  }>
}

export async function generateMetadata({ searchParams }: Props) {
  
  const resolvedSearchParams = await searchParams
  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  // const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'
  
  // Enhanced SEO metadata for Eskilstuna with targeted keywords
  const seoData = isStadfirma ? {
    title: `Städfirma Eskilstuna | Smidigflytt - RUT-avdrag & försäkrad städservice`,
    description: `Professionell städfirma i Eskilstuna. RUT-avdrag, försäkring och fast pris. Hemstäd, kontorsstäd & flyttstädning i hela Eskilstuna. Få offert idag!`,
    keywords: `städfirma eskilstuna, städhjälp eskilstuna, hemstäd eskilstuna, kontorsstäd eskilstuna, flyttstädning eskilstuna, RUT-avdrag städning eskilstuna, prisvärd städfirma södermanland, byggstädning eskilstuna`
  } : {
    title: `Flyttfirma Eskilstuna | Smidigflytt - Trygg flytt med RUT-avdrag`,
    description: `Flyttfirma i Eskilstuna med försäkring och RUT-avdrag. Fast pris, packhjälp och flyttstädning. Billig och trygg flytthjälp i hela Eskilstuna. Få kostnadsfri offert!`,
    keywords: `flyttfirma eskilstuna, flytthjälp eskilstuna, billig flyttfirma eskilstuna, RUT-avdrag flytt eskilstuna, bohagsflytt eskilstuna, packhjälp eskilstuna, flyttstädning eskilstuna, trygg flyttfirma södermanland`
  }
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: "website",
      locale: "sv_SE",
      images: [
        {
          url: `/images/${isStadfirma ? 'stadfirma' : 'flyttfirma'}-eskilstuna.jpg`,
          width: 1200,
          height: 630,
          alt: `${serviceType} Eskilstuna - Smidigflytt`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
    },
    alternates: {
      canonical: `/stader/eskilstuna${isStadfirma ? '?type=stadfirma' : ''}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
      ? "Eskilstuna är Södermanlands residensstad med rikt industriarv och modern utveckling. Som etablerad städfirma i Eskilstuna erbjuder vi professionella städtjänster med RUT-avdrag och försäkring i hela Eskilstuna kommun. Vi levererar alltid trygg städservice till fast pris utan dolda kostnader."
      : "Eskilstuna är Södermanlands residensstad med rikt industriarv och modern utveckling. Som etablerad flyttfirma i Eskilstuna erbjuder vi professionella flytttjänster med RUT-avdrag och försäkring i hela Eskilstuna kommun. Vi levererar alltid trygg flyttservice till fast pris utan dolda kostnader.",
    localInfo: isStadfirma
      ? "Som lokalt etablerad städfirma i Eskilstuna täcker vi alla områden från centrala staden till omkringliggande orter som Nyfors, Hällbybrunn och Skiftinge. Vi har gedigen kunskap om stadens olika bostadsområden och erbjuder specialiserad städservice med RUT-avdrag som gör att du får professionell hjälp till reducerat pris."
      : "Som lokalt etablerad flyttfirma i Eskilstuna täcker vi alla områden från centrala staden till omkringliggande orter som Nyfors, Hällbybrunn och Skiftinge. Vi har gedigen kunskap om stadens logistiska förutsättningar och erbjuder flytthjälp med RUT-avdrag som gör att du får professionell service till reducerat pris.",
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

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Eskilstuna - Professionell ${serviceDescription} i Eskilstuna | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Eskilstuna? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Eskilstuna. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} eskilstuna, ${serviceDescription} eskilstuna, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} eskilstuna, ${isStadfirma ? 'städning' : 'flytt'} eskilstuna`}
        url={`https://smidigflytt365.se/stader/eskilstuna${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
