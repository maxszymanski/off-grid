'use client'
import StyledLink from '@/components/ui/StyledLink'
import ScrollButton from '../info/ScrollButton'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Light from '@/assets/membership-light.webp'
import Image from 'next/image'

function MembershipSection() {
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
        <section className="wrapper relative bg-cover bg-top bg-no-repeat py-20 lg:py-[120px]">
            <Image
                src={Light}
                width={Light.width}
                height={Light.height}
                className={`absolute left-1/2 top-0 z-[1] -translate-x-1/2`}
                alt=""
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
                <div className="mb-[46px] h-7 w-full"></div>
                <div>
                    <div
                        className="w-full overflow-hidden px-4 xl:px-0"
                        ref={emblaRef}
                    >
                        <div className="flex gap-4 xl:justify-between">
                            <div className="bg-dark3 h-[300px] w-[300px] shrink-0"></div>
                            <div className="bg-dark3 h-[300px] w-[300px] shrink-0"></div>
                            <div className="bg-dark3 h-[300px] w-[300px] shrink-0"></div>
                        </div>
                    </div>
                    <div className="mt-[42px] flex w-full items-center justify-end gap-2 px-4 xl:hidden">
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
                        Earn commissions, bonuses, and perks
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
