import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Företagsflytt - Professionell kontorsflytt | Smidigflytt",
  description: "Specialiserade på företagsflytt med minimal störning av er verksamhet. Vi planerar allt i detalj och erbjuder helglösningar för kontorsflytt.",
  keywords: "företagsflytt, kontorsflytt, affärsflytt, företag, kontor, it-flytt, projektledning"
}

export default function ForetagsflyttPage() {
  const serviceData = {
    name: "Företagsflytt",
    subtitle: "Professionell företagsflytt med minimal störning",
    description: "Vi specialiserar oss på företagsflytt och ser till att er verksamhet påverkas minimalt. Med noggrann planering och professionell projektledning hjälper vi er att flytta kontor, lager eller hela verksamheter snabbt och säkert.",
    hero_image: "/foretagsflytt-hero.jpg",
    duration: "1-5 dagar",
    features: [
      "Professionell projektledning",
      "IT-support och serverflyttar",
      "Helglösningar för minimal störning",
      "Möbelmontering och demontering",
      "Lagerflytt och arkivhantering",
      "Försäkring och ansvarsförsäkring",
      "Återvinning av kontorsmöbler",
      "Efterstädning av lokaler"
    ],
    process: [
      {
        step: 1,
        title: "Konsultation och planering",
        description: "Vi gör en grundlig genomgång av er verksamhet och planerar flytten i detalj."
      },
      {
        step: 2,
        title: "Projektledning",
        description: "En dedikerad projektledare koordinerar hela flytten och håller er informerade."
      },
      {
        step: 3,
        title: "Förpackning och märkning",
        description: "Systematisk packning och märkning för att allt ska komma rätt från början."
      },
      {
        step: 4,
        title: "Transport och IT-flytt",
        description: "Säker transport av alla tillhörigheter inklusive känslig IT-utrustning."
      },
      {
        step: 5,
        title: "Uppackning och installation",
        description: "Vi ställer upp allt på den nya lokalen så ni kan komma igång direkt."
      }
    ],
    faq: [
      {
        question: "Hur länge tar en företagsflytt?",
        answer: "Det beror på storleken på företaget och mängden utrustning. En mindre kontorsflytt kan ta 1-2 dagar, medan större företag kan behöva upp till en vecka."
      },
      {
        question: "Kan ni flytta IT-utrustning?",
        answer: "Ja, vi har specialutbildad personal för IT-flytt inklusive servrar, nätverk och känslig elektronik. Vi ser till att allt hanteras professionellt."
      },
      {
        question: "Kan flytten ske på helger?",
        answer: "Absolut! Vi erbjuder helglösningar för att minimera störningen av er verksamhet. Många företagsflytt genomförs under helger."
      },
      {
        question: "Vad händer med konfidentiella dokument?",
        answer: "Vi hanterar alla konfidentiella dokument med största säkerhet. Vi kan erbjuda säkra låsbara lådor och säker transport."
      },
      {
        question: "Ingår försäkring i företagsflytt?",
        answer: "Ja, vi har full ansvarsförsäkring som täcker både utrustning och lokaler. Vi kan även ordna extra försäkring för särskilt värdefull utrustning."
      }
    ],
    related_services: [
      {
        name: "Magasinering av möbler",
        link: "/tjanster/magasinering-av-mobler"
      },
      {
        name: "Bortforsling av möbler",
        link: "/tjanster/bortforsling-av-mobler"
      },
      {
        name: "Byggstädning",
        link: "/tjanster/byggstadning"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
