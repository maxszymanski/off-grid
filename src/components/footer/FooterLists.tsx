import Link from 'next/link'

const lists = [
    {
        title: 'Product',
        list: [
            { name: 'Crypto Cards', href: '/crypto-cards' },
            { name: 'Mobile App', href: '/mobile-app' },
            { name: 'Web Dashboard', href: '/web-dashboard' },
            { name: 'API Access', href: '/api-access' },
            { name: 'Multi-Chain Support', href: '/multi-chain-support' },
        ],
    },
    {
        title: 'Company',
        list: [
            { name: 'About Us', href: '/about-us' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press Kit', href: '/press-kit' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Support',
        list: [
            { name: 'Help Center', href: '/help-center' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms of Service', href: '/terms-of-service' },
            { name: 'Security', href: '/security' },
            { name: 'Status Page', href: '/status' },
        ],
    },
]

function FooterLists() {
    return (
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:justify-evenly lg:justify-end lg:gap-20 xl:gap-[100px]">
            {lists.map((list) => (
                <div
                    className="sm:min-w-1/5 flex flex-col gap-4 lg:gap-5 xl:min-w-[183px]"
                    key={list.title}
                >
                    <h2 className="text-sm font-medium leading-[130%]">
                        {list.title}
                    </h2>
                    <ul className="flex flex-col gap-3">
                        {list.list.map((l, i) => (
                            <li key={i} className="flex h-[18px] items-center">
                                <Link
                                    href={l.href}
                                    className="text-primary/70 hover:text-primary text-sm leading-[130%] transition-colors duration-300"
                                >
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterLists
