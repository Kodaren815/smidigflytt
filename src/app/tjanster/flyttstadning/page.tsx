import ServicePage from '@/components/ServicePage'

export async function generateMetadata() {
  return {
    title: "Flyttstädning - Garanterad godkänd städning | Smidigflytt",
    description: "Professionell flyttstädning med garanti. Vi städar så det glänser och garanterar att städningen blir godkänd. RUT-avdrag och försäkring ingår.",
    keywords: "flyttstädning, städning, rengöring, garanterad städning, hemstädning",
    openGraph: {
      title: "Flyttstädning - Garanterad godkänd städning | Smidigflytt",
      description: "Professionell flyttstädning med garanti för godkänt resultat.",
      type: "website",
      locale: "sv_SE",
    },
  }
}

export default function FlyttstadningPage() {
  const serviceData = {
    name: "Flyttstädning",
    subtitle: "Garanterad godkänd städning för trygg överlämning",
    description: "Vår professionella flyttstädning garanterar att din bostad blir godkänd av hyresvärd eller mäklare. Vi städar grundligt och noggrant så du kan känna dig trygg.",
    hero_image: "/flyttstadning-hero.jpg",
    duration: "2-6 timmar",
    features: [
      "Grundstädning av alla rum",
      "Toppstädning av kök och badrum", 
      "Fönsterputs invändigt",
      "Rengöring av ugn och kylskåp",
      "Garanti på godkänt resultat",
      "RUT-avdrag och försäkring ingår"
    ],
    process: [
      {
        step: 1,
        title: "Besiktning & planering",
        description: "Vi gör en genomgång av bostaden och planerar städningen"
      },
      {
        step: 2,
        title: "Grundstädning",
        description: "Grundlig städning av alla rum enligt checklista"
      },
      {
        step: 3,
        title: "Toppstädning",
        description: "Extra noggrann städning av kök, badrum och kritiska områden"
      },
      {
        step: 4,
        title: "Kvalitetskontroll",
        description: "Slutkontroll för att säkerställa att allt uppfyller kraven"
      }
    ],
    faq: [
      {
        question: "Vad ingår i er flyttstädning?",
        answer: "Vår flyttstädning inkluderar grundstädning av alla rum, toppstädning av kök och badrum, fönsterputs invändigt, rengöring av ugn och kylskåp. Vi följer en detaljerad checklista för att säkerställa att inget missas."
      },
      {
        question: "Garanterar ni att städningen blir godkänd?",
        answer: "Ja, vi garanterar att vår flyttstädning blir godkänd av hyresvärd eller mäklare. Om det skulle uppstå problem kommer vi tillbaka och åtgärdar det utan extra kostnad."
      },
      {
        question: "Hur lång tid tar en flyttstädning?",
        answer: "Det beror på storleken på bostaden. En tvårumslägenhet tar ofta 3-4 timmar, medan en större villa kan ta 6-8 timmar. Vi ger dig en tidsuppskattning baserat på din bostad."
      },
      {
        question: "Behöver jag vara hemma under städningen?",
        answer: "Nej, du behöver inte vara hemma under städningen. Vi kan ta emot nycklar och återlämna dem enligt överenskommelse. All vår personal är bakgrundskontrollerad och pålitlig."
      }
    ],
    related_services: [
      {
        name: "Flytthjälp",
        link: "/tjanster/flytthjalp"
      },
      {
        name: "Packningstjänst", 
        link: "/tjanster/packning"
      },
      {
        name: "Magasinering",
        link: "/tjanster/magasinering"
      }
    ]
  }

  return <ServicePage service={serviceData} />
}
