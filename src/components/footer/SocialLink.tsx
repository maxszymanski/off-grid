import Link from 'next/link'
import { IconType } from 'react-icons'

type SocialLinkProps = {
    href: string
    icon: IconType
}

export default function SocialLink({ href, icon: Icon }: SocialLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 transition-colors duration-300"
        >
            <Icon className="pointer-events-none size-[28px] shrink-0" />
        </Link>
    )
}
