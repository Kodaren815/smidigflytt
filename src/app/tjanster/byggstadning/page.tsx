import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: "Byggstädning - Professionell städning efter renovering | Smidigflytt",
  description: "Professionell byggstädning efter renovering eller nybyggnation. Vi tar hand om allt damm och skräp med specialutrustning.",
  keywords: "byggstädning, renovering, nybyggnation, damm, grovstädning, finstädning, efter bygg"
}

export default function ByggstadningPage() {
  const serviceData = {
    name: "Byggstädning",
    subtitle: "Professionell städning efter renovering",
    description: "Vi erbjuder komplett byggstädning efter renovering eller nybyggnation. Med specialutrustning och erfarna städare tar vi hand om allt från grovstädning till finstädning.",
    hero_image: "/byggstadning-hero.jpg",
    duration: "1-3 dagar",
    features: [
      "Grovstädning av byggavfall",
      "Dammsugning med specialutrustning",
      "Finstädning av alla ytor",
      "Fönsterputs in- och utsida",
      "Avlägsnande av byggdamm",
      "Rengöring av ventilation",
      "RUT-avdrag på arbetskostnaden",
      "Miljövänliga städprodukter"
    ],
    process: [
      {
        step: 1,
        title: "Besiktning och planering",
        description: "Vi besiktigar området och planerar städningen baserat på omfattningen."
      },
      {
        step: 2,
        title: "Grovstädning",
        description: "Vi börjar med grovstädning och bortforsling av byggavfall och skräp."
      },
      {
        step: 3,
        title: "Dammsugning",
        description: "Grundlig dammsugning med specialutrustning för byggdamm."
      },
      {
        step: 4,
        title: "Våtstädning",
        description: "Våtstädning av alla ytor inklusive golv, väggar och tak."
      },
      {
        step: 5,
        title: "Finstädning och kontroll",
        description: "Slutlig finstädning och kvalitetskontroll för att säkerställa perfekt resultat."
      }
    ],
    faq: [
      {
        question: "Vad ingår i byggstädning?",
        answer: "Byggstädning inkluderar grovstädning, dammsugning, våtstädning, fönsterputs och bortforsling av byggavfall."
      },
      {
        question: "Hur lång tid tar byggstädning?",
        answer: "Det beror på storleken och graden av nedsmutsning. En lägenhet tar vanligtvis 1 dag, medan större projekt kan ta flera dagar."
      },
      {
        question: "Har ni specialutrustning för byggdamm?",
        answer: "Ja, vi har professionella dammsugare och utrustning som är speciellt designad för byggdamm och finpartiklar."
      },
      {
        question: "Kan ni städa under pågående renovering?",
        answer: "Ja, vi kan utföra löpande städning under renoveringen för att hålla arbetsmiljön ren och säker."
      },
      {
        question: "Ingår bortforsling av byggavfall?",
        answer: "Grundläggande bortforsling av mindre byggavfall ingår. Större mängder kan kosta extra beroende på omfattning."
      }
    ],
    related_services: [
      {
        name: "Flyttstädning",
        link: "/tjanster/flyttstadning"
      },
      {
        name: "Fönsterputsning",
        link: "/tjanster/fonsterputsning"
      },
      {
        name: "Bortforsling av möbler",
        link: "/tjanster/bortforsling-av-mobler"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
