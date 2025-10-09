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
    return (
        <li>
            <Link
                className={`text-primary hover:text-primary/80 text-nowrap p-1 transition-colors duration-300 ${isActive ? 'font-medium opacity-100' : 'font-normal opacity-70'}`}
                href={href}
            >
                {name}
            </Link>
        </li>
    )
}

export default NavLink
