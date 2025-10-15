import { getT } from '@/app/i18n'
import StyledLink from './StyledLink'

async function StyledLinkBox() {
    const { t } = await getT('transition')
    return (
        <div className="relative z-20 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <StyledLink name={t('header.links.join')} borderPosition="top" />
            <StyledLink
                name={t('header.links.how-works')}
                variant="dark"
                borderPosition="bottom"
            />
        </div>
    )
}

export default StyledLinkBox
