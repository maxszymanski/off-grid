import Image from 'next/image'
import LogoIcon from '@/assets/logo.svg'
import Link from 'next/link'

function Logo() {
    return (
        <Link href="/">
            <Image
                src={LogoIcon}
                width={136}
                height={36}
                alt="company logo"
                quality={100}
            />
        </Link>
    )
}

export default Logo
