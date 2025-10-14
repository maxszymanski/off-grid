import WhyUsInfo from './WhyUsInfo'
import XCheckIcon from './XCheckIcon'

function WhyUsOther() {
    return (
        <div
            className="bg-dark4 flex w-[174px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors md:w-full md:max-w-[240px] lg:max-w-[296px] lg:shrink xl:rounded-2xl"
            data-aos="zoom-in"
        >
            <p className="text-primary/70 flex h-14 w-full items-center justify-center text-sm xl:text-base">
                Other Crypto Cards
            </p>
            <XCheckIcon />
            <WhyUsInfo text="Limited" />
            <XCheckIcon check />
            <WhyUsInfo text="Limited Hours" />
            <WhyUsInfo text="App Only" />
            <WhyUsInfo text="Limited Chains" />
            <XCheckIcon />
        </div>
    )
}

export default WhyUsOther
