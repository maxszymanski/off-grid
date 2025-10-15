// const features = [
//     'No KYC Required',
//     'Apple Pay / Google Pay',
//     'No Transaction Declining',
//     'Instant Top-Up Anytime',
//     'App and Web Interface',
//     'Multi-Chain Support',
//     'No Wallet Connect Required',
// ]
const features = [
    'Identity Checks – Passports, selfies, and endless forms',
    'Spending Limits – Use your own money only when they say so',
    'Payment Freedom – Works in the real world, not just the blockchain',
    'Declines & Freezes – Blocked payments and frozen funds',
    'Top-Up Speed – Wait for “banking hours”',
    'Control – Who actually holds the keys',
    'Multi-Chain Access – All your crypto, not just one chain',
    'Set-Up Process – Wallets, contracts, 14-step guides',
]

function WhyUsTableFeatures() {
    return (
        <div data-aos="zoom-in" className="w-full">
            <div className="bg-dark4 flex w-[300px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors lg:max-w-[328px] xl:w-[328px] xl:rounded-2xl">
                <p className="text-primary/70 flex h-14 w-full items-center text-sm">
                    What They Call a “Feature”
                </p>
                {features.map((item) => (
                    <p
                        className="flex h-14 w-full items-center text-sm"
                        key={item}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default WhyUsTableFeatures
