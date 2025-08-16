import CityPage from '@/components/CityPage'

export async function generateMetadata() {
  return {
    title: "Flyttfirma Sala - Professionell flytthjälp i Sala | Smidigflytt",
    description: "Letar du efter en pålitlig flyttfirma i Sala? Smidigflytt erbjuder trygg flytthjälp, flyttstädning och magasinering i hela Sala. RUT-avdrag och försäkring ingår.",
    keywords: "flyttfirma sala, flytthjälp sala, flyttstädning sala, flytt sala",
    openGraph: {
      title: "Flyttfirma Sala - Professionell flytthjälp i Sala | Smidigflytt",
      description: "Trygg flytthjälp och städservice i Sala. RUT-avdrag och försäkring ingår.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function SalaPage() {
  const cityData = {
    name: "Sala",
    region: "Västmanlands län",
    description: "Sala är känt för sitt silvergruv-arv och vackra kulturmiljöer. Vi erbjuder professionella flyttjänster och städservice i hela Sala kommun med fokus på personlig service.",
    localInfo: "I Sala täcker vi alla områden från centrala staden till de pittoreska byarna i kommunen. Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge och har god kännedom om både äldre och moderna bostadsområden.",
    services: [
      "Bohagsflytt privatflytt i hela Sala kommun",
      "Företagsflytt för lokala företag",
      "Utlandsflytt från Sala",
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
      "Specialister på historiska byggnader och kulturmiljöer",
      "Lokalkännedom i Sala silvergruveområde", 
      "Varsam hantering av antikviteter och värdeföremål",
      "Flexibla lösningar för landsbygdens behov"
    ],
    areas: [
      "Sala centrum", "Ransta", "Möklinta", "Västerfärnebo", 
      "Heby", "Ängelsberg", "Tärna", "Kumla",
      "Nyfors", "Hällbybrunn", "Skiftinge"
    ]
  }

  return <CityPage city={cityData} />
}
