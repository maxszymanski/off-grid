import { useT } from '@/app/i18n/client'
import Link from 'next/link'

function NavLink({
    href,
    name,
    isActive = false,
}: {
    href: string
    name: string
    isActive?: boolean
}) {
    const { t } = useT('transition')

    return (
        <li>
            <Link
                className={`text-primary text-nowrap p-1 transition-opacity duration-300 hover:opacity-90 ${isActive ? 'font-medium opacity-100' : 'font-normal opacity-70'}`}
                href={href}
            >
                {t(`nav.links.${name}`)}
            </Link>
        </li>
    )
}

export default NavLink
