import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Packhjälp vid flytt - Professionell packning | Smidigflytt",
  description: "Låt våra experter packa dina tillhörigheter säkert och effektivt med professionellt material. Kvalitetspackning för en säker flytt.",
  keywords: "packhjälp, packning, flytt, flyttlådor, packmaterial, professionell packning"
}

export default function PackhjalpVidFlyttPage() {
  const serviceData = {
    name: "Packhjälp vid flytt",
    subtitle: "Professionell packning för säker transport",
    description: "Låt våra experter packa dina tillhörigheter säkert och effektivt. Vi använder kvalitetsmaterial och professionella packningstekniker för att säkerställa att allt kommer fram säkert till din nya bostad.",
    hero_image: "/packhjalp-hero.jpg",
    duration: "3-8 timmar",
    features: [
      "Professionella packningstekniker",
      "Kvalitetsmaterial och lådor",
      "Systematisk märkning och inventering",
      "Skydd för ömtåliga föremål",
      "Packning av kläder och textilier",
      "Specialpackning för elektronik",
      "Miljövänliga packmaterial",
      "Försäkring ingår"
    ],
    process: [
      {
        step: 1,
        title: "Planering och bedömning",
        description: "Vi går igenom vad som ska packas och planerar materialbehovet."
      },
      {
        step: 2,
        title: "Materialförberedelse",
        description: "Vi förbereder alla nödvändiga lådor, packmaterial och verktyg."
      },
      {
        step: 3,
        title: "Systematisk packning",
        description: "Vi packar systematiskt rum för rum med professionella tekniker."
      },
      {
        step: 4,
        title: "Märkning och inventering",
        description: "Varje låda märks tydligt och vi för en inventering över innehållet."
      },
      {
        step: 5,
        title: "Kvalitetskontroll",
        description: "Vi kontrollerar att allt är säkert packat innan transport."
      }
    ],
    faq: [
      {
        question: "Vad ingår i packhjälpen?",
        answer: "Vi hjälper till att packa allt från kläder och böcker till porslin och elektronik. Material som lådor, tejp och packmaterial ingår."
      },
      {
        question: "Hur lång tid tar det att packa?",
        answer: "Det beror på mängden saker och hur många rum som ska packas. En vanlig 3-rumslägenhet tar cirka 4-6 timmar."
      },
      {
        question: "Kan ni packa ömtåliga saker?",
        answer: "Ja, vi har specialmaterial och tekniker för ömtåliga föremål som porslin, konst och elektronik."
      },
      {
        question: "Hjälper ni med uppackning också?",
        answer: "Ja, vi kan även hjälpa till med uppackning på din nya adress. Det bokas som en separat tjänst."
      },
      {
        question: "Vad kostar packmaterialet?",
        answer: "Packmaterial ingår i priset för packhjälpen. Vi använder kvalitetsmaterial för att skydda dina tillhörigheter."
      }
    ],
    related_services: [
      {
        name: "Bohagsflytt privatflytt",
        link: "/tjanster/bohagsflytt-privatflytt"
      },
      {
        name: "Utlandsflytt",
        link: "/tjanster/utlandsflytt"
      },
      {
        name: "Magasinering av möbler",
        link: "/tjanster/magasinering-av-mobler"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
