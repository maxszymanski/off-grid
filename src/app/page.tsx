import FaqSection from '@/components/home/faq/FaqSection'
import Header from '@/components/home/Header'
import EconomySection from '@/components/home/info/EconomySection'
import InfoSection from '@/components/home/info/InfoSection'
import MembershipSection from '@/components/home/membership/MembershipSection'
import PrivacySection from '@/components/home/privacy/PrivacySection'
import ShadowsSection from '@/components/home/shadows/ShadowsSection'
import WhyUsSection from '@/components/home/why-us/WhyUsSection'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <InfoSection />
                <EconomySection />
                <WhyUsSection />
                <PrivacySection />
                <ShadowsSection />
                <MembershipSection />
                <FaqSection />
            </main>
        </>
    )
}
