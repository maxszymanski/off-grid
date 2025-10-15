import NavLink from './NavLink'

function NavList({ lng }: { lng: string }) {
    const list = [
        { name: 'home', href: `/${lng}/`, isActive: true },
        { name: 'how-works', href: `/${lng}/` },
        { name: 'security', href: `/${lng}/` },
        { name: 'ecosystem', href: `/${lng}/` },
    ]
    return (
        <ul
            className={`flex flex-col gap-5 md:flex-row md:items-center lg:gap-6`}
        >
            {list.map((l) => (
                <NavLink key={l.name} {...l} isActive={l.isActive} />
            ))}
        </ul>
    )
}

export default NavList
