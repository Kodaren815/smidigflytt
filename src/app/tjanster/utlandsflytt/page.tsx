import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Utlandsflytt - Internationell flyttservice | Smidigflytt",
  description: "Professionell utlandsflytt med expertis inom tullformaliteter och internationell transport. Vi hjälper dig flytta säkert över gränserna.",
  keywords: "utlandsflytt, internationell flytt, tull, export, import, flyttfirma utomlands"
}

export default function UtlandsflyttPage() {
  const serviceData = {
    name: "Utlandsflytt",
    subtitle: "Internationell flyttservice med experthjälp",
    description: "Vi hjälper dig med internationella flyttar över hela världen. Med vår expertis inom tullformaliteter, dokumentation och internationell transport ser vi till att din flytt går smidigt oavsett destination.",
    hero_image: "/utlandsflytt-hero.jpg",
    duration: "2-6 veckor",
    features: [
      "Hjälp med tullformaliteter och dokumentation",
      "Door-to-door service",
      "Professionell export-packning",
      "Spårning av ditt bohag under transporten",
      "Fullständig försäkring",
      "Rådgivning om importregler",
      "Tillfällig magasinering",
      "Uppackning på destinationen"
    ],
    process: [
      {
        step: 1,
        title: "Konsultation och planering",
        description: "Vi går igenom dina behov och informerar om regler och krav för destinationslandet."
      },
      {
        step: 2,
        title: "Dokumentation",
        description: "Vi hjälper dig med alla nödvändiga tulldokument och importpapper."
      },
      {
        step: 3,
        title: "Export-packning",
        description: "Professionell packning enligt internationella standarder för säker transport."
      },
      {
        step: 4,
        title: "Transport och spårning",
        description: "Säker transport med full spårning så du alltid vet var ditt bohag befinner sig."
      },
      {
        step: 5,
        title: "Import och uppackning",
        description: "Vi tar hand om importen och kan hjälpa till med uppackning på destinationen."
      }
    ],
    faq: [
      {
        question: "Hur lång tid tar en utlandsflytt?",
        answer: "Det beror på destination och transportmetod. Inom Europa tar det oftast 1-2 veckor, medan intercontinentala flyttar kan ta 4-6 veckor."
      },
      {
        question: "Vad kostar en utlandsflytt?",
        answer: "Kostnaden beror på volym, destination och servicenivå. Vi ger alltid en detaljerad kostnadskalkyl innan flytten."
      },
      {
        question: "Hjälper ni med tullformaliteter?",
        answer: "Ja, vi har expertis inom tullformaliteter och hjälper dig med alla nödvändiga dokument och procedurer."
      },
      {
        question: "Kan jag spåra mitt bohag under transporten?",
        answer: "Ja, du får spårningsinformation så du alltid vet var ditt bohag befinner sig under transporten."
      },
      {
        question: "Vad händer om något går sönder?",
        answer: "Vi har fullständig försäkring som täcker skador under transport. All dokumentation hanteras professionellt."
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
