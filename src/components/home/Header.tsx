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
                height={584}
                className="absolute -top-0 left-1/2 z-[100] h-auto -translate-x-1/2"
                priority
                quality={100}
                src={CardSm}
            />
        </header>
    )
}

export default Header
