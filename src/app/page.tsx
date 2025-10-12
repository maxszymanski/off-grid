import FaqSection from '@/components/home/faq/FaqSection'
import Header from '@/components/home/Header'
import EconomySection from '@/components/home/info/EconomySection'
import InfoSection from '@/components/home/info/InfoSection'
import PrivacySection from '@/components/home/privacy/PrivacySection'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <InfoSection />
                <EconomySection />
                <PrivacySection />
                <FaqSection />
            </main>
        </>
    )
}
