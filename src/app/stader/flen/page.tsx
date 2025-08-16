import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flen Flyttfirma - Professionell flytthjälp i Flen | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Flen? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "flen flyttfirma, flytthjälp flen, flyttstädning flen, flytt flen",
    openGraph: {
      title: "Flen Flyttfirma - Professionell flytthjälp i Flen | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Flen. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function FlenPage() {
  const cityData = {
    name: "Flen",
    region: "Södermanlands län",
    description: "Flen är en tätort i Sörmlands inland med närhet till både natur och större städer. Vi erbjuder professionella flyttjänster och städservice i hela Flen kommun.",
    localInfo: "I Flen täcker vi alla områden från centrala tätorten till omkringliggande landsbygd. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både urban och rural miljö.",
    services: [
      "Bohagsflytt privatflytt i hela Flen kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Flen",
      "Bärhjälp för tunga lyft",
      "Packhjälp vid flytt",
      "Bortforsling av möbler",
      "Magasinering av möbler i säkra lokaler",
      "Flyttstädning för villa och lägenhet", 
      "Byggstädning efter renovering",
      "Hemstädning för privatpersoner",
      "Kontorsstädning för företag"
    ],
    specialties: [
      "Flexibla lösningar för mindre tätorter",
      "Lokalkännedom i Sörmlands inland", 
      "Personlig service i lantlig miljö",
      "Snabba transporter till större städer"
    ],
    areas: [
      "Flen centrum", "Malmköping", "Sparreholm", "Bettna", 
      "Vadsbro", "Hälleforsnäs", "Blacksta", "Dunker",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
