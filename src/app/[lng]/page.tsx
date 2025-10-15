import FaqSection from '@/components/home/faq/FaqSection'
import Header from '@/components/home/Header'
import EconomySection from '@/components/home/info/EconomySection'
import InfoSection from '@/components/home/info/InfoSection'
import MembershipSection from '@/components/home/membership/MembershipSection'
import PrivacySection from '@/components/home/privacy/PrivacySection'
import ShadowsSection from '@/components/home/shadows/ShadowsSection'
import WhyUsSection from '@/components/home/why-us/WhyUsSection'
import Link from 'next/link'
import { getT } from '../i18n'

export default async function Home({ params }: { params: { lng: string } }) {
    const { lng } = await params
    const { t } = await getT('transition')
    return (
        <>
            <Header />
            {/* <main>
                <InfoSection />
                <EconomySection />
                <WhyUsSection />
                <PrivacySection />
                <ShadowsSection />
                <MembershipSection />
                <FaqSection />
            </main> */}

            {/* <h1> {t('title')}</h1>
            <Link href={`/${lng}/second-page`}>{t('to-second-page')} </Link> */}
        </>
    )
}
