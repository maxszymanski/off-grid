'use client'
import StyledLink from '@/components/ui/StyledLink'
import ScrollButton from '../info/ScrollButton'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import LightSm from '@/assets/membership-light-sm.webp'
import Light from '@/assets/membership-light.png'
import Gradient from '@/assets/gradient.png'
import Image from 'next/image'
import MembershipCard from './MembershipCard'
import StandardCard from '@/assets/cards-bg/standard-cart.webp'
import PlatinumCard from '@/assets/cards-bg/platinum-card.webp'
import EliteCard from '@/assets/cards-bg/elite-card.webp'

const cards = [
    {
        imageSrc: StandardCard.src,
        price: '0',
        title: 'Standard Card',
        list: [
            'Spend up to $4,000/mo with no KYC',
            '1% cashback in Bitcoin on all purchases',
            'Extra 0.5% rewards on transactions over $1,000',
        ],
        linkHref: '/',
    },
    {
        imageSrc: PlatinumCard.src,
        price: '99',
        title: 'Premium Card',
        list: [
            '2% crypto cashback — BTC, ETH, or SOL',
            'Earn yield automatically on cashback balance',
            '5% back at select premium retailers',
            'Additional rewards for holding crypto balances',
        ],
        linkHref: '/',
    },
    {
        imageSrc: EliteCard.src,
        price: '0',
        title: 'Standard Card',
        list: [
            '3% cashback in any supported cryptocurrency',
            'Exclusive merchant partnerships and discounts',
            'Auto-compound rewards in DeFi protocols',
            'Access to crypto events and meetups',
            'Concirge services',
            'Custom card design',
        ],
        linkHref: '/',
    },
]

function MembershipSection() {
    const [isEnabled, setIsEnabled] = useState(false)
    const [per, setPer] = useState<'mtn' | 'year'>('mtn')

    useEffect(() => {
        const checkWidth = () => setIsEnabled(window.innerWidth < 1024)
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
    })

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return

        emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (!emblaApi) return

        emblaApi.scrollNext()
    }, [emblaApi])

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        updateScrollButtons()
        emblaApi.on('select', updateScrollButtons)
        emblaApi.on('reInit', updateScrollButtons)
    }, [emblaApi, updateScrollButtons])

    return (
        <section className="wrapper relative -mt-1 bg-cover bg-top bg-no-repeat py-20 lg:py-[120px]">
            <Image
                src={LightSm}
                width={LightSm.width}
                height={LightSm.height}
                className={`absolute left-1/2 top-0 z-[1] hidden -translate-x-1/2`}
                alt=""
                quality={100}
            />
            <Image
                src={Light}
                width={Light.width}
                height={Light.height}
                className={`hidden:sm:block absolute left-1/2 top-0 z-[1] -translate-x-1/2`}
                alt=""
                quality={100}
            />

            <div className="relative z-[2]">
                <div className="mb-[42px] flex flex-col items-center px-4 text-center md:mb-[60px] xl:px-0">
                    <h2 className="section-title mb-[22px]">
                        Choose Your Membership. <br /> Unlock Your Card.
                    </h2>
                    <p className="section-subtitle max-w-[448px]">
                        From everyday spending to elite crypto privileges —
                        Shadow, Phantom, or Ghost. One card, three levels of
                        rewards.
                    </p>
                </div>
                <div className="mb-[26px] mt-8 flex items-center justify-center gap-2 px-4 font-medium md:mb-[46px] md:mt-[60px]">
                    <p
                        className={`${per === 'mtn' ? 'text-primary' : 'text-primary/70'} transition-colors duration-300`}
                    >
                        Monthly
                    </p>
                    <button className="switch relative h-7 w-[64px] rounded-full"></button>

                    <p
                        className={`${per === 'year' ? 'text-primary' : 'text-primary/70'} transition-colors duration-300`}
                    >
                        Yearly
                    </p>
                </div>
                <div className="relative pt-2">
                    <Image
                        src={Gradient}
                        width={Gradient.width}
                        height={Gradient.height}
                        className={`absolute -top-1.5 left-1/2 -translate-x-1/2`}
                        alt=""
                    />

                    <div
                        className="bg-blackBg relative z-[2] mt-2 w-full overflow-x-hidden px-4 xl:px-0"
                        ref={isEnabled ? emblaRef : null}
                    >
                        <div className="flex gap-4 lg:justify-between">
                            {cards.map((card, index) => (
                                <MembershipCard
                                    key={index}
                                    index={index}
                                    imageSrc={card.imageSrc}
                                    linkHref={card.linkHref}
                                    list={card.list}
                                    per="mth"
                                    price={card.price}
                                    title={card.title}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-[42px] flex w-full items-center justify-end gap-2 px-4 lg:hidden">
                        <ScrollButton
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            variant="left"
                        />
                        <ScrollButton
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            variant="right"
                        />
                    </div>
                </div>
                <div className="hidden w-full px-4 lg:block xl:px-0">
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        Earn commissions, bonuses, and perks{' '}
                        <span className="text-primary font-medium">
                            for every referral.
                        </span>
                    </p>
                    <div className="flex justify-center">
                        <StyledLink
                            name="Explore the Affiliate Program"
                            href="/"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MembershipSection
