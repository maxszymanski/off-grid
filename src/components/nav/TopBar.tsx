function TopBar() {
    return (
        <div className="bg-dark w-full text-xs font-medium leading-[130%] backdrop-blur-[18px] lg:text-sm">
            <p className="px-2 py-5 text-center lg:py-4">
                <span className="lg:hidden">Non-Private Beta Soon</span>
                <span className="text-primary/70 lg:hidden">
                    {' '}
                    KYC Spending — Up to $4k/mo instantly
                </span>
                <span className="text-primary hidden lg:block">
                    {' '}
                    NO-KYC Spending up to 4k/month
                </span>
            </p>
        </div>
    )
}

export default TopBar
