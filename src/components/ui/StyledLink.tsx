import Link from 'next/link'

interface StyledLinkProps {
    name: string
    variant?: 'light' | 'dark'
    borderPosition?: 'top' | 'bottom'
    restClass?: string
    href?: string
}

function StyledLink({
    name,
    href = '/',
    variant = 'light',
    borderPosition = 'bottom',
    restClass,
}: StyledLinkProps) {
    return (
        <Link
            href={href}
            className={`my-shadow group relative flex w-full shrink-0 cursor-pointer items-center justify-center overflow-hidden text-nowrap rounded-[18px] p-1.5 mix-blend-plus-lighter transition-colors duration-300 sm:w-fit ${borderPosition === 'top' ? 'border-linear-top' : 'border-linear-bottom'}`}
        >
            <p
                className={`${restClass ? restClass : ''} flex w-full items-center justify-center gap-2.5 rounded-xl px-4 pb-[15.5px] pt-[12.5px] text-sm leading-4 mix-blend-plus-lighter transition-colors duration-300 lg:px-5 lg:pb-[17.5px] lg:pt-[14.5px] lg:text-base ${variant === 'light' ? 'light-btn text-dark2 group-hover:text-dark2/80 font-semibold' : 'dark-btn font-medium text-white group-hover:text-white/80'}`}
            >
                {variant === 'dark' && (
                    <span className="elipse-shadow size-3 shrink-0 rounded-full border border-black/15 bg-white"></span>
                )}{' '}
                {name}
            </p>
        </Link>
    )
}

export default StyledLink
