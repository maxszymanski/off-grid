import Image from 'next/image'
import Check from '@/assets/check-circle.svg'
import XIcon from '@/assets/x-cirle.svg'

function WhyUsBanks() {
    return (
        <div className="bg-dark4 flex w-[174px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors xl:w-[296px] xl:rounded-2xl">
            <p className="text-primary/70 flex h-14 w-full items-center justify-center text-sm xl:text-base">
                Traditional Banks
            </p>
            <div className={`flex h-14 w-full items-center justify-center`}>
                <Image
                    src={XIcon}
                    width={24}
                    height={24}
                    alt="x icon"
                    quality={100}
                />
            </div>
            <div className={`flex h-14 w-full items-center justify-center`}>
                <Image
                    src={Check}
                    width={24}
                    height={24}
                    alt="check icon"
                    quality={100}
                />
            </div>
            <div className={`flex h-14 w-full items-center justify-center`}>
                <Image
                    src={XIcon}
                    width={24}
                    height={24}
                    alt="x icon"
                    quality={100}
                />
            </div>
            <p className="flex h-14 w-full items-center justify-center text-sm xl:text-base">
                Business Hours Only
            </p>
            <p className="flex h-14 w-full items-center justify-center text-sm xl:text-base">
                App Only
            </p>
            <div
                className={`flex h-14 w-full items-center justify-center text-sm xl:text-base`}
            >
                <Image
                    src={XIcon}
                    width={24}
                    height={24}
                    alt="x icon"
                    quality={100}
                />
            </div>
            <p className="flex h-14 w-full items-center justify-center text-sm xl:text-base">
                N/A
            </p>
        </div>
    )
}

export default WhyUsBanks
