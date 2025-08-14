import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Magasinering av möbler - Säker förvaring | Smidigflytt",
  description: "Säker förvaring av dina möbler i våra moderna och bevakade magasin. Klimatkontroll, flexibla avtal och försäkring ingår.",
  keywords: "magasinering, förvaring, möbler, magasin, klimatkontroll, säker förvaring"
}

export default function MagasineringAvMoblerPage() {
  const serviceData = {
    name: "Magasinering av möbler",
    subtitle: "Säker och trygg förvaring av dina möbler",
    description: "Vi erbjuder säker magasinering av möbler och bohag i våra moderna, bevakade och klimatkontrollerade lokaler. Perfekt för tillfällig eller långsiktig förvaring under flytt eller renovering.",
    hero_image: "/magasinering-hero.jpg",
    duration: "Flexibel period",
    features: [
      "Bevakade och säkra lokaler",
      "Klimatkontrollerad miljö",
      "Flexibla hyresavtal",
      "Försäkring ingår",
      "Transport till och från magasin",
      "Inventering av förvarade föremål",
      "Tillgång under öppettider",
      "Olika storlekar på förvaringsutrymmen"
    ],
    process: [
      {
        step: 1,
        title: "Behovsanalys",
        description: "Vi bedömer dina förvaringsbehov och rekommenderar lämplig storlek på utrymme."
      },
      {
        step: 2,
        title: "Transport till magasin",
        description: "Vi transporterar dina möbler säkert till vårt magasin."
      },
      {
        step: 3,
        title: "Inventering och placering",
        description: "Vi inventerar allt och placerar föremålen säkert i ditt utrymme."
      },
      {
        step: 4,
        title: "Förvaring",
        description: "Dina möbler förvaras säkert i vår klimatkontrollerade miljö."
      },
      {
        step: 5,
        title: "Uthämtning",
        description: "När du behöver dina saker igen transporterar vi dem tillbaka till dig."
      }
    ],
    faq: [
      {
        question: "Hur länge kan jag magasinera mina möbler?",
        answer: "Du kan magasinera så länge du vill. Vi erbjuder både kort- och långtidsförvaring med flexibla avtal."
      },
      {
        question: "Är mina möbler försäkrade?",
        answer: "Ja, grundförsäkring ingår i magasineringen. Du kan även teckna tilläggsförsäkring för värdefulla föremål."
      },
      {
        question: "Kan jag komma åt mina saker när jag vill?",
        answer: "Du har tillgång till ditt magasinsutrymme under våra öppettider. Kontakta oss för att boka tid."
      },
      {
        question: "Vad kostar magasinering?",
        answer: "Kostnaden beror på storleken på utrymmet och hur länge du magasinerar. Vi ger dig en tydlig prisuppgift."
      },
      {
        question: "Kan ni hämta och lämna mina möbler?",
        answer: "Ja, vi erbjuder transport till och från magasinet som en del av vår service."
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
        name: "Företagsflytt",
        link: "/tjanster/foretagsflytt"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
