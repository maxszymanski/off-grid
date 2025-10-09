import NavLink from './NavLink'

const list = [
    { name: 'Home', href: '/', isActive: true },
    { name: 'How it works', href: '/' },
    { name: 'Security & Privacy', href: '/' },
    { name: 'Ecosystem', href: '/' },
]

function NavList() {
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
