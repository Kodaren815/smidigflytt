import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Bortforsling av möbler - Miljövänlig återvinning | Smidigflytt",
  description: "Miljövänlig bortforsling av möbler och bohag. Vi ser till att allt återvinns på rätt sätt och hanteras miljövänligt.",
  keywords: "bortforsling, återvinning, möbler, miljövänlig, avfall, hämtning, sopor"
}

export default function BortforslingAvMoblerPage() {
  const serviceData = {
    name: "Bortforsling av möbler",
    subtitle: "Miljövänlig hantering av möbler och bohag",
    description: "Vi hjälper dig att bli av med möbler och bohag på ett miljövänligt sätt. Vi ser till att allt sorteras korrekt och återvinns enligt gällande miljöbestämmelser.",
    hero_image: "/bortforsling-hero.jpg",
    duration: "2-4 timmar",
    features: [
      "Miljövänlig hantering",
      "Korrekt sortering för återvinning",
      "Transport till återvinningsstation",
      "Hämtning direkt från hemmet",
      "Hantering av elektronik och vitvaror",
      "Demontering av större möbler",
      "Intyg för återvinning",
      "RUT-avdrag på arbetskostnaden"
    ],
    process: [
      {
        step: 1,
        title: "Bedömning och planering",
        description: "Vi bedömer vad som ska forslas bort och planerar hur det ska hanteras."
      },
      {
        step: 2,
        title: "Demontering",
        description: "Vi demonterar större möbler för enklare transport och återvinning."
      },
      {
        step: 3,
        title: "Sortering",
        description: "Vi sorterar allt enligt gällande miljöbestämmelser för optimal återvinning."
      },
      {
        step: 4,
        title: "Transport",
        description: "Säker transport till lämpliga återvinningsstationer och mottagningar."
      },
      {
        step: 5,
        title: "Dokumentation",
        description: "Vi tillhandahåller intyg och dokumentation över återvinningen."
      }
    ],
    faq: [
      {
        question: "Vad kan ni forsla bort?",
        answer: "Vi kan hantera de flesta typer av möbler, vitvaror, elektronik och bohag. Vi följer alltid gällande miljöbestämmelser."
      },
      {
        question: "Kostar det extra för återvinning?",
        answer: "Återvinningsavgifter för vissa produkter som elektronik och vitvaror kan tillkomma enligt gällande taxa."
      },
      {
        question: "Kan ni hämta samma dag?",
        answer: "Vi försöker alltid att hjälpa till snabbt. Kontakta oss så kollar vi våra möjligheter för akut bortforsling."
      },
      {
        question: "Vad händer med möblerna?",
        answer: "Vi ser till att allt återvinns på rätt sätt. Funktionella möbler kan doneras till välgörenhet, resten återvinns."
      },
      {
        question: "Behöver jag vara hemma?",
        answer: "Du behöver vara hemma när vi hämtar för att visa vad som ska forslas bort och låsa upp."
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
        name: "Byggstädning",
        link: "/tjanster/byggstadning"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
