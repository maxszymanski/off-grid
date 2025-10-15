import { useT } from '@/app/i18n/client'

function TopBar() {
    const { t } = useT('transition')
    return (
        <div className="bg-dark w-full text-xs font-medium leading-[130%] backdrop-blur-[18px] lg:text-sm">
            <p className="px-2 py-5 text-center lg:py-4">
                <span className="lg:hidden">{t('nav.top.mobile.white')}</span>
                <span className="text-primary/70 lg:hidden">
                    {' '}
                    {t('nav.top.mobile.gray')}
                </span>
                <span className="text-primary hidden lg:block">
                    {' '}
                    {t('nav.top.desktop')}
                </span>
            </p>
        </div>
    )
}

export default TopBar
