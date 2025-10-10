import StyledLink from './StyledLink'

function StyledLinkBox() {
    return (
        <div className="relative z-20 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <StyledLink name="Join the Waitlist" borderPosition="top" />
            <StyledLink
                name="See How it Works"
                variant="dark"
                borderPosition="bottom"
            />
        </div>
    )
}

export default StyledLinkBox
