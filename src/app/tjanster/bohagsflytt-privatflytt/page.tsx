import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Bohagsflytt privatflytt - Professionell flytthjälp | Smidigflytt",
  description: "Professionell bohagsflytt för privatpersoner. Vi tar hand om allt från packning till upppackning. Trygg flytthjälp med försäkring och RUT-avdrag.",
  keywords: "bohagsflytt, privatflytt, flytthjälp, flytt, packning, transport, möbelmontering"
}

export default function BohagsflyttprivatflyttPage() {
  const serviceData = {
    name: "Bohagsflytt privatflytt",
    subtitle: "Trygg och smidig bohagsflytt för privatpersoner",
    description: "Vi erbjuder komplett bohagsflytt för privatpersoner med allt från packning till upppackning. Våra professionella flyttare tar hand om dina tillhörigheter med största omsorg och ser till att din flytt blir så smidig som möjligt.",
    hero_image: "/bohagsflytt-hero.jpg",
    duration: "4-8 timmar",
    features: [
      "Packning och uppackning av alla tillhörigheter",
      "Säker transport med försäkring",
      "Professionell möbelmontering och demontering",
      "Skydd av golv och väggar",
      "Kvalitetsmaterial för packning",
      "Flyttplanering och rådgivning",
      "RUT-avdrag på arbetskostnaden",
      "Försäkring ingår"
    ],
    process: [
      {
        step: 1,
        title: "Offertförfrågan",
        description: "Kontakta oss för en kostnadsfri offert baserad på dina behov och flyttens omfattning."
      },
      {
        step: 2, 
        title: "Planering",
        description: "Vi planerar din flytt i detalj och bokar lämplig tid som passar dig."
      },
      {
        step: 3,
        title: "Packning",
        description: "Våra erfarna flyttare packar dina tillhörigheter säkert med kvalitetsmaterial."
      },
      {
        step: 4,
        title: "Transport",
        description: "Säker transport av ditt bohag till den nya adressen med försäkring."
      },
      {
        step: 5,
        title: "Uppackning",
        description: "Vi hjälper till med uppackning och placering av möbler på rätt plats."
      }
    ],
    faq: [
      {
        question: "Vad ingår i en bohagsflytt?",
        answer: "En bohagsflytt inkluderar packning, transport, uppackning och möbelmontering. Vi tar hand om allt från dina kläder till tunga möbler och ser till att allt kommer fram säkert."
      },
      {
        question: "Hur lång tid tar en bohagsflytt?",
        answer: "Det beror på storleken på bostaden och mängden bohag. En vanlig 2-rumslägenhet tar cirka 4-6 timmar, medan en villa kan ta 6-8 timmar eller mer."
      },
      {
        question: "Är flytthjälpen försäkrad?",
        answer: "Ja, all vår service är försäkrad. Vi har full ansvarsförsäkring som täcker eventuella skador på ditt bohag under flytten."
      },
      {
        question: "Kan jag få RUT-avdrag?",
        answer: "Ja, du kan få RUT-avdrag på arbetskostnaden för bohagsflytt. Vi hjälper dig med all dokumentation som behövs."
      },
      {
        question: "Behöver jag vara på plats hela tiden?",
        answer: "Det är bra om du är på plats i början för att gå igenom vad som ska flyttas och var det ska placeras. Efter det kan du ofta lämna oss att arbeta självständigt."
      }
    ],
    related_services: [
      {
        name: "Packhjälp vid flytt",
        link: "/tjanster/packhjalp-vid-flytt"
      },
      {
        name: "Flyttstädning",
        link: "/tjanster/flyttstadning"
      },
      {
        name: "Magasinering av möbler",
        link: "/tjanster/magasinering-av-mobler"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
