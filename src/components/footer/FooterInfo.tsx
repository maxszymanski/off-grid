import { FaPinterest, FaLinkedin } from 'react-icons/fa'
import Logo from '../icons/Logo'
import { FaSquareXTwitter } from 'react-icons/fa6'
import SocialLink from './SocialLink'

function FooterInfo() {
    return (
        <div className="max-w-[390px] text-sm leading-[130%]">
            <div data-aos="zoom-in">
                <Logo />
            </div>
            <div className="my-8" data-aos="fade-up">
                <p className="text-primary/70 mb-5">
                    Privacy-first crypto cards for the new economy. Spend
                    without limits, without surveillance, without compromise.
                </p>
                <p className="inline-flex items-center gap-2">
                    <span className="footer-elipse-shadow size-2 rounded-full border border-black/60 bg-[#60F907]"></span>
                    <span>All systems operational</span>
                </p>
            </div>
            <div className="flex items-center gap-1.5" data-aos="zoom-in">
                <SocialLink href="https://linkedin.com" icon={FaLinkedin} />
                <SocialLink href="https://x.com" icon={FaSquareXTwitter} />
                <SocialLink href="https://pinterest.com" icon={FaPinterest} />
            </div>
        </div>
    )
}

export default FooterInfo
