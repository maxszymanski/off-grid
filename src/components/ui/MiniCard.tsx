import Image from 'next/image'
import SmallCard from '@/assets/mini-card.svg'
function MiniCard() {
    return (
        <span className="bg-dark4 my-card-shadow relative flex size-11 -rotate-6 items-center justify-center rounded-[9.62px] border-[0.5px] border-white/10 md:top-2 md:size-16 md:rounded-[14px]">
            <Image
                src={SmallCard}
                alt="small card"
                width={72}
                height={72}
                quality={100}
                priority
                className="shrink-0 rotate-6"
            />
            <span className="top-corner absolute inset-0 rounded-[9.62px] md:rounded-[14px]"></span>
            <span className="bottom-corner absolute inset-0 rounded-[9.62px] md:rounded-[14px]"></span>
        </span>
    )
}

export default MiniCard
