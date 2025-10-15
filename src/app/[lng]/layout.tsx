import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import AosProvider from '@/components/ui/AosProvider'
import { dir } from 'i18next'

const languages = ['en', 'de']

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const canela = localFont({
    src: '../../fonts/canela-trial.woff2',
    variable: '--font-canela',
})

export const metadata: Metadata = {
    title: 'Off Grid',
    description:
        'Privacy-first crypto cards and instant payments. No KYC, no delays, no compromise.',
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { lng: string }
}>) {
    const { lng } = await params
    return (
        <html lang={lng} dir={dir(lng)}>
            <body
                className={`${geistSans.className} ${canela.variable} bg-blackBg text-primary w-full overflow-x-hidden antialiased`}
            >
                <AosProvider>
                    <Navbar lng={lng} />
                    {children}

                    <Footer lng={lng} />
                </AosProvider>
            </body>
        </html>
    )
}
