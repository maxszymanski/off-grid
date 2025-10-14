import Image from 'next/image'
import Check from '@/assets/check-circle.svg'
import Metal from '@/assets/metal.webp'

function WhyUsOffGrid() {
    return (
        <div className="group relative flex w-[174px] shrink-0 flex-col overflow-hidden rounded-[14px] xl:w-[269px] xl:rounded-2xl">
            <Image
                src={Metal}
                width={Metal.width}
                height={Metal.height}
                alt=""
                className="absolute z-[-1]"
                quality={100}
            />
            <p className="text-dark2 relative z-[2] flex h-14 w-full items-center justify-center px-5 font-semibold">
                Off Grid
            </p>
            <div className="bg-dark4 relative z-[2] w-full rounded-t-[14px] px-5 shadow-[inset_0px_3px_0px_0px_rgba(7,7,8,1)] transition-colors duration-300 group-hover:bg-[#18191c] xl:rounded-t-2xl">
                {Array.from({ length: 7 }).map((_, idx) => (
                    <div
                        className={`flex h-14 w-full items-center justify-center`}
                        key={idx}
                    >
                        <Image
                            src={Check}
                            width={24}
                            height={24}
                            alt="check icon"
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUsOffGrid
