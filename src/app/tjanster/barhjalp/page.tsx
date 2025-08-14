import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Bärhjälp - Professionell hjälp med tunga lyft | Smidigflytt",
  description: "Professionell bärhjälp när du behöver extra händer för tunga lyft och transport. Säker hantering av möbler och bohag med försäkring.",
  keywords: "bärhjälp, tunga lyft, möbelbärning, transport, hjälp med flytt, bärare"
}

export default function BarhjalPPage() {
  const serviceData = {
    name: "Bärhjälp",
    subtitle: "Professionell hjälp med tunga lyft",
    description: "När du behöver extra händer för tunga lyft erbjuder vi professionell bärhjälp. Våra erfarna bärare hjälper dig säkert transportera möbler, vitvaror och andra tunga föremål utan risk för skador.",
    hero_image: "/barhjalp-hero.jpg",
    duration: "2-6 timmar",
    features: [
      "Professionella och erfarna bärare",
      "Säker hantering av tunga föremål",
      "Skydd av golv och väggar",
      "Flexibla tider som passar dig",
      "Försäkring ingår",
      "Rätt verktyg och utrustning",
      "RUT-avdrag på arbetskostnaden",
      "Hjälp upp för trappor"
    ],
    process: [
      {
        step: 1,
        title: "Bedömning av behov",
        description: "Vi diskuterar vad som ska bäras och planerar det säkraste sättet att genomföra jobbet."
      },
      {
        step: 2,
        title: "Förberedelser",
        description: "Vi förbereder området och skyddar golv och väggar där det behövs."
      },
      {
        step: 3,
        title: "Säker bärning",
        description: "Våra professionella bärare utför arbetet säkert med rätt teknik och verktyg."
      },
      {
        step: 4,
        title: "Placering",
        description: "Vi placerar föremålen exakt där du vill ha dem i ditt hem."
      },
      {
        step: 5,
        title: "Efterkontroll",
        description: "Vi kontrollerar att allt är på plats och städar upp efter oss."
      }
    ],
    faq: [
      {
        question: "Vad kan ni hjälpa till att bära?",
        answer: "Vi hjälper till med allt från möbler och vitvaror till pianon och kassaskåp. Vi har erfarenhet av att hantera tunga och skrymmande föremål."
      },
      {
        question: "Hur tungt kan ni bära?",
        answer: "Vi kan hantera föremål upp till flera hundra kilo med rätt utrustning och teamwork. Vi bedömer alltid säkerheten först."
      },
      {
        question: "Behöver jag vara hemma?",
        answer: "Ja, det är bra om du är hemma för att visa var föremålen ska placeras och för att öppna dörrar."
      },
      {
        question: "Vad händer om något går sönder?",
        answer: "Vi har full ansvarsförsäkring som täcker eventuella skador. Vi hanterar alltid föremål med största försiktighet."
      },
      {
        question: "Kan ni hjälpa på kort varsel?",
        answer: "Vi försöker alltid att hjälpa till på kort varsel om vi har kapacitet. Ring oss så kollar vi våra möjligheter."
      }
    ],
    related_services: [
      {
        name: "Bohagsflytt privatflytt",
        link: "/tjanster/bohagsflytt-privatflytt"
      },
      {
        name: "Företagsflytt",
        link: "/tjanster/foretagsflytt"
      },
      {
        name: "Bortforsling av möbler",
        link: "/tjanster/bortforsling-av-mobler"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
