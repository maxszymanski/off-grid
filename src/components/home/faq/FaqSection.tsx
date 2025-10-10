import StyledLink from '@/components/ui/StyledLink'
import FaqQuestions from './FaqQuestions'

function FaqSection() {
    return (
        <section className="wrapper flex flex-col items-center px-4 pb-20 lg:pb-[120px] xl:px-0">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title mb-[22px]">
                    Questions? <br />
                    We&apos;ve got answers.
                </h2>
                <p className="section-subTitle max-w-[298px] sm:max-w-[438px]">
                    Everything you need to know about Off Grid’s privacy-first
                    approach to crypto spending.
                </p>
            </div>
            <FaqQuestions />
            <div className="flex flex-col items-center text-center">
                {' '}
                <p className="section-subTitle text-primary/70 mb-6 lg:mb-8">
                    Still have questions?
                </p>
                <StyledLink name="Contact Support" href="/contact" />
            </div>
        </section>
    )
}

export default FaqSection
