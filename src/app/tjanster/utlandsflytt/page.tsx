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
    subtitle: "Komplett flytthjälp utomlands för hela hushåll",
    description: "Vi erbjuder professionell flytthjälp utomlands för hela bohaget. Vi flyttar inte bara enskilda möbler eller föremål, utan hjälper dig med kompletta hushållsflyttar till utlandet. Med vår expertis inom internationella flyttar ser vi till att hela ditt bohag kommer trygt fram till destinationen.",
    hero_image: "/utlandsflytt-hero.jpg",
    duration: "2-6 veckor",
    features: [
      "Komplett bohagsflytt utomlands - hela hushåll",
      "Flytthjälp utomlands, inte transport av enskilda möbler",
      "Professionell hantering av allt bohag",
      "Hjälp med tullformaliteter för hela hushållet",
      "Door-to-door service för kompletta flyttar",
      "Fullständig försäkring för hela bohaget",
      "Etablering och uppackning på destinationen",
      "Rådgivning om internationella flyttregler",
      "Vi flyttar inte bara möbler - vi flyttar hem"
    ],
    process: [
      {
        step: 1,
        title: "Konsultation och planering",
        description: "Vi bedömer ditt kompletta bohag och planerar för en hel hushållsflytt utomlands, inte bara transport av enstaka föremål."
      },
      {
        step: 2,
        title: "Dokumentation för hela bohaget",
        description: "Vi hjälper dig med alla nödvändiga dokument för att flytta hela ditt hushåll till utlandet."
      },
      {
        step: 3,
        title: "Packning av hela hushållet",
        description: "Professionell packning av allt bohag enligt internationella standarder för säker flytt utomlands."
      },
      {
        step: 4,
        title: "Komplett transport",
        description: "Vi transporterar hela ditt bohag säkert till destinationen - inte bara enskilda möbler."
      },
      {
        step: 5,
        title: "Flytthjälp och etablering",
        description: "Vi hjälper dig etablera hela ditt hem på den nya destinationen utomlands."
      }
    ],
    faq: [
      {
        question: "Flyttar ni bara möbler eller hela hushåll utomlands?",
        answer: "Vi flyttar hela bohaget och hushåll utomlands. Vi erbjuder inte transport av bara enskilda möbler eller föremål, utan fokuserar på kompletta hushållsflyttar."
      },
      {
        question: "Vad ingår i er flytthjälp utomlands?",
        answer: "Vi erbjuder komplett flytthjälp utomlands för hela bohaget, inklusive packning, transport, uppackning och etablering på destinationen."
      },
      {
        question: "Hjälper ni med tullformaliteter?",
        answer: "Ja, vi hjälper dig med alla nödvändiga dokument och procedurer för att flytta hela hushållet utomlands."
      },
      {
        question: "Hur lång tid tar en komplett hushållsflytt utomlands?",
        answer: "Det beror på destination och omfattning av bohaget. Inom Europa tar det oftast 1-2 veckor, medan intercontinentala flyttar kan ta 4-6 veckor."
      },
      {
        question: "Erbjuder ni bara transport eller även flytthjälp utomlands?",
        answer: "Vi erbjuder komplett flytthjälp utomlands, inte bara transport. Vi hjälper dig flytta hela ditt hem och etablera dig på den nya destinationen."
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
