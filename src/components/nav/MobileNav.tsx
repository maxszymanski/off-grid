import Logo from '../icons/Logo'

export interface NavProps {
    toogleNav: () => void
    isExpanded: boolean
    closeNav: () => void
}

function MobileNav({ toogleNav, isExpanded, closeNav }: NavProps) {
    return (
        <div className="relative mt-4 h-14 w-full px-4 ">
            <div className="flex items-center justify-between">
                <Logo />
                <button onClick={toogleNav} className="size-14 shrink-0">
                    +
                </button>
            </div>
        </div>
    )
}

export default MobileNav
