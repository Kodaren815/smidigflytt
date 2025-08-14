import PriceCalculator from '@/components/PriceCalculator'
import SEO from '@/components/SEO'

export default function RequestFormPage() {
  return (
    <>
      <SEO
        title="Begär förfrågan - Få hjälp med din flytt | Smidigflytt"
        description="Använd vårt enkla formulär för att begära hjälp med din flytt eller städning. Snabbt och enkelt."
        keywords="förfrågan, flytt hjälp, flyttservice, offert, kontakt"
      />
      <PriceCalculator />
    </>
  )
}
