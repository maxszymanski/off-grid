import { getT } from '@/app/i18n'
import Link from 'next/link'

export default async function Page({ params }: { params: { lng: string } }) {
    const { lng } = await params
    const { t } = await getT('transition')
    return (
        <>
            <h1>{t('title')}</h1>
            <Link href={`/${lng}`}>{t('back-to-home')}</Link>
        </>
    )
}
