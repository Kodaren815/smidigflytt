import SEO from '@/components/SEO'

export default function VillkorPage() {
  return (
    <>
      <SEO
        title="Användarvillkor - Villkor för våra tjänster | Smidigflytt"
        description="Läs våra användarvillkor för flyttjänster och städservice. Villkor för bokning, betalning, ansvar och försäkring."
        keywords="användarvillkor, villkor, tjänstevillkor, flyttjänster, avtalsvillkor"
      />
      
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Användarvillkor
            </h1>
            <p className="text-xl text-gray-600">
              Villkor för våra tjänster och tjänsteavtal
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Senast uppdaterad: 1 januari 2024
            </p>
          </div>

          <div className="prose max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Allmänt</h2>
              <p className="text-gray-700 mb-4">
                Dessa villkor gäller för alla tjänster som tillhandahålls av Smidigflytt. Genom att boka våra tjänster accepterar du dessa villkor.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-black">
                <p><strong>Företagsuppgifter:</strong></p>
                <p>Smidigflytt<br />
                E-post: info@smidigflytt365.nu<br />
                Telefon: Kommer snart</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Tjänster</h2>
              <p className="text-gray-700 mb-4">
                Vi erbjuder följande tjänster:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Flytthjälp och transport</li>
                <li>Flyttstädning</li>
                <li>Packning och uppackning</li>
                <li>Magasinering</li>
                <li>Kontorsflytt</li>
                <li>Tungtransport</li>
              </ul>
              <p className="text-gray-700">
                Alla tjänster utförs enligt branschstandard och gällande säkerhetsföreskrifter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. Bokning och avtal</h2>
              <p className="text-gray-700 mb-4">
                <strong>Offert och bekräftelse:</strong> All bokning sker efter offert och skriftlig bekräftelse från båda parter.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Ändringar:</strong> Ändringar av bokade tjänster måste meddelas senast 24 timmar före utförandedatum.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Avbokning:</strong> Avbokning kan ske kostnadsfritt fram till 24 timmar före planerad tjänst. Senare avbokning debiteras enligt offert.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Priser och betalning</h2>
              <p className="text-gray-700 mb-4">
                <strong>Prissättning:</strong> Priser anges i offert och gäller för det specificerade arbetet.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Betalningsvillkor:</strong> Betalning sker enligt överenskommelse, vanligtvis inom 30 dagar från fakturadatum.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>RUT-avdrag:</strong> För privatpersoner tillämpar vi RUT-avdrag enligt gällande regler. Kunden betalar 50% av arbetskostnaden direkt till oss.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Dröjsmålsränta:</strong> Vid sen betalning tillkommer dröjsmålsränta enligt räntelagen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Kundens ansvar</h2>
              <p className="text-gray-700 mb-4">
                Kunden ansvarar för att:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Lämna korrekt information om uppdraget</li>
                <li>Säkerställa att våra medarbetare har tillgång till arbetsplatsen</li>
                <li>Meddela särskilda förhållanden (tunga föremål, begränsad tillgång, etc.)</li>
                <li>Säkra värdeföremål och viktiga dokument</li>
                <li>Följa eventuella säkerhetsanvisningar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Vårt ansvar och försäkring</h2>
              <p className="text-gray-700 mb-4">
                <strong>Ansvarsförsäkring:</strong> Vi har fullständig ansvarsförsäkring som täcker skador som uppstår under utförandet av våra tjänster.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Begränsningar:</strong> Vårt ansvar är begränsat till direkt skada och omfattar inte:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Förlust av inkomst eller vinst</li>
                <li>Följdskador</li>
                <li>Skador på grund av force majeure</li>
                <li>Skador på redan skadade föremål</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Skadeanmälan:</strong> Skador måste anmälas omedelbart, senast inom 24 timmar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Force majeure</h2>
              <p className="text-gray-700 mb-4">
                Vi ansvarar inte för förseningar eller avbrott som orsakas av force majeure-händelser såsom:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Naturkatastrofer</li>
                <li>Krig, terrorattentat eller civil oro</li>
                <li>Myndighetsbeslut</li>
                <li>Strejker eller lockout</li>
                <li>Allvarliga trafikolyckor eller vägstängningar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Reklamationer</h2>
              <p className="text-gray-700 mb-4">
                <strong>Reklamationstid:</strong> Reklamationer måste göras inom 7 dagar efter utfört arbete.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Åtgärder:</strong> Vid berättigad reklamation åtgärdar vi felet kostnadsfritt eller lämnar prisavdrag.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Garanti:</strong> Vi garanterar vårt arbete enligt branschstandard. För flyttstädning gäller 30 dagars garanti.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Personuppgifter</h2>
              <p className="text-gray-700 mb-4">
                Vi behandlar personuppgifter enligt vår integritetspolicy och gällande dataskyddslagstiftning (GDPR).
              </p>
              <p className="text-gray-700 mb-4">
                Läs mer i vår <a href="/integritet" className="text-smidig-blue hover:text-black">integritetspolicy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. Tillämplig lag och tvister</h2>
              <p className="text-gray-700 mb-4">
                <strong>Tillämplig lag:</strong> Svensk lag gäller för alla avtal och tvister.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Tvistelösning:</strong> Tvister söks först lösas genom förhandling. Om det inte är möjligt kan tvisten hänskjutas till Allmänna reklamationsnämnden (ARN) eller allmän domstol.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Ändringar av villkor</h2>
              <p className="text-gray-700 mb-4">
                Vi förbehåller oss rätten att ändra dessa villkor. Ändringar meddelas på vår webbplats och gäller för framtida avtal.
              </p>
              <p className="text-gray-700 mb-4">
                För pågående avtal gäller de villkor som var aktuella vid avtalets ingående.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Har du frågor om dessa villkor eller våra tjänster?
              </p>
              <div className="text-black bg-smidig-lightgray p-6 rounded-lg">
                <p><strong>Kontakta oss:</strong></p>
                <p>E-post: info@smidigflytt365.nu<br />
                Telefon: Kommer snart<br />
                Öppettider: Måndag-Fredag 07:00-18:00</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
