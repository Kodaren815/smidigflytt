import SEO from '@/components/SEO'

export default function IntegritetPage() {
  return (
    <>
      <SEO
        title="Integritetspolicy - Så hanterar vi dina personuppgifter | Smidigflytt"
        description="Läs om hur Smidigflytt hanterar dina personuppgifter enligt GDPR. Vi värnar om din integritet och behandlar dina uppgifter säkert."
        keywords="integritetspolicy, personuppgifter, GDPR, datasäkerhet"
      />
      
      <div className="min-h-[60vh] bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Integritetspolicy
            </h1>
            <p className="text-xl text-black">
              Så hanterar vi dina personuppgifter enligt GDPR
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Senast uppdaterad: 1 januari 2024
            </p>
          </div>

          <div className="prose max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Personuppgiftsansvarig</h2>
              <p className="text-gray-700 mb-4">
                Smidig Flytt 365 AB är personuppgiftsansvarig för behandlingen av dina personuppgifter.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-black">
                <p><strong>Kontaktuppgifter:</strong></p>
                <p>Smidig Flytt 365 AB<br />
                Org.nr: 559540-3337<br />
                E-post: info@smidigflytt365.se<br />
                Webbsida: www.smidigflytt365.se<br />
                Telefon: 08-27 09 09</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Vilka personuppgifter samlar vi in?</h2>
              <p className="text-gray-700 mb-4">
                Vi samlar in följande typer av personuppgifter:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Kontaktuppgifter:</strong> Namn, adress, telefonnummer, e-postadress</li>
                <li><strong>Serviceuppgifter:</strong> Information om din flytt, boendetyp, datum</li>
                <li><strong>Ekonomiska uppgifter:</strong> Faktureringsinformation, betalningshistorik</li>
                <li><strong>Kommunikation:</strong> Meddelanden, samtal, e-post</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. Varför behandlar vi dina personuppgifter?</h2>
              <p className="text-gray-700 mb-4">
                Vi behandlar dina personuppgifter för följande ändamål:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Att utföra våra tjänster (flytthjälp, städning, etc.)</li>
                <li>Att kommunicera med dig om bokningar och tjänster</li>
                <li>Att hantera betalningar och fakturering</li>
                <li>Att förbättra våra tjänster</li>
                <li>Att uppfylla rättsliga krav</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Rättslig grund</h2>
              <p className="text-gray-700 mb-4">
                Vi behandlar dina personuppgifter baserat på:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Avtal:</strong> För att utföra våra tjänster som du bokat</li>
                <li><strong>Rättslig skyldighet:</strong> För bokföring och skatteändamål</li>
                <li><strong>Berättigat intresse:</strong> För kundservice och förbättring av tjänster</li>
                <li><strong>Samtycke:</strong> För marknadsföring (endast med ditt uttryckliga samtycke)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Vem delar vi dina uppgifter med?</h2>
              <p className="text-gray-700 mb-4">
                Vi delar endast dina personuppgifter med:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Våra anställda och underleverantörer som behöver uppgifterna för att utföra tjänsterna</li>
                <li>Redovisnings- och juridiska rådgivare</li>
                <li>Myndigheter när det krävs enligt lag</li>
                <li>Försäkringsbolag vid skadeärenden</li>
              </ul>
              <p className="text-gray-700">
                Vi säljer aldrig dina personuppgifter till tredje part.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Hur länge sparar vi dina uppgifter?</h2>
              <p className="text-gray-700 mb-4">
                Vi sparar dina personuppgifter endast så länge som nödvändigt:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Kunduppgifter:</strong> 7 år efter sista tjänst (bokföringslagen)</li>
                <li><strong>Marknadsföringssamtycke:</strong> Tills du återkallar samtycket</li>
                <li><strong>Kommunikation:</strong> 3 år för kundservice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Dina rättigheter</h2>
              <p className="text-gray-700 mb-4">
                Du har följande rättigheter enligt GDPR:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Tillgång:</strong> Få information om vilka uppgifter vi har om dig</li>
                <li><strong>Rättelse:</strong> Rätta felaktiga uppgifter</li>
                <li><strong>Radering:</strong> Få dina uppgifter raderade under vissa förutsättningar</li>
                <li><strong>Portabilitet:</strong> Få ut dina uppgifter i strukturerat format</li>
                <li><strong>Invändning:</strong> Invända mot behandling baserad på berättigat intresse</li>
                <li><strong>Begränsning:</strong> Begära begränsad behandling</li>
              </ul>
              <p className="text-gray-700">
                För att utöva dina rättigheter, kontakta oss på info@smidigflytt365.se
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Säkerhet</h2>
              <p className="text-gray-700 mb-4">
                Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller missbruk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Vår webbplats använder cookies för att förbättra användarupplevelsen. Du kan hantera cookie-inställningar i din webbläsare.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. Klagomål</h2>
              <p className="text-gray-700 mb-4">
                Om du är missnöjd med hur vi hanterar dina personuppgifter har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Ändringar</h2>
              <p className="text-gray-700 mb-4">
                Vi kan komma att uppdatera denna integritetspolicy. Väsentliga ändringar meddelas på vår webbplats eller via e-post.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Har du frågor om denna integritetspolicy eller hur vi hanterar dina personuppgifter?
              </p>
              <div className="text-black bg-smidig-lightgray p-6 rounded-lg">
                <p><strong>Kontakta oss:</strong></p>
                <p>Smidig Flytt 365 AB<br />
                Org.nr: 559540-3337<br />
                E-post: info@smidigflytt365.se<br />
                Webbsida: www.smidigflytt365.se<br />
                Telefon: 08-27 09 09</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
