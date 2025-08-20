import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Magasinering - Säker förvaring av möbler | Smidigflytt",
  description: "Säker magasinering av möbler och bohag i bevakade lokaler. Klimatkontroll, försäkring och flexibla avtal. Perfekt vid flytt eller renovering.",
  keywords: "magasinering, förvaring, möbelförvaring, bevakning, klimatkontroll, försäkring, säker förvaring"
}

export default function MagasineringPage() {
  const serviceData = {
    name: "Magasinering",
    subtitle: "Säker förvaring av dina möbler och tillhörigheter",
    description: "Vi erbjuder säker magasinering i moderna, bevakade lokaler med klimatkontroll. Perfekt lösning vid flytt, renovering eller när du behöver extra förvaringsutrymme.",
    hero_image: "/magasinering-hero.jpg",
    duration: "Flexibel avtalstid",
    features: [
      "Bevakade och säkra lokaler",
      "Klimatkontrollerade utrymmen", 
      "Fullständig försäkring ingår",
      "Flexibla avtalsperioder",
      "Olika storlekar på förvaringsrum",
      "Hämtning och leverans",
      "24/7 tillgång till dina saker",
      "Konkurrenskraftiga priser"
    ],
    process: [
      {
        step: 1,
        title: "Behovsanalys",
        description: "Vi bedömer dina förvaringsbehov och rekommenderar lämplig storlek på förvaringsrum."
      },
      {
        step: 2,
        title: "Avtal och bokning",
        description: "Vi upprättar ett flexibelt avtal som passar dina behov och tidsram."
      },
      {
        step: 3,
        title: "Hämtning och transport",
        description: "Vi kan hämta dina möbler och transportera dem till magasinet om så önskas."
      },
      {
        step: 4,
        title: "Säker förvaring",
        description: "Dina tillhörigheter förvaras säkert i våra moderna, klimatkontrollerade lokaler."
      }
    ],
    faq: [
      {
        question: "Hur stora är förvaringsrummen?",
        answer: "Vi erbjuder olika storlekar från 5 kvm upp till 50 kvm, beroende på dina behov. Vi hjälper dig att välja rätt storlek."
      },
      {
        question: "Är mina saker försäkrade under förvaring?",
        answer: "Ja, all förvaring inkluderar en grundförsäkring. Du kan även teckna tilläggsförsäkring för värdefulla föremål."
      },
      {
        question: "Kan jag komma åt mina saker när som helst?",
        answer: "Ja, du har 24/7 tillgång till ditt förvaringsrum med din personliga nyckel eller kod."
      },
      {
        question: "Vad kostar magasinering per månad?",
        answer: "Priset varierar beroende på storlek och avtalsperiod. Kontakta oss för aktuella priser och eventuella erbjudanden."
      },
      {
        question: "Kan ni hjälpa till att flytta in mina saker?",
        answer: "Ja, vi erbjuder komplett service med hämtning, transport och inplacering i magasinet."
      }
    ],
    related_services: [
      {
        name: "Magasinering av möbler",
        link: "/tjanster/magasinering-av-mobler"
      },
      {
        name: "Bohagsflytt privatflytt", 
        link: "/tjanster/bohagsflytt-privatflytt"
      },
      {
        name: "Bortforsling av möbler",
        link: "/tjanster/bortforsling-av-mobler"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
