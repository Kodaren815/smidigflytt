import PriceCalculator from '@/components/PriceCalculator'
import SEO from '@/components/SEO'

export default function OffertPage() {
  return (
    <>
      <SEO
        title="Begär offert - Hembesök och personlig offert | Smidigflytt"
        description="Begär en offert för din flytt eller städning. Vi erbjuder hembesök och personliga offerter anpassade efter dina behov."
        keywords="offert, hembesök, offert, flytt, städning"
      />
       
      <PriceCalculator />
    </>
  )
}
