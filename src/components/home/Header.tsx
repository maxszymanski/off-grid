import HeaderBg from '@/assets/hero-bg.webp'
import Card from '@/assets/card.png'
import Image from 'next/image'
import StyledLinkBox from '../ui/StyledLinkBox'
import MiniCard from '../ui/MiniCard'
import HeaderLogos from './HeaderLogos'
function Header() {
    return (
        <header
            className="relative max-h-[1022px] min-h-[794px] w-full overflow-hidden bg-cover bg-center lg:min-h-[1022px] 2xl:bg-bottom"
            style={{ backgroundImage: `url('${HeaderBg.src}')` }}
        >
            <Image
                data-aos="fade-down"
                alt="card"
                width={809}
                height={1071}
                className="!pointer-events-none absolute -top-[212px] left-1/2 z-[41] max-h-[650px] min-w-[500px] max-w-[500px] -translate-x-1/3 md:-top-[490px] md:h-auto md:max-h-fit md:max-w-full"
                priority
                quality={100}
                src={Card}
            />
            <div
                className="mx-auto flex w-full max-w-[583px] flex-col px-4 pt-[390px] text-center sm:px-0 md:pt-[500px]"
                data-aos="zoom-in"
            >
                <h1 className="font-canela mb-7 text-nowrap text-[38px] leading-[100%] md:text-[64px] md:leading-[100%]">
                    Forget the system <br />{' '}
                    <span className="mt-2.5 inline-flex items-end gap-2">
                        keep your <MiniCard /> freedom
                    </span>
                </h1>
                <p className="text-primary/70 mx-auto mb-8 max-w-[367px] leading-[130%] md:mb-12">
                    Privacy-first crypto cards and instant payments. No KYC, no
                    delays, no compromise.
                </p>
                <StyledLinkBox />
            </div>
            <HeaderLogos />
        </header>
    )
}

export default Header
