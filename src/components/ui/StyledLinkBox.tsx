import StyledLink from './StyledLink'

function StyledLinkBox() {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <StyledLink btnName="Join the Waitlist" borderPosition="top" />
            <StyledLink
                btnName="See How it Works"
                variant="dark"
                borderPosition="bottom"
            />
        </div>
    )
}

export default StyledLinkBox
