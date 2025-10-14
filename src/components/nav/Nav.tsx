import Logo from '../icons/Logo'
import StyledLink from '../ui/StyledLink'
import Hamburger from './Hamburger'
import NavList from './NavList'

export interface NavProps {
    toogleNav: () => void
    isExpanded: boolean
}

function Nav({ toogleNav, isExpanded }: NavProps) {
    return (
        <div className="relative h-14 w-full md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
                <Logo />
                <Hamburger onClick={toogleNav} isExpanded={isExpanded} />
            </div>
            <div
                className={`text-primary bg-whiteBg sticky z-40 flex h-full w-full flex-col gap-8 py-6 transition-all duration-300 md:flex-row md:items-center md:justify-center md:py-0 ${isExpanded ? '-translate-x-0 opacity-100' : '-translate-x-[120%] opacity-0 md:-translate-x-0 md:opacity-100'}`}
            >
                <NavList />
                <div className="md:hidden">
                    <StyledLink name="Join the Waitlist" />
                </div>
            </div>
            <div className="hidden md:block">
                <StyledLink name="Join the Waitlist" />
            </div>
        </div>
    )
}

export default Nav
