import { getT } from '@/app/i18n'
import AffiliateHeader from '@/components/affiliate/AffiliateHeader'
import { Params } from '../layout'
import Footer from '@/components/footer/Footer'
import JoinSection from '@/components/affiliate/JoinSection'

async function Affiliate({ params }: { params: Params }) {
    const { lng } = await params
    const { t } = await getT('affiliate')
    return (
        <>
            <AffiliateHeader />
            <main>
                <JoinSection />
            </main>
            <Footer lng={lng} isTitle={false} />
        </>
    )
}

export default Affiliate
