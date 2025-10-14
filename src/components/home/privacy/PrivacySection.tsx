import Question from '@/assets/cards-bg/question.webp'
import Trash from '@/assets/cards-bg/trash.webp'
import Lock from '@/assets/cards-bg/lock.webp'
import Virtual from '@/assets/cards-bg/virtual.webp'
import StyledLink from '@/components/ui/StyledLink'
import PrivacyCard from './PrivacyCard'

const cards = [
    {
        image: Question.src,
        title: 'Anonymous Spending',
        description:
            'No KYC. No ID. No limits on freedom. Spend up to $5,000/month without submitting personal documents or exposing your identity.',
        size: 'large',
    },
    {
        image: Trash.src,
        title: 'Zero Data Retention',
        description:
            "We can't leak what we don't collect. Off Grid doesn't store or sell your transaction data. Once settled, your history disappears.",
        size: 'small',
    },
    {
        image: Lock.src,
        title: 'Military-Grade Encryption',
        description:
            'Every tap is encrypted end-to-end. From wallet to card to merchant — your data is locked, even from us.',
        size: 'small',
    },
    {
        image: Virtual.src,
        title: 'Dynamic Virtual Cards',
        description:
            'Your numbers, always changing. Generate new virtual cards on demand, giving you rotating credentials to stay ahead of tracking.',
        size: 'large',
    },
]

function PrivacySection() {
    return (
        <section className="w-full overflow-hidden pb-20 lg:pb-[120px]">
            <div className="wrapper px-4 xl:px-0">
                <div
                    className="mb-[42px] flex flex-col items-center text-center md:mb-[60px]"
                    data-aos="fade-up"
                >
                    <h2 className="section-title mb-[22px]">
                        Privacy by design
                    </h2>
                    <p className="section-subtitle max-w-[438px]">
                        Off Grid was built for those who move outside the
                        system.{' '}
                        <span className="text-primary">
                            {' '}
                            No KYC. No unnecessary data collection.
                        </span>
                    </p>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:flex xl:flex-wrap">
                    {cards.map((card, idx) => (
                        <PrivacyCard
                            key={idx}
                            idx={idx}
                            imageSrc={card.image}
                            title={card.title}
                            description={card.description}
                            size={card.size as 'large' | 'small'}
                        />
                    ))}
                </div>
                <div className="w-full" data-aos="zoom-in">
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        <span className="text-primary font-medium">
                            Privacy isn’t a feature here
                        </span>
                        — it’s the foundation.
                    </p>
                    <div className="flex justify-center">
                        <StyledLink name="Learn About Our Security" href="/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacySection
