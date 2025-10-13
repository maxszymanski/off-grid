import FaqSection from '@/components/home/faq/FaqSection'
import Header from '@/components/home/Header'
import EconomySection from '@/components/home/info/EconomySection'
import InfoSection from '@/components/home/info/InfoSection'
import MembershipSection from '@/components/home/membership/MembershipSection'
import PrivacySection from '@/components/home/privacy/PrivacySection'
import ShadowsSection from '@/components/home/shadows/ShadowsSection'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <InfoSection />
                <EconomySection />
                <PrivacySection />
                <ShadowsSection />
                <MembershipSection />
                <FaqSection />
            </main>
        </>
    )
}
