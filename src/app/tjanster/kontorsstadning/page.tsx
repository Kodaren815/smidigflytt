import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Kontorsstädning - Professionell städservice för företag | Smidigflytt",
  description: "Professionell kontorsstädning för företag. Regelbunden städning, RUT-avdrag och flexibla tider. Erfarna städare som förstår företags behov.",
  keywords: "kontorsstädning, företagsstädning, RUT-avdrag, regelbunden städning, professionell städning, kontor"
}

export default function KontorsstadningPage() {
  const serviceData = {
    name: "Kontorsstädning",
    subtitle: "Professionell städservice för företag",
    description: "Vi erbjuder professionell kontorsstädning som skapar en ren och inspirerande arbetsmiljö. Med flexibla tider och erfarna städare som förstår företags unika behov.",
    hero_image: "/kontorsstadning-hero.jpg",
    duration: "1-4 timmar",
    features: [
      "Regelbunden kontorsstädning",
      "Flexibla tider utanför arbetstid",
      "RUT-avdrag för företag",
      "Försäkrade städare",
      "Miljövänliga produkter",
      "Specialstädning av IT-utrustning",
      "Papperskorgstömning",
      "Kvalitetsgaranti"
    ],
    process: [
      {
        step: 1,
        title: "Behovsanalys",
        description: "Vi besöker era lokaler och analyserar städningsbehoven för just ert kontor."
      },
      {
        step: 2,
        title: "Skräddarsydd plan",
        description: "Vi skapar en städplan som passar era arbetstider och specifika behov."
      },
      {
        step: 3,
        title: "Regelbunden städning",
        description: "Våra städare arbetar utanför kontorstid för att inte störa verksamheten."
      },
      {
        step: 4,
        title: "Kvalitetsuppföljning",
        description: "Regelbunden uppföljning och anpassning av städningen efter era önskemål."
      }
    ],
    faq: [
      {
        question: "Hur ofta städar ni kontor?",
        answer: "Vi erbjuder daglig, veckovis eller månadsvis städning beroende på era behov. Mest vanligt är 2-3 gånger per vecka."
      },
      {
        question: "Arbetar ni utanför arbetstid?",
        answer: "Ja, vi anpassar våra tider efter era arbetstider. Vanligtvis arbetar vi på kvällar, helger eller tidiga morgnar."
      },
      {
        question: "Kan ni hantera känsliga dokument?",
        answer: "Alla våra städare är försäkrade och utbildade i hantering av känslig information. Vi följer strikta sekretessrutiner."
      },
      {
        question: "Vad ingår i kontorsstädningen?",
        answer: "Dammsugning, våttorkning, rengöring av toaletter, papperskorgstömning, rengöring av kök/pentry och grundläggande skrivbordsstädning."
      },
      {
        question: "Hur fungerar RUT-avdraget för företag?",
        answer: "Företag kan få RUT-avdrag på städkostnader för kontoret. Vi hjälper er med alla papper och formaliteter."
      }
    ],
    related_services: [
      {
        name: "Byggstädning",
        link: "/tjanster/byggstadning"
      },
      {
        name: "Fönsterputsning", 
        link: "/tjanster/fonsterputsning"
      },
      {
        name: "Hemstädning",
        link: "/tjanster/hemstadning"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
