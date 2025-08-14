import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServicesOverview from '@/components/ServicesOverview'
import CustomerReviews from '@/components/CustomerReviews'
import CallToAction from '@/components/CallToAction'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <CustomerReviews />
      <CallToAction />
    </main>
  )
}
