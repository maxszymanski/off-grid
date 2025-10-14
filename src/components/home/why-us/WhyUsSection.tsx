import Wallet from '@/assets/wy-us-wallet.webp'
import Lighting from '@/assets/lighting.png'
import MiniCard from '@/components/ui/MiniCard'
import StyledLinkBox from '@/components/ui/StyledLinkBox'
import Image from 'next/image'
import WhyUsTable from './WhyUsTable'
function WhyUsSection() {
    return (
        <section className="relative mx-auto max-w-[1920px] pb-20 lg:pb-[120px]">
            <Image
                src={Lighting}
                alt=""
                width={Lighting.width}
                height={Lighting.height}
                className="absolute -top-[100px] left-0 max-h-[600px] w-full max-w-[350px] sm:-top-[250px] sm:max-w-[600px] lg:-top-[280px] lg:max-h-[800px] lg:max-w-[800px] xl:-top-[450px] xl:max-h-[1200px] xl:max-w-[1200px] 2xl:-top-[550px] 2xl:max-w-[1300px]"
                quality={100}
            />

            <Image
                src={Wallet}
                height={426}
                width={604}
                alt="wallet"
                className="absolute left-1/2 top-0 z-10 min-h-[200px] max-w-[284px] -translate-x-1/2 lg:max-w-full lg:translate-x-[calc(-50%-20px)]"
                quality={100}
            />

            <div className="wrapper relative z-20 pt-[137px] lg:pt-[305px]">
                <div className="mb-8 flex flex-col items-center px-4 text-center md:mb-[80px] xl:px-0">
                    <h2 className="section-title mb-[14px] flex items-start gap-2 text-nowrap md:mb-[22px] md:items-center lg:gap-[7px]">
                        Why choose <MiniCard whyUs /> Off Grid?
                    </h2>
                    <p className="section-subtitle max-w-[462px]">
                        While others compromise on privacy or functionality, Off
                        Grid delivers both — with features that actually work.
                    </p>
                </div>
                <WhyUsTable />
                <div>
                    <p className="section-subtitle mb-6 mt-8 text-center md:mb-8 lg:mt-[60px]">
                        Stop compromising.{' '}
                        <span className="text-primary font-medium">
                            Start spending freely.
                        </span>
                    </p>
                    <StyledLinkBox />
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection
