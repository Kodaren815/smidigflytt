import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Fönsterputsning - Kristallklara fönster | Smidigflytt",
  description: "Kristallklara fönster för hem och företag. Vi putsar både in- och utsida med professionell utrustning och regelbundna besök.",
  keywords: "fönsterputsning, fönsterputs, glasputs, fönsterrengöring, fönster, kristallklart"
}

export default function FonsterputsningPage() {
  const serviceData = {
    name: "Fönsterputsning",
    subtitle: "Kristallklara fönster för hem och företag",
    description: "Vi erbjuder professionell fönsterputsning för både privatpersoner och företag. Med vår expertis och professionella utrustning får du kristallklara fönster som låter ljuset strömma in.",
    hero_image: "/fonsterputsning-hero.jpg",
    duration: "2-4 timmar",
    features: [
      "Putsning av in- och utsida",
      "Professionell utrustning och verktyg",
      "Regelbundna besök enligt avtal",
      "Rengöring av fönsterkarmar",
      "Miljövänliga rengöringsmedel",
      "Försäkring ingår",
      "RUT-avdrag för privatpersoner",
      "Tillgänglig för höga fönster"
    ],
    process: [
      {
        step: 1,
        title: "Bedömning och planering",
        description: "Vi bedömer fönstren och planerar det mest effektiva sättet att putsa dem."
      },
      {
        step: 2,
        title: "Förberedelser",
        description: "Vi förbereder området och skyddar möbler och golv från vatten."
      },
      {
        step: 3,
        title: "Rengöring av karmar",
        description: "Vi börjar med att rengöra fönsterkarmar och ramar grundligt."
      },
      {
        step: 4,
        title: "Glasputs",
        description: "Professionell putsning av glaset både på in- och utsidan."
      },
      {
        step: 5,
        title: "Kvalitetskontroll",
        description: "Vi kontrollerar resultatet och ser till att alla fönster är kristallklara."
      }
    ],
    faq: [
      {
        question: "Hur ofta bör man putsa fönster?",
        answer: "Vi rekommenderar att privatpersoner putsar fönster 2-4 gånger per år, medan företag ofta behöver månadsvis putsning."
      },
      {
        question: "Kan ni putsa höga fönster?",
        answer: "Ja, vi har utrustning för att nå höga fönster säkert, inklusive teleskopstänger och stegar."
      },
      {
        question: "Putsar ni även insidan?",
        answer: "Ja, vi putsar både in- och utsidan av fönstren för bästa resultat och maximal ljusinsläpp."
      },
      {
        question: "Vad händer om det regnar?",
        answer: "Vi undviker att putsa fönster i regn eller stark blåst. Vi bokar om tiden om vädret inte tillåter kvalitetsarbete."
      },
      {
        question: "Kan ni erbjuda regelbundna besök?",
        answer: "Ja, vi erbjuder avtal för regelbunden fönsterputsning för både hem och företag."
      }
    ],
    related_services: [
      {
        name: "Flyttstädning",
        link: "/tjanster/flyttstadning"
      },
      {
        name: "Byggstädning",
        link: "/tjanster/byggstadning"
      },
      {
        name: "Företagsflytt",
        link: "/tjanster/foretagsflytt"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
