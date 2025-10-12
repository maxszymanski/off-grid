'use client'
import Crypto from '@/assets/cards-bg/crypto.webp'
import Digital from '@/assets/cards-bg/digital.webp'
import Founders from '@/assets/cards-bg/founders.webp'
import EconomyCard from './EconomyCard'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import ScrollButton from './ScrollButton'

const cards = [
    {
        image: Crypto.src,
        title: 'Crypto Traders',
        description:
            'Convert positions to real-world spending power instantly. No waiting for exchanges.',
    },
    {
        image: Digital.src,
        title: 'Digital Nomads',
        description:
            'Pay in any currency, anywhere. No foreign transaction fees or banking restrictions.',
    },
    {
        image: Founders.src,
        title: 'Builders & Founders',
        description:
            'Move capital without permission or friction. If you hold any crypto, this app is for you.',
    },
]

function EconomySection() {
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
        <section className="pb-8 lg:pb-[120px]">
            <div className="wrapper px-4 xl:px-0">
                <div className="mb-[42px] flex flex-col items-center text-left sm:text-center md:mb-[84px]">
                    <h2 className="section-title mb-[22px]">
                        Spend without limits
                    </h2>
                    <p className="section-subtitle max-w-[462px]">
                        A card built for a world that moves fast. Spend your
                        crypto instantly — anywhere. No KYC. No delays. No
                        questions.
                    </p>
                </div>
                <div className="w-full overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4 xl:justify-between">
                        {cards.map((card, idx) => (
                            <EconomyCard
                                key={idx}
                                imageSrc={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-[42px] flex w-full items-center justify-end gap-2 xl:hidden">
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
        </section>
    )
}

export default EconomySection
