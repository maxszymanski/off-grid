const features = [
    'No KYC Required',
    'Apple Pay / Google Pay',
    'No Transaction Declining',
    'Instant Top-Up Anytime',
    'App and Web Interface',
    'Multi-Chain Support',
    'No Wallet Connect Required',
]

function WhyUsTableFeatures() {
    return (
        <div
            className="bg-dark4 flex w-[267px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors lg:w-full lg:max-w-[328px] lg:shrink xl:rounded-2xl"
            data-aos="zoom-in"
        >
            <p className="text-primary/70 flex h-14 w-full items-center text-sm">
                Features
            </p>
            {features.map((item) => (
                <p className="flex h-14 w-full items-center" key={item}>
                    {item}
                </p>
            ))}
        </div>
    )
}

export default WhyUsTableFeatures
