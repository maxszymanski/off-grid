import StyledLinkBox from '../ui/StyledLinkBox'
import FooterLists from './FooterLists'

function Footer() {
    return (
        <footer className="wrapper px-4 pb-2 lg:pb-5">
            <div className="mb-8 text-center">
                <h2 className="section-title pb-[22px]">
                    Your Crypto, Your Control.
                </h2>
                <p className="section-subtitle">
                    Not your keys, not your crypto — but <br />{' '}
                    <span className="lg:text-primary/90 lg:font-medium">
                        {' '}
                        now it’s spendable everywhere.
                    </span>
                </p>
            </div>
            <StyledLinkBox />
            <div className="pt-32">
                <FooterLists />
            </div>
        </footer>
    )
}

export default Footer
