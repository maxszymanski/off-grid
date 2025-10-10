import HeaderBg from '@/assets/hero-bg.webp'
import CardSm from '@/assets/card.png'
import Image from 'next/image'
function Header() {
    return (
        <header
            className="relative min-h-[794px] w-full overflow-hidden bg-cover bg-center lg:min-h-[1022px]"
            style={{ backgroundImage: `url('${HeaderBg.src}')` }}
        >
            <Image
                alt="card"
                width={809}
                height={1071}
                className="-top-50 pointer-events-none absolute left-1/2 max-h-[650px] min-w-[500px] max-w-[500px] -translate-x-1/3 md:-top-[490px] md:h-auto md:max-h-fit md:max-w-full"
                priority
                quality={100}
                src={CardSm}
            />
        </header>
    )
}

export default Header
