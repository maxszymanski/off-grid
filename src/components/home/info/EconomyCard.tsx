import Image from 'next/image'

interface EconomyCardProps {
    imageSrc: string
    title: string
    description: string
}

function EconomyCard({ imageSrc, title, description }: EconomyCardProps) {
    return (
        <div
            className={`bg-dark3 md-h-[367.5px] group relative flex h-[344px] w-[322px] shrink-0 items-end overflow-hidden rounded-xl p-4 pb-6 md:w-[403px] md:rounded-2xl`}
        >
            <div className="absolute inset-0 z-[5] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <Image
                src={imageSrc}
                fill
                className="lg:object-top-left object-cover"
                alt=""
                quality={100}
            />
            <div className="relative z-10 leading-[130%]">
                <h3 className="mb-3 font-medium md:mb-4 md:text-2xl">
                    {title}
                </h3>
                <p className="text-primary/70">{description}</p>
            </div>
        </div>
    )
}

export default EconomyCard
