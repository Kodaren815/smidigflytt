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
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'
  
  // Enhanced SEO metadata with targeted local keywords
  const seoData = isStadfirma ? {
    title: `Städfirma Västerås | Smidigflytt - RUT-avdrag & försäkrad städservice`,
    description: `Professionell städfirma i Västerås. RUT-avdrag, försäkring och fast pris. Hemstäd, kontorsstäd & flyttstädning i hela Västerås. Få offert idag!`,
    keywords: `städfirma västerås, städhjälp västerås, hemstäd västerås, kontorsstäd västerås, flyttstädning västerås, RUT-avdrag städning västerås, prisvärd städfirma västmanland, byggstädning västerås`
  } : {
    title: `Flyttfirma Västerås | Smidigflytt - Trygg flytt med RUT-avdrag`,
    description: `Flyttfirma i Västerås med försäkring och RUT-avdrag. Fast pris, packhjälp och flyttstädning. Billig och trygg flytthjälp i hela Västerås. Få kostnadsfri offert!`,
    keywords: `flyttfirma västerås, flytthjälp västerås, billig flyttfirma västerås, RUT-avdrag flytt västerås, bohagsflytt västerås, packhjälp västerås, flyttstädning västerås, trygg flyttfirma västmanland`
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
          url: `/images/${isStadfirma ? 'stadfirma' : 'flyttfirma'}-vasteras.jpg`,
          width: 1200,
          height: 630,
          alt: `${serviceType} Västerås - Smidigflytt`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
    },
    alternates: {
      canonical: `/stader/vasteras${isStadfirma ? '?type=stadfirma' : ''}`,
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

export default async function VasterasPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const isStadfirma = resolvedSearchParams.type === 'stadfirma'
  const cityData = {
    name: "Västerås",
    region: "Västmanlands län",
    description: isStadfirma
      ? "Västerås är Västmanlands residensstad och en av Sveriges största städer med över 150 000 invånare. Som etablerad städfirma i Västerås erbjuder vi professionella städtjänster med RUT-avdrag och försäkring i hela Västerås kommun. Vi känner staden väl och levererar alltid trygg städservice till fast pris."
      : "Västerås är Västmanlands residensstad och en av Sveriges största städer med över 150 000 invånare. Som etablerad flyttfirma i Västerås erbjuder vi professionella flyttjänster med RUT-avdrag och försäkring i hela Västerås kommun. Vi känner staden väl och levererar alltid trygg flyttservice till fast pris.",
    localInfo: isStadfirma
      ? "Som lokalt etablerad städfirma i Västerås täcker vi alla områden från centrala staden till förorterna som Hallstahammar och Surahammar. Vi känner till Västerås bostadsområden och kan erbjuda specialiserad städservice för både äldre stadsdelar och moderna villaområden. Vår städhjälp med RUT-avdrag gör att du får professionell service till reducerat pris."
      : "Som lokalt etablerad flyttfirma i Västerås täcker vi alla områden från centrala staden till förorterna som Hallstahammar och Surahammar. Vi känner till Västerås bostadsområden och kan navigera effektivt genom både gamla och nya stadsdelar. Vår flytthjälp med RUT-avdrag gör att du får professionell service till reducerat pris.",
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
      "RUT-avdragsgill städservice i hela Västerås",
      "Specialister på flyttstädning för villa och lägenhet", 
      "Hemstäd och kontorsstäd med försäkring",
      "Byggstädning och djuprengöring",
      "Flexibla tider - även kvällar och helger",
      "Fast pris utan dolda kostnader"
    ] : [
      "RUT-avdragsgill flyttservice i hela Västerås",
      "Specialister på villa- och lägenhetsflyttar", 
      "Packhjälp och bärhjälp med försäkring",
      "Student- och familjeflytt inom Mälardalen",
      "Flexibla tider - även kvällar och helger", 
      "Fast pris utan dolda kostnader"
    ],
    areas: [
      "Centrum", "Väster", "Bäckby", "Malmaberg", 
      "Viksäng", "Lundby", "Östhaga", "Tillberga",
      "Barkarby", "Skiljebo", "Irsta", "Hallstahammar"
    ],
    serviceType: isStadfirma ? 'städfirma' as const : 'flyttfirma' as const
  }

    const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={`${serviceType} Västerås - Professionell ${serviceDescription} i Västerås | Smidigflytt`}
        description={`Letar du efter en pålitlig ${serviceType.toLowerCase()} i Västerås? Smidigflytt erbjuder trygg ${serviceDescription}, ${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela Västerås. RUT-avdrag och försäkring ingår.`}
        keywords={`${serviceType.toLowerCase()} vasteras, ${serviceDescription} vasteras, ${isStadfirma ? 'hemstäd' : 'flyttstädning'} vasteras, ${isStadfirma ? 'städning' : 'flytt'} vasteras`}
        url={`https://smidigflytt365.se/stader/vasteras${isStadfirma ? '?type=stadfirma' : ''}`}
      />
      <CityPage city={cityData} />
    </>
  )
}
