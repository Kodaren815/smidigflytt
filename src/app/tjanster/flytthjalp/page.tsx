import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Flytthjälp - Professionell hjälp vid flytt | Smidigflytt",
  description: "Professionell flytthjälp för en smidig flytt. Erfarna flyttare, säker hantering av möbler och bohag. Boka flytthjälp redan idag!",
  keywords: "flytthjälp, flyttservice, professionell flytt, säker transport, flyttare, bohagsflytt"
}

export default function FlytthjalppPage() {
  const serviceData = {
    name: "Flytthjälp",
    subtitle: "Professionell hjälp för en smidig flytt",
    description: "Vi erbjuder komplett flytthjälp med erfarna flyttare som tar hand om allt från packning till transport och uppackning. Låt oss göra din flytt till en stressfri upplevelse.",
    hero_image: "/flytthjalp-hero.jpg",
    duration: "4-8 timmar",
    features: [
      "Erfarna och försäkrade flyttare",
      "Packning och uppackning",
      "Säker transport av möbler",
      "Möbelmontering och demontering",
      "Skydd av golv och väggar",
      "Flyttlådor och förpackningsmaterial",
      "Flexibla tider även helger",
      "Fullständig försäkring"
    ],
    process: [
      {
        step: 1,
        title: "Kostnadsfri besiktning",
        description: "Vi besöker ditt hem och gör en bedömning av flyttvolymen och speciella behov."
      },
      {
        step: 2,
        title: "Planering och förberedelse",
        description: "Vi skapar en detaljerad flyttplan och förbereder allt material och utrustning."
      },
      {
        step: 3,
        title: "Packning och demontering",
        description: "Våra experter packar dina tillhörigheter säkert och demonterar möbler vid behov."
      },
      {
        step: 4,
        title: "Transport och montering",
        description: "Säker transport till nya bostaden följt av montering och uppackning."
      }
    ],
    faq: [
      {
        question: "Hur långt i förväg ska jag boka flytthjälp?",
        answer: "Vi rekommenderar att boka minst 2-3 veckor i förväg, särskilt under högsäsong (maj-augusti). Vid akuta behov försöker vi alltid hjälpa till."
      },
      {
        question: "Vad händer om något går sönder under flytten?",
        answer: "Vi har en fullständig försäkring som täcker eventuella skador. Vi hanterar alla möbler och bohag med största försiktighet."
      },
      {
        question: "Kan ni hjälpa till med packning?",
        answer: "Ja, vi erbjuder både delvis och komplett packservice. Vi tar med professionellt förpackningsmaterial."
      },
      {
        question: "Arbetar ni helger och kvällar?",
        answer: "Ja, vi är flexibla med tiderna och kan arbeta helger och kvällar mot en mindre helgtillägg."
      },
      {
        question: "Vad kostar flytthjälp?",
        answer: "Priset beror på flyttvolym, avstånd och tjänster. Kontakta oss för en kostnadsfri offert baserad på dina behov."
      }
    ],
    related_services: [
      {
        name: "Bohagsflytt privatflytt",
        link: "/tjanster/bohagsflytt-privatflytt"
      },
      {
        name: "Packhjälp vid flytt", 
        link: "/tjanster/packhjalp-vid-flytt"
      },
      {
        name: "Magasinering av möbler",
        link: "/tjanster/magasinering-av-mobler"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
