import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Eskilstuna Flyttfirma - Professionell flytthjälp i Eskilstuna | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Eskilstuna? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering. RUT-avdrag och försäkring ingår.",
    keywords: "eskilstuna flyttfirma, flytthjälp eskilstuna, flyttstädning eskilstuna, flytt eskilstuna",
    openGraph: {
      title: "Eskilstuna Flyttfirma - Professionell flytthjälp i Eskilstuna | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Eskilstuna. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function EskilstunaPage() {
  const cityData = {
    name: "Eskilstuna",
    region: "Södermanlands län",
    description: "Eskilstuna är Södermanlands residensstad med rikt industriarv och modern utveckling. Vi erbjuder professionella flyttjänster och städservice i hela Eskilstuna kommun.",
    localInfo: "I Eskilstuna täcker vi alla områden från centrala staden till omkringliggande orter. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har gedigen kunskap om stadens logistiska förutsättningar.",
    services: [
      "Bohagsflytt privatflytt i hela Eskilstuna kommun",
      "Företagsflytt för industri och kontor",
      "Utlandsflytt från Eskilstuna",
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
      "Expertis på industristäders logistik",
      "Lokalkännedom i Sörmlands största stad", 
      "Flexibla lösningar för både privat och företag",
      "Snabba transporter inom regionen"
    ],
    areas: [
      "Eskilstuna centrum", "Torshälla", "Skogstorp", "Vilsta", 
      "Munktellstaden", "Råby", "Årby", "Kjula",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
