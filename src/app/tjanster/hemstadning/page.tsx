import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Hemstädning - Professionell städservice | Smidigflytt",
  description: "Professionell hemstädning med RUT-avdrag. Erfarna städare, miljövänliga produkter och kvalitetsgaranti. Boka kostnadsfri konsultation idag!",
  keywords: "hemstädning, städservice, RUT-avdrag, regelbunden städning, professionell städning"
}

export default function HemstadningPage() {
  const serviceData = {
    name: "Hemstädning",
    subtitle: "Professionell hemstädning för ett rent och fräscht hem",
    description: "Våra erfarna städare ger ditt hem den omsorg det förtjänar. Vi erbjuder regelbunden hemstädning eller engångsstädning efter dina behov.",
    hero_image: "/hemstadning-hero.jpg",
    duration: "2-4 timmar",
    features: [
      "Regelbunden eller engångsstädning",
      "Grundstädning av alla rum",
      "RUT-avdrag 50%",
      "Försäkrade städare",
      "Miljövänliga produkter",
      "Kvalitetsgaranti",
      "Flexibla tider",
      "Kostnadsfri konsultation"
    ],
    process: [
      {
        step: 1,
        title: "Kostnadsfri konsultation",
        description: "Vi besöker ditt hem och gör en bedömning av dina behov."
      },
      {
        step: 2,
        title: "Anpassad städplan",
        description: "Vi skapar en städplan som passar just ditt hem och dina önskemål."
      },
      {
        step: 3,
        title: "Professionell städning",
        description: "Våra erfarna städare utför städningen enligt överenskommen plan."
      },
      {
        step: 4,
        title: "Kvalitetskontroll",
        description: "Vi följer upp regelbundet för att säkerställa att du är nöjd."
      }
    ],
    faq: [
      {
        question: "Hur ofta kan ni städa mitt hem?",
        answer: "Vi erbjuder allt från daglig städning till månadsvis städning. Mest populärt är varannan vecka eller en gång i månaden."
      },
      {
        question: "Tar ni med egna städprodukter?",
        answer: "Ja, vi tar med alla nödvändiga produkter och utrustning. Vi använder miljövänliga produkter som standard."
      },
      {
        question: "Vad händer om jag inte är nöjd?",
        answer: "Vi har kvalitetsgaranti. Om du inte är nöjd kommer vi tillbaka inom 24 timmar och städar om kostnadsfritt."
      },
      {
        question: "Hur fungerar RUT-avdraget?",
        answer: "Du betalar full summa till oss, sedan drar Skatteverket av 50% från din slutskatt eller betalar ut mellanskillnaden."
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
        name: "Fönsterputsning",
        link: "/tjanster/fonsterputsning"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
