import StyledLinkBox from '@/components/ui/StyledLinkBox'

function ShadowsSection() {
    return (
        <section className="relative z-10">
            <div className="wrapper">
                <div className="mb-[42px] flex flex-col items-center px-4 text-center md:mb-[60px] xl:px-0">
                    <h2 className="section-title mb-[22px]">
                        Trusted in the Shadows
                    </h2>
                    <p className="section-subtitle max-w-[342px]">
                        Whispers from those who live by discretion. Real voices,
                        real freedom.
                    </p>
                </div>
                <div className="h-[500px]"></div>
                <div className="w-full px-4 xl:px-0">
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        <span className="text-primary font-medium">
                            Privacy is the new luxury.
                        </span>{' '}
                        Get yours today.
                    </p>
                    <StyledLinkBox />
                </div>
            </div>
        </section>
    )
}

export default ShadowsSection
