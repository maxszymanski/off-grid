import InfoCard from './InfoCard'
import Apple from '@/assets/cards-bg/apple.webp'
import Kyc from '@/assets/cards-bg/kyc.webp'
import Instant from '@/assets/cards-bg/instant.webp'
import Dashboard from '@/assets/cards-bg/dashboard.webp'
import StyledLinkBox from '@/components/ui/StyledLinkBox'

const cards = [
    {
        image: Apple.src,
        title: 'Apple Pay & Google Pay Ready',
        description:
            'Add to Apple Wallet or Google Pay instantly. Tap to pay anywhere — no physical card needed.',
    },
    {
        image: Kyc.src,
        title: 'No KYC for up to $4000/month',
        description:
            'Enjoy seamless spending freedom up to $4000 monthly, no KYC checks, no identity verification required',
    },
    {
        image: Instant.src,
        title: 'Instant Top-Up Anytime',
        description:
            '24/7 instant funding. No banking hours, no delays. Send crypto, spend immediately.',
    },
    {
        image: Dashboard.src,
        title: 'App & Web Dashboard',
        description:
            'Full control from mobile app or web interface. Manage cards, track spending, set limits.',
    },
]

function InfoSection() {
    return (
        <section className="py-20 lg:py-[120px]">
            <div className="wrapper px-4 xl:px-0">
                <div className="mb-[42px] flex flex-col items-center text-center md:mb-[60px]">
                    <h2 className="section-title mb-[22px]">
                        Spend without limits
                    </h2>
                    <p className="section-subtitle max-w-[438px]">
                        A card built for a world that moves fast. Spend your
                        crypto instantly — anywhere. No KYC. No delays. No
                        questions.
                    </p>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
                    {cards.map((card, idx) => (
                        <InfoCard
                            key={idx}
                            imageSrc={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
                <div>
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        Your crypto, accepted everywhere —{' '}
                        <span className="text-primary font-medium">
                            without compromise.
                        </span>
                    </p>
                    <StyledLinkBox />
                </div>
            </div>
        </section>
    )
}

export default InfoSection
