import NavLink from './NavLink'

function NavList({ lng }: { lng: string }) {
    const list = [
        { name: 'home', href: `/${lng}`, isActive: true },
        { name: 'how-works', href: `#how-works` },
        { name: 'security', href: `#security` },
        { name: 'ecosystem', href: `#ecosystem` },
    ]
    return (
        <ul
            className={`flex flex-col gap-5 md:w-full md:flex-row md:items-center md:justify-center xl:pl-10`}
        >
            {list.map((l) => (
                <NavLink key={l.name} {...l} isActive={l.isActive} />
            ))}
        </ul>
    )
}

export default NavList
