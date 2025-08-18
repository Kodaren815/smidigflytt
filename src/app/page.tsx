import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServicesOverview from '@/components/ServicesOverview'
import TrustAndCredentials from '@/components/TrustAndCredentials'
import CustomerReviews from '@/components/CustomerReviews'
import CallToAction from '@/components/CallToAction'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <TrustAndCredentials />
      <CustomerReviews />
      <CallToAction />
    </main>
  )
}
